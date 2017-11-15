var textArray = ["Grandparents", "Grandson", "Parents", "Wife", "Boy", "Children", "Man", "Girl"];
var text_each = [];
var image_each = [];
var scoreText, timeText, notificationTime ;
var score = 0;
var verboneState = {
  create: function(game) {
    picture = game.add.sprite(game.world.centerX, game.world.centerY, 'button-back');
    picture.anchor.setTo(0.5, 0.5);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    myimage = game.add.sprite(0, 0, 'backgroundpeople');
    var buttonBack  = game.add.button(20,50,'button-back',function (){
      text_each.splice(0, text_each.length);
      image_each.splice(0, image_each.length);
      game.state.start('mainmenu');
    },this,2,1,0);
    myimage.scale.setTo(0.6,0.7);
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });
    game.time.events.add(Phaser.Timer.SECOND * 10, fadePicture ,this);
    for (var i = 0; i < textArray.length; i++) {
      text_each.push(game.add.text(game.world.randomX-50, game.world.randomY-50, textArray[i], { font: "27px VT323", fill: "#ff0044", wordWrap: true}));
      image_each[i] = game.add.sprite(game.world.randomX-50, game.world.randomY-50, textArray[i]);
      image_each[i].scale.setTo(0.6,0.6);
      image_each[i].inputEnabled = true;
      image_each[i].input.enableDrag(false, true);
      text_each[i].inputEnabled = true;
      text_each[i].input.enableDrag(false, true);
      game.physics.arcade.enable(image_each[i]);
      game.physics.arcade.enable(text_each[i] );
    }
  },
  update: function() {
    render();
    for (var i = 0; i < textArray.length; i++) {
      if (game.physics.arcade.collide(image_each[i], text_each[i])) {
        if (game.input.activePointer.leftButton.isDown == false) {
          image_each[i].kill();
          text_each[i].kill();
          score+= 10;
          scoreText.text = 'Score: '+ score;
        }
      }
    }

    if (game.time.events.duration ==0) {
      notificationTime =  game.add.text(300, 160, 'Time over!', { fontSize: '42px', fill: '#fff' });
      score = 0;
      scoreText.text = 'Score: '+ score;
    }
  }
}

function fadePicture() {
    game.add.tween(picture).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
}

function render() {
   game.debug.text("Time : " + game.time.events.duration, 600, 40);
}
