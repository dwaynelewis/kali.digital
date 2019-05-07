$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);



  // ------------------------------------------------------------------------------ //
  // Preloader Javascript 
  // ------------------------------------------------------------------------------ //


    jQuery('#status').fadeOut();
    jQuery('#preloader').delay(550).fadeOut('slow');
    jQuery('body').delay(550).css({
      'overflow': 'visible'
    });
 


  // ------------------------------------------------------------------------------ //
  // Active Megamenu 
  // ------------------------------------------------------------------------------ //


  $('#dopeNav').dopeNav({
    stickyNav: true,
  });


  // :: onePageNav Active JS
  if ($.fn.onePageNav) {
    $('#nav').onePageNav({
      currentClass: 'active',
      scrollSpeed: 1000,
      easing: 'easeOutQuad'
    });
  }

  $("a[href='#']").on('click', function ($) {
    $.preventDefault();
  });


  // ------------------------------------------------------------------------------ //
  // Counterup   
  // ------------------------------------------------------------------------------ //  


  jQuery(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  });

  // ------------------------------------------------------------------------------ //
  // Work  carousel  
  // ------------------------------------------------------------------------------ //  


  jQuery("#work-carusel").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,    
  });


  // ------------------------------------------------------------------------------ //
  // Testimonial carousel  
  // ------------------------------------------------------------------------------ //  


  jQuery("#testimonial_carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
  });


  // ------------------------------------------------------------------------------ //
  // Screenshot carousel  
  // ------------------------------------------------------------------------------ //


  jQuery("#screenshot-carousel").owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Contact Form 
  // ------------------------------------------------------------------------------ //  

  jQuery("#submit_btn").click(function () {

    var user_name = jQuery('input[name=name]').val();
    var user_email = jQuery('input[name=email]').val();
    var user_message = jQuery('textarea[name=message]').val();

    var proceed = true;
    if (user_name == "") {
      jQuery('input[name=name]').css('border-color', 'red');
      proceed = false;
    }
    if (user_email == "") {
      jQuery('input[name=email]').css('border-color', 'red');
      proceed = false;
    }
    if (user_message == "") {
      jQuery('textarea[name=message]').css('border-color', 'red');
      proceed = false;
    }


    if (proceed) {
      post_data = {
        'userName': user_name,
        'userEmail': user_email,
        'userMessage': user_message
      };

      jQuery.post('contact_me.php', post_data, function (response) {

        if (response.type == 'error') {
          output = '<div class="error">' + response.text + '</div>';
        } else {

          output = '<div class="success">' + response.text + '</div>';

          jQuery('#contact_form input').val('');
          jQuery('#contact_form textarea').val('');
        }

        jQuery("#result").hide().html(output).slideDown();
      }, 'json');

    }
  });

  jQuery("#contact_form input, #contact_form textarea").keyup(function () {
    jQuery("#contact_form input, #contact_form textarea").css('border-color', '');
    jQuery("#result").slideUp();
  });

});