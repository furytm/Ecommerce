import AuthService from "../services/auth.service.js";

const { registerUser, loginUser } = new AuthService

export default class AuthController {
    async registerUser(req, res, next) {
        try {

            const { password, email, name, phone, address } = req.body
            if (!password || !name || !phone) {
                throw new Error("Please provide all the required field");
            }


            const user = await registerUser(req.body)
            res.status(201).send("successful andrew")
        } catch (error) {
            console.log(error);
        }
    }

    async loginUser(req, res) {

        try {
            const { email, password } = req.body
            if (!email || !password) {
                res.status(400).json("Fill all required fields");

            }
            const user = await loginUser(email, password)
            res.status(200).json({ sucess: true, message: "User logged successfully", data: user })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success: false, message: " Something went wrong", error });

        }




    }


}
