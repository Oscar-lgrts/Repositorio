//Calculate the sum of all resistors connected in series.
function sumaResistencias(resis){
    let suma = 0;
    for(let i=0 ; i<resis.length; i++)
        suma += Math.abs(resis[i]);
    return suma;
}
let resis1 = [-1,5,6,3];
let resis2 = [14,3.5,6];
let resis3 = [8,15,100];
let ResistenciaTotal = sumaResistencias(resis1);
console.log("La suma de resistencias es: " + [ResistenciaTotal]);

//Find the name of a secret society based on the first letter of each member's name.
function fletter(lista){
    let respuesta="";
    for(let i=0; i<lista.length; i++){
        respuesta += lista[i][0];
    }
    return respuesta;
}
let nombres1=["Esperanza", "Franco", "Nia"];
let nombres2= ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
let nombres3= ['Harry', 'Ron', 'Hermione'];
let adivina = fletter(nombres1);
console.log("La iniciales de los nombres secretos son: " + [adivina]);

//Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
function listaMultiplos(num, length) {
    let resultado = [];
    let multiplo = 0;
    for (i = 0; i < length + 1; i++) {
      multiplo = num * i;
      resultado.push(multiplo);
    }
    return resultado;
  }
console.log(listaMultiplos(2, 10));
console.log(listaMultiplos(17, 6));

