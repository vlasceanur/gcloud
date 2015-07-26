(function(){
	angular.module('articles.directives', [])
	.directive('articleThumbnail', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/articles/views/articleThumbnail.html',
			replace: true,
			scope: {
				pic: '@',
				title: '@',
				description: '@',
				link: '@'
			}					
		}
	});
})();