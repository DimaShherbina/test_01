$(document).ready(function(){
    $(".hider_but").click(function(){
        if ($(".hidden").is(":hidden")) {
        	$(".hidden").fadeIn("slow");
        	$(".hider").show();
        	$(".shower").hide();
        } else {
        	  $(".hidden").fadeOut("fast");
        	  $(".hider").hide();
        	  $(".shower").show();
        }
        return false;
    });
});
