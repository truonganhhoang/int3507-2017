<?php
	for($k = 0 ; $k< 24 ; $k++){
		$myAtlasJson = '{"frames": [';

		$fileNameRead = "sentences/sentences_".$k.".json";


		$myJSON = file_get_contents($fileNameRead);

		$myObject = json_decode($myJSON);


		$myAtlas = $myObject->frames;

		$myArray  = $myAtlas;

		for( $i = 0 ; $i < count($myArray) ; $i++ ){

			$myArray2  = $myArray[$i];

			$myAtlasJson =  $myAtlasJson.'{';
				$myAtlasJson =  $myAtlasJson.'"filename": "'.$i.'",';
				$myAtlasJson =  $myAtlasJson.'"frame": {"x":'.$myArray2[0].',"y":'.$myArray2[1].',"w":'.$myArray2[2].',"h":'.$myArray2[3].'},';
				$myAtlasJson =  $myAtlasJson.'"rotated": false,';
				$myAtlasJson =  $myAtlasJson.'"trimmed": true,';
				$myAtlasJson =  $myAtlasJson.'"spriteSourceSize": {"x":0,"y":0,"w":213,"h":159},';
				$myAtlasJson =  $myAtlasJson.'"sourceSize": {"w":231,"h":175}';
			$myAtlasJson =  $myAtlasJson.'},';
		}


		$myAtlasJson=rtrim($myAtlasJson,",");

		$myAtlasJson = $myAtlasJson.'],
									"meta": {
										"app": "http://www.codeandweb.com/texturepacker ",
										"version": "1.0",
										"image": "atlas_array_trim.png",
										"format": "RGBA8888",
										"size": {"w":650,"h":497},
										"scale": "1",
										"smartupdate": "$TexturePacker:SmartUpdate:b6887183d8c9d806808577d524d4a2b9:1e240ffed241fc58aca26b0e5d350d80:71eda69c52f7d9873cb6f00d13e1e2f8$"
									}
									}';

		echo $myAtlasJson;

		//  GHI FILE NÈ

		$fileNameWrite = "atlasjson/atlasjson_".$k.".json";
		$myfileW = fopen($fileNameWrite, "w") or die("Unable to open file!");
		fwrite($myfileW, $myAtlasJson);
		fclose($myfileW);



		// fclose($myfile);
	}
?>