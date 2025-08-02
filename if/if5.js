const monto= Number(prompt("Ingresa el monto de tu compra: "));

if(monto>100){ 
    montonuevo= monto*0.20;
    console.log("El monto con el descuento aplicado es: ", montonuevo); 
}
else if (monto>50 && monto<100) { 
    montonuevo= monto*0.10;
    console.log("El monto con el descuento aplicado es: ", montonuevo); 
}
else{ 
    console.log("El monto de tu compra no tiene descuento");
}