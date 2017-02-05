(function(){
           
    var app = angular.module('githubViewer',[]); 
    
    var mainController = function ($scope, $http){

        $http.get("https://api.github.com/users/alanrussodev")
            .then(function (response){
                $scope.user = response.data;
            });

        $scope.message = "Hello, Pluralsight!";

        // var person = {
        //     firstName : "Scott",
        //     lastName : "Allen",
        //     imageSrc : "http://odetocode.com/Images/scott_allen_2.jpg"
        // } 

        // $scope.message = "Hello, Pluralsight!";
        // $scope.person = person;
    }
    
    app.controller("mainController",["$scope","$http",mainController]);

}());

