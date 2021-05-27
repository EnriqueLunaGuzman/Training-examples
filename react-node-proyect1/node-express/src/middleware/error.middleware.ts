import express, { Request, Response, NextFunction } from 'express';

import { Service } from '../services/index.service';
import Log from '../models/log.entity';
import { handleAsync } from '../shared/utilities';

const registerErrorHandlingMiddleware = ( server: express.Application ) => {

     // Save Errors in Log Model
     const _service = new Service(Log);


    // Error handling middleware
    server.use( async (error: any, request: Request, response: Response, next: NextFunction) => {

        let origin = error.origin || `Unknown`;
        let status = error.status || 500;
        let message = error.message || `Something went wrong!`;

        // console.log(`Error Handler: `, origin, status, message);

        response
            .status( status )
            .send( {status, message} )

        let [newItem, error2] = await handleAsync(_service.create({origin, status, message}));
        if (error2) console.log(`Error handler errors: `, error2);
        
    });
}

export default registerErrorHandlingMiddleware; 