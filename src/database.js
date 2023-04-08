import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/documents'

mongoose.connect(url);

const connection = mongoose.connection;

// una vez que se establecio la coneccion quiero ejecutar...
connection.once('open',() => {
   console.log('BD conectada')
})