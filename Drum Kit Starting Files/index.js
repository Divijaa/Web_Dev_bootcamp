//when buttons are pressed
for(var i = 0 ; i <document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handclick);

function handclick(){

    var buttonInnerHTml = this.innerHTML;
    makeSOund(buttonInnerHTml);
    buttonAnimatiom(buttonInnerHTml);
     }
    
}

//when keys are pressed on the keyboard
document.addEventListener("keypress",function(event)
{
    makeSOund(event.key);
    buttonAnimatiom(event.key);

})

function makeSOund(key){
    
    switch (key)
     {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case "s":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                    case "d":
                        var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
                        case "j":
                            var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
                            case "k":
                                var audio = new Audio("sounds/crash.mp3");
                                audio.play();
                                break;
                                case "l":
                                    var audio = new Audio("sounds/kick-bass.mp3");
                                    audio.play();
                                    break;

            default: console.log(buttonInnerHTML);
     }
    
}

function buttonAnimatiom(current_key)
{
    var active= document.querySelector("." + current_key);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    } , 100)

}
