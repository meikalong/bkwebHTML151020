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
		"slides": ["./common/jquery.slides"]
	},
	shim: {
		'hoverdir': {
			deps: ["jquery"],
			exports: 'hoverdir'
		},
		'slides': {
			deps: ["jquery"],
			exports: 'slides'
		}
	}
});

require(["jquery", 'angular', 'ui-router', "app", "hoverdir", "slides"], function($, angular) {
	$(function() {
		// 启动angularjs
		// angular.bootstrap(document, ["app"]);
		//导入top
		$("#index_top").load("./top/top.html", function() {});
		// 导入header
		$("#index_header").load("./header/header.html", function() {});
		// 导入column
		$("#index_column").load("./column/column.html", function() {});
		// 导入图片墙
		$("#index_photo_wall").load("./photo_wall/photo_wall.html", function() {
			// 创建图片轮播
			$('#slides').slidesjs({
				play: {
					active: true,
					auto: true,
					interval: 2000,
					swap: false
				}
			});
		});
		// 加载列表页面
		var getList = function(target) {
			$(target).load("./common/list.html", function() {
				// 创建方向悬停特效
				$('.da-thumbs li').hoverdir();
			});
		}
		$("#index_content_1").load("./content/xsyh.html", function() {
			getList("#content_info_xsyh");
		});
		$("#index_content_2").load("./content/zbss.html", function() {
			getList("#content_info_zbss");
		});
		$("#index_content_3").load("./content/cyhw.html", function() {
			getList("#content_info_cyhw");
		});
		$("#index_content_4").load("./content/ztdj.html", function() {
			getList("#content_info_ztdj");
		});
		$("#index_content_5").load("./content/kzxx.html", function() {
			getList("#content_info_kzxx");
		});
		$("#index_content_6").load("./content/cxzn.html", function() {
			getList("#content_info_cxzn");
		});
	})

})