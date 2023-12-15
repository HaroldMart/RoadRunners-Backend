import dotenv from 'dotenv';
import { auth } from 'express-oauth2-jwt-bearer';

dotenv.config();

const checkToken = auth({
    audience: 'https://roadrunners-api/',
    issuerBaseURL: process.env.DOMAIN,
    tokenSigningAlg: 'HS256'
});

export default checkToken;