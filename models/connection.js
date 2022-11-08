const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:p2HJfwZ76TIo2Fb9@cluster0.5o1paaa.mongodb.net/tickethack';
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
