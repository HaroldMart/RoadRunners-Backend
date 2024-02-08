import vehicleModel from '../models/vehicle.model.js';

let responseCode = 200;
let responseMessage = "OK";

const handleErrorResponse = (res, error) => {
  switch (error.name) {
    case "ValidationError":
      errorCode = 400;
      errorMessage = "Validation Error";
      break;
    case "CastError":
      errorCode = 404;
      errorMessage = "Not Found";
      break;
    case "MongoError":
      errorCode = 409;
      errorMessage = "Conflict with existing resource";
      break;
    case "SyntaxError":
      errorCode = 400;
      errorMessage = "Invalid syntax in request";
      break;
    case "UnauthorizedError":
      errorCode = 401;
      errorMessage = "Unauthorized access";
      break;
    case "JsonWebTokenError":
      errorCode = 401;
      errorMessage = "Invalid token";
      break;
    default:
      errorCode = 500;
      errorMessage = "Internal Server Error";
  }
  res.status(errorCode).send({ message: errorMessage, error: error });
}

export const listVehicles = (req, res) => {
  const filters = req.query;

  vehicleModel
    .find()
    .select('-images')
    .then((data) => {
      if (filters) {
        const vehicles = data.filter(vehicle => { 
          let isValid = true; 
          for (let key in filters) { 
            isValid = isValid && vehicle[key] == filters[key]; 
          } 
          return isValid; 
        }); 
        res.status(responseCode).json(vehicles); 
      } else {
        res.status(responseCode).json(data);
      }
    })
    .catch((error) => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};

export const getVehicle = (req, res) => {
  const id = req.params.id;
  vehicleModel
    .findById(id)
    .select('-portrait')
    .then((data) => {
      res.status(responseCode).json(data);
    })
    .catch((error) => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};

export const postVehicle = (req, res) => {
  const vehicle = vehicleModel();

  vehicle.owner = req.body.owner;
  vehicle.owner_email = req.body.owner_email;
  vehicle.brand = req.body.brand;
  vehicle.type = req.body.type;
  vehicle.model = req.body.model;
  vehicle.condition = req.body.condition;
  vehicle.fuel = req.body.fuel;
  vehicle.year = req.body.year;
  vehicle.price = parseFloat(req.body.price);
  vehicle.location = req.body.location;
  vehicle.portrait = {
    data: req.files[0].buffer,
    contentType: req.files[0].mimetype
  };
  vehicle.images = req.files.map(file => ({
    data: file.buffer,
    contentType: file.mimetype,
  }));

  vehicle.save()
    .then(data => {
      console.log("Vehiculo Guardado");
      res.status(responseCode).send({ message: "Guardado correctamente" });
    })
    .catch(error => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};

export const putVehicle = (req, res, next) => {
  const id = req.params.id;

  const updates = {
    owner: req.body.owner,
    owner_email: req.body.owner_email,
    brand: req.body.brand,
    type: req.body.type,
    model: req.body.model,
    condition: req.body.condition,
    fuel: req.body.fuel,
    year: req.body.year,
    price: req.body.price,
    location: req.body.location
  };

  vehicleModel.findByIdAndUpdate(id, updates)
    .then((data) => {
      console.log(req.body);
      console.log("Vehiculo Actualizado");
      res.status(responseCode).send({ message: "Actualizado correctamente" });
    })
    .catch((error) => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};

export const deleteVehicle = (req, res) => {
  const id = req.params.id;

  vehicleModel.findByIdAndDelete(id)
    .then((data) => {
      console.log("Vehiculo Eliminado");
      responseMessage = "Eliminado correctamente"
      res.status(responseCode).send({ message: responseMessage, data: data });
    })
    .catch((error) => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};