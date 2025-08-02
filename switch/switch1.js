const dia= Number(prompt("Ingresa un numero del 1 al 7 para saber el dia de la semana: ")); 
switch(dia){ 
    case 1:
        console.log("Es lunes"); 
        break
    case 2:
        console.log("Es martes");
        break
    case 3:
        console.log("Es miercoles");
        break
    case 4:
        console.log("Es jueves");
        break 
    case 5:
        console.log("Es viernes");
        break 
    case 6:
        console.log("Es sabado");
        break
    case 7:
        console.log("Es domingo");
        break
    default:
        console.log("Ingresa un numero valido");
        break
}