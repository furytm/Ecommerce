import mongoose from "mongoose";
import User from "../models/user.model.js";

export default class AuthService{
    async registerUser(userData){
        const {email} =userData;
        const existingUser = await User.findOne(email);
        if(existingUser){
            throw new Error("User already exist with this email")
        }

        const user = await User.create(userData)
    }
}

