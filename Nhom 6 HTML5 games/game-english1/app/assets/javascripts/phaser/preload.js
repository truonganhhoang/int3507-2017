var loadState = {
  preload: function() {
    game.load.image('backgroundgame', 'assets/backgroundgame.png');
    game.load.image('backgroundpeople', 'assets/preview.jpg');
    game.load.image('backgroundvegetable', 'assets/backgroundvegetable.jpg');
    game.load.image('background-menu', 'assets/background-menu.png');
    game.load.image('background-topic', 'assets/background-topic.png');
    game.load.image('sky', 'assets/sky.png');
    game.load.image('shizen', 'assets/shizen.jpg');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png',12,12);
    game.load.image('button', 'assets/button.png');
    game.load.image('button-topic', 'assets/button-topic.png');
    game.load.image('button-t', 'assets/button-t.png');
    game.load.image('button-back', 'assets/button-back.png');
    game.load.image('button-answer', 'assets/button-answer.png');
    game.load.image('box-answer', 'assets/box-answer.png');
    game.load.image('country', 'assets/country.png');
    game.load.image('welcomenglish', 'assets/english.jpg');
    game.load.image('Wife', 'assets/people/Wife.jpeg');
    game.load.image('Parents', 'assets/people/Parents.jpeg');
    game.load.image('Grandson', 'assets/people/Grandson.jpeg');
    game.load.image('Grandparents', 'assets/people/Grandparents.jpeg');
    game.load.image('Boy', 'assets/people/Boy.jpeg');
    game.load.image('Children', 'assets/people/Children.jpeg');
    game.load.image('Girl', 'assets/people/Girl.jpeg');
    game.load.image('Man', 'assets/people/Man.jpeg');
    game.load.image('Acornsquash', 'assets/vegetables/Acornsquash.jpeg');
    game.load.image('Broccoli', 'assets/vegetables/Broccoli.jpeg');
    game.load.image('Cauliflower', 'assets/vegetables/Cauliflower.jpeg');
    game.load.image('Corn', 'assets/vegetables/Corn.jpeg');
    game.load.image('Cucumber', 'assets/vegetables/Cucumber.jpeg');
    game.load.image('Garlic', 'assets/vegetables/Garlic.jpeg');
    game.load.image('Kidneybean', 'assets/vegetables/Kidneybean.jpeg');
    game.load.image('Mushroom', 'assets/vegetables/Mushroom.jpeg');
    game.load.image('Yam', 'assets/vegetables/Yam.jpeg');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48,9);
  },

  create: function() {
    game.state.start('welcome');
  }
};
