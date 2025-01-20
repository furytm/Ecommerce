import express from 'express'
import AuthController  from '../controllers/auth.controller.js';
const {registerUser,loginUser} = new AuthController(); 
const authRouter = express.Router();
authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)
export default authRouter;