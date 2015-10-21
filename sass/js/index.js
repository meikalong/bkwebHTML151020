$(window).scroll(function(i) { //鼠标滚动一段距离后，导航栏固定显示
	if ($(this).scrollTop() >= 200) {
		$("#guid").removeClass("hide");
		$("#guid").addClass("navbar navbar-default navbar-fixed-top");
	} else {
		$("#guid").addClass("hide");
		$("#guid").removeClass("navbar navbar-default navbar-fixed-top");
	}
});

$(function() {
	//模态弹出框
	$("#modal_clode").click(function() {
		$("#modal_content").slideUp(800, function() {
			$("#modal").removeClass("show");
		});
	});
	$("#modal_show").click(function() {
		$("#modal_content").slideDown(700);
		$("#modal").addClass("show");
	});
	//下拉菜单
	$("#dropdown_menu_con").click(function() {
		if ($("#dropdown_con").hasClass("$ing")) {
			return;
		}
		$("#dropdown_con").addClass("$ing");
		$("#dropdown_con").slideToggle(function() {
			$("#dropdown_con").removeClass("$ing");
		});
	});
})