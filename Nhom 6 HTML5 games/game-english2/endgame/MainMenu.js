Game.MainMenu = function(game){

};
var unitClick,countSet = 0 ;


Game.MainMenu.prototype = {
	create:function(game){

		this.add.sprite(0, 0, 'background-menu');

		// this.createButton(game,"Game",game.world.centerX-300,game.world.centerY-200,100,50,function(){
		// 	this.state.start('Topic1');
		// });
		this.createButton(game,"Verbs 1",'t19',200,100,120,50,function(){
			unitClick = 19 ;
			this.state.start('Play');
		});
		this.createButton(game,"Verbs 2","t20",300,100,120,50,function(){
			unitClick = 20 ;
			this.state.start('Play');
		});
		this.createButton(game,"Verbs 3","t21",400,100,120,50,function(){
			unitClick = 21 ;
			this.state.start('Play');
		});
		this.createButton(game,"Verbs 4","t22",500,100,120,50,function(){
			unitClick = 22 ;
			this.state.start('Play');
		});
		this.createButton(game,"Verbs 5","t23",600,100,120,50,function(){
			unitClick = 23 ;
			this.state.start('Play');
		});
		this.createButton(game,"Likes","t14",700,100,120,50,function(){
			unitClick = 14 ;
			this.state.start('Play');
		});
		this.createButton(game,"Are/Is","t11",150,200,120,50,function(){
			unitClick = 11 ;
			this.state.start('Play');
		});
		this.createButton(game,"Have/Has","t10",250,200,120,50,function(){
			unitClick = 10 ;
			this.state.start('Play');
		});
		this.createButton(game,"Can/Can't","t0",350,200,120,50,function(){
			unitClick = 0 ;
			this.state.start('Play');
		});
		this.createButton(game,"Time","t1",450,200,120,50,function(){
			unitClick = 1 ;
			this.state.start('Play');
		});
		this.createButton(game,"Compare1","t3",550,200,120,50,function(){
			unitClick = 3 ;
			this.state.start('Play');
		});
		this.createButton(game,"Compare2","t4",650,200,120,50,function(){
			unitClick = 4 ;
			this.state.start('Play');
		});
		this.createButton(game,"Compare3","t5",750,200,120,50,function(){
			unitClick = 5 ;
			this.state.start('Play');
		});
		this.createButton(game,"Wearing","t2",200,300,120,50,function(){
			unitClick = 2 ;
			this.state.start('Play');
		});
		this.createButton(game,"Countries","t6",300,300,120,50,function(){
			unitClick = 6 ;
			this.state.start('Play');
		});
		this.createButton(game,"Positions","t16",400,300,120,50,function(){
			unitClick = 16 ;
			this.state.start('Play');
		});
		this.createButton(game,"Kind","t13",500,300,120,50,function(){
			unitClick = 13 ;
			this.state.start('Play');
		});
		this.createButton(game,"Use","t18",600,300,120,50,function(){
			unitClick = 18 ;
			this.state.start('Play');
		});
		this.createButton(game,"Place","t15",700,300,120,50,function(){
			unitClick = 15 ;
			this.state.start('Play');
		});
		this.createButton(game,"Going to","t8",250,400,120,50,function(){
			unitClick = 8 ;
			this.state.start('Play');
		});
		this.createButton(game,"Has Just","t9",350,400,120,50,function(){
			unitClick = 9 ;
			this.state.start('Play');
		});
		this.createButton(game,"Because","t7",450,400,120,50,function(){
			unitClick = 7 ;
			this.state.start('Play');
		});
		this.createButton(game,"If then","t12",550,400,120,50,function(){
			unitClick = 12 ;
			this.state.start('Play');
		});
		this.createButton(game,"That","t17",650,400,120,50,function(){
			unitClick = 17 ;
			this.state.start('Play');
		});
		


		
		 var buttonBack  = game.add.button(50,30,'button-back',function (){game.state.start('Welcome');},this,2,1,0);
		    buttonBack.anchor.setTo(0.5,0.5);
		    buttonBack.width=50;
		    buttonBack.height= 50 ; 
	},
	update:function(game){

	},
	createButton:function(game,string,picturename,x,y,w,h,callback){
		var button1  = game.add.button(x,y,picturename,callback,this,2,1,0);

		button1.anchor.setTo(0.5,0.5);
		button1.width=75;
		button1.height=75 ; 

		// var txt = game.add.text(button1.x,button1.y,string,{
		// 	font:"20px Revalia",
		// 	fill:"#f1f1f1",
		// 	align:"center"
		// });
		// txt.font='Revalia';
		// txt.anchor.setTo(0.5,0.5);
	},

}
