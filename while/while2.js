let numero; 
let intento=1;
const numsecreto= 7; 
while(numero != numsecreto){
    numero= Number(prompt("ingresa un numero del 1 al 100: ")); 
    if (numero==numsecreto){ 
        console.log("Felicidades, acertaste el numero") 
        break
    }
    else{ 
        console.log("No es el numero, intenta de nuevo"); 
        console.log("Intentos restantes: ", intento,"/5");
        intento+=1;
    }
    if (intento==6){ 
        break
    }
}
