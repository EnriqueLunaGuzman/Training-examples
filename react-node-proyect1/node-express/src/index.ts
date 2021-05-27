// Reads environment variables
import 'dotenv/config';
import Server from './server';

import { Route } from './routes/index.route';
import UsersRoute from './routes/users.route';
import LogsRoute from './routes/logs.route';
import AuthRoute from './routes/auth.route';

import { Service } from './services/index.service';
import UsersService from './services/users.service';
import AuthService from './services/auth.service';


import Post from './models/post.entity';
import User from './models/user.entity';
import Todo from './models/todo.entity';
import Company from './models/company.entity';
import Log from './models/log.entity';

// Create routes
const postRoute = new Route().register(`/api/posts`, new Service(Post));
const todoRoute = new Route().register(`/api/todos`, new Service(Todo));
const userRoute = new UsersRoute().register(`/api/users`, new UsersService(User));
const companyRoute = new Route().register(`/api/company`, new Service(Company));
const logRoute = new LogsRoute().register(`/api/logs`, new Service(Log));
const authRoute = new AuthRoute().register(`/api/auth`, new AuthService(User));

// Initialize server
const server = new Server(
    [
        postRoute,
        userRoute,
        todoRoute,
        companyRoute,
        logRoute,
        authRoute
    ]
); 

// Run server
server.listen( );