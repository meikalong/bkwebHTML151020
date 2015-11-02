define(["app"], function(app) {
	return app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state("index", {
			url: "/index",
			templateUrl: "./ui/indexPageIndex.html"
				// controller: 'Controller'
		}).state("css", {
			url: "/css",
			views: {
				"": {
					templateUrl: "./ui/cssPageIndex.html"
				},
				"jsPage@css": {
					templateUrl: "./ui/jsPageIndex.html"
				}
			}
		}).state("css.aboutMenu", {
			url: "/about",
			views: {
				"page": {
					templateUrl: "./ui/aboutPageIndex.html"
						// controller: function($scope) {
						// 	$scope.things = ["A", "Set", "Of", "Things"];
						// }
				}
			}
		}).state("css.bootstrapMenu", {
			url: "/bootstrap",
			views: {
				"page": {
					templateUrl: "./ui/bootstrapPageIndex.html"
				}
			}
		}).state("bootStrap", {
			url: "/bootStrap",
			templateUrl: "./ui/bootStrapPageIndex.html"
		}).state("js", {
			url: "/js",
			templateUrl: "./ui/jsPageIndex.html"
		}).state("productShow", {
			url: "/productShow",
			templateUrl: "./ui/productShowPageIndex.html"
		}).state("fenxi", {
			url: "/fenxi",
			templateUrl: "./ui/fenxiPageIndex.html"
		}).state("contactUs", {
			url: "/contactUs",
			templateUrl: "./ui/contactUsPageIndex.html"
		}).state("about", {
			url: "/about",
			templateUrl: "./ui/aboutPageIndex.html"
		});

	})
})