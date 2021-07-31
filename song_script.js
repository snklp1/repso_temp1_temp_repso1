$("#title_h1").css("color","white");
$(".named_h1").css("color", "white");


var alefiya = new Audio("sounds/alefiya.mp4");
var nipun = new Audio("sounds/nipun.mp4");
var sid = new Audio("sounds/sid.mp4");
var sakshi = new Audio("sounds/sakshi.mp4");
var shrikaran = new Audio("sounds/shrikaran.mp4");
var ritesh = new Audio("sounds/ritesh.mp4");
var ashutosh = new Audio("sounds/ashutosh.mp4");
var nashit = new Audio("sounds/nashit.mp4");

$(".btn").on("click", function () {
  var pressed = $(this).attr("class");

  pressed = pressed.slice(4,pressed.length);
  $("."+pressed).addClass("dubdub");
  setTimeout(function(){
    $("."+pressed).removeClass("dubdub");
  },200);
  action(pressed);

});


function action(name)
{
  switch(name)
  {
    case 'ritesh':
    ritesh.play();
    break;

    case 'sid':
    sid.play();
    break;

    case 'nashit':
    nashit.play();
    break;

    case 'sakshi':
    sakshi.play();
    break;

    case 'shrikaran':
    shrikaran.play();
    break;

    case 'ashutosh':
    ashutosh.play();
    break;

    case 'alefiya':
    alefiya.play();
    break;

    case 'nipun':
    nipun.play();
    break;

    default: alert("what the fuck");
  }

}
