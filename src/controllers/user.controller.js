import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const getToken = async () => {
    const options = {
        headers: { "content-type": `application/json` },
        body: {
            client_id: process.env.A_CLIENTID,
            client_secret: process.env.A_SECRET,
            audience: `${process.env.A_DOMAIN}/api/v2/`,
            grant_type: "client_credentials"
        }
    };
    try {
        const response = await fetch(`${process.env.A_DOMAIN}/oauth/token`, {
            method: 'post',
            body: JSON.stringify(options.body),
            headers: options.headers
        });
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error(error);
        const errorBody = await error.response;
        console.error(`Error body: ${errorBody}`);
    }
};

const getUserInfo = async (req, res) => {
    const token = await getToken();
    const uid = req.params.uid;

    try {
        const response = await fetch(`${process.env.A_DOMAIN}/api/v2/users/${uid}`, {
            method: "GET",
            headers: { "authorization": `Bearer ${token}` },
        });
        const data = await response.json();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        if (!data) res.status(404).send(error);

        res.status(500).send('Hay problemas en el server')
    }
};

const editUser = async (req, res) => {
    const token = await getToken();
    const uid = req.params.uid;
    const body = {
        "given_name": req.body.name,
        "family_name": req.body.lastName
    }
    const response = await fetch(`${process.env.A_DOMAIN}/api/v2/users/${uid}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    switch (data.statusCode) {
        case 200:
            res.status(200).send(data);
            break;
        case 400:
            res.status(400).send({
                error: data.error,
                message: data.errorMessage,
                errorCode: data.errorCode,
            });
            break;
        case 401:
            res.status(401).send({
                error: data.error,
                message: data.errorMessage,
                errorCode: data.errorCode,
            });
            break;
        case 403:
            res.status(403).send({
                error: data.error,
                message: data.errorMessage,
                errorCode: data.errorCode,
            });
            break;
        case 404:
            res.status(404).send({
                error: data.error,
                message: data.errorMessage,
                errorCode: data.errorCode,
            });
            break;
        case 500:
            res.status(500).send({
                error: data.error,
                message: data.errorMessage,
                errorCode: data.errorCode,
            });
            break;
        default:
            res.send(data);
            break;
    }
};

export { getUserInfo, editUser }