
function creditoSimple() {
let solicitudCredito = prompt ("Que tipo de credito desea","personal,automotriz,hipotecario")

if (solicitudCredito == "personal" | "automotriz" | "hipotecario"){
  let valordelprestamo=prompt("ingrese el monto a solicitar");
  let valordelinteres=prompt("ingrese el interes a aplicar");
  let tiempodelprestamo=prompt("ingrese el tiempo del prestamo");
 
  let valorfinaldelprestamo = valordelprestamo * (1 + (valordelinteres/100)*tiempodelprestamo);
 
 alert("El monto total a pagar sera de: "+valorfinaldelprestamo);}
}

//Complemento para la asignacion de strings
let arrayCredito = [valordelprestamo,valordelinteres,tiempodelprestamo]

alert ("Los parametros de su credito son:" +arrayCredito.toString())