Game.Play = function(game){
};

var myJson ={} ; 
var sets  ; 
var answerSet=new Array(); 
var countQuestion = 0 ;
var countAnswerSet = 0;
var groupButton1 ;
var imgSuggest;
var lengthAnswerSet ; 
var boxanswer;
var answerinBox = ['...','...','...','...','...'];
var answerinBoxTxt;
var notificationTxt;
var circleNotifi;
var graphics;
var countCorrect = 0 , txtCountCorrect; 
var countWrong  = 0 , txtCountWrong; 

Game.Play.prototype = {
	create:function(game) {
		// alert(unitClick);

		countSet = 0;
		countQuestion = 0 ;
		countAnswerSet = 0 ;
		countCorrect = 0 ;
		countWrong  = 0 ; 
		
		var fileName  = 'sentences/sentences_'+unitClick+'.json';

		




		function getAllSupportedItems( ) {
		    return $.getJSON(fileName).then(function (data) {
		        return data;
		    });
		}

		

		// Usage:
		getAllSupportedItems().done(function (items) {

		    myJson = items; 
		    console.log(myJson);
		    sets = myJson.sets;

			game.add.sprite(0, 0, 'background-topic');
			

			groupButton1 = game.add.group();
			groupAnswerinBox  = game.add.group();

		    var buttonBack 	= game.add.button(50,30,'button-back',function (){game.state.start('MainMenu');},this,2,1,0);
		    buttonBack.anchor.setTo(0.5,0.5);
		    buttonBack.width=50;
		    buttonBack.height= 50 ; 

		    

		   	var bgrImgS = game.add.sprite(game.world.centerX-130,20,'background-imgSuggest');
		   	bgrImgS.scale.setTo(1.5,1);
		    bgrImgS.alpha = 0.7; 

		    boxanswer = game.add.sprite(200,150,'box-answer');
			boxanswer.scale.setTo(0.75,0.25);
			

			imgSuggest = game.add.sprite(game.world.centerX-50,20,unitClick);
		    imgSuggest.frameName = countSet.toString();
		    imgSuggest.backgroundColor = "white";
		    imgSuggest.inputEnabled = true;
		    imgSuggest.input.pixelPerfectClick = true;

		    set =sets[countSet];
		    alt1 = set.alt1;	alt1 = alt1.split(" "); 
		    alt2 = set.alt2;	alt2 = alt2.split(" ");
		    alt3 = set.alt3;	alt3 = alt3.split(" ");
		    alt4 = set.alt4;	alt4 = alt4.split(" ");
		    line = set.line;	line = line.split(" ");
		    lengthAnswerSet = line.length;

		    updateAnswerInBox(game,lengthAnswerSet);
		    
		    for( i = 0 ; i < line.length ; i++){
		    	answerSet[i] = new Array();
		    	if ( alt1[i]!=='_')	answerSet[i].push(alt1[i]) ; 
		    	if ( alt2[i]!=='_')	answerSet[i].push(alt2[i]) ; 
		    	if ( alt3[i]!=='_')	answerSet[i].push(alt3[i]) ; 
		    	if ( alt4[i]!=='_')	answerSet[i].push(alt4[i]) ; 
		    	answerSet[i].push(line[i]) ; 
		    	answerSet[i] = shuffle(answerSet[i]);

		    	console.log(answerSet[i]);
		    }

		    var width = 0 ; 
		    for( j = 0 ; j< answerSet[countAnswerSet].length ; j++){
		    	width += 50;
		    	width += answerSet[countAnswerSet][j].length*16 ; 
		    }
		    console.log(window.innerWidth);

		    x_first =  (1100 - width)/2;

		    for( j = 0 ; j< 5 ; j++){
		    	if(answerSet[countAnswerSet][j]){
		    		createButton(game,answerSet[countAnswerSet][j],line[countAnswerSet],x_first,game.world.centerY+50,answerSet[countAnswerSet][j].length*16,50,function(){});
		    		x_first += 50 ;
		    		x_first += answerSet[countAnswerSet][j].length*16;
		    	}
		    	
		    }
		    

		    imgSuggest.events.onInputDown.add(nextImg,{game:game});



		    graphics = game.add.graphics(0, 0);
		    graphics.beginFill(0xFFFFFF, 1);


		    // draw a rectangle correct
		    graphics.lineStyle(2, 0x00FF00, 1);
		    graphics.drawRect(300,430,200, 40);

		    // draw a rectangle wrong
		    graphics.lineStyle(2, 0xFF0000, 1);
		    graphics.drawRect(500,430,200, 40);

		    // BOX SCORES
			graphics.lineStyle(0, 0xFC1AFF, 1);
		    graphics.drawCircle(500, 450, 75);

		    txtCountCorrect = game.add.text(380, 430, countCorrect , {font: "bold 30px Revalia", fill: "#00FF00"});
		    txtCountWrong = game.add.text(600, 430, countWrong   , {font: "bold 30px Revalia", fill: "#FF0000"});

		});



		
	},

	update:function(game){
		 
	},

}


function checkAnswer(items){
	// alert(this.textClick+'	'+this.answer);
	if(this.textClick === this.answer){

		graphics.beginFill(0x00FF00, 1);
		graphics.drawCircle(500, 450, 75);
		this.game.time.events.add(1000, function() {    
			graphics.beginFill(0xFFFFFF, 1);
			graphics.drawCircle(500, 450, 75);
		}, this);

		imgSuggest.kill();
		this.button.kill();
		this.txt.kill();
		this.groupButton1.removeAll(false,false);

		countCorrect++;
		txtCountCorrect.text = countCorrect;

		nextAnswerSet(this.game);
	}else{
		graphics.beginFill(0xFF0000, 1);
		graphics.drawCircle(500, 450, 75);
		this.game.time.events.add(1000, function() {    
			graphics.beginFill(0xFFFFFF, 1);
			graphics.drawCircle(500, 450, 75);
		}, this);

		items.kill();
		this.button.kill();
		this.txt.kill();

		countWrong++;
		txtCountWrong.text = countWrong;
	}
}

function nextAnswerSet(game) {
	countAnswerSet++;
	if(countAnswerSet<lengthAnswerSet){
		imgSuggest = game.add.sprite(game.world.centerX-50,20,unitClick);
	    imgSuggest.frameName = countSet.toString();
	    imgSuggest.inputEnabled = true;
	    imgSuggest.input.pixelPerfectClick = true;

	    set =sets[countSet];
	    alt1 = set.alt1;	alt1 = alt1.split(" "); 
	    alt2 = set.alt2;	alt2 = alt2.split(" ");
	    alt3 = set.alt3;	alt3 = alt3.split(" ");
	    alt4 = set.alt4;	alt4 = alt4.split(" ");
	    line = set.line;	line = line.split(" ");
	    lengthAnswerSet = line.length;
	    
	    for( i = 0 ; i < line.length ; i++){
	    	answerSet[i] = new Array();
	    	if ( alt1[i]!=='_')	answerSet[i].push(alt1[i]) ; 
	    	if ( alt2[i]!=='_')	answerSet[i].push(alt2[i]) ; 
	    	if ( alt3[i]!=='_')	answerSet[i].push(alt3[i]) ; 
	    	if ( alt4[i]!=='_')	answerSet[i].push(alt4[i]) ; 
	    	answerSet[i].push(line[i]) ; 
	    	answerSet[i] = shuffle(answerSet[i]);

	    	console.log(answerSet[i]);
	    }

	    var width = 0 ; 
	    for( j = 0 ; j< answerSet[countAnswerSet].length ; j++){
	    	width += 50;
	    	width += answerSet[countAnswerSet][j].length*16 ; 
	    }

	    x_first =  (1100 - width)/2;

	    for( j = 0 ; j< 5 ; j++){
	    	if(answerSet[countAnswerSet][j]){
	    		createButton(game,answerSet[countAnswerSet][j],line[countAnswerSet],x_first,game.world.centerY+50,answerSet[countAnswerSet][j].length*16,50,function(){});
	    		x_first += 50 ;
	    		x_first += answerSet[countAnswerSet][j].length*16;
	    		// console.log('length : ' +answerSet[countAnswerSet][j].length*16 +'	,	x : ' + x_first);
	    	}
	    	
	    }
	}else{
		countAnswerSet=0;
		countSet++;
		if(countSet<20){
			answerinBox = ['...','...','...','...','...'];
			updateAnswerInBox(game,lengthAnswerSet);

			imgSuggest = game.add.sprite(game.world.centerX-50,20,unitClick);
		    imgSuggest.frameName = countSet.toString();
		    imgSuggest.inputEnabled = true;
		    imgSuggest.input.pixelPerfectClick = true;

		    set =sets[countSet];
		    alt1 = set.alt1;	alt1 = alt1.split(" "); 
		    alt2 = set.alt2;	alt2 = alt2.split(" ");
		    alt3 = set.alt3;	alt3 = alt3.split(" ");
		    alt4 = set.alt4;	alt4 = alt4.split(" ");
		    line = set.line;	line = line.split(" ");
		    lengthAnswerSet = line.length;
		    
		    for( i = 0 ; i < line.length ; i++){
		    	answerSet[i] = new Array();
		    	if ( alt1[i]!=='_')	answerSet[i].push(alt1[i]) ; 
		    	if ( alt2[i]!=='_')	answerSet[i].push(alt2[i]) ; 
		    	if ( alt3[i]!=='_')	answerSet[i].push(alt3[i]) ; 
		    	if ( alt4[i]!=='_')	answerSet[i].push(alt4[i]) ; 
		    	answerSet[i].push(line[i]) ; 
		    	answerSet[i] = shuffle(answerSet[i]);

		    	console.log(answerSet[i]);
		    }

		    var width = 0 ; 
		    for( j = 0 ; j< answerSet[countAnswerSet].length ; j++){
		    	width += 50;
		    	width += answerSet[countAnswerSet][j].length*16 ; 
		    }

		    x_first =  (1100 - width)/2;

		    for( j = 0 ; j< 5 ; j++){
		    	if(answerSet[countAnswerSet][j]){
		    		createButton(game,answerSet[countAnswerSet][j],line[countAnswerSet],x_first,game.world.centerY+50,answerSet[countAnswerSet][j].length*16,50,function(){});
		    		x_first += 50 ;
		    		x_first += answerSet[countAnswerSet][j].length*16;
		    		// console.log('length : ' +answerSet[countAnswerSet][j].length*16 +'	,	x : ' + x_first);
		    	}
		    	
		    }
		}else {
			answerinBox = [' ','You have completed.','Thank','you! <3',' '];
			updateAnswerInBox(game,5);
			// alert("You has finish . Thank you <3 !!"); 
		}
	}
	
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function createButton(game,string,answer,x,y,w,h,callback){
	var button1  = game.add.button(x,y,'button-topic',callback,this,2,1,0);

	button1.anchor.setTo(0.5,0.5);
	button1.alpha = 0.5;
	button1.width=w+20;
	button1.height= h ; 

	

	var txt = game.add.text(button1.x,button1.y,string,{
		// font:"20px Revalia",
		fill:"#f1f1f1",
		align:"center"
	});
	txt.font='Vollkorn';
	txt.alpha = 1;
	txt.anchor.setTo(0.5,0.5);

	button1.events.onInputOver.add(over, {button:button1 , txt: string,game:game});
	button1.events.onInputOut.add(out, {button:button1,game:game});

	groupButton1.add(button1);
	groupButton1.add(txt);

	button1.events.onInputDown.add(checkAnswer, {game:game,textClick:string , answer:answer , button : button1 , txt :txt ,groupButton1:groupButton1});
}

function over(pointer) {

   console.log('over');

   this.button.alpha = 1 ; 
   console.log(this.txt);
   answerinBox[countAnswerSet] = this.txt;
   updateAnswerInBox(this.game,lengthAnswerSet);
}
function out(pointer){
	console.log('out');
	this.button.alpha = 0.5 ; 
	answerinBox[countAnswerSet] = '...';
	updateAnswerInBox(this.game,lengthAnswerSet);
}

function updateAnswerInBox(game,lengthElementInSentence){
	game.world.remove(answerinBoxTxt);
	txtAnswerInBox  = '';
	for(i = 0 ; i< lengthElementInSentence ; i++){
		txtAnswerInBox += '	' + answerinBox[i]
	}

	var style = { font: "bold 30px Revalia", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    answerinBoxTxt = game.add.text(0, 0, txtAnswerInBox, style);
    answerinBoxTxt.setTextBounds(0, 180, 1000, 100);

	// answerinBoxTxt = game.add.text(txtAnswerInBox, { fontSize: '30px', fill: 'white' ,font:'Revalia' ,boundsAlignH: "center", boundsAlignV: "middle" });	
}


function nextImg(i){
	i.kill();
	countSet++;
	imgSuggest = this.game.add.sprite(this.game.world.centerX-80,20,unitClick);
	    imgSuggest.frameName = countSet.toString();
	    imgSuggest.inputEnabled = true;
	    imgSuggest.input.pixelPerfectClick = true;
	    imgSuggest.events.onInputDown.add(nextImg,{game:this.game});

}