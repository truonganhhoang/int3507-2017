<?php

	$myAtlasJson = '{"frames": [';


	$myfile = fopen("phaser3/sentences/sentences_0.json", "r") or die("Unable to open file!");
	// echo fread($myfile,filesize("sentences/sentences_0.json"));

	$myJSON = fread($myfile,filesize("sentences/sentences_0.json"));

	$myObject = json_decode($myJSON);

	$myAtlas = $myObject->frames;

	$myArray  = $myAtlas;

	for( $i = 0 ; $i < count($myArray) ; $i++ ){

		$myArray2  = $myArray[$i];

		$myAtlasJson =  $myAtlasJson.'{';
			$myAtlasJson =  $myAtlasJson.'"filename": "'.$i.'",';
			$myAtlasJson =  $myAtlasJson.'"frame": {"x":'.$myArray2[0].',"y":'.$myArray2[1].',"w"'.$myArray2[2].',"h":'.$myArray2[3].'},';
			$myAtlasJson =  $myAtlasJson.'"rotated": false,';
			$myAtlasJson =  $myAtlasJson.'"trimmed": true,';
			$myAtlasJson =  $myAtlasJson.'"spriteSourceSize": {"x":0,"y":0,"w":213,"h":159},';
			$myAtlasJson =  $myAtlasJson.'"sourceSize": {"w":231,"h":175}';
		$myAtlasJson =  $myAtlasJson.'},';
	}


	echo $myAtlasJson;

	// //  GHI FILE NÈ
	// $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
	// $txt = "John Doe\n";
	// fwrite($myfile, $txt);
	// $txt = "Jane Doe\n";
	// fwrite($myfile, $txt);
	// fclose($myfile);



	fclose($myfile);
?>