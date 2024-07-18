const mongoose = require ('./conection.js');

const usuariosSchema = new mongoose.Schema({
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    correo: {type: String, required: true},
    telefono: {type: int, required: true} 
})