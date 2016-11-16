(function(){
    angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/file1")
            $stateProvider
            .state('route1',{
                url: '/file1',
                templateUrl: 'componentes/componente_1/file.html',
                controller: 'File1Controller as vm'
            })
        })
})();