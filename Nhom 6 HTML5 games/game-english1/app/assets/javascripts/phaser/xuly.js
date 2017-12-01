var game = new Phaser.Game(1024, 512, Phaser.AUTO, '', { render: render });
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('welcome', welcomeState);
game.state.add('verbone', verboneState);
game.state.add('verbtwo', verbtwoState);
game.state.add('mainmenu', mainmenuState);

game.state.start('boot');
