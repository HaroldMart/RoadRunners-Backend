# RoadRunners-Backend

This is a simple API with the basic methods to show, add, edit and delete content in a MongoDB database.

### npm modules used

- dotenv
- express
- mongoose
- morgan
- nodemon

### Install Dependencies

```
npm install 
```

### Endpoints

With the `npm run dev` command you can run the API at port 2000, here are the endpoints:

##### Showing all data

```
http://localhost:2000/
```

##### Showing a single data through Id parameter

```
http://localhost:2000/645308ce6bf01ae50fce5590
```

##### Editing data
```
http://localhost:2000/update/645308ce6bf01ae50fce5590
```

##### Deleting data
```
http://localhost:2000/delete/645308ce6bf01ae50fce5590
```
