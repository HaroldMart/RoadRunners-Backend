import dotenv from 'dotenv';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

export const readScope = requiredScopes('read: vehicles');
export const deleteScope = requiredScopes('delete: vehicle');

export const checkToken = auth({
    audience: 'https://roadrunners-api/',
    issuerBaseURL: 'https://dev-3f45fsqiwdpfl2ds.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});