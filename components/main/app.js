angular.module('vlash', ['shared.directives', 'nav', 'adds', 'articles'])
  .config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('index', {
	    	url: "/",
	    	views: {
		    	"header": { templateUrl: '/components/header/_header.html'},
		    	"navigation": {templateUrl: '/components/navigation/_nav.html', controller: 'NavController'},
		    	"content" : {templateUrl: '/components/main/_home.html'},
		    	"adds" : {templateUrl: '/components/adds/_adds.view.html'}		        
		    }
		})
		.state('articles',{
			url: "/articles",
	    	views: {
		    	"header": { templateUrl: '/components/header/_header.html'},
		    	"navigation": {templateUrl: '/components/navigation/_nav.html', controller: 'NavController'},
		    	"content" : {templateUrl: '/components/articles/_articles.home.html', controller: 'ArticlesList'},
		    	"adds" : {templateUrl: '/components/adds/_adds.view.html'}		        
		    }
		});
		
		$urlRouterProvider.otherwise('/');
	});


