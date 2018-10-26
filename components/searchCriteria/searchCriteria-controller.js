"use strict"; {
    angular.module('app')
        .controller('searchCriteriaController', function ($http) {
            const $ctrl = this;

            $ctrl.getThings = function () {
                return $http.get("https://api.themoviedb.org/3/search/movie?api_key=4f4565d06d2dff19a79a1c507b52ff3d&query=" + $ctrl.searchInput + "&page=1")
                    .then(function(response){

                        console.log(response)
                            $ctrl.results = response.data.results;
                    });
                }
            

        
        });
    }



    // 