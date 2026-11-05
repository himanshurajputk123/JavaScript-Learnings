import { Post } from "../models/post_model.js";

// create a post
const createPost = async (req, res) => {
    try {
        const { name, description, age} = req.body;

        if(!name || !description || !age){
            return res.status(400).json({
                message: "All the field are required!"
            });
        }

        const post = await Post.create({
            name, description, age
        });

        return res.status(201).json({
            message: "Post created successfully", post
        });
        
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error", error
        });
    }
}

// read/get all posts
const getPosts = async (req, res) =>{
    try {
        const getPosts = await Post.find();
        res.status(200).json(req.post);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!", error
        });
    }
}

// update a post
const updatePost = async (req, res) => {
    try {
        
        // basic validation to check if the body is empty
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                message: "No data provided to update"
            });
        }

            const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});

            if(!post) return res.status(404).json({
                message: "Post not found!"
            });

            return res.status(200).json({
                message: "Post updated successfully", post
            });
        } catch (error){
        res.status(500).json({
            message: "Internal Server Error!", error
        });
    }
}

const deletePost = async (req, res) => {
    try{

        const deleted = await Post.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({
            message: "Post not found"
        });

        return res.status(200).json({
            message: "Your post is deleted successfully", deleted
        });

    } catch(error) {
        res.status(500).json({
            message: "Internal Server Error!", error
        });
    }
}

export{
    createPost,
    getPosts,
    updatePost,
    deletePost
};