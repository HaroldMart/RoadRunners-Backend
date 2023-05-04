const model = require('../models/Mvehicles')

const listVehicules = (req, res) => {
    model.find().then((data) => {
        res.json(data)
    }).catch((error) => {
        console.log(error);
        res.send(error)
    })
}

module.exports = {
    listVehicules
}