document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Crear un mensaje de confirmación
    const confirmationMessage = `Gracias, ${name}. Tu reserva para ${guests} persona(s) el ${date} a las ${time} ha sido confirmada.`;

    // Mostrar el mensaje de confirmación
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    // Limpiar el formulario
    document.getElementById('reservationForm').reset();
});