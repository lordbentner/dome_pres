function anim_bulle(bulle,top,left,right)
{
	var $bulle = $(bulle);
	var gtop = top-100;
	var gleft = left-100;
	$bulle
		.on('click', function(e) {
			if($bulle.css('height') != "200px")
			{
				$bulle.animate({'z-index' : '2' , 'border-radius' : '50%','margin-top' : top+"px", 'right' : right, 'left' : left+"px", 'width' : "200px", 'height' : "200px"},200);
				//$bulle.css('z-index','27');
			}
			else
			{
				//$bulle.animate({'margin-top' : gtop+"px", 'margin-left' : gleft+"px",'width' : "100%", 'height' : "100%"},200);
				$bulle.animate({'z-index' : '27' , 'border-radius' : '0%','margin-top' : "0px", 'right' : right, 'left' : "10%",'width' : "100%", 'height' : "100%"},200);
			}
		})
}

function contenu_bulle(bulle){
	$(bulle)
			.on('click',function(e){
				if($('#bulle_mini',bulle).css('visibility') == "visible")	
				{		
				setTimeout(function() { $('#bulle_mini',bulle).css('visibility','hidden') },400);
				setTimeout(function() { $('#bulle_maxi',bulle).css('visibility','visible') },400);
				}
				else{							
				setTimeout(function() { $('#bulle_mini',bulle).css('visibility','visible') },200);
				setTimeout(function() { $('#bulle_maxi',bulle).css('visibility','hidden') },200);
				}

			})
}

(function($){

	var $comment = $('#comment');
	var $appareil = $('#appareil');

				$comment
		.on('click', function(e) {
			if($comment.css('height') != "200px")
			{
				$comment.animate({'z-index' : '2' , 'left' : '10%', 'border-radius' : '50%', 'width' : "200px", 'height' : "200px"},200);
				//$bulle.css('z-index','27');
			}
			else
			{
				//$bulle.animate({'margin-top' : gtop+"px", 'margin-left' : gleft+"px",'width' : "100%", 'height' : "100%"},200);
				$comment.animate({'z-index' : '27' , 'left' : '0%' , 'border-radius' : '0%', 'width' : "100%", 'height' : "100%"},200);
			}
		})

		$appareil
		.on('click', function(e) {
			if($appareil.css('height') != "200px")
			{
				$appareil.animate({'z-index' : '2' , 'right' : '10%', 'border-radius' : '50%', 'width' : "200px", 'height' : "200px"},200);
				//$bulle.css('z-index','27');
			}
			else
			{
				//$bulle.animate({'margin-top' : gtop+"px", 'margin-left' : gleft+"px",'width' : "100%", 'height' : "100%"},200);
				$appareil.animate({'z-index' : '27' , 'right' : '0%', 'border-radius' : '0%', 'width' : "100%", 'height' : "100%"},200);
			}
		})

		contenu_bulle("#comment");
		contenu_bulle("#appareil");


})(Zepto);