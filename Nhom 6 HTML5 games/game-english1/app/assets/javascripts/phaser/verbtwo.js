var textArray1 = ["Acornsquash", "Broccoli", "Cucumber", "Corn", "Cauliflower", "Garlic", "Kidneybean", "Mushroom", "Yam"];
var text_each1 = [];
var image_each1 = [];
var scoreText1, timeText, notificationTime ;
var score1 = 0;
var verbtwoState = {
  create: function(game) {
    picture = game.add.sprite(game.world.centerX, game.world.centerY, 'button-back');
    picture.anchor.setTo(0.5, 0.5);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    var time;
    game.time.events.add(Phaser.Timer.SECOND * 10, fadePicture,  this);
    game.add.sprite(0, 0, 'backgroundvegetable');
     var buttonBack  = game.add.button(20,50,'button-back',function (){
      text_each1.splice(0, text_each1.length);
      image_each1.splice(0, image_each1.length);
      game.state.start('mainmenu');
    },this,2,1,0);
    scoreText1 = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });
    for (var i = 0; i < textArray1.length; i++) {
      if (text_each1 != null && image_each1 != null) {
        text_each1.push(game.add.text(game.world.randomX-50, game.world.randomY-50, textArray1[i], { font: "27px VT323", fill: "#ff0044", wordWrap: true}));
        image_each1[i] = game.add.sprite(game.world.randomX-50, game.world.randomY-50, textArray1[i]);
      }
      image_each1[i].scale.setTo(0.6,0.6);
      image_each1[i].inputEnabled = true;
      image_each1[i].input.enableDrag(false, true);
      text_each1[i].inputEnabled = true;
      text_each1[i].input.enableDrag(false, true);
      game.physics.arcade.enable(image_each1[i]);
      game.physics.arcade.enable(text_each1[i] );
    }
  },
  update: function() {
    render();

    for (var i = 0; i < textArray1.length; i++) {
      if (game.physics.arcade.collide(image_each1[i], text_each1[i])) {
        if (game.input.activePointer.leftButton.isDown == false) {
          image_each1[i].kill();
          text_each1[i].kill();
          score1+= 10;
          scoreText1.text = 'Score: '+ score1;
        }
      }
    }

    if (game.time.events.duration ==0) {
      notificationTime =  game.add.text(300, 160, 'Time over!', { fontSize: '42px', fill: '#fff' });
      score1 = 0;
      scoreText1.text = 'Score: '+ score1;
    }
  }
}

function fadePicture() {
    game.add.tween(picture).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
}

function render() {
   game.debug.text("Time : " + game.time.events.duration, 600, 40);
}
