// they handle the request basically

import { User } from '../models/user_model.js';

const registerUser = async (req, res) => {
    try{
        const { username, email, password } = req.body;

        // basic validation
        if(!username || !email || !password){
            return res.status(400).json({
                "message": "All the fields are required!"
            });
        }
        // check if the user exists already?
        const exisiting = await User.findOne({ email: email.toLowerCase() });
        if(exisiting){
            return res.status(400).json({
                "message": "user already exists!"
            });
        }

        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
        });

        return res.status(201).json({
            message: "User registered!",
            user: { id: user._id, email: user.email, username: user.username }
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error!",
            error: error.message
        });
    }
};

const loginUser = async(req, res) =>{
    try{
        // checking if user already exists
        const {email, password} = req.body || {};
        // validate input
        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required!"
            });
        }
        // find user
        const user = await User.findOne({
            email: email.toLowerCase()    
        });

        if(!user) return res.status(400).json({
            message: "Invalid email or password!"
        });

        //compare password
        const isMatched = await user.comparePassword(password);
        if(!isMatched) return res.status(401).json({
            message: "Invalid email or password!"
        })

        return res.status(200).json({
            message: "User Logged in",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });

    } catch (err){
        console.error("Login error: ", err);
        res.status(500).json({
            message: "Internal server Error!"
        });

    }
};

const logoutUser = async(req, res) =>{
    try{
        const { email } = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(404).json({
            message: "User not found!"
        });

        return res.status(200).json({
            message: "Logout successful"
        });

    } catch(error) {
        res.status(500).json({
            message: "Internal Server Error!", error
        });
    }
}

export{
    registerUser,
    loginUser,
    logoutUser
};