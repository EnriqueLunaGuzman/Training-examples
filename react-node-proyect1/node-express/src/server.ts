import express from 'express';
import { createConnection } from 'typeorm';

import config from './typeormconfig';
import { IRoute } from './routes/index.route'
import registerCommonMiddleware from './middleware/common.middleware';
import registerLoggingMiddleware from './middleware/logging.middleware';
import { registerRouteMiddleware, registerUnhandleRoutesMiddleware } from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';
import {PersistanceConnectivityError} from './shared/error';
import registerResponseMiddleware from './middleware/response.middleware';

class Server {

    server: express.Application;

    constructor( routes: IRoute[] ) {
        this.server = express( );

        this.connectToPersistenceLayer( );
        this.registerMiddlewares( );
        this.registerRoutes( routes );
        this.registerErrorHandling( );
    }

    private async connectToPersistenceLayer () {
        try {
            await createConnection( config );
            console.log(`Persistence layer connected.`);
        } catch( error ) {
            return new PersistanceConnectivityError(error);
        }
    }

    private registerMiddlewares( ) {
        registerCommonMiddleware( this.server );
        registerLoggingMiddleware( this.server );
        registerResponseMiddleware(this.server);
    }

    private registerRoutes( routes: IRoute[] ) {
        registerRouteMiddleware( this.server, routes );
    }

    private registerErrorHandling( ) {
        registerUnhandleRoutesMiddleware(  this.server );
        registerErrorHandlingMiddleware( this.server );
    }

    listen( ) {
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }
}

export default Server;