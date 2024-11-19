function llamado(){

    let conjunto = document.getElementsByClassName("example");


    conjunto[0].innerHTML = "CAMBIO DE CONTENIDO EN EL HTML Y EN EL DIV POR CLASS";
    conjunto[1].innerHTML = conjunto[1].innerHTML + " cambio";

    conjunto[2].innerHTML = conjunto[0].innerHTML + conjunto[1].innerHTML;
    conjunto[3].innerHTML = conjunto[2].innerHTML;

}
