//import router from "./userRoutes";
import { Router } from "express";
import { createPost, deletePost, getPosts, updatePost } from "../controllers/postController.js";


const router = Router();

router.route('/create').post(createPost);
router.route('/getPosts').get(getPosts);
router.route('/updatePost/:id').patch(updatePost);
router.route('/deletePost/:id').delete(deletePost);

export default router