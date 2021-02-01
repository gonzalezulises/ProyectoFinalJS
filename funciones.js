let nombreCliente = ""
let emailCliente = ""
let edadCliente = ""
let solicitudCredito = ""
let valorfinaldelprestamo = ""

function ingresoNombre (){
    nombreCliente = prompt("Cual es tu nombre", "");
    while (nombreCliente == "" || nombreCliente == null){
        alert("No puede quedar anonima tu solicitud, por favor, indicanos tu nombre " + nombreCliente);
        nombreCliente = prompt("Cual es tu nombre", "");
        
    }
    return nombreCliente
 }   

function ingresoEmail (){
    emailCliente = prompt("Cual es tu email");
    while (emailCliente == "" || emailCliente == null){
        alert("necesitamos un email para contactarte ");
        emailCliente = prompt("Cual es tu correo electrónico", "");
        
    }
    return emailCliente
}    

function ingresoEdad (){
    edadCliente = prompt("Cual es tu edad");
    while (edadCliente == "" || edadCliente == null){
        alert("necesitamos una edad para calcular el perfil de riesgo ");
        edadCliente = prompt("Cual es tu edad por favor", "");
        
    }
    return edadCliente
}    

var perfilCliente = [nombreCliente,edadCliente,emailCliente]

function confirmacionDatos() {
    console.log ("Tu nombre es "+ nombreCliente+", con una edad de "+edadCliente+" siendo tu email el" + emailCliente);
    alert ("Tu nombre es "+ nombreCliente+", con una edad de "+edadCliente+" siendo tu email el" + emailCliente);
}

function credito(tipo,monto,periodo, tasa){
    this.tipo= ["personal","automotriz","hipotecario"];
    this.monto= 0;
    this.periodo= [3,6,9,12];
    this.tasa=0.07;
}


function atencionSolicitud (){
    let solicitudCredito = prompt ("Que tipo de credito desea","personal,automotriz,hipotecario")
        //if (solicitudCredito == "personal" | "automotriz" | "hipotecario"){
            let valordelprestamo=prompt("ingrese el monto a solicitar","en dolares");
            let valordelinteres=prompt("ingrese el interes a aplicar","numeros enteros");
            let tiempodelprestamo=prompt("ingrese el tiempo del prestamo","expresados en meses");
            valorfinaldelprestamo = valordelprestamo * (1 + (valordelinteres/100)*tiempodelprestamo);
        alert("El monto total a pagar sera de: "+valorfinaldelprestamo);}