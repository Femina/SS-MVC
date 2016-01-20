angular.module('SSStyleGuide.pageRoute', ['ui.router'])

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $stateProvider
    
          .state('sg-v-homepage',{
            url:'/pages/homepage',
            templateUrl:'pages/homepage/sg-v-homepage.html'
            })



           .state('sg-v-account',{
            url:'/pages/account/sg-v-account',
            templateUrl:'pages/account/sg-v-account.html'
            })
   
          .state('sg-v-signin-default',{
            url:'/pages/signin/signin-default',
            templateUrl:'pages/signin/sg-v-signin-default.html'
            })



          .state('sg-v-product-listing',{
            url:'/pages/product-listing',
            templateUrl:'pages/product/sg-v-product-listing.html'
           })

          .state('sg-v-idp',{
            url:'/pages/idp/sg-v-idp',
            templateUrl:'pages/idp/sg-v-idp.html'
           })



          .state('sg-v-wishList',{
            url:'/pages/wishList/sg-v-wishList',
            templateUrl:'pages/wishList/sg-v-wishList.html'
            })
          .state('sg-v-cart',{
            url:'/pages/cart/sg-v-cart',
            templateUrl:'pages/cart/sg-v-cart.html'
            })
         

          .state('sg-v-checkout',{
            url:'/pages/checkout/sg-v-checkout',
            templateUrl:'pages/checkout/sg-v-checkout.html'
            })

          .state('sg-v-thankYou',{
            url:'/pages/thankYou/sg-v-thankYou',
            templateUrl:'pages/thankYou/sg-v-thankYou.html'
            })

     }
  ]
);