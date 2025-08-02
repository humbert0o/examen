let ticket=prompt("Tienes ticket?: ");
let ticketv; 

if (ticket=="si" || ticket=="Si"){
 ticketv=true; 
}
else{
 ticketv=false; 
}

const edad=Number(prompt("Que edad tienes?: "));

if (edad>=18 && ticketv==true) {
 console.log("Bienvenido a mi vaquita restobar");
}
else {
 console.log("No puedes pasar");
}