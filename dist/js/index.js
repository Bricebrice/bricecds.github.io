$('.button').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.works').offset().top-57}, 900);
});

$('.toggle').click(function(evento) {
    evento.preventDefault();
    $('.toggle').toggleClass('toggle--vert');
    $('.menu').toggleClass('menu--show');
});

$('.menu--item--sobremi').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.header--sobremi').offset().top-57}, 900);
});
$('.menu--item--proyectos').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.works').offset().top-57}, 900);
});
$('.menu--item--contacto').on('click', function(event){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: $('.header--sobremi').offset().top-57}, 900);
});

$(document).ready(function() {
    $('#slide-1').show();
    $('#nav-1').addClass('active-cd');

    function muestraSlideSiguiente() {
        var siguienteSlide = $('.slides li:visible').next();
        var slideActual = $('.slides li:visible');
        slideActual.hide();
        if (siguienteSlide.is('li')) {
            siguienteSlide.show();
        } else {
            $('.slides li').first().show();
        }
        var siguienteBullet = $('.active-cd').next();
        var bulletActual = $('.active-cd');
        bulletActual.removeClass('active-cd');
        // El siguiente elemento sigue siendo un li?
        if (siguienteBullet.is('li')) {
            siguienteBullet.addClass('active-cd');
        } else {
            // Muestra el primer elemento de nuevo
            $('.nav li').first().addClass('active-cd');
        }
    };

    function muestraSlideAnterior() {
        var anteriorSlide = $('.slides li:visible').prev();
        var slideActual = $('.slides li:visible');
        slideActual.hide();
        // El siguiente elemento sigue siendo un li?
        if (anteriorSlide.is('li')) {
            anteriorSlide.show();
        } else {
            // Muestra el cuarto elemento de nuevo
            $('.slides li').last().show();
        }

        var anteriorBullet = $('.active-cd').prev();
        var bulletActual = $('.active-cd');
        bulletActual.removeClass('active-cd');
        // El siguiente elemento sigue siendo un li?
        if (anteriorBullet.is('li')) {
            anteriorBullet.addClass('active-cd');
        } else {
            // Muestra el primer elemento de nuevo
            $('.nav li').last().addClass('active-cd');
        }
    };
        $('.next').click(muestraSlideSiguiente);
        $('.prev').click(function() {
            muestraSlideAnterior(); //es lo mismo que lo de arriba
        });


        $(document).keydown(function(event) {
            if (event.keyCode == 37) {
                muestraSlideAnterior();
            } else if (event.keyCode == 39) {
                muestraSlideSiguiente();
            }
        });
});
