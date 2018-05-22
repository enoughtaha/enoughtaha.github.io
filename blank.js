var moving = false;

$("#about").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ console.log("hi"); });

$(".about").click(function(){
    $("#intro").transition({ y: '-100vh', duration: 1000 });
    $("#about").transition({ y: '0', duration: 1000 });
    $("#info-box").transition({ y: '100vh', duration: 1000 });
});
    $("#about-ahnaf").click(function(){
        $("#intro").transition({ y: '0', duration: 1000 });
        $("#info-box").transition({ y: '0', duration: 1000 });
    });

$(".work").click(function(){
    $("#intro").transition({ x: '100vw', duration: 1000 });
    $("#work").transition({ x: '0', duration: 1000 });
    $("#info-box").transition({ x: '-100vw', duration: 1000 });
});
    $("#work-ahnaf").click(function(){
        $("#intro").transition({ x: '0', duration: 1000 });
        $("#info-box").transition({ x: '0', duration: 1000 });
    });

$(".contact").click(function(){
    $("#intro").transition({ x: '-100vw', duration: 1000 });
    $("#contact").transition({ x: '0', duration: 1000 });
    $("#info-box").transition({ x: '100vw', duration: 1000 });
});
    $("#contact-ahnaf").click(function(){
        $("#intro").transition({ x: '0', duration: 1000 });
        $("#info-box").transition({ x: '0', duration: 1000 });
    });
