const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

document.getElementById('btn-agregar').addEventListener('click', function(event){
    event.preventDefault();
    cargarContenido('..\\files\\agregar.html', '..\\files\\agregar.css')
})

function cargarContenido(url, cssUrl) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        const contenidoDiv = document.getElementById('contenido');
        contenidoDiv.innerHTML = data;
        cargarCSS(cssUrl);
        contenidoDiv.classList.remove('fade-in');
    })
    .catch(error => console.error('Error al cargar el contenido:', error));
}
function cargarCSS (url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}