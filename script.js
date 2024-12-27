function sendMail() {
    let parms = {
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        name : document.getElementById("name").value,
        order : document.getElementById("order").value,
        message : document.getElementById("message").value,
    }

    emailjs.send('service_gfzta6n', 'template_nksjuze', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
}