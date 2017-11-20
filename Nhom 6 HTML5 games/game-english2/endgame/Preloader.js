Game.Preloader = function(game){
	this.preloadBar = null ;
}
WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    // active: function() { this.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Revalia']
    }

};

Game.Preloader.prototype = {
	preload:function(){


		this.time.advancedTiming = true;

		this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

		// LOAD ALL ASSETS
		this.load.image('background-welcome', 'assets/background-welcome.png');
		this.load.image('background-menu', 'assets/background-menu.png');
		this.load.image('background-topic', 'assets/background-topic.png');
		this.load.image('background-imgSuggest', 'assets/background-imgSuggest.png');
		this.load.image('sky', 'assets/sky.png');
	    this.load.image('ground', 'assets/platform.png');
	    this.load.image('star', 'assets/star.png',12,12);
	    this.load.image('button', 'assets/button.png');
	    this.load.image('button-topic', 'assets/button-topic.png');
	    this.load.image('button-answer', 'assets/button-answer.png');
	    this.load.image('button-back', 'assets/button-back.png');
	    this.load.image('box-answer', 'assets/box-answer.png');
	    // this.load.spritesheet('dude', 'assets/dude.png', 32, 48,9);


	    this.load.image('is-country', 'assets/is-country.png');
	    this.load.image('is-number', 'assets/is-number.png');
	    this.load.image('is-yourname', 'assets/is-yourname.png');

	    this.load.atlas('0', 'img/s_0.png', 'atlasjson/atlasjson_0.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('1', 'img/s_1.png', 'atlasjson/atlasjson_1.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('2', 'img/s_2.png', 'atlasjson/atlasjson_2.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('3', 'img/s_3.png', 'atlasjson/atlasjson_3.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('4', 'img/s_4.png', 'atlasjson/atlasjson_4.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('5', 'img/s_5.png', 'atlasjson/atlasjson_5.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('6', 'img/s_6.png', 'atlasjson/atlasjson_6.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('7', 'img/s_7.png', 'atlasjson/atlasjson_7.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('8', 'img/s_8.png', 'atlasjson/atlasjson_8.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('9', 'img/s_9.png', 'atlasjson/atlasjson_9.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('10', 'img/s_10.png', 'atlasjson/atlasjson_10.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('11', 'img/s_11.png', 'atlasjson/atlasjson_11.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('12', 'img/s_12.png', 'atlasjson/atlasjson_12.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('13', 'img/s_13.png', 'atlasjson/atlasjson_13.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('14', 'img/s_14.png', 'atlasjson/atlasjson_14.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('15', 'img/s_15.png', 'atlasjson/atlasjson_15.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('16', 'img/s_16.png', 'atlasjson/atlasjson_16.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('17', 'img/s_17.png', 'atlasjson/atlasjson_17.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('18', 'img/s_18.png', 'atlasjson/atlasjson_18.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('19', 'img/s_19.png', 'atlasjson/atlasjson_19.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('20', 'img/s_20.png', 'atlasjson/atlasjson_20.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('21', 'img/s_21.png', 'atlasjson/atlasjson_21.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('22', 'img/s_22.png', 'atlasjson/atlasjson_22.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	    this.load.atlas('23', 'img/s_23.png', 'atlasjson/atlasjson_23.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

	     this.load.image('t0', 'assets/unit/0.png');
	     this.load.image('t1', 'assets/unit/1.png');
	     this.load.image('t2', 'assets/unit/2.png');
	     this.load.image('t3', 'assets/unit/3.png');
	     this.load.image('t4', 'assets/unit/4.png');
	     this.load.image('t5', 'assets/unit/5.png');
	     this.load.image('t6', 'assets/unit/6.png');
	     this.load.image('t7', 'assets/unit/7.png');
	     this.load.image('t8', 'assets/unit/8.png');
	     this.load.image('t9', 'assets/unit/9.png');
	     this.load.image('t10', 'assets/unit/10.png');
	     this.load.image('t11', 'assets/unit/11.png');
	     this.load.image('t12', 'assets/unit/12.png');
	     this.load.image('t13', 'assets/unit/13.png');
	     this.load.image('t14', 'assets/unit/14.png');
	     this.load.image('t15', 'assets/unit/15.png');
	     this.load.image('t16', 'assets/unit/16.png');
	     this.load.image('t17', 'assets/unit/17.png');
	     this.load.image('t18', 'assets/unit/18.png');
	     this.load.image('t19', 'assets/unit/19.png');
	     this.load.image('t20', 'assets/unit/20.png');
	     this.load.image('t21', 'assets/unit/21.png');
	     this.load.image('t22', 'assets/unit/22.png');
	     this.load.image('t23', 'assets/unit/23.png');


	},

	create:function(){
		this.state.start('Welcome');

	}
}
