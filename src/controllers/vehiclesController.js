const model = require("../models/Mvehicles");

//Show the list of data in the database
const listVehicles = (res) => {
  model
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

//Show the data in the database by id
const getVehicle = (req, res) => {
  const id = req.params.id;
  model
    .find({ _id: id })
    .then((data) => {
      res.json(data[0]);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

//Insert data in the database
// If you want to send data to the database, you have to send the data as 
// json and the fields of the json must be with the first 
// letter uppercase while the data model is lowercase.
const postVehicle = (req, res) => {
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

  const car = new model({
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
  });

  car
    .save()
    .then((data) => {
      console.log(data);
      console.log("Vehiculo Guardado");
      res.json([data, "Guardado correctamente"]);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

//Update data in the database
const putVehicle = (req, res) => {
  const id = req.params.id;
  console.log(id);
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
  model
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
      res.json([data, "Actualizado correctamente"]);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

//Delete data in the database
const deleteVehicle = (req, res) => {
  const id = req.params.id;
  model
    .deleteOne({ _id: id })
    .then((data) => {
      console.log("Vehiculo Eliminado");
      res.json([data, "Eliminado correctamente"]);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

module.exports = {
  listVehicles,
  getVehicle,
  postVehicle,
  putVehicle,
  deleteVehicle,
};
