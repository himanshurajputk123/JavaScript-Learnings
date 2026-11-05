import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/userController.js";

const router = Router();

/*
//router.post('/register', registerUser);
===============================================
 this is method in http router setting
 basic syntax => router.method('/route, controllerFunction);

router.get('/users', getUsers);
router.post('/register', registerUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
================================================
*/
/*
Router Chaining
You can then attach multiple HTTP methods to that same route object.
For example:
router.route('/users/:id')
    .get(getUser)
    .put(updateUser)
    .patch(updateUser)
    .delete(deleteUser);

useful for grouping multiple HTTP methods under the same URL.
 */
// Below is router chaining
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;