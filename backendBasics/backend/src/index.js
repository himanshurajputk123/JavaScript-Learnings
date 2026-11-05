// - index.js → Loads environment variables, connects MongoDB, and starts the server.

import dotenv from 'dotenv'; // 'dotenv' is a dependency
import connectDB from './config/database.js';
import app from './app.js';

// how our server is going to start

// `dotenv` is a dependency which helps in using all our environment vairables in all our project
dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 8080;

const startServer = async () =>{
    try{
        await connectDB();

        app.listen(PORT, () =>{
            console.log(`Server is running on port: ${PORT}`)
        });
    } catch (error){
        console.log("MongoDB connection failed!!", error);
        process.exit(1);
    }
}

startServer();