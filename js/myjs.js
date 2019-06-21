


/*
$(document).ready(function()
{
	$("#loading div").fadeOut(4000,function(){
		
		$(this).parent().fadeOut(1000,function(){
			
			$("body").css("overflow","auto");
			$("this").remove();
			
			});
		
		
		});
    
});
*/
$(document).ready(function() {
    $(".box_skitter_large").skitter(
	);
});

$(document).ready(function() {
  

  
  var profile_offset=$("#profile").offset().top;

  	
	$(window).scroll( function(){
		
		var pos =$(window).scrollTop();
		
		if(pos>=profile_offset)
		{
			
			$(".navbar-default").css("background-color","rgba(42,87,105,0.7)");
		}
		else
		{
			
			$(".navbar-default").css("background-color","transparent");
		}
		
		
	});
 
  
});



/*
$(document).ready(
function()
{
	
	
	$("#loading div").fadeOut(5000 , function()
		{
			
		$(this).parent().fadeOut(1000, function()
		{
							
			$("body").css("overflow","auto");	
			$(this).remove();
		});
		
	});
	

});
*/



$(document).ready(function() {
  

  
  var profile_offset=$("#numbers").offset().top;

  	
	$(window).scroll( function(){
		
		var pos =$(window).scrollTop();
		
		if(pos>=profile_offset)
		{
			
			$(function(){
	
	$(".counter").countTo(
		{
			from :0,
			to : 500,
			speed:3000	
		}
	);
});
			
			
		}
		
	});
 
  
});










 $(document).ready(function() {  
        $("html").niceScroll(
		{
			 cursorcolor: "#2A5769",
			
		}
		
		
		);
    });