const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usersPath = '/api/users';
        // Middlewares
        this.middlewares();

        //Rutas en mi aplicacion
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen() {     
        this.app.listen(this.PORT, () => {
            console.log('Servidor corriendo en puerto', this.PORT);
        });
    }
}


module.exports = Server;