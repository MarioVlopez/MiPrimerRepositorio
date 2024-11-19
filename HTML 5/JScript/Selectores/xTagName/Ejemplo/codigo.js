function mifuncion(){
    
    var conjunto = document.getElementsByTagName("*"); /*Referncia el nombre de las etiquetas*/
    var respuesta = document.getElementById("respuesta");
    var texto ="";

    texto = "El nombre de la etiqueta es: " + conjunto[0].tagName;
    respuesta.innerHTML = texto;
    }