/*	$(document).ready(function() {
	$(".col1_it_1").click(function() {
		$(".col_1_it_1").hide();
		$(".img_1_1").show();
	});
});

$(document).ready(function() {
	$(".col_item").click(function() {
		$(".col_item").hide();
		$(".col_item_info").show();
	});
});

*/

$(document).ready(function() {
	$(".show_map_1").click(function() {
		$(".cl_1_1").hide();
		$(".img_1_1").show();
	});
});

$(document).ready(function() {
	$(".img_1_1").click(function() {
		$(".img_1_1").hide();
		$(".cl_1_1").show();
	});
});

$(document).ready(function() {
	$(".show_map_2").click(function() {
		$(".cl_1_2").hide();
		$(".img_1_2").show();
	});
});

$(document).ready(function() {
	$(".img_1_2").click(function() {
		$(".img_1_2").hide();
		$(".cl_1_2").show();
	});
});

$(document).ready(function() {
	$(".show_map_3").click(function() {
		$(".cl_3_1").hide();
		$(".img_3_1").show();
	});
});

$(document).ready(function() {
	$(".img_3_1").click(function() {
		$(".img_3_1").hide();
		$(".cl_3_1").show();
	});
});

$(document).ready(function() {
	$(".show_map_4").click(function() {
		$(".cl_3_2").hide();
		$(".img_3_2").show();
	});
});

$(document).ready(function() {
	$(".img_3_2").click(function() {
		$(".img_3_2").hide();
		$(".cl_3_2").show();
	});
});

$(document).ready(function() {
	$(".slide_but_1").click(function() {
		if ($(".slide_cont_1").is(":hidden")) {
			$(".slide_cont_1").fadeIn("slow");
			$(".shadow_1").fadeIn("slow");
			$(".slider_item1_shower").hide();
			$(".slider_item1_hider").show();
		} else {
				$(".slide_cont_1").fadeOut("fast");
				$(".shadow_1").fadeOut("fast");
				$(".slider_item1_hider").hide();
				$(".slider_item1_shower").show();
		}
		return false;
	});
});

$(document).ready(function() {
	$(".slide_but_2").click(function() {
		if ($(".slide_cont_2").is(":hidden")) {
			$(".slide_cont_2").fadeIn("slow");
			$(".shadow_2").fadeIn("slow");
			$(".slider_item2_shower").hide();
			$(".slider_item2_hider").show();
		} else {
				$(".slide_cont_2").fadeOut("fast");
				$(".shadow_2").fadeOut("fast");
				$(".slider_item2_hider").hide();
				$(".slider_item2_shower").show();
		}
		return false;
	});
});

$(document).ready(function() {
	$(".slide_but_3").click(function() {
		if ($(".slide_cont_3").is(":hidden")) {
			$(".slide_cont_3").fadeIn("slow");
			$(".slider_item3_shower").hide();
			$(".slider_item3_hider").show();
		} else {
				$(".slide_cont_3").fadeOut("fast");
				$(".slider_item3_hider").hide();
				$(".slider_item3_shower").show();
		}
		return false;
	});
});