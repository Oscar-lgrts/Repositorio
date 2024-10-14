//Write a program that prompts a user for their data: username, age, and a list of their favorite movies.
function datos() {
    let username = prompt("Ingresa el nombre de usuario");
    let age = prompt("Ingresa tu edad");
    let movies = prompt("Ingresa una lista con tus películas favoritas \n (separadas por comas)");
    let favMovies = movies.split(',').map(movie => movie.trim());
  
    console.log("El nombre del usuario es: "+ [username]);
    console.log("La edad es: " + [age]);
    favMovies.forEach(movie => {
      console.log("La película " + [movie] + " es una de mis favoritas.");
    });
}
datos();

// Write a program that asks for 10 numbers and determinate the highest of those numbers.
let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Ingresa el número ${i + 1}: "));
    numeros.push(numero);
}
let hnum = Math.max(...numeros);

console.log("El número más alto es: " + hnum);
alert("El número más alto es: " + hnum);



// Program to check if the string is palindrome or not.
function checkPalindrome(string) {
    const arrayVerificar = string.split("");
    const arrayVolteado = arrayVerificar.reverse();
    const resultado = arrayVolteado.join("");
    if(string == resultado) {
        console.log("¡Es un palindromo!");
    }else {
        console.log("No es un palindromo, intenta con otra frase");
    }
}
const string = prompt("Ingresa la frase o palabra a verificar.\n (De ser necesario, retira los espacios entre palabras)");
checkPalindrome(string);