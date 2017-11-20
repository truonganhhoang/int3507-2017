var mainmenuState = {
  create: function(game) {
    myimage=game.add.sprite(0, 0, 'background-menu');
    myimage.scale.setTo(3,3);
    var buttonBack  = game.add.button(50,30,'button-back',function (){
      text_each1.splice(0, text_each1.length);
      image_each1.splice(0, image_each1.length);
      game.state.start('welcome');
    },this,2,1,0);
    this.createButton(game,"People",200,100,120,50,function(){
      game.state.start('verbone');
    });
    this.createButton(game,"Vegetables",400,100,120,50,function(){
      game.state.start('verbtwo');
    });
    this.createButton(game,"Hard",600,100,120,50,function(){
      this.state.start('Verbs3');
    });

    this.createButton(game,"Hardly",800,100,120,50,function(){
      // this.state.start('Verbs3');
    });
    this.createButton(game,"Hardest",200,200,120,50,function(){
      this.state.start('Verbs5');
    });
    this.createButton(game,"Is/Are",400,200,120,50,function(){
      this.state.start('IsAre');
    });
    this.createButton(game,"Have/Has",600,200,120,50,function(){
      this.state.start('HaveHas');
    });
    this.createButton(game,"Hardly",800,200,120,50,function(){
      // this.state.start('Verbs3');
    });

    this.createButton(game,"Time",200,300,120,50,function(){
      this.state.start('Time');
    });
     this.createButton(game,"Time",400,300,120,50,function(){
      this.state.start('Time');
    })
     this.createButton(game,"Time",600,300,120,50,function(){
      this.state.start('Time');
    });
     this.createButton(game,"Hardly",800,300,120,50,function(){
      // this.state.start('Verbs3');
    });
  },
  createButton:function(game,string,x,y,w,h,callback){
    var button1  = game.add.button(x,y,'button-t',callback,this,2,1,0);

    button1.anchor.setTo(0.5,0.5);
    button1.width=w;
    button1.height= h ;

    var txt = game.add.text(button1.x,button1.y,string,{
      font:"24px Shrikhand",
      fill:"#f1f1f1",
      align:"center"
    });
    txt.font='VT323';
    txt.anchor.setTo(0.5,0.5);
  },
};
