function sendMail() {
    let parms = {
        email : document.getElementById("email").value,
        name : document.getElementById("name").value,
        order : document.getElementById("order").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_gfzta6n", "template_nksjuze", parms).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
}