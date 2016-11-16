(function(){
	'use strict';
	angular
		.module('app')
		.controller('File1Controller', File1Controller)
		.controller('File2Controller', File2Controller)
		.controller('File3Controller', File3Controller);
     
     function File1Controller($stateParams, $http){
            var vm = this;
            console.log("file 1");
            $http.get('../json/data.json')
            .then(function(res){
                vm.dataP = res.data; 
                var json = vm.rutasMed = res.data; 
                console.log(json);
            });
     }

     function File2Controller($stateParams){
     		var vm = this;
		    console.log("file 2");
     }

     function File3Controller($stateParams){
			var vm = this;
			console.log("file 3");
     }

})();
