

$(document).ready(function() {
	$(".show_map_1").click(function() {
		$(".cl_1_1").hide();
		$(".img_1_1").show();
	});

	$(".img_1_1").click(function() {
		$(".img_1_1").hide();
		$(".cl_1_1").show();
	});

	$(".show_map_2").click(function() {
		$(".cl_1_2").hide();
		$(".img_1_2").show();
	});

	$(".img_1_2").click(function() {
		$(".img_1_2").hide();
		$(".cl_1_2").show();
	});

	$(".show_map_3").click(function() {
		$(".cl_3_1").hide();
		$(".img_3_1").show();
	});

	$(".img_3_1").click(function() {
		$(".img_3_1").hide();
		$(".cl_3_1").show();
	});

	$(".show_map_4").click(function() {
		$(".cl_3_2").hide();
		$(".img_3_2").show();
	});

	$(".img_3_2").click(function() {
		$(".img_3_2").hide();
		$(".cl_3_2").show();
	});

	$(".slider_hider").click(function() {
		$(".slider_hider").removeClass('is-active');
		$(this).parents('.slide-holder').toggleClass('is-active');
		return false;
	});
});
