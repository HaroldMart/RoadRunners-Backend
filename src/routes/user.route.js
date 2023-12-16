import express from 'express';
import { checkToken } from '../middlewares/auth0.js';
import { getUserInfo, editUser } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.get('/user/:uid', checkToken, (req, res) => getUserInfo(req, res));
userRoutes.patch('/user/:uid', checkToken, (req, res) => editUser(req, res));

export default userRoutes;