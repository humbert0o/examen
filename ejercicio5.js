const edad = Number(prompt("Ingrese su edad: "));
if (edad >= 18 && edad <= 64) {
    console.log(true); 
    console.log("Eres apto para trabajar");
} else {
    console.log(false);
    console.log("No eres apto para trabajar");
}
