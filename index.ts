import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import { connectDb } from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js'

dotenv.config();


const app = express();

//middlwares
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//Db Connection
connectDb();
app.use("/auth", authRoute)

const port =process.env.PORT || 5000
app.listen(port,()=>console.log(`Server is active on port ${port}`));