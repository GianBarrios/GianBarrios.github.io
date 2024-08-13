document.addEventListener("DOMContentLoaded", function() {
  // Obtener los botones
  const freelancerButton = document.querySelector('.freelancer-button');
  const frameworkButton = document.querySelector('.framework-button');
  const iotButton = document.querySelector('.iot-button');
  
  // Obtener las secciones
  const freelancerSection = document.querySelector('.freelancer');
  const frameworkSection = document.querySelector('.framework');
  const iotSection = document.querySelector('.iot')

  // Función para mostrar la sección Freelancer
  freelancerButton.addEventListener('click', function() {
      freelancerSection.style.display = 'block';
      frameworkSection.style.display = 'none';
      iotSection.style.display ='none';
  });

  // Función para mostrar la sección Framework
  frameworkButton.addEventListener('click', function() {
      freelancerSection.style.display = 'none';
      frameworkSection.style.display = 'block';
      iotSection.style.display ='none';
  });

  iotButton.addEventListener('click', function() {
    freelancerSection.style.display = 'none';
    frameworkSection.style.display = 'none';
    iotSection.style.display ='block';    
  })
});
