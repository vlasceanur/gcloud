(function(){
	angular.module('articles.controllers', [])
	.controller('ArticlesList', ['$scope', function($scope){
		var articles = [{
			pic: '200x200.png',
			title: 'Getting started with angularjs',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'Controllers',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'Directives',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'Services',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'Filters',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'Routing',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'Advanced Routing',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		},{
			pic: '200x200.png',
			title: 'SEO Optimisations',
			description: 'Small description about this topic, just a small intro, maximum 3-4 lines',
			link: '#'
		}];

		$scope.articles = articles;
	}]);
})();