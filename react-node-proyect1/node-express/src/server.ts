import express from 'express';
import { createConnection } from 'typeorm';

import config from './typeormconfig';
import { IRoute } from './routes/index.route'
import registerCommonMiddleware from './middleware/common.middleware';
import registerLoggingMiddleware from './middleware/logging.middleware';
import registerRoutesMiddleware from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';

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
            console.log(`Error connecting to Persistence layer! : `, error);
            return error;
        }
    }

    private registerMiddlewares( ) {
        registerCommonMiddleware( this.server );
        registerLoggingMiddleware( this.server );
    }

    private registerRoutes( routes: IRoute[] ) {
        registerRoutesMiddleware( this.server, routes );
    }

    private registerErrorHandling( ) {
        registerErrorHandlingMiddleware( this.server );
    }

    listen( ) {
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }
}

export default Server;