import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

const checkToken = auth({
    issuerBaseURL: process.env.A_DOMAIN,
    audience: 'https://roadrunners-api/',
    tokenSigningAlg: 'RS256'
});

export default checkToken;