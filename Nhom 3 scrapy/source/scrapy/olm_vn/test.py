# -*- coding: utf8 -*-
import js2py

id = 541
x = """
function drawSqu(div, opac){
    var mau1 = '#99FF99'; var mau2 = '#FFFFFF';
	var mau = mau1;
	var dr = "<table border='1' bordercolor='#3399FF' cellpadding='0' cellspacing='0' style='opacity:"+ opac+"'>";
	for(var i=0;i<10;i++){
		mau=(mau==mau1)?mau2:mau1;
		dr += "<tr height='20px' bgcolor='"+mau+"'  cellpadding='0' cellspacing='0'>";
		for(var j=0;j<10;j++){
			dr += "<td width='20px'  cellpadding='0' cellspacing='0'>&nbsp;</td>";
		}
		dr += "</tr>";
	}
	dr += "</table>";
	div.innerHTML = dr;
}
function drawchuc(div){
    var mau1 = '#99FF99'; var mau2 = '#FFFFFF';
	var mau = mau1;
	var dr = "<table border='1' bordercolor='#3399FF' cellpadding='0' cellspacing='0'>";
	for(var i=0;i<10;i++){
		mau=(mau==mau1)?mau2:mau1;
		dr += "<tr height='20px' bgcolor='"+mau+"'>";
		dr += "<td width='20px'>&nbsp;</td>";
		dr += "</tr>";
	}
	dr += "</table>";
	div.innerHTML = dr;
}
function drawdv(div,dv){
    var mau1 = '#99FF99'; var mau2 = '#FFFFFF';
	var mau = mau1;
	var dr = "<table border='1' bordercolor='#3399FF' cellpadding='0' cellspacing='0'>";
	for(var i=0;i<dv;i++){
		mau=(mau==mau1)?mau2:mau1;
		dr += "<tr height='20px' bgcolor='"+mau+"'>";
		dr += "<td width='20px'>&nbsp;</td>";
		dr += "</tr>";
	}
	dr += "</table>";
	div.innerHTML = dr;
}

function makeQuestion(params,div){
	var disabled = true;
	if(!params){
		// nếu không có đối tượng params / render a random question
		
		params = new Object();
		params.tram = Cf.rN(1,9);
		params.chuc = Cf.rN(1,9);
		params.dv = Cf.rN(0,9);
	}	
  CFrame.saveQparams(params);

	var div_el = document.getElementById(div);
	div_el.innerHTML = "";
	div_el.innerHTML += "<h2>Có bao nhiêu ô vuông trong hình sau?</h2>";
	if (document.all) {   // very basic browser detection
	  var sFloat="styleFloat"; //ie
	} else {
	  var sFloat="cssFloat"; //firefox
	}
	var div0 = document.createElement('div');
  	var width=(250+10*params.tram) + "px";
	div0.style.position = "relative";
	div0.style.minWidth = width;
	div0.style[sFloat]="left";
	div_el.appendChild(div0);	
  	var opacit=0.5 + (1-0.05)/params.tram;
	drawSqu(div0,opacit);
	var pxTop = 10; var pxLeft = 10;
	for(var i = 2;i<=params.tram;i++){
		var divi = document.createElement('div');
		divi.style.position = "absolute";
		divi.style.top = pxTop+"px";
		divi.style.left = pxLeft+"px";
			div0.appendChild(divi);
      	opacit=0.5 + ((1-0.05)/params.tram)*i;
		drawSqu(divi,opacit)
		pxTop += 10; pxLeft += 10;
	}
	
	for(var j=0;j<params.chuc;j++){
		var divcj = document.createElement('div');
		divcj.style.marginLeft = "5px";
		//divcj.style.width = "50px";
		divcj.style[sFloat]="left";
			div_el.appendChild(divcj);
			
		drawchuc(divcj);
	}
	
	var divdv = document.createElement('div');
	divdv.style.marginLeft = "20px";
	divdv.style[sFloat]="left";
	div_el.appendChild(divdv);	
	drawdv(divdv,params.dv);
	
	div_el.innerHTML +="<div style='clear:both'></div>";
	for(var k=1;k<=params.tram;k += 2){
      		div_el.innerHTML += "<br>";
	}
	div_el.innerHTML += "<p style='font-size:20px; padding:20px;'><input type='text' id='input"+div+"' style='font-size:24px; width:60px; height:28px;'></p>";
}

function getUA(_qparams,_aparams,div){
	document.getElementById(div).innerHTML = "<h2>"+_aparams+"</h2>";
}
function check(qparams,div){
	var ans = $('#input'+div).val();
	if(ans == "") return 2
  	CFrame.saveAparams(ans);
	if(ans == (qparams.tram*100+qparams.chuc*10+qparams.dv)) return 1
    else return 0;	
}
function getContent(qparams,div){
	document.getElementById(div).innerHTML = "<h2>"+(qparams.tram*100+qparams.chuc*10+qparams.dv)+"</h2>";
}

function getExp(qparams,div){
	var elm = document.getElementById(div);
	elm.style.textAlign = "left";
  	hd="<h2>Trên hình có:</h2>";
  	hd += (qparams.tram>0?"<h2 style='padding-left:30px'>"+qparams.tram+" vỉ một trăm ô vuông</h2>":"");
  	hd += (qparams.chuc>0?"<h2 style='padding-left:30px'>"+qparams.chuc+" thanh một chục ô vuông</h2>":"");
  	hd += (qparams.dv>0?"<h2 style='padding-left:30px'>"+qparams.dv+" ô vuông lẻ</h2>":"");
	hd += "<h2>Vậy, số lượng ô vuông là:<b> "+(qparams.tram*100+qparams.chuc*10+qparams.dv)+"</b></h2>";
	elm.innerHTML=hd;
}
""".replace(".innerHTML", " ").replace("var div_el = document.getElementById(div);", "").replace(
    "CFrame.saveQparams(params);", "").replace("div_el", "$result")
x = x + """
Cf = function(){}
Cf.rN = function(x,y){
    var d = y - x;
    var res = Math.round(Math.random()*d);
    return parseInt(x + res);
}
var $result = "";
"""
x = x + "makeQuestion(false," + str(id) + ");\n"
x = x + "$result"
print x
# print js2py.eval_js(x)
