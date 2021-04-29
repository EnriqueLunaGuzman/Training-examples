// Reads environment variables
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

import postsRouterv1 from './routes/posts';
// import postsRouterv2 from './routes/posts1';
import usersRouter from './routes/users';
import config from './typeormconfig';

const server = express( );
const port = process.env.POSTGRES_PORT;

// connect to database
async function connectToPersistence () {
    try {
        await createConnection( config );
        console.log(`Persistence layer connected.`);
    } catch( error ) {
        console.log(`Persistence layer connection failed : `, error);
        return error;
    }
}
connectToPersistence( );

// retreive body/json
server.use(express.urlencoded());
server.use(express.json());

// Set cors headers
server.use(cors());

// logging middleware
server.use( (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next( );
});

// register routes
server.use( '/posts', postsRouterv1 );
// server.use( '/v2/posts', postsRouterv2 );
server.use( '/users', usersRouter );

server.get( '/', (req, res) => {
    res.send(`Greetings!`);
});

// Error handling
server.use((error: any, req: any, res: any, next: any) => {
    console.log(`Unhandled Error: `, error);
    res.send(`Unhandled Error, Please Try Again`);
});

server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});