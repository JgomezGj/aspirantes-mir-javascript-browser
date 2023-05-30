// Obtener elementos del DOM
const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const section = document.getElementById('section');
const clearButton = document.getElementById('clearButton');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  const name = inputName.value;
  const email = inputEmail.value;
  if (name){
      localStorage.setItem('nombreGuardado', name);
      section.textContent = name;      
  }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
  clearButton.addEventListener('click', function() {
      localStorage.removeItem('nombreGuardado');
      section.textContent = 'No hay datos';
    });
}
deleteName();

// Mostrar el nombre guardado al cargar la página
window.addEventListener('load', function() {
  const savedName = localStorage.getItem('nombreGuardado');

  if (savedName) {
    section.textContent = "Name: " + savedName;
  } else {
    section.textContent = 'No hay datos';
  }
});
showName();