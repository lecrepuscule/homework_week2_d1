

soundManager.setup({
  url: '../swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    console.log("ready");
  }
})

