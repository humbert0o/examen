const color= prompt("Ingresa un color del semaforo: "); 

if (color=="verde" || color=="Verde") { 
    console.log("Puede cruzar");
} 
else if (color=="amarillo" || color=="Amarillo") { 
    console.log("Ten precaucion");
} 
else if (color=="rojo" || color=="Rojo") { 
    console.log("No puede cruzar");
} 
else{ 
    console.log("Ingresa un color valido");
}