var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './views/main.html'
    })
    .when('/add', {
        templateUrl: './views/add.html',
        controller: 'first'
    })
    .when('/show', {
       templateUrl: './views/show.html',
       controller: 'second'
    })
    .when('/delete/:id', {
        templateUrl: '',
        controller: 'deleteMovieController'
    })
    .when('/other', {
        template: '<h3>Cześć, tutaj jest coś innego</h3>'
    });
    .when('/edit/:id',{
        templateUrl: '',
        controller:'editController'
    })
});

app.service('movie', function() {
    this.movies = [];
    this.counter = this.movies.length + 1;
    this.add = function(movie) {
        movie.id = this.counter++;
        this.movies.push(movie);
    }
    this.get = function() {
        return this.movies;
    }
    this.deleteById = function(id) {
        for(var i = 0; i < this.movies.length; i++) {
            if(this.movies[i].id == id) {
                break;
            }
        }
        this.movies.splice(i, 1);
    }
});

app.controller('first', function($scope, movie) {
    $scope.add = function() {
        movie.add({ title: $scope.title, year: $scope.year, genre: $scope.genre });
    }
});

app.controller('second', function($scope, movie) {
    $scope.movies = movie.get();
    $scope.delete = function(id) {
        movie.deleteById(id);
    };
});
