import express from 'express';
import cors from 'cors';

import postsRouterv1 from './routes/posts';
// import postsRouterv2 from './routes/posts1';
import usersRouter from './routes/users';

const server = express( );
const port = 3500;

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

server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});