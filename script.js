// Contact form
function sendMail() {
    let params = {
        fullName : document.getElementById("fullName").value, // Name of sender
        email_id : document.getElementById("email_id").value,
        company : document.getElementById("company").value,
        message : document.getElementById("message").value,
    }
    
    emailjs.send("service_riihw5v", "template_iyeawip", params)
    .then(function(response) {
        alert("Thank you! Your message has been sent.");
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
}

document.getElementById("sendBtn").addEventListener("click", sendMail);