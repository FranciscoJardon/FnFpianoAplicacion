titulo= "Un agradable encuentro ";

// Español // Matemáticas 
  
materia= "Matemáticas";  

grado = 1; // 
bloque= 3; // el que corresponda según el bloque al que pertenezca el recurso

// texto de introducción
intro= 'Maya, Leo, Sofi y Nico han encontrado un perro, quieren adoptarlo pero no tienen mucha idea de los cuidados que requiere. Ayúdales a investigar cómo hacerlo.   ';
instrucciones = 'Arrastra el perrito con el cursor y lee la información. Al terminar pasa a la siguiente pantalla.';


//////////////////////////////////////////////////////

$(window).load(function(){ 
	$( "#Area_splash" ).fadeIn( 3500, function() {
	$( "#txt_InstIndex" ).fadeIn( 100 );	
	});
})

$(document).ready(function () {
	
	$('#Encabezado').html(titulo);
	$('#txt_Inst').html(instrucciones);
	$('#txt_InstIndex').css("display","none");
	$('#txt_InstIndex').html(intro);	
	$('title').html(materia);
	
	$( "#seccion2" ).hide();
	//$( "#seccion1" ).hide();
	
	$(".area_video").append('<video id="videoInterac"><source src="video/video.mp4" type="video/mp4"/></video></div><div id="botonera"><div id="controles"><a href="index.html"><div id="homeBtn" style="left:-100px;"></div></a><div id="btnPause"></div><div id="btnPlay"></div><div id="btnStop"></div><div id="btnVolumeLow"></div><div id="btnVolumeLoud"></div><div id="barra"></div></div></div>');

}) //cierra function




