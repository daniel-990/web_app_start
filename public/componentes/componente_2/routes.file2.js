(function(){
	angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('route2',{
				url: '/file2',
				templateUrl: 'componentes/componente_2/file2.html',
				controller: 'File2Controller as vm'
		})
	})
})();