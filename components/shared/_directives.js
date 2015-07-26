angular.module('shared.directives', [])
	.directive('allColls', [function(){
		return{
			restrict: 'A',
			link: function(scope, ele, attr){
				var colls = ['col-xs-', 'col-sm-', 'col-md-', 'col-lg-'];
				for(var i in colls){
					colls[i] = colls[i] + attr.allColls;
				}
				ele.addClass(colls.join(" "));
			}
		}		
	}])
	.directive('separator', [function(){
		return {
			restrict: 'A',
			link: function(scope, ele, attr){				
				ele.css({display: 'inline-block', width: attr.separator + 'px'})
			}
		}
	}])