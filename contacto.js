/*let Enviar = document.getElementById("Enviar");
let nameInput = document.getElementById("nameInput");
//let lastNameInput = document.getElementById("lastNameInput");//APELLIDO??
let title = document.getElementById("title");

Enviar.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Enviar";
}*/
function validarCampos() {
    let apellido = document.querySelector('#apellido').value;
    let nombre = document.querySelector('#nombre').value;
    let dni = document.querySelector('#dni').value;
    let email = document.querySelector('#email').value;
    let consulta= document.querySelector('#consulta').value;
    let mensaje= document.querySelector('#mensaje').value;

    console.log(apellido, typeof apellido); 
     
     // expresión regular
    // sólo letras, algún espacio
    let letrasOEspacios = /^[a-z\s]+$/i;
    let validarEmail= /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/
    //let validarEmail= /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]{3})*[.][a-zA-Z]{2}$/;
                     
    let datosValidos = true; //hipótesis
    let msjError = 'Complete los campos requeridos correctamente: ';
    if (apellido === '' || !letrasOEspacios.test(apellido)) {
        datosValidos = false;
        msjError += ' apellido';
    }

    if (nombre === '' || !letrasOEspacios.test(nombre)) {
        datosValidos = false;
        msjError += ' nombre';
    }
    
    if (dni === '' || !Number.isInteger(Number(dni))) {
        datosValidos = false;
        msjError += ' dni';
    }

    if (email === '' || !validarEmail.test(email)) {
        datosValidos = false;
        msjError += ' email';
    }

    if (consulta === '0') {
        datosValidos = false;
        msjError += ' consulta';
    }    

    if (mensaje === '') {
        datosValidos = false;
        msjError += ' mensaje';
    }

    let notificacion = document.querySelector('#respuesta');
    if (datosValidos) {
        notificacion.innerHTML = "Le informamos que su consulta/solicitud fue recibida, estaremos respondiendo a la brevedad o en 48hs. Muchas gracias. "
    } else {
        notificacion.innerHTML = msjError
    }
}

const formulario = document.querySelector('#form');
formulario.addEventListener('submit', evento => {
    // console.log('presionado!');
    validarCampos();
    evento.preventDefault();
});


