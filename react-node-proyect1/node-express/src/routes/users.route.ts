import { Request, Response, NextFunction } from 'express';

import { handleAsync } from '../shared/utilities';
import { IService } from '../services/index.service';
import { Route } from './index.route';
import { EntityNotFoundError } from '../shared/error';
import { validationMiddleware } from '../middleware/validation.middleware';
import { authMiddleware } from "../middleware/auth.middleware";
import UserValidation from '../models/user.validation';

class UsersRoute extends Route {

    register = ( api: string, service: IService ) => {

        this.api = api;
        this.service = service; 

        this.router.use(authMiddleware());
        this.router.post('/', validationMiddleware(UserValidation) ,this.post);
        this.router.get('/', this.get);
        this.router.get('/:id', this.getOne);
        this.router.patch('/:id', validationMiddleware(UserValidation, {skipMissingProperties: true}), this.patch);
        this.router.delete('/:id', this.delete);
        return this;
    }
    
    protected get = async ( request: Request, response: Response, next: NextFunction ) => {

        let getOption = request.query.name;

        let [items, error] = await handleAsync(this.service.find(getOption));

        if ( error ) return next(error);
        response.json(items);
    }
    
    protected delete = async ( request: Request, response: Response, next: NextFunction ) => {

        const id = request.params.id;

        let [deleteResponse, error] = await handleAsync(this.service.delete(id));

        if ( error ) return next(error);
        if( deleteResponse.affected === 1 ) {
            response.json( {deleted: true, messege: `All users deleted successfully!`} );
        } else {
            next(new EntityNotFoundError(id));
        }
    }
}

export default UsersRoute;