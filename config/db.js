const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const URI = process.env.URI;


module.exports = () => {
  const connect = () => {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).catch(error => handleError(error));;
  };

  connect();

  mongoose.connection.on('error', err => {
    logError(err);
  });
};

