const mongoose = require('mongoose');

const db_uri = `mongodb://localhost:27017/funsalud`;

module.exports = () =>{
    const connect = () => {
        mongoose.connect (
            db_uri,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUniiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log ('Error BD');
                } else {
                    console.log('conexion correcta')
                }
            }
        )
    }

    connect();
}