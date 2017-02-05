(function () {

    var app = angular.module('githubViewer', []);

    var mainController = function ($scope, $http) {

        $scope.username = "angular";
        $scope.message = "githubViewer";

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username + "/repos")
                .then(function (response) {
                    $scope.repos = response.data;
                });
        };

        $scope.search($scope.username);
        $scope.repoSortOrder = "-stargazers_count";
    };

    app.controller("mainController", ["$scope", "$http", mainController]);

}());