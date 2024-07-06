import { users, password } from "../BD/datos.js";

console.log("Usuarios:", users);
console.log("Contraseñas:", password);
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let usuarioEncontrado = false;
    for (let i = 0; i<users.length; i++){
        if (users[i] == usuario && password[i] == contraseña){
            usuarioEncontrado = true;

        }
    }
    if (usuarioEncontrado) {
        window.location.href=".\\frutas\\display.html";
    }else {
        alert("Usuario y/o Contraseña incorrectos ")
    }

})

document.getElementById("registrarse").addEventListener("click", function(){
    window.location.href=".\\registro\\registro.html"
})