let soundButtons = document.querySelectorAll(".drum-pad");
let clips = document.querySelectorAll(".clip");
let display = document.getElementById("display");

//function that makes a sound when i click a button.
function playButtonSound(event) {
  let button = event.currentTarget;
  let audio = button.querySelector(".clip");
  display.innerText = button.name
  audio.play();
}
//Pressing button eventListener
soundButtons.forEach(soundButton => soundButton.addEventListener("click", playButtonSound));

//function that makes a sound when i press a keyboard key.
function keyboardSound(event){
  let audio = document.getElementById(event.key.toUpperCase());
  audio.play()

}

//keydown event listener
document.addEventListener("keydown",keyboardSound )
