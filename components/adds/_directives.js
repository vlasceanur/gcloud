(function(){
	angular.module('adds.directives', [])
	.directive('addContainer', function(){
		return{
			restrict: 'E',
			replace: true,
			template: '<div class="add-container"></div>'
		}
	})
})();