angular.module('vlash', ['shared.directives', 'ui.router', 'adds.directives'])
  .config(function($stateProvider) {
	  $stateProvider
	    .state('index', {
	    	url: "",
	    	views: {
		    	"header": { templateUrl: '/components/header/_header.html'},
		    	"navigation": {templateUrl: '/components/navigation/_nav.html'},
		    	"content" : {templateUrl: '/components/main/_home.html'},
		    	"adds" : {templateUrl: 'components/adds/_adds.view.html'}		        
		    }
		})
	});


