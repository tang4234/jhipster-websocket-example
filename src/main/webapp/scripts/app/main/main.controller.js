'use strict';

angular.module('jhipsterwebsocketApp')
    .controller('MainController', function ($scope, Principal, WebSocket) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

		$scope.messages = [];
		WebSocket.receive().then(null, null, function(message) {
			$scope.messages.push(message);
			if($scope.messages.length > 10) {
				$scope.messages.splice(0, $scope.messages.length - 10);
			}
		});
    });
