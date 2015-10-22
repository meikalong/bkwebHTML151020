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
		"app": ["./backstage/module/user/userApp"],
		//controller
		"userCtrl": ["./backstage/module/user/controller/UserCtrl"],
		//common-service
		"crudService": ["./backstage/common/CrudService"]
	}
});

require(["jquery", 'angular', 'ui-router', "app", "userCtrl"], function($, angular, a) {
	// console.log(a);
	$(function() {
		angular.bootstrap(document, ["userApp"]);
	})

})