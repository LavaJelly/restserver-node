const express = require('express'); // importamos express para hacer peticiones http.
const cors = require('cors'); // cors nos ayuda a definir medidas para el cross site 

class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        
        // Middleware
        this.middlewares(); // Inicializamos todos los middleware.

        // Rutas
        this.routes(); // Seteamos las rutas o endpoints.
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Serializador JSON
        this.app.use( express.json() )

        // Directorio público
        this.app.use( express.static('public'))
    }

    routes(){
        
        this.app.use( this.usuariosPath, require('../routes/usuarios'))

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }



}

module.exports = Server;