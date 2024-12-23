const sendMessage = (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe de la forma tradicional.
  
    const userName = event.target.userName.value;
    const message = event.target.message.value;
    const optionValue = event.target.busContact.value;
    console.log(optionValue);
    const values = optionValue.split('-'); // Obtienes un array con los dos valores
    console.log(values);
    const busContact = values[0];
    const bus = values[1];

  
    // Aquí defines el número de teléfono al cual se enviará el mensaje. Debe estar en formato internacional.
    const phoneNumber = busContact; // Reemplaza con el número de WhatsApp al que quieres enviar el mensaje.
  
    // Construimos el mensaje para enviar
    const waMessage = `Hola, soy ${userName}, me interesa un servicio para la unidad ${bus}. \n${message}`;
  
    // Codificamos el mensaje para que sea válido en una URL
    const encodedMessage = encodeURIComponent(waMessage);
  
    // Creamos el enlace a WhatsApp
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Redirigimos al usuario a la aplicación de WhatsApp
    window.open(waLink, 'https://www.youtube.com');
  };
  
  export default sendMessage;
  