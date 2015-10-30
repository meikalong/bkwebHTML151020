define(["app"], function(app) {
	return app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state("index", {
			url: "/index",
			templateUrl: "./indexPage/index.html"
				// controller: 'Controller'
		}).state("css", {
			url: "/css",
			views: {
				"": {
					templateUrl: "./cssPage/index.html"
				},
				"jsPage@css": {
					templateUrl: "./jsPage/index.html"
				}
			}
		}).state("css.aboutMenu", {
			url: "/about",
			views: {
				"page": {
					templateUrl: "./aboutPage/index.html"
						// controller: function($scope) {
						// 	$scope.things = ["A", "Set", "Of", "Things"];
						// }
				}
			}
		}).state("css.bootstrapMenu", {
			url: "/bootstrap",
			views: {
				"page": {
					templateUrl: "./bootstrapPage/index.html"
				}
			}
		}).state("bootStrap", {
			url: "/bootStrap",
			templateUrl: "./bootStrapPage/index.html"
		}).state("js", {
			url: "/js",
			templateUrl: "./jsPage/index.html"
		}).state("productShow", {
			url: "/productShow",
			templateUrl: "./productShowPage/index.html"
		}).state("fenxi", {
			url: "/fenxi",
			templateUrl: "./fenxiPage/index.html"
		}).state("contactUs", {
			url: "/contactUs",
			templateUrl: "./contactUsPage/index.html"
		}).state("about", {
			url: "/about",
			templateUrl: "./aboutPage/index.html"
		});

	})
})