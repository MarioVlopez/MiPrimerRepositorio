function cambiar(){
    event.preventDefault();
    let nombres = document.getElementById("nombres").value;
    let tipo = document.getElementById("tipo").value;
    let numero = document.getElementById("numerodedocumento").value;
    let resultado = document.getElementById("p");

    resultado.innerHTML = "Nombres Completos: " + nombres + "<br>" +
        "Documento de identidad: " + tipo + " " + numero;
}

function reiniciar(){
    event.preventDefault();
    document.getElementById("nombres").value = "";
    document.getElementById("tipo").value ="";
    document.getElementById("numerodedocumento").value = "";
    document.getElementById("p").innerHTML = "";
}