require.config({
	baseUrl: "../../js",
	paths: {
		"jquery": ["./jquery_1.7.2"],
		"angular": ["./angular"],
		"ui-router": ["./angular-ui-router"]
	},
	//这个配置是你在引入依赖的时候的包名
	shim: {
		"angular": {
			exports: "angular"
		},
		'ui-router': {
			deps: ["angular"],
			exports: 'ui-router'
		}
	},
	//禁止缓存
	"urlArgs": "bust=" + (new Date()).getTime()
});

require.config({
	paths: {
		//app
		"app": ["./travel/app"],
		// 方向悬停特效
		"hoverdir": ["./common/jquery.hoverdir"],
		// 图片无缝轮播
		"slides": ["./common/jquery.slides"],
		// 图片延迟加载
		"imgLazyload": ["./common/jquery.imglazyload"]
	},
	shim: {
		'hoverdir': {
			deps: ["jquery"],
			exports: 'hoverdir'
		},
		'slides': {
			deps: ["jquery"],
			exports: 'slides'
		},
		'imgLazyload': {
			deps: ["jquery"],
			exports: 'imgLazyload'
		}
	}
});

require(["jquery", 'angular', 'ui-router', "app", "hoverdir", "slides", "imgLazyload"], function($, angular) {
	$(function() {
		// 启动angularjs
		// angular.bootstrap(document, ["app"]);
		//导入top
		$("#sale_top").load("./top/top.html", function() {});
		// 导入header
		$("#sale_header").load("./header/header.html", function() {});
		// 导入column
		$("#sale_column").load("./column/column.html", function() {});
		// 导入图片墙
		$("#sale_photo_wall").load("./sale_photo_wall/photo_wall.html", function() {
			// 创建图片轮播
			$('#slides').slidesjs({
				play: {
					active: true,
					auto: true,
					interval: 2000,
					swap: false
				},
				callback: {
					loaded: function() {
						$(".img_wall").each(function(i, v) {
							console.log($(v).attr("src"));
							$("ul.slidesjs-pagination li:eq(" + i + ")").find("a").css("background-image", "url(" + $(v).attr("src") + ")").text("");
						});
					}
				}
			});
		});
		$("#sale_date").load("./sale_date/date.html", function() {});
		// $("#index_content_2").load("./content/zbss.html", function() {
		// 	getList("#content_info_zbss");
		// });
		// $("#index_content_3").load("./content/cyhw.html", function() {
		// 	getList("#content_info_cyhw");
		// });
		// $("#index_content_4").load("./content/ztdj.html", function() {
		// 	getList("#content_info_ztdj");
		// });
		// $("#index_content_5").load("./content/kzxx.html", function() {
		// 	getList("#content_info_kzxx");
		// });
		// $("#index_content_6").load("./content/cxzn.html", function() {
		// 	getList("#content_info_cxzn");
		// });
		$("#sale_footer").load("./footer/footer.html");
	})

})