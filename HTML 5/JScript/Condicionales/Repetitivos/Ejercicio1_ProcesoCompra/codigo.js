// Arrays para almacenar las cantidades y precios de los productos añadidos.
let cantidades = [];
let precios = [];

function adicionar(){
    let precio = Number(document.getElementById("precio").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let resultado = document.getElementById("p");

    event.preventDefault();
    // Calcula el total a pagar para el producto actual y lo muestra en pantalla.
    resultado.innerHTML = "El precio total a pagar con este producto es $" + (precio*cantidad);
    // Añade la cantidad y el precio actual a los arrays.
    cantidades.push (cantidad);
    precios.push (precio);
}
function pagar(){
    // Obtiene el elemento con id "p" donde se mostrará el resultado final.
    let resultado = document.getElementById("p");
    // Variables para almacenar datos relacionados con los precios y el total:
    let menorvu = 0.0; // Variable para el precio unitario más bajo.
    let mayorvu = 0.0; // Variable para el precio unitario más alto.
    let menorst = 0.0; 
    let mayorst = 0.0;
    let total = 0.0;   // Variable para el total de la compra.



    event.preventDefault();
    // Bucle que recorre los arrays de cantidades y precios para calcular el total de la compra. 'vc' actúa como un índice que va de 0 hasta el último elemento en los arrays.
    for (let vc=0; vc < cantidades.length ; vc = vc + 1) {
        total = total + (cantidades[vc]*precios[vc]);
        // Actualiza el menor precio unitario encontrado.
        // La primera iteración inicializa el menor precio; luego, lo compara con cada precio.
        if(vc==0 || precios [vc] < menorvu){
            menorvu = precios[vc];
        } 
        // Si es la primera iteración (vc == 0) o si el subtotal actual (precio * cantidad) es menor que el valor almacenado en menorst:
        if (vc==0 || (precios[vc]*cantidades[vc])< menorst){
            // Actualiza la variable menorst con el nuevo menor subtotal encontrado.
            menorst = precios[vc]*cantidades[vc];
        }
        // Actualiza el mayor precio unitario encontrado.
        // Similar al menor precio, se inicializa en la primera iteración.
        if (vc==0 || precios[vc] > mayorvu){
            mayorvu = precios[vc];
        }
        // Si es la primera iteración (vc == 0) o si el subtotal actual (precio * cantidad) es mayor que el valor almacenado en mayorst:
        if (vc==0|| (precios[vc]*cantidades[vc]) > mayorst){
            // Actualiza la variable mayorst con el nuevo mayor subtotal encontrado.
            mayorst = precios[vc]*cantidades[vc];
        }
    }
    
    // Muestra el resultado final en el elemento con id "p".
    // Incluye el total, el menor precio unitario y el mayor precio unitario, el subtotal menor y el subtotal mayor.
    resultado.innerHTML = "El valor total a pagar en esta compra es: $ " + total + "<br>" + "el precio menor unitario es: " + menorvu + "<br>" + "El precio mayor unitario es: " + mayorvu + "<br>" + "El menor subtotal es: " + menorst + "<br>" + "El mayor subtotal es: " + mayorst;
}