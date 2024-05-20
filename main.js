

function conversionMon(cantidad, moneda) {
    const tasaCambio = {
        1: 0.001, // 1 peso argentino a Dólares
        2: 0.00965 // 1 peso argentino a Euros
    }
    return cantidad * tasaCambio[moneda];
};


let cantidad = prompt("Ingrese la cantidad de Dinero (Pesos Arg) que quiere convertir: ")
cantidad = parseFloat(cantidad);

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresar una Cantidad Valida");
}   else{
    let moneda = prompt("Pon el numero de la Moneda a deseas convertir: (1 para Dólar) ó (2 para Euro)");
    moneda = parseInt(moneda);

        if (isNaN(moneda) || (moneda !== 1 && moneda !== 2)) {
            alert("Por favor, ingrese un numero Valido para la Moneda (1 para Dólar, 2 para Euro")
}       else {
            let cantConvert = conversionMon(cantidad, moneda)
            let monedaNum = (moneda === 1) ? "Dolares" : "Euros";
            alert("LA CANTIDAD DE " + cantidad + " PESOS ARGENTINOS, SON " + cantConvert + " " + monedaNum)
            console.log("LA CANTIDAD DE " + cantidad + " PESOS ARGENTINOS, SON " + cantConvert + " " + monedaNum);
}
}