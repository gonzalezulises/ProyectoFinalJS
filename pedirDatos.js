let nombreCliente = prompt("Cual es tu nombre", "");



while (nombreCliente == "" || nombreCliente == null){
    alert("No puede quedar anonima tu solicitud, por favor, indicanos tu nombre " + nombreCliente);
    nombreCliente = prompt("Cual es tu nombre", "");
}

let emailCliente = prompt("Cual es tu email", "");

while (emailCliente == "" || emailCliente == null){
    alert("necesitamos un email para contactarte " + nombreCliente);
    emailCliente = prompt("Cual es tu correo electrónico", "");
}


alert("Tu nombre es " + nombreCliente);
alert("Tu email es " + emailCliente);
let confirmacionDatos = confirm("Los datos son correctos?")