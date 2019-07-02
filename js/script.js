$(document).ready(function() {
	$(".dropdown").mouseenter(function() {
		var menu = $(this).children()[1];
		$(menu).css("display", "block");
		setTimeout(function() {
			$(menu).css({
				opacity: "1",
				transform: "scale(1)"
			});
		}, 10);
	});
	$(".dropdown").mouseleave(function() {
		var menu = $(this).children()[1];
		$(menu).css({
			opacity: "0",
			transform: "scale(0.8)"
		});
		setTimeout(function() {
			$(menu).css("display", "none");
		}, 500);
	});
	$(".ftoggle").mouseenter(function() {
		var src = $(this).data("feature");
		$("#fimage").attr("src", "images/" + src + ".svg");
		$("#fimage").animate({
			opacity: "1"
		}, 500);

	});
	$(".ftoggle").mouseleave(function() {
		$("#fimage").css("opacity", "0");
		$("#fimage").attr("src", "");
	});
	$(".dcontainer").mouseenter(function() {
		var name = $(this).find(".dname");
		$(name).css({
			color: "#ff8f00",
			textDecoration: "underline"
		});
	});
	$(".dcontainer").mouseleave(function() {
		var name = $(this).find(".dname");
		$(name).css({
			color: "#484848",
			textDecoration: "none"
		});
	});
	$(".circ").mouseenter(function() {
		var tar = $(this).data("repo");
		$("." + tar).css({
			boxShadow: "0px 0px 10px -2px grey"
		});
		$(this).css({
			transform: "scale(1.05)"
		});
	});
	$(".circ").mouseleave(function() {
		var tar = $(this).data("repo");
		$("." + tar).css({
			boxShadow: "none"
		});
		$(this).css({
			transform: "scale(1)"
		});
	});
	$(".reposCon").mouseenter(function() {
		var tar = $(this).data("circle");
		$("." + tar).css({
			transform: "scale(1.05)"
		});
	});
	$(".reposCon").mouseleave(function() {
		var tar = $(this).data("circle");
		$("." + tar).css({
			transform: "scale(1)"
		});
	});
});