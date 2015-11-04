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
		"app": ["./company/app"],
		//route
		"routes": ["./company/routes/routes"],
		//全屏切换控件
		// "pageSwitch": ["./common/pageswitch"],
		//响应式导航
		"responsive_nav": ["./common/responsive-nav"],
		// 方向悬停特效
		"hoverdir": ["./common/jquery.hoverdir"],
		//全屏图片查看
		"chocolat": ["./common/jquery.chocolat"]
	},
	shim: {
		'hoverdir': {
			deps: ["jquery"],
			exports: 'hoverdir'
		},
		'chocolat': {
			deps: ["jquery"],
			exports: 'chocolat'
		}
	}
});

require(["jquery", 'angular', 'ui-router', "app", "routes",
	"responsive_nav", "hoverdir", "chocolat"
], function($, angular, a) {
	$(function() {
		// 启动angularjs
		angular.bootstrap(document, ["app"]);
		//导入公共导航栏
		$(".nav_menu").load("./common/index_top.html", function() {
			//创建响应式菜单
			responsiveNav(".nav-collapse", {
				label: '<span class="icon-menu font-ico"></span>'
			});
		});
		// 创建方向悬停特效
		$('#da-thumbs li').hoverdir();
		// 创建图片全屏查看
		$('#da-thumbs a').Chocolat({
			leftImg:"../../img/chocolat/left.png",
			rightImg:"../../img/chocolat/right.png",
			closeImg:"../../img/chocolat/close.png",
			loadingImg:"../../img/chocolat/loading.gif",
		});
	})

})