function sendMail() {
    let parms = {
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_gfzta6n", "template_nksjuze", parms).then(alert("Email sent successfully!"));
}