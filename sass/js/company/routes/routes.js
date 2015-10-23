define(["app"], function(app) {
	
	return app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider
			.state("index", {
				url: "/index",
				views: {
					'': {
						templateUrl: '../indexPage/index.html'
					}/*,
					'topbar@index': {
						templateUrl: 'tpls3/topbar.html'
					},
					'main@index': {
						templateUrl: 'tpls3/home.html'
					}*/
				}
				// templateUrl: "../indexPage/index.html"
			})

	})
})