# Estructura MongoDB
<p align="center"> <img src="./mongoDB.png" alt="logo-burgerhouse" height="200" width="300"/> </p>
<p align="center"> <img src="./express.png" alt="logo-burgerhouse" height="150" width="150"/> </p>
<p align="center"> <img src="./nodejs.png" alt="logo-burgerhouse" height="200" width="200"/> </p>

## 💿 Instalaciones Nescesarias

Para poder iniciar con un proyecto primero debemos instalar:

1. [mongoDB](https://www.mongodb.com/)
2. [studio3T](https://studio3t.com/), 

Con el ultimo mencionado debemos crear una cioneccion, si nos pide una URL al crearla no colocamos nada solo damos en continuar y le ponemos un nombre a la conexion.

## 📘 Node.js

Debemos crear la aplicación con node.js ya que nos permite utilizar javascript oara nuestra aplicacion del servidor, para poder empezar utiliamos el comando `$node init -y` o `$node init -y`, donde en este ultimo nos realizara preguntas para hacer una configuracion basica del documento de configuracion `$package.json`

Para probar que este funcionando, creamos un `index.js` en el archivo raiz(carpeta donde esta el proyecto) y en esta ponemos un `console.log('hola mundo')`. Luego, debemos ejecutar en la consola un `$node index.js` y debera mostrarnolos, de lo contrario habria un error en la configuracion o instalacion de algun paquete.

## 📘 Git

Inciamos git con el comando `$git init` como normalmente hacemos y creamos un `.gitignore` con el contenido `/node_modules` debido a que es la carpeta en donde se instalan las librerias

## 📘 Express

Este es un framework que nos proporciona herramientas para nuestra creacion de la API, esta se hace con el siguiente comando `$npm install express --save`

## 🏷️ Incluir imports

Si estamos acostumbrados a la utilizacion del import y no al require, podemos utilizar babel que nos permita reemplar esta palabra por require, la instalamos mediante `$npm install babel-cli babel-preset-env`

### 🔧 Configuracion 

Para configurar babel lo realizamos creando un `.babelrc` en la carpeta con el contenido:

 ```
{
   "presets": ["env"] //Esto nos indica el tipo de traduccion (javascript de ultia generacion)
}
 ```

### 🔧 Configuracion - Ejecucion

Para que ejecutemos el proyecto con babel, debemos ingresar al `package.json`, en el apartado scripts y modificarlo de la siguiente manera: }

 ```
"scripts": {
      "start": "babel-node index.js" 
}
 ```

 ### 🔧 Configuracion - Peticiones

Para que pueda escuchar peticiones vamos a realizarlo con express, para esto en el index.js vamos a configurarlo de la siguiente manera

 ```
import express from "express"
		const app = express();
		app.set('port',process.env.PORT || 4000);

		app.listen(app.get('port'), () => {
   			console.log(`Estamos en el puerto ${app.get('port')}`);
		})
 ```

### 🧪 Prueba funcionamiento

para probar que este funcionando, ejecutamos con el comando previamente configurado `$npm start`


## 📘 Nodemon

Para que el backend este escuchando en tiempo real, como live server(herramienta para la ejecucion de frontend) para que en tiempo de ejecucion se realizen los cambios usamos nodemon, este lo instalamos mediante el siguiente comando 	`$ npm install -g nodemon`

### Configuracion 

Para que agregemos nodemon a la ejecutemos el proyecto con babel, debemos ingresar al package.json, en el apartado scripts y modificarlo de la siguiente manera: 

 ```
import express from "express"
"scripts": {
    	"start": "babel-node index.js",
    	"dev": "nodemon --exec babel-node index.js"
}
 ```

### 🧪 Probar funcionamiento

Para probar que este funcionando ya no usamos el comando $npm start sino que lo modificamos por una opcion de desarrollo con `$npm run dev`

## 📥 Peticiones

Para poder realizar peticiones get,post,put o delete primero debemos ingresar al `index.js` y generar una peticion de la siguiente manera(fijarse en el comentario //rutas). Podemos observar que usamos los parametros req(peticion o solicitud) y res(respuesta).

 ```
import express from "express";

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  	console.log(`Estamos en el puerto ${app.get("port")}`);
});

// rutas
app.get("/", (req, res) => {
  	res.send("primera peticion get");
});
 ```

Si queremos probar, podemos hacerlo mediante ThunderClient que es una extencion de visual studio code, en el cual hacemos una peticion get en la url = http://localhost:4000/ .Si hacemos otra peticion get con otra ruta puede quedar de la siguiente forma http://localhost:4000/otraruta/

## 📙 Middlewares

Estas son funciones diseñadas para tareas puntuales, las que vamos a utilizar son:

### 📙 Morgan

Permite obtener mas informacion en la terminal de nuestras peticiones, respuestas y el tiempo en las mismas. Este se instala con `$npm install morgan`

### 📙 Cors

Permita recibir peticiones externas o remotas(de otras ip). Este se instala con `$npm install cors`

### 📙 De Express

Para poder recibir y procesar objetos .json y  si queremos cargar un archivo static al buscar nuestra ruta. En este ultimo, primero creamos una carpeta public en la raiz en la cual ponemos un index.html que es lo que renderizara

### 🔧 Configuracion middlewares

Para poder utilizarlos configuramos el index.js de la siguiente manera
```
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  	console.log(`Estamos en el puerto ${app.get("port")}`);
});

//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static('./public'))

// rutas
app.get("/", (req, res) => {
  	res.send("primera peticion get");
}); 
```

## 📂 Estructura Directorios

	/src                -> Todos nuestros codigos
		/controllers  -> aqui va a estar la logica para crear,editar,borrar,etc
		/models 	  -> aqui va a estar el modelo en el que se va a crear la Base de Datos
		/routes 	  -> las direcciones en donde se haran las peticiones
	database.js 	  -> aqui vamos a poner las conexiones a la Base de Datos

## 📙 Mongoose

Como intermediario para la conexion entre la BD y el codigo del Backend usamos mongoose, para poder instalarlo lo hacemos con `$npm install mongoose --save`. En el `database.js` debemos configurar la direccion donde esta nuestra base de datos para hacer la conexion, par ello lo hacemos con:

```
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/documents'

mongoose.connect(url);

const connection = mongoose.connection;

// una vez que se establecio la coneccion quiero ejecutar...
connection.once('open',() => {
   console.log('BD conectada')
})
```

Tambien debemos importarlo en el index.js

```
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
```

## 🪦 Fin

Con esto tendria una estructura base para empezar con un proyecto de API en mongoDB, este documento tiene la explicacion de como se fue creando. La estructura esta en los archivos cargados en el git para poder descargarlo usamos el comando ´git clone https://github.com/franAndrad/mongoDB_backend_base_structure.git ´