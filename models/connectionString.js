const mongoose = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('DATABASE CONNECTED 👍'))
  .catch((error) => console.error(error));
