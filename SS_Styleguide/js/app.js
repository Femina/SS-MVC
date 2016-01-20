var SSStyleGuide = angular.module('SSStyleGuide', ['ui.bootstrap', 'ui.router', 'SSStyleGuide.mRoute' ,'SSStyleGuide.orgRoute' ,'SSStyleGuide.pageRoute']);

SSStyleGuide.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('atom',{
          url:'/atom',
          abstract: true,
          templateUrl: 'atom.html'
          
        })

        .state('sg-index', {
            url: '/',
            templateUrl: 'sg-index.html'
        })

        .state('atom.sg-e-buttons',{
          url: '/buttons',
          templateUrl: 'atoms/sg-e-buttons.html'
        })

        .state('atom.sg-e-forms',{
          url: '/forms',
          templateUrl: 'atoms/sg-e-forms.html'
        })

        .state('atom.sg-e-images',{
          url: '/images',
          templateUrl: 'atoms/sg-e-images.html'
        })

        .state('atom.sg-e-tables',{
          url: '/tables',
          templateUrl: 'atoms/sg-e-tables.html'
        })

        .state('atom.sg-e-type',{
          url: '/type',
          templateUrl: 'atoms/sg-e-type.html'
        })


});

function TopNavigation($scope) {
    $scope.name = 'Superhero';
}