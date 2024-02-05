// Function to play the tone of the respective Key
function playSound(triggered_key) {

    document.querySelector("." + triggered_key).classList.toggle('blinking');

    switch (triggered_key) {
        case "w":
            (new Audio("sounds/tom-1.mp3")).play();
        break;
        
        case "a":
            (new Audio("sounds/tom-2.mp3")).play();
        break;

        case "s":
            (new Audio("sounds/tom-3.mp3")).play();
        break;

        case "d":
            (new Audio("sounds/tom-4.mp3")).play();
        break;

        case "j":
            (new Audio("sounds/crash.mp3")).play();
        break;

        case "k":
            (new Audio("sounds/kick-bass.mp3")).play();
        break;

        case "l":
            (new Audio("sounds/snare.mp3")).play();
        break;

        default: console.log(triggered_key);
        break;
    }

}


// Event Listeners
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){playSound(this.innerHTML)});

    document.addEventListener("keypress", function (event) {
        const key = event.key.toLowerCase();
        if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
            playSound(key);
        }
        });
}


