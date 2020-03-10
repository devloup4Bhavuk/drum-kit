function play(button)
{
    switch(button)
    {
        case "w": 
        var audio = new Audio('tom-1.mp3');
        audio.play();
        break;

        case "a": 
        var audio = new Audio('tom-2.mp3');
        audio.play();
        break;

        case "s": 
        var audio = new Audio('tom-3.mp3');
        audio.play();
        break;

        case "d": 
        var audio = new Audio('tom-4.mp3');
        audio.play();
        break;

        case "j": 
        var audio = new Audio('snare.mp3');
        audio.play();
        break;

        case "k": 
        var audio = new Audio('crash.mp3');
        audio.play();
        break;

        case "l": 
        var audio = new Audio('kick-bass.mp3');
        audio.play();
        break;
    }
}


function animation(button)
{
    // var buttonClass = "." + button;
    document.querySelector("." + button).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + button).classList.remove("pressed");
    }, 100);

}

document.addEventListener("keypress",function(event){
    play(event.key);
    animation(event.key);
});

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var pressedButton = this.innerHTML;
        play(pressedButton);
        animation(pressedButton);
    });    
}






