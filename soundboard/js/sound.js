var soundBoard = soundBoard || {};
soundBoard.currentSound = null;

soundBoard.setup = function() {
  this.playButtons = document.getElementsByClassName("button");
  for (i=0; i< this.playButtons.length; i++) {
    // this.playButtons[i].setAttribute("data-state", "stopped");
    this.playButtons[i].addEventListener("click", soundBoard.playClickHandler)
  }
}

soundBoard.playClickHandler = function(e) {
  e.preventDefault();
    soundBoard.play(this.id);
}

soundBoard.play = function(character){
  soundManager.stopAll();
  soundManager.destroySound(character);
  var sound = this.getSound(character);
    this.currentSound.play();
}

soundBoard.getSound = function(character){
    var src = "sounds/"+character+"/"+Math.ceil(Math.random()*8)+".wav";
    console.log("src is " + src);
    soundBoard.currentSound = soundManager.createSound({
    id: character,
    url: src
    })
  return soundBoard.currentSound;
}

soundManager.setup({
  url: '../swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    soundBoard.setup();
  }
})

