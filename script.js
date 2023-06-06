
function SendMail() {
    var params = {
        from_name: document.getElementById("nome").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("mensagem").value
    }
    emailjs.send("service_15ncan8", "template_xd21ljg", params).then(function (res) {
        alert("Sucess! " + res.status);
    })
}