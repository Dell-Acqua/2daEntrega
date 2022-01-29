let producto = prompt("Ingrese el producto a calcular su precio: \nLECHUGA o RUCULA").toUpperCase();

const iva = 1.21;



function calcularPrecio (producto) {
    
    switch (producto) {
        case "LECHUGA":
            cantidad = prompt("Ingrese la cantidad de paquetes a comprar");
            parseInt(cantidad);
            resultado = cantidad * 150 * iva;
            alert("El importe total de su pedido de: " +producto+ " es de: $" +resultado);
            break;

        case "RUCULA":
            cantidad = prompt("Ingrese la cantidad de paquetes a comprar");
            parseInt(cantidad);
            resultado = cantidad * 200 * iva;
            alert("El importe total de su pedido de: " +producto+ " es de: $" +resultado);
            break;

        default:
            alert("No existe un producto llamado: " +producto+ " , ingrese nuevamente.");
            producto = prompt("Ingrese el producto a calcular su precio: \nLECHUGA o RUCULA").toUpperCase();
            calcularPrecio (producto);

    }
}

calcularPrecio(producto);






