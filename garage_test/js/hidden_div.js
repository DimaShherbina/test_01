$(document).ready(function(){
    $(".hider").click(function(){
        if ($(".hidden").is(":hidden")) {
        	$(".hidden").fadeIn("slow");
        } else {
        	  $(".hidden").fadeOut("fast");
        }
        return false;
    });
});

