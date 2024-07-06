const users = JSON.parse(localStorage.getItem('users')) || ["gianfranco"];
const password = JSON.parse(localStorage.getItem('password')) || ["2424"];
const frutas =["sandias"];

export {users, password };


export function agregarUsuario(nuevoUsuario){
    users.push(nuevoUsuario);
    localStorage.setItem('users', JSON.stringify(users));
}
export function agregarContraseña(nuevaContraseña){
    password.push(nuevaContraseña);
    localStorage.setItem('password', JSON.stringify(password));
}