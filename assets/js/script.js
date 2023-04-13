
// habilitando el contacto

var contacto = document.querySelector(".d-none");

var navContacto = document.getElementById('nav_contacto')


navContacto.addEventListener('click', function(){
    contacto.classList.remove('d-none');
    contacto.classList.add('d-block');
})

// habilitando reservas
var reservas = document.querySelector("#reservas");

var nav_reservas = document.getElementById("nav_reservas")


nav_reservas.addEventListener('click', function(){
    reservas.classList.remove('d-none');
    reservas.classList.add('d-block');
});

// capturando datos de contacto
var form = document.getElementById('contact_form')


form.addEventListener('submit', function(){
    obtenerDatos();
});

function obtenerDatos(){
    var nombre = document.getElementById('contacto_nombres').value
    var email = document.getElementById('contacto_email').value
    var formValido = true;
    if(nombre ==""){
        alert('El campo "Nombre" es obligatorio')
        formValido = false
    }
    if(email == ""){
        alert('El campo "Correo" es obligatorio');
        formValido = false
    }else {
        alert(`Muchas gracias ${nombre} Hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${email}`);
    }
}

// Generando el Modal 
$(document).ready(function(){

    $("img").dblclick(function(){
        var imgScr = this.src //obtener src de la imagen
        //obtener el titulo
        var titulo = this.parentNode.querySelector('h5').innerHTML
        // obtener parrafo
        var parrafo = this.parentNode.querySelector('p').innerHTML
        //rellenando el Modal
        $("#title_card").text(titulo);
        $("#image_card").attr('src',imgScr);
        $("#parrafo_card").text(parrafo);

        //levantar el Modal
        $(".myModal").show();
    });

    $("#modal_close").click(function(){
        //ocultar modal
        $(".myModal").hide();
    })
});

// generando las reservas
$(document).ready(function(){

    //obteniendo datos
    $("#boton_reserva").click(function(){
        var nombre = $("#reserva_nombres").val()
        var correo = $("#reserva_email").val()
        var asistentes = $("#asistentes").val()

        alert(`Estimado: ${nombre} Agradecemos por reservar con nosotros.
                Hemos registrado ${asistentes} asistentes. Se ha enviado
                el codigo de confirmacion al correo ${correo}.
                Gracias por Preferirnos`)
    });
});
