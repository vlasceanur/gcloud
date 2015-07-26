(function(){
	angular.module('nav.controllers', ['ui.router'])
	.controller('NavController', ['$scope', '$state', function($scope, $state){
		var homeButton = {title: 'Home', state: 'index'};
		var buttons = [{title: 'Articles', state: 'articles'},{title: 'Usefull links', state:'links'}];

		$scope.homeBtn = homeButton;
		$scope.otherBtns = buttons;

		$scope.goToState = function(state){
			console.log(state);
			$state.go(state);
		}
	}]);
})();