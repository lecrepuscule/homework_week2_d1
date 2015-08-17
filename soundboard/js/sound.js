var soundBoard = soundBoard || {};
soundBoard.currentSound = null;

soundBoard.setup = function() {
  this.playButtons = document.getElementsByClassName("button");
  for (i=0; i< this.playButtons.length; i++) {
    this.playButtons[i].setAttribute("data-state", "stopped");
    this.playButtons[i].addEventListener("click", soundBoard.playClickHandler)
  }
}



soundBoard.playClickHandler = function(e) {
  e.preventDefault();
  console.log("this is "+this);
  if(this.getAttribute("data-state") === "playing") {
    soundBoard.pause();
  } else {
    soundBoard.play();
  }
}


soundBoard.play = function(){
  soundManager.destroySound("marine");
  var sound = this.getSound("marine");
  console.log("sound is "+ sound);
  // if (this.getAttribute("data-state") ==="stopped") {
    this.currentSound.play();
  // } else if (this.getAttribute("data-state") === "paused") {
  //   soundBoard.currentSound.resume()
  // } else {
  //   console.warn("soundBoard is in an unexpected state: " + this.getAttribute("data-state"));
  // }
  // this.setAttribute("data-state", "playing");
}

soundBoard.getSound = function(character){
  // if(!this.currentSound){
    var src = "sounds/"+character+"/"+Math.ceil(Math.random()*8)+".wav";
    console.log("src is " + src);
    soundBoard.currentSound = soundManager.createSound({
    id: character,
    url: src
    })
  // }
  return soundBoard.currentSound;
}

// soundBoard.pause = function() {
//   this.currentSound.pause();
//   this.playButton.setAttribute("data-state", "paused");
// }



soundManager.setup({
  url: '../swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    soundBoard.setup();
  }
})

