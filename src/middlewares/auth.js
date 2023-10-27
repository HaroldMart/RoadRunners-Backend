require('dotenv').config();

const API_KEY = process.env.API_KEY;

const authMiddleware = (req, res, next) => {
    const api_Key = req.headers["api_key"];

    if(api_Key === API_KEY) {
        next();
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
}

module.exports = authMiddleware;