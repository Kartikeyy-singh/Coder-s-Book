import { config as conf } from "dotenv";

conf();
require('dotenv').config();
const _config = {
    port: process.env.PORT,
    DB_URL: process.env.DB_URL,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    cloudinaryCloud: process.env.cloudinaryCloud,
    cloudinaryApiKey: process.env.cloudinaryApiKey,
    cloudinarySecret:process.env.cloudinarySecret,
}


export const config = Object.freeze(_config);