document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');
  
    // Función para cargar el contenido
    function loadContent(page) {
      fetch(`html/${page}.html`)
        .then(response => response.text())
        .then(data => {
          content.innerHTML = data;
        })
        .catch(error => {
          content.innerHTML = `<p>Ocurrió un error al cargar la página. Por favor, inténtalo de nuevo.</p>`;
          console.error('Error al cargar el contenido:', error);
        });
    }
  
    // Cargar la página de inicio por defecto
    loadContent('home');
  
    // Añadir eventos de clic a los enlaces
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = this.getAttribute('data-page');
        loadContent(page);
      });
    });
  });
  