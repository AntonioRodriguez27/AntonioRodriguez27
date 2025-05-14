document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento de envío predeterminado del formulario

    const formData = new FormData(form);
    const action = form.getAttribute('action');
    const method = form.getAttribute('method');

    fetch(action, {
      method: method,
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        // Aquí puedes agregar código para mostrar un mensaje de éxito al usuario
        console.log('Formulario enviado con éxito!');
        // Opcional: Limpiar el formulario después del envío exitoso
        form.reset();
      } else {
        // Aquí puedes agregar código para mostrar un mensaje de error al usuario
        console.error('Error al enviar el formulario.');
      }
    })
    .catch(error => {
      // Aquí puedes agregar código para manejar errores de red u otros errores
      console.error('Hubo un error al enviar el formulario:', error);
    });
  });
});