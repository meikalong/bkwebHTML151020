var angularApp = angular.module("angularApp", []);

angularApp.run(function($rootScope) {
	$rootScope.message = "message";
});

angularApp.controller("myController", function ($scope) {
         $scope.message = "Hello, Angular JS.";
     });
angularApp.controller("myController2", function ($scope) {
         $scope.message = "Hello, Angular JS2.";
     });
angularApp.controller("FirstClickController", function ($scope) {
		$scope.counter = 0;
		$scope.add = function(amount) {$scope.counter += amount; };
		$scope.subtract = function(amount) { $scope.counter -= amount; };
     });
angularApp.controller("PersonController", function ($scope) {
		$scope.person = {
			name: 'Ari Lerner',
			sex: 'man',
			age: '20'
		};
     });
angularApp.controller("ParentController", function ($scope) {
		$scope.person = {greeted: false};
     });
angularApp.controller("ChildController", function ($scope) {
		$scope.sayHello = function() {
			$scope.person.name = 'Ari Lerner';
		};
     });
angularApp.controller("myExpr",function($scope,$parse) {
	$scope.$watch('expr', function(newVal, oldVal, scope) {
		if (newVal != oldVal) {
			// 用该表达式设置parseFun
			var parseFun = $parse(newVal);
			// 获取经过解析后表达式的值
			$scope.parseValue = parseFun(scope);
		}
	});
});
angularApp.controller('email', function($scope, $interpolate) {
	// 设置监听
	$scope.$watch('emailBody', function(body) {
		if (body) {
			var template = $interpolate(body);
			alert(template);
			$scope.previewText = template({to: $scope.to});
		}
	});
});

angularApp.controller('MyCtrl', ['$scope', function($scope){
      $scope.pureWater="纯净水";
  }]);
angularApp.directive("drink", function() {
      return {
          restrict:'AE',
          scope:{
              water:'@'
         },
        template:"<div>{{water}}</div>"  
		}
 });
 
angularApp.controller('panduan', ['$scope', function($scope){
     $scope.persons=[
		 {"sex":"1"},{"sex":"2"}
	 ];
}]);

angularApp.controller('form', ['$scope', function($scope){
    $scope.getUsername=function(){
		alert($scope.userNum);
	};
}]);

angularApp.controller('selectController', ['$scope', function($scope){
    $scope.persons=[{"id":"L1","name":"张三"},{"id":"L2","name":"李四"},{"id":"L3","name":"王二"}];
	$scope.show=function(){
		alert($scope.yourSelected);
	}
}]);

angularApp.controller('colorController', ['$scope', function($scope){
    $scope.myColor={cursor: "pointer",color:"blue"};
}]);



 
//////////////////////////////////////
angularApp.controller("MyControllerClock", function ($scope) {
         var updateClock = function() {
			$scope.clock = new Date();
			};
		setInterval(function() {
			$scope.$apply(updateClock);
		}, 1000);
		updateClock();
     });
////////////////////////////////////////////
//alert("adsadasd");