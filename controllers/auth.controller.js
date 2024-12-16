import AuthService from "../services/auth.service.js";
import bcryptjs, { hash } from 'bcryptjs'
const {registerUser} = new AuthService

export default class AuthController{
    async registerUser(req, res, next){
        try {

            const { password , email, name, phone,address} = userData
            const { ...userData} = req.body
            if(!password || !name || !phone){
                throw new Error("Please provide all the required field");
            }
           const hashpassword =  bcryptjs.hash(password, 10);

           const user = await registerUser(userData)
        } catch (error) {
            
        }
    }
}
