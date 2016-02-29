angular.module('starter.routes',[])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
      .state('entrar',{
        url:'/entrar',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('menu', {
        url: '/side-menu-cont',
        abstract:true,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('menu.busqueda', {
        url: '/busqueda',
        views: {
          'side-menu-cont': {
            templateUrl: 'templates/busqueda.html',
            controller: 'busquedaCtrl'
          }
        }
      })

      .state('menu.favoritos', {
        url: '/favoritos',
        views: {
          'side-menu-cont': {
            templateUrl: 'templates/favoritos.html',
            controller : 'favoritosCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/entrar');

});
