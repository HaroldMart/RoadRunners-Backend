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

export const listVehicles = (res) => {
  vehicleModel
    .find()
    .select('-images')
    .then((data) => {
      res.status(responseCode).json(data);
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

export const searchByBrand = (req, res) => {
  const brand = req.params.brand;
  vehicleModel
    .find({ brand: brand })
    .then((data) => {
      res.status(responseCode).json(data);
    })
    .catch((error) => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};

export const postVehicle = (req, res) => {
  let vehicle = vehicleModel();
  
  vehicle.portrait = {
    data: req.files['portrait'][0].buffer,
    contentType: req.files['portrait'][0].mimetype
  },
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
  vehicle.images = req.files['images'].map(file => ({
      data: file.buffer,
      contentType: file.mimetype,
  }));
  vehicle.save().then(data => {
    console.log("Vehiculo Guardado");
    responseMessage = "Guardado correctamente"
    res.status(responseCode).send({ message: responseMessage });
  }).catch(error => {
    console.log(error);
    handleErrorResponse(res, error);
  });
};

export const putVehicle = (req, res) => {
  const id = req.params.id;
  const {
    Owner_email,
    Brand,
    Type,
    Model,
    Condition,
    Fuel,
    Year,
    Price,
    Location,
    Img
  } = req.body;
  vehicleModel
    .updateOne(
      { _id: id },
      {
        owner_email: Owner_email,
        brand: Brand,
        type: Type,
        model: Model,
        condition: Condition,
        fuel: Fuel,
        year: Year,
        price: Price,
        location: Location,
        img: Img
      }
    )
    .then((data) => {
      console.log("Vehiculo Actualizado");
      responseMessage = "Actualizado correctamente"
      res.status(responseCode).send({ message: responseMessage, data: data });
    })
    .catch((error) => {
      console.log(error);
      handleErrorResponse(res, error);
    });
};

export const deleteVehicle = (req, res) => {
  const id = req.params.id;
  console.log(id);
  vehicleModel
    .deleteOne({ _id: id })
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