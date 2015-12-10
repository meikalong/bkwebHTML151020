$(function() {
	//用户信息下拉框部分
	var user_msg_dropmenu;

	$("#user-msg").hover(function() {
		clearTimeout(user_msg_dropmenu);
		$("#user-msg>.img").css("background-image", 'url("../../img/portlet-expand-icon.png")');
		$("#user-msg").css("background-color", '#414D5C');
		$("#user-msg-dropmenu").show();
	}, function() {
		clearTimeout(user_msg_dropmenu);

		user_msg_dropmenu = setTimeout(function() {
			$("#user-msg>.img").css("background-image", 'url("../../img/portlet-collapse-icon.png")');
			$("#user-msg").css("background-color", '');
			$("#user-msg-dropmenu").hide();
		}, 500);
	});

	$("#user-msg-dropmenu").hover(function() {
		clearTimeout(user_msg_dropmenu);
	}, function() {
		clearTimeout(user_msg_dropmenu);

		user_msg_dropmenu = setTimeout(function() {
			$("#user-msg>.img").css("background-image", 'url("../../img/portlet-collapse-icon.png")');
			$("#user-msg").css("background-color", '');
			$("#user-msg-dropmenu").hide();
		}, 500);
	});
});

$(function() {
	//创建树的特效
	$("#content-left-menu").bkCreateTree();


	// 页签的高度
	var tabTitleHeight = 33;

	$.fn.initJerichoTab({
		renderTo: '#content-right',
		uniqueId: 'myJerichoTab',
		contentCss: {
			'height': $('#content-right').height() - tabTitleHeight
		}
	});
	$("#mainFrame").hide();

	$('a[class^=func]').click(function() {
		$.fn.jerichoTab.addTab({
			tabFirer: $(this),
			title: $(this).find("span[class^=msg]").text(),
			closeable: true,
			iconImg: $(this).attr('iconImg'),
			data: {
				dataType: $(this).attr('dataType'),
				dataLink: $(this).attr('dataLink')
			}
		}).showLoader().loadData();
	});
});


(function(){
	var leftWidth = 160; // 左侧窗口大小
		var tabTitleHeight = 33; // 页签的高度
		var htmlObj = $("html"), mainObj = $("#content");
		var headerObj = $("#header"), footerObj = $("#footer");
		var frameObj = $("#content-right, #content-right iframe");
		function wSize(){
			var minHeight = 500, minWidth = 980;
			var strs = getWindowSize().toString().split(",");
			htmlObj.css({"overflow-x":strs[1] < minWidth ? "auto" : "hidden", "overflow-y":strs[0] < minHeight ? "auto" : "hidden"});
			mainObj.css("width",strs[1] < minWidth ? minWidth - 10 : "auto");
			frameObj.height((strs[0] < minHeight ? minHeight : strs[0]) - headerObj.height() - footerObj.height() - (strs[1] < minWidth ? 42 : 28));
			$("#openClose").height($("#openClose").height() - 5);// <c:if test="${cookie.tabmode.value eq '1'}"> 
			$(".jericho_tab iframe").height($("#content-right").height() - tabTitleHeight); // </c:if>
		}
		var getWindowSize = function(){
			return ["Height","Width"].map(function(name){
			  return window["inner"+name] ||
				document.compatMode === "CSS1Compat" && document.documentElement[ "client" + name ] || document.body[ "client" + name ];
			});
		};
		$(window).resize(function(){
			wSize();
		});
		wSize();
})()