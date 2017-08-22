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
    })
    .when('/edit',{
        templateUrl: '/views/edit.html',
        controller: 'first'
    });
});

app.controller('first', function($scope, $http, $filter) {
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
    
    $scope.add = function() {
        $http({
            url: 'http://localhost:3000/users',
            method: "POST",
            data: {
                name: $scope.name,
                lastname: $scope.lastname
            }
        }).then(function(success){
            $scope.users.push(success.data);
            $scope.name = '';
            $scope.lastname = '';
        }, function(error) {
            console.error(error);
        });
    }
    
    $scope.delete = function(id) {
        $http({
            url: 'http://localhost:3000/users/' + id,
            method: "DELETE",
        }).then(function(success){
           var deletedUser = $filter('filter')($scope.users, {id : id})[0];
           $scope.users.splice($scope.users.indexOf(deletedUser), 1);
        },function(error) {
            console.error(error);
        
        });
    }   
    
    
    $scope.edit = function(id){
        if($scope.editId == id){
            $http({
                url: 'http://localhost:3000/users/' + id,
                method: 'PUT',
                data: {
                    name: $scope.name,
                    lastname: $scope.lastname
                }
                
            }).then(function(s){
                console.log(s)
            },function(error){
                console.error(error);
            }
            });
        }

  

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
