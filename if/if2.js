const num1= Number(prompt("Ingresa un numero: ")); 
const num2= Number(prompt("Ingresa otro numero: ")); 

if (num1>num2) { 
    console.log("El primer numero:", num1,", es mayor"); 
}
else if(num2>num1) { 
    console.log("El segundo numero:", num2, ",es mayor");
} 
else{ 
    console.log("Los numeros son iguales");
}