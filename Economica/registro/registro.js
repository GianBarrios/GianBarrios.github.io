import { agregarUsuario, agregarContraseña, users, password } from "../BD/datos.js";

document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();
    let nuevoUsuario = document.getElementById("usuario").value;
    let nuevaContraseña = document.getElementById("contraseña").value;
    
    agregarUsuario(nuevoUsuario);
    agregarContraseña(nuevaContraseña);
    window.location.href="../index.html"
})