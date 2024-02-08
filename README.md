# RoadRunners-Backend

This is a simple API made in Express, with the basic methods to show, add, edit and delete content in a MongoDB database.

### npm modules used

- dotenv
- express
- mongoose
- morgan
- nodemon
- node-fetch
- multer
- cors
- dotenv
- express-oauth2-jwt-bearer

## Usage

Firs run `npm install` or use docker instead. 

Then `npm start` or `npm run dev` if you want to use dev mode, you can run the API with the port specified in .env file, in this example port 3000.

### Docker


```
docker compose up --build
```

if you don't want to see logs after building use:

```
docker compose up --build -d
```

## Endpoints

here are the endpoints:

##### Showing all data

```
http://localhost:2000/
```

##### Showing a single data through Id parameter

```
http://localhost:2000/645308ce6bf01ae50fce5590
```

##### Sending data 

```
http://localhost:2000/insert
```

##### Editing data
```
http://localhost:2000/update/645308ce6bf01ae50fce5590
```

##### Deleting data
```
http://localhost:2000/delete/645308ce6bf01ae50fce5590
```

## Screenshots preview of the frontend app
I made this project in collaboration with my partner [Tcriss frontend repository](https://github.com/Tcriss/RoadRunners-Front/).

![image](https://github.com/HaroldMart/RoadRunners-Backend/assets/93040571/f21dac90-a11a-4e54-8227-23e5acecf126)
![image](https://github.com/HaroldMart/RoadRunners-Backend/assets/93040571/ba2744e2-2f43-42c6-b683-dd380b727c17)
![image](https://github.com/HaroldMart/RoadRunners-Backend/assets/93040571/0d8af631-a611-4f94-a3a8-7edd8d0782a6)


