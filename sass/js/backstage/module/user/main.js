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
		/*,
				'angular-sanitize': {
					deps: ["angular"],
					exports: 'angular-sanitize'
				},*/
	}
});

require.config({
	paths: {
		"userApp": ["./backstage/module/user/userApp"],
		"userCtrl": ["./backstage/module/user/controller/UserCtrl"]
	}
});

require(["jquery", 'angular', 'angular-route', "userApp", "userCtrl"], function($, angular) {
	$(function() {
		angular.bootstrap(document, ["userApp"]);
	})

})