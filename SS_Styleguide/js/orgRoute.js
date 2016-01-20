angular.module('SSStyleGuide.orgRoute', ['ui.router'])

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $stateProvider
 
       .state('sg-m-campaign-grid',{
        	url: '/organisms/campaign-grid',
        	templateUrl: 'organisms/sg-m-campaign-grid.html'
        })
           .state('sg-m-header',{
        	url: '/organisms/header',
        	templateUrl: 'organisms/sg-m-header.html'
        })
            .state('sg-m-footer',{
        	url: '/organisms/footer',
        	templateUrl: 'organisms/sg-m-footer.html'
        })
             .state('sg-m-form-email-check',{
        	url: '/organisms/form-email-check',
        	templateUrl: 'organisms/sg-m-form-email-check.html'
        })
              .state('sg-m-image-slider',{
        	url: '/organisms/image-slider',
        	templateUrl: 'organisms/sg-m-image-slider.html'
        })
              .state('sg-m-product-grid',{
        	url: '/organisms/product-grid',
        	templateUrl: 'organisms/sg-m-product-grid.html'
        })
          .state('sg-m-form-signin',{
        	url: '/organisms/form-signin',
        	templateUrl: 'organisms/sg-m-form-signin.html'
        }) 

     }
  ]
);