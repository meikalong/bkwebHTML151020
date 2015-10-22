define(["userApp", "jquery"], function(userApp, $) {
	return userApp.controller('userCtrl', ['$scope', '$http', function($scope, $http) {
		console.log($(".table").find("tr").show());
		$scope.users = {};
		var url = '../../data/backstage/module/user/userList.json';
		$http({
			method: 'get',
			url: url,
		}).success(function(data) {
			console.log(data);
			$scope.users = data;
		});
	}])
});