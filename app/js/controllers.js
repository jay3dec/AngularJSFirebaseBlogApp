'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
	$scope.addPost = function(){
		console.log($scope.article);
	}
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
