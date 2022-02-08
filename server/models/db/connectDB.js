const path = require('path')
const mongoose = require("mongoose")
require("dotenv").config({ path: path.resolve(__dirname, '../../.env') })

//const URI ="mongodb+srv://swiggy:swiggybackend@cluster0.3n9jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// `process.env.MONGODB_CONNECTION_STRING`

mongoose.connect("mongodb+srv://swiggy:swiggybackend@cluster0.3n9jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  //useUnifiedTopology: true,
  useNewUrlParser: true,
 // useCreateIndex: true,
 // useFindAndModify: true,
})

mongoose.connection.on('connected', () => {
  console.log(`Mongoose is connected...`);
})

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
})