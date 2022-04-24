require('dotenv').config(); // Permite generar variables de entorno con el proccess.env.

const Server = require('./models/server'); //Importamos nuestra clase de servidor

const server = new Server(); // Creamos una instancia de la clase servidor 


server.listen(); //Ejecutamos el método listen que queda "escuchando" peticiones.