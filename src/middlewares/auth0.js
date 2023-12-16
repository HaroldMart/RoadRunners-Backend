import dotenv from 'dotenv';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

dotenv.config();

export const readScope = requiredScopes('read: vehicles');
export const deleteScope = requiredScopes('delete: vehicle');

export const checkToken = auth({
    audience: 'https://roadrunners-api/',
    issuerBaseURL: process.env.DOMAIN,
    tokenSigningAlg: 'RS256'
});