import express from 'express';
import { landingInfo, contactInfo } from './controllers/info.controller.js';
//import * as ctl from './controllers/info.controller.js';

//import dotenv from 'dotenv';

//read in env values before server creation
//dotenv.config();
//console.log(process.env);

const app = express();

app.get("/", landingInfo);
app.get("/contact", contactInfo);

const { PORT, NODE_ENV } = process.env;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})