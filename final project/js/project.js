$(document).ready(function(){

$("#art-carousel").carousel();
});

// Enable Carousel Indicators
$(".item").click(function(){
    $("#art-carousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#art-carousel").carousel("prev");
});

$(".right").click(function(){
  $("#art-carousel").carousel("next");
});

$(".answers").hide();
$(".button").click(function(){
  $(".answers").toggle();
});

$(".grants_words").hide();
$(".grants").click(function(){
  $(".grants_words").toggle();
});

$(".aae_words").hide();
$(".aae").click(function(){
  $(".aae_words").toggle();
});

$(".nea_words").hide();
$(".nea").click(function(){
  $(".nea_words").toggle();
});

$(".highcharts").hide();
$(".charts").click(function(){
  $(".highcharts").toggle();
});

$(".image_credits").hide();
$(".credits").click(function(){
  $(".image_credits").toggle();
});
