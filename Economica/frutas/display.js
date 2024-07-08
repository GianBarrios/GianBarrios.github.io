const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

document.getElementById('agregar').addEventListener('click', function(event){
    event.preventDefault();
    cargarContenido('..\\files\\agregar.html')
})

function cargarContenido (url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById('agregar').innerHTML =data;
    })
    .catch (error => console.error ('error al cargar el contenido: ',error))
}