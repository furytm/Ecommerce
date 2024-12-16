import jwt from "jsonwebtoken";

//creates a json web token
export const generateAuthToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: 3 * 24* 60 * 60
    });
};