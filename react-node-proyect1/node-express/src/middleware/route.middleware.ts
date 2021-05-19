import { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

import { IRoute } from '../routes/index.route';

const registerRouteMiddleware = ( server: Application, routes: IRoute[] ) => {

    // Register API routes
    routes.forEach( (route: IRoute) => {
        server.use( route.api, route.router );
    });
}

const registerUnhandleRoutesMiddleware = ( server: Application ) => {
    
    // All API requests not handles before
    server.all(`/api/⋆`, (request: Request, response: Response) => {
        response.send(`API ${request.path} not implemented!`); 
        // throw new APINotImplementedError(request.path);
    });

    // Handle GET requests (Non-API) will return React app
    server.get(`*`, (requst: Request, response: Response)=> {
        response.sendFile(path.resolve(__dirname, `../../../react-app/build`, `index.html`));
    });

    // Handle unhandle API requests
    server.use( (request: Request, response: Response, next: NextFunction) => {
        response.send(`Route ${request.path} not implemented!`);
        // throw new APINotImplementedError(request.path);
    });
}

export { registerRouteMiddleware, registerUnhandleRoutesMiddleware };