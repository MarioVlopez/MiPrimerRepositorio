/** 
callback con timeout
**/
function mensaje(){
    let resultado = document.getElementById("p");  
    resultado.innerHTML = "Mensaje" 
}

function pagar(){
    event.preventDefault();
    setTimeout(mensaje,3000);
    
}