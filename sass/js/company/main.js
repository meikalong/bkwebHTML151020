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
		"responsive_nav": ["./common/responsive-nav"]
	},
	shim: {
		'pageSwitch': {
			deps: ["jquery"],
			exports: 'pageSwitch'
		}
	}
});

require(["jquery", 'angular', 'ui-router', "app", "routes", "responsive_nav"], function($, angular, a) {
	$(function() {
		$(".nav_menu").load("./common/index_top.html",function(){
			var navigation = responsiveNav(".nav-collapse");
		});
		angular.bootstrap(document, ["app"]);
	})

})