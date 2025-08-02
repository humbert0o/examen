const opcion= prompt("Ingresa una opcion: (iniciar/guardar/salir): "); 

switch(opcion){ 
    case "iniciar":
        console.log("Has iniciado el juego");
        break
    case "guardar":
        console.log("Guardaste el progreso");
        break
    case "Salir":
        console.log("Saliste del juego");
        break
    default:
        console.log("Ingresa una opcion valida");
        break
}