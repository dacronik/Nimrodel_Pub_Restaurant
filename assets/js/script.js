
// habilitando el contacto

var contacto = document.querySelector(".d-none");

var navContacto = document.getElementById('nav_contacto')


navContacto.addEventListener('click', function () {
    contacto.classList.remove('d-none');
    contacto.classList.add('d-block');
})

// habilitando reservas
var reservas = document.querySelector("#reservas");

var nav_reservas = document.getElementById("nav_reservas")


nav_reservas.addEventListener('click', function () {
    reservas.classList.remove('d-none');
    reservas.classList.add('d-block');
});

// capturando datos de contacto
var form = document.getElementById('contact_form')


form.addEventListener('submit', function () {
    obtenerDatos();
});

function obtenerDatos() {
    var nombre = document.getElementById('contacto_nombres').value
    var email = document.getElementById('contacto_email').value
    var formValido = true;
    if (nombre == "") {
        alert('El campo "Nombre" es obligatorio')
        formValido = false
    }
    if (email == "") {
        alert('El campo "Correo" es obligatorio');
        formValido = false
    } else {
        alert(`Muchas gracias ${nombre} Hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${email}`);
    }
}

// Generando el Modal 
$(document).ready(function () {

    $("img").dblclick(function () {
        var imgScr = this.src //obtener src de la imagen
        console.log(imgScr)
        //obtener el titulo
        var titulo = this.parentNode.querySelector('h5').innerHTML
        console.log(titulo)
        // obtener parrafo
        var parrafo = this.parentNode.querySelector('p').innerHTML

        //rellenando el Modal
        // $("#title_card").text(titulo);
        $("#image_card").attr('src', imgScr);
        $("#parrafo_card").text(parrafo);

        //levantar el Modal
        $(".myModal").show();
    });

    $("#modal_close").click(function () {
        //ocultar modal
        $(".myModal").hide();
    })
});

// generando las reservas
$(document).ready(function () {

    //obteniendo datos
    $("#boton_reserva").click(function () {
        var nombre = $("#reserva_nombres").val()
        var correo = $("#reserva_email").val()
        var asistentes = $("#asistentes").val()

        alert(`Estimado: ${nombre} Agradecemos por reservar con nosotros.
                Hemos registrado ${asistentes} asistentes. Se ha enviado
                el codigo de confirmacion al correo ${correo}.
                Gracias por Preferirnos`)
    });
});

// generado MyCarrusel 


$(document).ready(function () {

    // funcionalidad al carrusel 
    var currentPosition = 0;
    var slides = $('.card-carrusel')
    var numberOfSlides = slides.length;
    var slideShowInterval;
    var speed = 3000;


    // Agregar botón de siguiente y anterior
    $('.carrusel__inner').prepend('<span class="nav prev"><i class="fa-sharp fa-solid fa-chevron-left fa-2xl"></i></span>');
    $('.carrusel__inner').append('<span class="nav next"><i class="fa-sharp fa-solid fa-chevron-right fa-2xl"></i></span>');
    var nextBtn = $('.next');
    var prevBtn = $('.prev');

    //ocultando todas las imagenes excepto la primera
    slides.hide().eq(currentPosition);
    // iniciar carrusel
    function startSlideShow(){
        slideShowInterval = setInterval(nextSlide,speed)
    }


    // mover a la siguiente imagen
    function nextSlide(){
        slides.hide().eq(currentPosition);
        currentPosition = (currentPosition + 1)% numberOfSlides;
        moveTo(currentPosition);
    }

    // Mover a la imagen anterior
    function prevSlide() {
    slides.hide().eq(currentPosition);
    currentPosition = (currentPosition - 1) % numberOfSlides;
    moveTo(currentPosition);
    }
    // Mover a una imagen específica
    function moveTo(position) {
    slides.fadeOut().eq(position).fadeIn();
    }

    startSlideShow();

    // Pausar el carrusel al pasar el mouse sobre él
    $('.myCarrusel').hover(function() {
    clearInterval(slideShowInterval);
    }, function() {
    startSlideShow();
    });

    // agrenado funcionalidad a boton atras 
    prevBtn.on('click', function(){
        prevSlide();
    })
    // agregando funcionalidad a boton adelante
    nextBtn.on('click', function(){
        nextSlide();
    })
    // levantar carrusel 
    $("#nosotros").click(function () {
        $(".myCarrusel").show();
    })
    // cerrar carrusel
    $("#carrusel_close").click(function () {
        $(".myCarrusel").hide();
    });
})
