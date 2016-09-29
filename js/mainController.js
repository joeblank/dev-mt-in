angular.module('dmSocial')
.controller('mainController', function($scope, mainService) {
 $scope.navTitle = mainService.navTitle;
 $scope.welcome = mainService.welcome;
 $scope.addInfo = mainService.addInfo;
 $scope.buttonText = mainService.buttonText;
 $scope.viewFriends = mainService.viewFriends;
 $scope.findFriends = mainService.findFriends;
 $scope.updateProfile = mainService.updateProfile;



});
