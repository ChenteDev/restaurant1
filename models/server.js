const express = require('express');
let cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.routes();
        this.port = process.env.PORT;
    }

    routes(){
        this.app.use('/api/dishes', require('../routes/dish.routes'));
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor esta corriendo en el puerto ${this.port}`);
        })
    }

}

module.exports = Server;