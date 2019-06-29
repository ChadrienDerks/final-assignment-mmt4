function myFunction(x) {
    var nav = $('.burgerNav'),
        menu = $('#myLinks');

    x.classList.toggle("change");

    if (nav.hasClass('active')){
        nav.removeClass('active');
        menu.hide();
        $('body').css("padding-top","95px");

    } else {

        nav.addClass('active');
        menu.show();
        $('body').css("padding-top","203px");
    }
}

$("#accordion").accordion({
    heightStyle: "content",
    collapsible: true
});


$('.melding').click(function () {
    swal({
        title: "U heeft deze video bekeken!",
        text: "Klik op een andere video om die te bekijken",
        
    });

    if ($('.melding').hasClass('active')) {
        $('.melding').removeClass('active');
        $(".bekeken-btn").css("opacity", "1");


    } else {

        $('.melding').addClass('active');
        $(".bekeken-btn").css("opacity", "1");       
    }
});



var player0 = videojs('player0'); 
var player1 = videojs('player1'); 
var player2 = videojs('player2'); 
var player3 = videojs('player3'); 
var player4 = videojs('player4'); 
var playBtn0 = $('#play0'); 
var playBtn1 = $('#play1'); 
var playBtn2 = $('#play2'); 
var playBtn3 = $('#play3'); 
var playBtn4 = $('#play4'); 
var rewindBtn0 = $('#rewind0');
var rewindBtn1 = $('#rewind1');
var rewindBtn2= $('#rewind2');
var rewindBtn3 = $('#rewind3');
var rewindBtn4 = $('#rewind4');

player0.on('ready', function () {
    playBtn0.click(function () {
        if (!player0.paused()) {
            player0.pause();

        } else {
            player0.play();
        }
    });

    playBtn1.click(function () {
        if (!player1.paused()) {
            player1.pause();

        } else {
            player1.play();
        }
    });

    playBtn2.click(function () {
        if (!player2.paused()) {
            player2.pause();

        } else {
            player2.play();
        }
    });

    playBtn3.click(function () {
        if (!player3.paused()) {
            player3.pause();

        } else {
            player3.play();
        }
    });

    playBtn4.click(function () {
        if (!player4.paused()) {
            player4.pause();

        } else {
            player4.play();
        }
    });


    rewindBtn0.click(function () {
        var time = player0.currentTime();
        player0.currentTime(time - 10);
    });

    rewindBtn1.click(function () {
        var time = player1.currentTime();
        player1.currentTime(time - 10);
    });


    rewindBtn2.click(function () {
        var time = player2.currentTime();
        player2.currentTime(time - 10);
    });


    rewindBtn3.click(function () {
        var time = player3.currentTime();
        player3.currentTime(time - 10);
    })

    rewindBtn4.click(function () {
        var time = player4.currentTime();
        player4.currentTime(time - 10);
    });
});

$('.player').click( function (){
    player0.pause();
    player1.pause();
    player2.pause();
    player3.pause();
    player4.pause();
});

$('.ui-accordion-content').hover( function (){
    $('.player-buttons').toggle();
});

$('.toggle-btn').click(function () {

    if ($('.toggle-btn').hasClass('active')) {
        $('.toggle-btn').removeClass('active');
        $(".nightModeBG").css("background-color", "white");
        $(".nightModeBGWhite").css("background-color", "black");
        $(".nightModeText").css("color", "black");
        $(".nightModeTextBlue").css("color", "blue");
        $(".nightModeTextGrey").css("color", "grey");
        $(".nightModeTextWhite").css("color", "white");
        $("#logo path").css("fill", "blue");

    } else {

        $('.toggle-btn').addClass('active');
        $(".nightModeBG").css("background-color", "black");
        $(".nightModeBGWhite").css("background-color", "white");
        $(".nightModeText").css("color", "white");
        $(".nightModeTextBlue").css("color", "white");
        $(".nightModeTextGrey").css("color", "white");
        $(".nightModeTextWhite").css("color", "black");
        $("#logo path").css("fill", "white");
    }
});

