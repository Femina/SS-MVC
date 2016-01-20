angular.module('SSStyleGuide.mRoute', ['ui.router'])

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $stateProvider
 
        .state('sg-c-alerts',{
        	url: '/molecules/alerts',
        	templateUrl: 'molecules/sg-c-alerts.html'
        })

         .state('sg-c-labels',{
        	url: '/molecules/labels',
        	templateUrl: 'molecules/sg-c-labels.html'
        })

         .state('sg-c-media-object',{
        	url: '/molecules/media-object',
        	templateUrl: 'molecules/sg-c-media-object.html'
        })

         .state('sg-c-nav',{
        	url: '/molecules/nav',
        	templateUrl: 'molecules/sg-c-nav.html'
        })

         .state('sg-c-responsive-embeds',{
        	url: '/molecules/responsive-embeds',
        	templateUrl: 'molecules/sg-c-responsive-embeds.html'
        })

     }
  ]
);