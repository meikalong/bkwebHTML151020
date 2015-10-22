require.config({
	baseUrl: "../../js",
	paths: {
		"jquery": ["./jquery_1.7.2"],
		"angular": ["./angular"],
		"angular-route": ["./angular-route"]
			// "angular-sanitize": ["./angular-sanitize"]
	},
	//这个配置是你在引入依赖的时候的包名
	shim: {
		"angular": {
			exports: "angular"
		},
		'angular-route': {
			deps: ["angular"],
			exports: 'angular-route'
		}
	},
	//禁止缓存
	"urlArgs": "bust=" + (new Date()).getTime()
});

require.config({
	paths: {
		"app": ["./backstage/module/user/userApp"],
		"userCtrl": ["./backstage/module/user/controller/UserCtrl"],
		//service
		"crudService":["./backstage/common/CrudService"]
	}
});

require(["jquery", 'angular', 'angular-route', "app", "userCtrl"], function($, angular) {
	$(function() {
		angular.bootstrap(document, ["userApp"]);
	})

})