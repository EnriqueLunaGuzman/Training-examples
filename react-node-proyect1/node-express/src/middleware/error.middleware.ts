import express, { Request, Response, NextFunction } from 'express';

const registerErrorHandlingMiddleware = ( error: any, request: Request, response: Response, next: NextFunction ) => {
    
    let status = error.status || 500;
    let message = error.message || `Something went wrong!`;

    response
        .status( status )
        .send( message )
}

/* const registerErrorHandlingMiddleware = ( server: express.Application ) => {

    // Error handling
    server.use( (error: any, req: any, res: any, next: any) => {
        console.log(`Unhandled Error: `, error);
        res.send(`Unhandled Error, Please Try Again!`);
    });
} */

export default registerErrorHandlingMiddleware;