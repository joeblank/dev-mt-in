angular.module('dmSocial')
.controller('mainController', function($scope, mainService) {
 $scope.navTitle = mainService.navTitle;
 $scope.welcome = mainService.welcome;
 $scope.addInfo = mainService.addInfo;



});
