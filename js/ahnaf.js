particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4498141557303954,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);

$('#nav-bar').hide();

vh = $(window).height()/100;
vw = $(window).width()/100;

(function ($) {
  $(document).ready(function(){
    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > $(window).height() * 0.5) {
                $('#nav-bar').fadeIn(300);
            } else {
                $('#nav-bar').fadeOut(300);
            }
        });
    });

});
  }(jQuery));

  $("#workButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top-(15*vh)},
        'slow');
});

$("#aboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top-(15*vh)},
        'slow');
});

$("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top-(15*vh)},
        'slow');
});

$("#nav-contact-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top-(15*vh)},
        'slow');
});

$("#nav-home-button").click(function() {
    $('html,body').animate({
        scrollTop: $("html").offset().top},
        'slow');
});

$("#nav-about-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top-(15*vh)},
        'slow');
});

$("#nav-work-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top-(15*vh)},
        'slow');
});

$(document).ready(function(){
    var owl = $(".owl-carousel")
    owl.owlCarousel({
        loop: true,
        dots: false,
        items: 1
    });


    $('#work-next').click(function() {
        owl.trigger('next.owl.carousel', [600]);
    })
    $('#work-prev').click(function() {
        owl.trigger('prev.owl.carousel', [600]);
    })

});
