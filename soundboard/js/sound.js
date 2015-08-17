var soundBoard = soundBoard || {};


soundBoard.setup = function() {
  this.playButton = document.getElementById("playbutton");
  this.playButton.setAttribute("data-state", "stopped");
  this.playButton.addEventListener("click", soundBoard.playClickHandler.bind(this))
}


soundBoard.getSound = function(){
  if(!this.currentSound){
    this.currentSound = soundManager.createSound({
    id: "test",
    url: "http://www.hazmatt.net/gaming/starcraft/terran/units/marine/tmardy00.wav"
    })
  }
  return this.currentSound;
}

soundBoard.currentSound = null;



soundBoard.playClickHandler = function(e) {
  e.preventDefault();
  console.log(this);
  if(this.playButton.getAttribute("data-state") === "playing") {
    this.pause();
  } else {
    this.play();
  }
}

// {onfinish: this.clearSound.bind(this)}

soundBoard.play = function(){
  var sound = this.getSound();

  if (this.playButton.getAttribute("data-state") ==="stopped") {
    this.currentSound.play();
  } else if (this.playButton.getAttribute("data-state") === "paused") {
    this.currentSound.resume()
  } else {
    console.warn("soundBoard is in an unexpected state: " + this.playButton.getAttribute("data-state"));
  }
  this.playButton.setAttribute("data-state", "playing");
}

soundBoard.pause = function() {
  this.currentSound.pause();
  this.playButton.setAttribute("data-state", "paused");
}



soundManager.setup({
  url: '../swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    soundBoard.setup().bind(soundBoard);
  }
})

