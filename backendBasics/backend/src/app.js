// app.js → Creates and configures your Express application.

import express from 'express';

const app = express(); // create an express app

// routes import
import userRoute from './routes/userRoutes.js';
import postRoute from './routes/postRoutes.js';

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// routes declaration
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);

export default app;
