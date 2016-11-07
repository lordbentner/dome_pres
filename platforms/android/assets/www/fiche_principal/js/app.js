function page_drag(page1,page2) {

$page = $("#video");

if(e.gesture.deltaX > (document.body.clientWidth/2)){
				return false;
			}
			if(e.gesture.direction == "left"){
				$page.animate({translateX: e.gesture.deltaX + "px"},0);
			}
			if(e.gesture.direction == "right"){
				$page.animate({translateX: (550 + e.gesture.deltaX) + "px"},0);
			}

}

(function($){

	var $video = $('#video');
	var $pres = $('#presentation');
	var $inscrit = $('#inscription');
	var $deja_inscrit = $('#deja_inscrit');
	var $connexion = $('#connexion');
	var $fiche_s = $('#fiche_sante');
	var $fiche_b = $('#fiche_bienetre');
	var $dome_inter = $('#dome_interface');
	var $anti_stress = $('#anti-stress');
	var $anti_age = $('#anti-age');
	var $detox = $('#detox');
	var $digestion = $('#digestion');
	var $douleur = $('#douleur');
	var $fatigue = $('#fatigue');
	var $minceur = $('#minceur');
	var $peau = $('#peau');
	var $relaxation = $('#relaxation');
	var $sommeil = $('#sommeil');
	var $stress = $('#stress');
	var $comment = $('#comment');
	var $appareil = $('#appareil');
	var maVideo = document.getElementById('video_dome');
	$video.hammer()
		.on('swipeleft',function(e) {
			$video.animate({translateX: "-100%"},200);
			video_dome.pause();
		})
	/*	.on('drag', function(e){
			if(e.gesture.deltaX > (document.body.clientWidth/2)){
				return false;
			}
			if(e.gesture.direction == "left"){
				$video.animate({translateX: e.gesture.deltaX + "px"},0);
			}
			if(e.gesture.direction == "right"){
				$video.animate({translateX: (550 + e.gesture.deltaX) + "px"},0);
			}
		})
		.on('dragend',function(e){
			console.log(e.gesture.deltaX);	
			if(e.gesture.direction == "left"){
				if(e.gesture.deltaX < -(document.body.clientWidth/4)){
					$video.animate({translateX: "-100%"},200);									
				}else{
					$video.animate({translateX:"0px"},200);
				}
			}
		})*/
	$pres.hammer()
		.on('swiperight',function(e) {
			$video.animate({translateX: "0px"},200);
		})
		.on('swipeleft',function(e) {
			$pres.animate({translateX: "-100%"},200);
		})

	$inscrit.hammer()
		.on('swiperight',function(e) {
			$pres.animate({translateX: "0px"},200);
		})
		.on('swipeleft',function(e) {
			$inscrit.animate({translateX: "-100%"},200);
		})
	/*	.on('click', function(e) {
			$inscrit.animate({translateX: "-100%"},200);
		})*/

/*	$('#deja_inscrit',"#inscription").hammer()
		.on('click', function(e) {
			$inscrit.animate({translateX: "-100%"},200);
			alert("klkklgggt");
		})*/
	$fiche_s.hammer()
		.on('swiperight',function(e) {
			$inscrit.animate({translateX: "0px"},200);			
		})
		.on('swipeleft',function(e) {
			$anti_stress.css('z-index','2');
			$fiche_b.css('z-index','26');
			$fiche_s.animate({translateX: "-100%"},200);
		})
		.on('swipeup',function(e) {
			$anti_stress.css('z-index','26');
			$fiche_b.css('z-index','2');
			$fiche_s.animate({translateY: "-100%"},200);
		})

	$fiche_b.hammer()
		.on('swiperight',function(e) {
			$dome_inter.css('z-index','1');

			$fiche_s.animate({translateX: "0px"},200);
		})
		.on('swipeleft',function(e) {			
			$dome_inter.css('z-index','26');
			//$anti_age.css('z-index','1');			
			$fiche_b.animate({translateX: "-100%"},200);
		})

	$dome_inter.hammer()
		.on('swiperight',function(e) {
			//$anti-age.css('z-index','25');
			$dome_inter.css('z-index','1');			
			$fiche_b.animate({translateX:"0px"},200);
		})

	$anti_stress.hammer()
		.on('swipedown',function(e) {
			$fiche_s.animate({translateY: "0px"},200);
		})
		.on('swipeup',function(e) {
			//$anti_age.css('z-index','26');
			$anti_stress.animate({translateY: "-100%"},200);
		})
	$anti_age.hammer()
		.on('swipedown' , function(e) {
			$anti_stress.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$anti_age.animate({translateY: "-100%"},200);
		})

	$detox.hammer()
		.on('swipedown' , function(e) {
			$anti_age.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$detox.animate({translateY: "-100%"},200);
		})

	$digestion.hammer()
		.on('swipedown' , function(e) {
			$detox.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$digestion.animate({translateY: "-100%"},200);
		})

	$douleur.hammer()
		.on('swipedown' , function(e) {
			$detox.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$douleur.animate({translateY: "-100%"},200);
		})	

	$fatigue.hammer()
		.on('swipedown' , function(e) {
			$douleur.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$fatigue.animate({translateY: "-100%"},200);
		})

	$minceur.hammer()
		.on('swipedown' , function(e) {
			$fatigue.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$minceur.animate({translateY: "-100%"},200);
		})

	$peau.hammer()
		.on('swipedown' , function(e) {
			$fatigue.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$peau.animate({translateY: "-100%"},200);
		})

	$sommeil.hammer()
		.on('swipedown' , function(e) {
			$peau.animate({translateY: "0px"},200);
		})
		.on('swipeup' , function(e) {
			$sommeil.animate({translateY: "-100%"},200);
		})

	$stress.hammer()
		.on('swipedown' , function(e) {
			$sommeil.animate({translateY: "0px"},200);
		})

	//	contenu_bulle("#comment");
		//contenu_bulle("#appareil");		

	/*	.on('drag', function(e){
			if(e.gesture.deltaX > 550){
				return false;
			}
			if(e.gesture.direction == "right" && !sidebar){
				$page.animate({translateX: e.gesture.deltaX + "px"},0);
			}
			if(e.gesture.direction == "left" && sidebar){
				$page.animate({translateX: (550 + e.gesture.deltaX) + "px"},0);
			}
		})
		.on('dragend',function(e){
			if(e.gesture.direction == 'right' && !sidebar){
				if(e.gesture.deltaX > 275){
					$page.animate({translateX: "550px"},200);
					sidebar = 1;
				}else{
					$page.animate({translateX:"0px"},200);
				}
			}
			if(e.gesture.direction == 'left' && sidebar){
				if(e.gesture.deltaX < -275){
					$page.animate({translateX: "0px"},200);
					sidebar = 0;
				}else{
					$page.animate({translateX:"550px"},200);
				}
			}
		})*/
})(Zepto);