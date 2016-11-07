angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

 /* $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })
  .state('presentation', {
    url: '/presentation',
    templateUrl: 'presentation.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise("/");*/

})

var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 50
    });

var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        direction: 'vertical',
        spaceBetween: 50
    });
