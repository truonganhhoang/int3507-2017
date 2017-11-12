var welcomeState = {
  preload: function() {
    game.add.text(100,100, "Loading...");
    game.load.spritesheet("btnplay", "assets/play.gif")
  },

  create: function() {
    game.add.sprite(0, 0, 'backgroundgame');
    this.createButton("Play", game.world.centerX, game.world.centerY, 130, 50, function() {
      game.state.start('mainmenu');
    });
    this.createButton("About", game.world.centerX, game.world.centerY + 80, 130, 50, function() {
    });
  },

  update: function() {

  },

  createButton: function(string, x, y, w, h, callback) {
     var button_play =  game.add.button(x, y, 'button-t', callback, this, 2,1,0);

     button_play.anchor.setTo(0.5, 0.5);
     button_play.width =w;
     button_play.height =h;

     var txt = game.add.text(button_play.x, button_play.y, string, {
      font: "32px Shrikhand",
      fill: "#FFF",
      align: "center"
     });
     txt.anchor.setTo(0.5, 0.5)
  }
};
