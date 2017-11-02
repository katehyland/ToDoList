var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope){
$scope.toDoList = ['Clean', 'Laundry'];

$scope.addTask = function(){
$scope.toDoList.unshift($scope.task)
};    
});



