let numero; 
let intento;
const numsecreto= 7; 
while(numero != numsecreto){
    numero= Number(prompt("ingresa un numero del 1 al 100")); 
    if (numero==numsecreto){ 
        console.log("Felicidades, acertaste el numero") 
        break
    }
    else{ 
        console.log("No es el numero, intenta de nuevo"); 
        intento+=1
    }
    if (intento==5){ 
        break
    }
}