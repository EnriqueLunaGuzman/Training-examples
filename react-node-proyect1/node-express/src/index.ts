// Reads environment variables
import 'dotenv/config';

import Server from './server';
import { Route } from './routes/index.route';
import UsersRoute from './routes/users.route';
import { Service } from './services/index.service';
import UsersService from './services/users.service';
import Post from './models/post.entity';
import User from './models/user.entity';
import Todo from './models/todo.entity';
import Company from './models/company.entity';

// Create routes
const postRoute = new Route().register(`/api/posts`, new Service(Post));
const todoRoute = new Route().register(`/api/todos`, new Service(Todo));
const userRoute = new UsersRoute().register(`/api/users`, new UsersService(User));
const companyRoute = new Route().register(`/api/company`, new Service(Company));

// Initialize server
const server = new Server(
    [
        postRoute,
        userRoute,
        todoRoute,
        companyRoute
    ]
); 

// Run server
server.listen( );