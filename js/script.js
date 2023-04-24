// countDown Timer

// setdate
var ct = new Date("March 30, 2023 24:00:00").getTime();
const t = setInterval(function () {
    var now = new Date().getTime();
    var dist = ct - now;
    var d = Math.floor(dist / (1000 * 60 * 60 * 24));
    var h = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(dist % (1000 * 60) / (1000));
    document.getElementById('h3').innerHTML = d + " d  " + h + " h  " + m + " m  " + s + " s ";
    if (dist < 0) {
        document.getElementById('h3').innerHTML = "OFFER CLOSES SOON.."
    }
}, 1000);

// home page card effect
$(document).ready(function () {
    // first card
    $('#hov').mouseenter(function () {
        $('.option').css("display", "flex");
    });
    $('#hov').mouseleave(function () {
        $('.option').css("display", "none");
    });
    // second card
    $('#hov2').mouseenter(function () {
        $('.option2').css("display", "flex");
    });
    $('#hov2').mouseleave(function () {
        $('.option2').css("display", "none");
    });
    // third card
    $('#hov3').mouseenter(function () {
        $('.option3').css("display", "flex");
    });
    $('#hov3').mouseleave(function () {
        $('.option3').css("display", "none");
    });
    // fourth card
    $('#hov4').mouseenter(function () {
        $('.option4').css("display", "flex");
    });
    $('#hov4').mouseleave(function () {
        $('.option4').css("display", "none");
    });
    // fifth card
    $('#hov5').mouseenter(function () {
        $('.option5').css("display", "flex");
    });
    $('#hov5').mouseleave(function () {
        $('.option5').css("display", "none");
    });
    // sixth card
    $('#hov6').mouseenter(function () {
        $('.option6').css("display", "flex");
    });
    $('#hov6').mouseleave(function () {
        $('.option6').css("display", "none");
    });
    // seventh card
    $('#hov7').mouseenter(function () {
        $('.option7').css("display", "flex");
    });
    $('#hov7').mouseleave(function () {
        $('.option7').css("display", "none");
    });
    // eighth card
    $('#hov8').mouseenter(function () {
        $('.option8').css("display", "flex");
    });
    $('#hov8').mouseleave(function () {
        $('.option8').css("display", "none");
    });
    // 13
    $('#hov13').mouseenter(function () {
        $('.option13').css("display", "flex");
    });
    $('#hov13').mouseleave(function () {
        $('.option13').css("display", "none");
    });
});
// hide and show description content

$(document).ready(function () {
    $('#a').click(function () {
        $('#p1').show();
        $('#p2').hide();
        $('#p3').hide();
    });
    $('#b').click(function () {
        $('#p1').hide();
        $('#p2').show();
        $('#p3').hide();
    });
    $('#c').click(function () {
        $('#p1').hide();
        $('#p2').hide();
        $('#p3').show();
    });
    // card effect
    $('#hov9').mouseenter(function () {
        $('.option9').css("display", "flex");
    });
    $('#hov9').mouseleave(function () {
        $('.option9').css("display", "none");
    });
    // second card
    $('#hov10').mouseenter(function () {
        $('.option10').css("display", "flex");
    });
    $('#hov10').mouseleave(function () {
        $('.option10').css("display", "none");
    });
    // third card
    $('#hov11').mouseenter(function () {
        $('.option11').css("display", "flex");
    });
    $('#hov11').mouseleave(function () {
        $('.option11').css("display", "none");
    });
    // fourth card
    $('#hov12').mouseenter(function () {
        $('.option12').css("display", "flex");
    });
    $('#hov12').mouseleave(function () {
        $('.option12').css("display", "none");
    });
});
// add cart effect
  // add cart insta gallory effect
  $(document).ready(function () {
    // first
    $('.action1').mouseenter(function () {
        $('.design1').css("display", "flex");
    });
    $('.action1').mouseleave(function () {
        $('.design1').css("display", "none");
    });
    // second
    $('.action2').mouseenter(function () {
        $('.design2').css("display", "flex");
    });
    $('.action2').mouseleave(function () {
        $('.design2').css("display", "none");
    });
    // third
    $('.action3').mouseenter(function () {
        $('.design3').css("display", "flex");
    });
    $('.action3').mouseleave(function () {
        $('.design3').css("display", "none");
    });
    // fourth
    $('.action4').mouseenter(function () {
        $('.design4').css("display", "flex");
    });
    $('.action4').mouseleave(function () {
        $('.design4').css("display", "none");
    });
    // fifth
    $('.action5').mouseenter(function () {
        $('.design5').css("display", "flex");
    });
    $('.action5').mouseleave(function () {
        $('.design5').css("display", "none");
    });
    // sixeth
    $('.action6').mouseenter(function () {
        $('.design6').css("display", "flex");
    });
    $('.action6').mouseleave(function () {
        $('.design6').css("display", "none");
    });
});

// complate form
const comp = function(){
    alert("THANK YOU FOR VISIT OUR SITE AND PLACE ORDER...........");
    window.location.replace("index.html");
}