const model = require("../models/Mvehicles");

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

const getVehicle = (req, res) => {
  const id = req.params.id;
  model
    .find({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

const postVehicle = (req, res) => {
  const { marca, ruedas, tipo } = req.body;
  const car = new model({
    Marca: marca,
    Ruedas: ruedas,
    Tipo: tipo,
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

const putVehicle = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { marca, ruedas, tipo } = req.body;
  model
    .updateOne(
      { _id: id },
      {
        Marca: marca,
        Ruedas: ruedas,
        Tipo: tipo,
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
