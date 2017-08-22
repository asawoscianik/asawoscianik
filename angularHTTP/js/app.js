var app = angular.module('webapp', ['ngRoute']);

app.config(function($routeProvider){
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
//    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        templateUrl: './views/main.html',
        controller: 'main'
    })
    .when('/users',{
        templateUrl: './views/users.html',
        controller: 'first'
    })
    .when('/user/:id',{
        templateUrl: './user.html',
        controller: 'second'
    })
    .when('/animals',{
        templateUrl: './views/animals.html',
        controller: 'third'
    });
   
});

app.controller('first', function($scope, $http) {
    // $http(/*obiekt konfiguracyjny*/)
    //    .then(/*success handler*/, 
    //          /*error handler*/);
    $http({
        method: "GET",
        url: "http://localhost:3000/users"
    }).then(function(success) {
        $scope.users = success.data;
        console.log(success.data);
    }, function(error) {
        console.error(error);
    });
});
app.controller('second', function($scope, $http, $routeParams){
    $http({ 
        url:"http://localhost:3000/users/"+ $routeParams.id,
        method: 'GET'
        
    }).then(function(success){
        $scope.user = success.data;
    },function(error){
        console.error(error);
    });
});
app.controller('third', function($scope, $http) {
    $http({
        method: "GET",
        url: "http://localhost:3000/animals"
    }).then(function(success) {
        $scope.animals = success.data;
        console.log(success.data);
    }, function(error) {
        console.error(error);
    });
});