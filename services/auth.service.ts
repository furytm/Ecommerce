import mongoose from "mongoose";
import User from "../models/user.model.js";
import { generateAuthToken } from "../utils/generateToken.js"

export default class AuthService {
    async registerUser(userData:string | number) {
        console.log(userData);
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error("User already exist with this email")
        }

        const user = await User.create(userData)
    }


    async loginUser(email: string, password: number) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error(" invalid credentials")

        }
        // const validPassword = await bcrypt.compare(password, user.password);
        // if (!validPassword) {
        //     throw new Error("invalid credentials")

        // }
        const token = generateAuthToken(user);
        return { user, token }



    }
}






