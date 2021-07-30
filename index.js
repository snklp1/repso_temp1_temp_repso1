//jshint esversion:6
$("#title_h1").css("color","white");
$(".lined_blocks").on("mouseenter", function () {
  $(this).addClass("onit");
});

$(".lined_blocks").on("mouseleave", function () {
  $(this).removeClass("onit");
});
