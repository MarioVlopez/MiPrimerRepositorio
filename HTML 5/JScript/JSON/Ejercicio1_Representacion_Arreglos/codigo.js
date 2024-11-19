function llamar_representacion_json(){
    let text='{'+
        '"personas": '+
            '['+
                '{"firstName": "Juan Pablo",'
                '"lastName":"Garzon Ruiz"},'+
                '{"firsName":"Jhon dos", "lastName":"Doe"} '+
                ']'+
            ']'+ 
        '}';
            
let arreglo_personas = JSON.parse(text);

event.preventDefault();

let salida = documet.getElementaryById("p");

salida.innerHTML = "Nombres completos: "+
arreglo_personas.personas[0].firstName;
}