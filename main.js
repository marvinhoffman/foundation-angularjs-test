/**
 * Created by marvinhoffman on 11/15/13.
 */
var myApp = angular.module("myApp", []);
myApp.factory('Data', function() {
    return {message: "I'm data from a service"}
});

myApp.filter('reverse', function() {
    return function(text) {
        return text.split("").reverse().join("");
    }
})
myApp.filter('uCase', function() {
    return function(text) {
        return text.toUpperCase();
    }
})

function FirstCtrl($scope, Data) {
    $scope.data = Data;
}


function SecondCtrl($scope, Data) {
    $scope.data = Data;

}
