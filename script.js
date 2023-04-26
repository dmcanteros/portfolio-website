// script.js
function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value, 
        fullName : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        company : document.getElementById("company").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_riihw5v", "template_ban43ck", params).then(function (res) {
        alert("Thank you! Your message has been sent successfully.");
    })
}