$(document).ready(function(){
    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();
        let nav = $('#contenedorDolar');
        let navPrincipal = $('#navPrincipal');
        let encabezado = $('#encabezadoP');
        if (scrollTop > 140) {
          nav.css('background-color', 'rgba(91, 3, 15, 0.7)');
         navPrincipal.css( 'position', 'fixed');
          encabezado.css('opacity','0.7');
          
        } else {
          nav.css('background-color', 'rgba(91, 3, 15, 1)');
          navPrincipal.css( 'position', 'initial');
          encabezado.css('opacity','1')
        }
      });
});
    