(function(){
	angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('route3',{
				url: '/file3',
				templateUrl: 'componentes/componente_3/file3.html',
				controller: 'File3Controller as vm'
		})
	})
})();