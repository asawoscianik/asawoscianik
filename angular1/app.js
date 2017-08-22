//var app = angular.module('convertApp', []);
//
//app.controller('firstController', function($scope) {
//    $scope.napis = "konwerter";
//    
//});
//
//app.controller('childController', function($scope){
//    
//       
//     $scope.stopnie = [
//        { name: "k" },
//        { name: "f" },
//        { name: "c" }
//    ];
//    $scope.changeName = function(){
//        switch($scope.unit){
//        case "c":
//            $scope.stopnie[0].name = parseFloat($scope.temp * (9/5) +32 + 'k');
//            $scope.stopnie[1].name = parseFloat($scope.temp + 273.15 + 'f');
//            $scope.stopnie[2].name = parseFloat($scope.temp + 'c');
//        break;
//        case "k":
//            $scope.stopnie[2].name = parseFloat($scope.temp * (5/9) -32 + 'c');
//            $scope.stopnie[1].name = parseFloat($scope.temp + 273.15 + 'f');
//            $scope.stopnie[0].name = parseFloat($scope.temp + 'k');
//        break;
//        case "f":
//             $scope.stopnie[2].name = parseFloat($scope.temp -273.15*1.8 +32 + 'k');
//             $scope.stopnie[0].name = parseFloat($scope.temp -273.15 + 'c');
//             $scope.stopnie[1].name = parseFloat($scope.temp  + 'f'  );
//        }
//    }
//});
//
//

var app = angular.module('ngclickApp', []);
app.controller('ngclickCtrl', function ($scope) {
	$scope.isClicked = function () {
		var hajs = parseFloat($scope.napis);
		
		if (hajs <= 0) {
			alert("Podaj ilość hajsu");
			return;
		}
        
                          
		if($scope.unit2 == 'brutto'){
		switch($scope.unit) {
			case "0%":
				$scope.f = "Kwota brutto: " + hajs ;
				break;
				
			case "8%":
				$scope.f = "Kwota brutto: " + (1.08 * hajs) ;
				break;
				
			case "23%":
				$scope.f = "Kwota brutto: " + (1.23 * hajs) ;
				break;
		}
        }
        else{
            switch($scope.unit) {
			case "0%":
				$scope.f = "Kwota netto: " + hajs ;
				break;
				
			case "8%":
				$scope.f = "Kwota netto: " + (hajs / 1.08 ) ;
				break;
				
			case "23%":
				$scope.f = "Kwota netto: " + (hajs / 1.23 ) ;
				break;
		}
            
        }        
         
}
      

	
});
