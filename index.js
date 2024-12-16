import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import { connectDb } from './config/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();


const app = express();

//Db Connection
connectDb();


//middlwares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
const port =process.env.PORT || 5000
app.listen(port,()=>console.log(`Server is active on port ${port}`));