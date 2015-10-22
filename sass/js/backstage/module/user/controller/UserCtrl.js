define(["userApp"], function(userApp) {
	return userApp.controller('userCtrl', ['$scope', '$http', function($scope, $http) {
		$http.get('../../js/backstage/module/user/userList.json').
		success(function(data) {
			console.log(data);
		});
	}])
});