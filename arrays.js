/*
const nombres = ["Jorge", 23, true, ["Lee", "Irving"]];
const nums = [];

console.log(nombres); //array completo
//acceder a cada elemento del array
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[3][0]);//un array dentro de otro array

//fragmento del array del inicio al índice que indiquemos
console.log(nombres.slice(2));

//mostrar un intervalor del array
console.log(nombres.slice(2,3));

//tamaño de elementos que hay en el array
console.log(nombres.length); 
console.log(nums.length);
//modificar valores
nombres[0] = "Neri";
console.log(nombres[0]);
nombres[1]=25;
console.log(nombres[1]);
nombres[3][0] = "Muriel";
console.log(nombres[3][0]);

//agrega elementos al final del array
nombres.push("Karla"); //se pueden agregar por separado
nombres.push("Tania");
console.log(nombres);

//agrega elementos al incicio del array
nombres.unshift("Jesus", "Oscar") //se pueden agregar en una línea
console.log(nombres); 
//console.log(nombres.unshift("Jesus", "Oscar")); //muestra la cantidad de valores actualizados

//eliminar todos los ementos
//nombres.length = 0;
//console.log(nombres);

//eliminar el último elemento y retornarlo
console.log(nombres.pop()); //elimina el último elemento
console.log(nombres); 

//eliminar el último elemento y retornarlo
console.log(nombres.shift())
console.log(nombres)


const nombres = ["Jorge", "Cesar", 23, true, ["Lee", "Irving"]];
*/
/*
let nombre = "Jorge";
let copiaNombres = nombre; 
console.log(copiaNombres);
copiaNombres = "Irving";
console.log(copiaNombres);
console.log(nombre);

const copiaNombres = nombres; 
console.log(copiaNombres);
copiaNombres[0] = "Josue";
console.log(copiaNombres);
console.log(nombres);

//rest operator
function suma(...numeros){
    console.log(numeros);
}
suma(1,2,3,4,5,6,7,8);

//otra opcion de rest
function suma(...numeros){
    return numeros.reduce((acc,num) => acc + num, 0);
}

console.log(suma(1,2,3,4,5,6,7,8));

//spread operator
const nombresCopia = [...nombres];
nombresCopia[0] = "Carlos";
console.log(nombresCopia);
console.log(nombres);


const numeros = [2,3,7,10,23,24,28,18];
// map es para mapear cada uno de los elementos del array
//numeros.map(function(numero){})  //función discreta

const numerosxdos = numeros.map(numero => numero*2);
/*otro método
const numerosxdosmu = numeros.map(numero => {
    let numeroMultiplicado = numero*2;
    let numsumado = numeroMultiplicado +1;
    return numeroMultiplicado;
}
const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayus)

console.log(numeros);
console.log(numerosxdos);
// filter sirva para 
const pares = numeros.filter (numero => numero % 2 == 0);
console.log(pares);

const namenn = nombres.filter(nombre => nombre == "Neri");
console.log(namenn);
const namefilter = nombres.filter(nombre => nombre.includes("o"));
console.log(namefilter);
const nombresfilen = nombres.filter(nombre => {
    return nombre.length > 4 && nombre !== "Roberto";
});
console.log(nombresfilen);

const evenOrodd = numeros.filter(numero => numero % 2 !== 0);
console.log(evenOrodd);

//otras opciones
//1
const filtered = numbers.filter(num => {
    if (num % 2 === 0 && num > 10) {
      return true;
    }
    return false;
});
//2
const result2 = numeros.filter((numero) => (numero %2 === 0 && numero <10) ? true : false);
//3
const filtered = numbers.filter(num => num % 2 === 0 && num > 10);

________________________________________________
*/
const numeros = [2,3,7,10,23,24,28,18];
const nombres = ["Jorge", "Cesar", "Neri", "Roberto"]
/*
//revertir arreglos
const numeroR = numeros.reverse();
console.log("numerosR", numeroR);
console.log("numeros", numeros);
const nombresR = nombres.reverse();
console.log("nombresR", nombresR);
console.log("nombres", nombres);

const numerosToR = numeros.toReversed();
console.log("numerosToR", numerosToR);
console.log("numeros", numeros);
const nombresToR = nombres.toReversed();
console.log("nombresToR", nombresToR);
console.log("nombres", nombres);


console.log(numeros.at(-1)); // el último elemento
console.log(numeros.at(-2));
console.log(numeros.at(-3));
console.log(numeros.at(-4));
console.log(nombres.at(2));
console.log(nombres.at(3));
*/

const arrayUnido = nombres.join("+"); // + * 3
console.log(arrayUnido);
console.log(typeof arrayUnido);
const nomNums = numeros.concat(nombres);
console.log(nomNums);
console.log(nomNums.join());
