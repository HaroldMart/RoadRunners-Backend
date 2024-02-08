import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

const checkToken = auth({
    audience: 'https://roadrunners-api/',
    issuerBaseURL: process.env.DOMAIN,
    tokenSigningAlg: 'RS256'
});

export default checkToken;