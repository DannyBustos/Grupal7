function validar(){
    //Creo las variables de cada casilla
    var nombre, email, mensaje;
    //llamo a las casillas por su id
    nombre = document.getElementById("Inputext").value;
    email = document.getElementById("InputEmail").value;
    mensaje = document.getElementById("InputextArea").value;

    //Creo una condición if(Si) que dice "Si nombre es vacio o bien email es vacio o bien mensaje es vacio, entonces mandar una alerta que diga 'todos los campos son obligatorios' y no retorne o envie nada más de vuelta, pero si todos los datos tienen algo entonces mandar la alerta 'Mensaje enviado' y recargar la página contactos.html"
    if(nombre == "" || email == "" || mensaje == ""){
        //Creo una alerta si uno de los campos están vacios
        alert("Todos los campos son obligatorios");
        //No retorno nada a la página contacto.html
        return false;
    }else{
        //Creo una alerta para avisar que envié el mensaje
        alert("Mensaje enviado");
        //Recargo la página
        location.reload();
        //No retorno nada a la página contacto.html
        return false;
    }
}