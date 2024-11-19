function mifuncion(){
    
    var conjunto = document.getElementsByTagName("p"); /*Referncia el nombre de las etiquetas*/
    var respuesta = document.getElementById("cambiotitulo");
    var texto ="";

    texto = "El parrafo es:... " + respuesta.innerHTML;
    conjunto[0].innerHTML = texto;
    conjunto[1].innerHTML = texto;
    conjunto[2].innerHTML = texto;

}