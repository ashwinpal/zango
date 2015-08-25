(function(){
 
 var app = angular.module('zango', [ ]);
 
 app.controller('usersController', ['$http', function($http){
 
 var user = this;
 var dislay;
 user.details = [];

 $http.get('http://jsonplaceholder.typicode.com/users').
  success(function(data) {

  	user.details = data;

	});

 }]);


 })();