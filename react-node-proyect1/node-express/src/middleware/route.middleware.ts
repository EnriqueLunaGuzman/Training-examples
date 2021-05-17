import { Application, Request, Response, NextFunction, response, request } from 'express';
import path from 'path';

import { IRoute } from '../routes/index.route';

const registerRouteMiddleware = ( server: Application, routes: IRoute[] ) => {

    // Register api routes
    routes.forEach( (route: IRoute) => {
        server.use( route.api, route.router );
    });
}

const registerUnhandleRoutesMiddleware = ( server: Application ) => {
    // Handle unhandle GET requests & return React app
    server.get(`*`, (requst: Request, response: Response)=> {
        response.sendFile(path.resolve(__dirname, `../../../react-app/build`, `index.html`));
    });

    // Handle unhandle API requests
    server.use( (request: Request, response: Response, next: NextFunction) => {
        response.send(`API ${request.path} not implemented!`);
    });
}

export { registerRouteMiddleware, registerUnhandleRoutesMiddleware };