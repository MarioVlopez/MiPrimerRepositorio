function myD(something){
    event.preventDefault();
    let resultado = document.getElementById("p");  
    resultado.innerHTML = ej + "y segundo llamado es el valor es " + something;
}

function pagar(funcionpropia){
    event.preventDefault();
    ej= "primera este llamado ";
    funcionpropia (10);
}