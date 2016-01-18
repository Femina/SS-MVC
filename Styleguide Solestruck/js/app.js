var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/appStructure');
    
    $stateProvider
        
        .state('appStructure', {
            url: '/appStructure',
            templateUrl: 'appStructure.html'
        })
        
        
        .state('config', {
            url: '/config',
            templateUrl: 'configuration.html'
        })

        .state('moduleStructure',{
            url: '/moduleStructure',
            templateUrl:'moduleStructure.html'
        })
        
        .state('helperComponents',{
            url: '/helperComponents',
            templateUrl:'helperComponents.html'
        })
});


mainApp.controller('mainController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);

