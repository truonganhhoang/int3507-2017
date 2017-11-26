Game.Welcome = function(game){

};

Game.Welcome.prototype = {
	create:function(game){

		this.add.sprite(0, 0, 'background-welcome');

		this.createButton(game,"Play",game.world.centerX,game.world.centerY-200,100,25,function(){
			this.state.start('MainMenu');
		});
		this.createButton(game,"About",game.world.centerX,game.world.centerY-150,100,25,function(){
			this.state.start('');
		});
	},
	update:function(game){

	},
	createButton:function(game,string,x,y,w,h,callback){
		var button1  = game.add.button(x,y,'button',callback,this,2,1,0);

		button1.anchor.setTo(0.5,0.5);
		button1.width=w;
		button1.height= h ; 

		var txt = game.add.text(button1.x,button1.y,string,{
			font:"14px Arial",
			fill:"#f1f1f1",
			align:"center"
		});
		txt.anchor.setTo(0.5,0.5);
	}
}