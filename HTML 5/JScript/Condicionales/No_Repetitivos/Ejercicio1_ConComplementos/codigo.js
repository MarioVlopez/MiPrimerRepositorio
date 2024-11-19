function calcular(){
    let cantidad = Number(document.getElementById ("cantidad").value);
    let resultado = document.getElementById("p");
    let precio = 0.0;

    event.preventDefault();

    if (cantidad > 2){
        precio = 1500000 * (1-0.05) * cantidad;
    resultado.innerHTML = "El precio a pagar es: $" + precio;
    } else if (cantidad >=1){
        precio = 1500000 * cantidad;
        resultado.innerHTML = "El precio a pagar es: " + precio;
    }else{
        resultado.innerHTML = "La cantidad ingresada es incorrecta";
    }
}