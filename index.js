import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import './src/database'

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Estamos en el puerto ${app.get("port")}`);
});

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static('./public'))


// rutas
app.get("/", (req, res) => {
  res.send("primera peticion get");
});
