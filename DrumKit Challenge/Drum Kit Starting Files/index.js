var numOfDrumBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrumBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
var btnInnerHTML=this.innerHTML;
makeSound(btnInnerHTML);


  });
}
  document.addEventListener("keypress", function(event) {
makeSound(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var tom1Element = new Audio('sounds/tom-1.mp3');
    tom1Element.play();
      break;
      case "a":
      var tom2Element = new Audio('sounds/tom-2.mp3');
      tom2Element.play();
        break;
        case "s":
        var tom3Element = new Audio('sounds/tom-3.mp3');
        tom3Element.play();
          break;
          case "d":
          var tom4Element = new Audio('sounds/tom-4.mp3');
          tom4Element.play();
            break;
            case "j":
            var snareElement = new Audio('sounds/snare.mp3');
            snareElement.play();
              break;
              case "k":
              var kickElement = new Audio('sounds/kick-bass.mp3');
              kickElement.play();
                break;
                case "l":
                var crashElement = new Audio('sounds/crash.mp3');
                crashElement.play();
                  break;

    default:console.log(btnInnerHTML);

}
}
