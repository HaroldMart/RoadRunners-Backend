import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

const checkToken = auth({
    secret: process.env.SINGINSECRET,
    audience: 'https//rr-back',
    issuerBaseURL: process.env.DOMAIN,
    tokenSigningAlg: 'HS256'
});

export default checkToken;