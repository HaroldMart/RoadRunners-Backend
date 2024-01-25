import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import vehicleRoutes from './routes/vehicle.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config();

const URI = process.env.URI;
const LOCAL = process.env.LOCAL;
const FRONT_HOST = process.env.FRONT_HOST;
const DEV_HOST = process.env.DEV_HOST; 
const port = 3000;
const app = express();

app.use(cors({origin : [DEV_HOST, FRONT_HOST, LOCAL]}));
app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(vehicleRoutes);

mongoose.connect(URI).then(() => {
    console.log('Conection succeded');
}).catch((error) => {
    console.log(`Conection failed: ${error}`);
});

app.listen(port, (req, res) => {
    console.log(`Server on http://localhost:${port}`);
});
