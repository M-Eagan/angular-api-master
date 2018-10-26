"use strict"; {
    angular.module("app",['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                template:'<movie-List></movie-List>'
            })
            .when('/favorite',{
                template:'<watch-List></watch-List>'
            })
            .otherwise({
                template:'<h1>404 page DOES NOT EXIST</h1>'
            })
    });
}