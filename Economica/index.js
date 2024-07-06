import { users } from "./BD/datos.js";
import { password } from "./BD/datos.js";

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario == users && contraseña == password){
        window.location.href = ".\\frutas\\display.html";
    }else {
        alert ("Usuario y o contraseña incorrectos");
    }
})