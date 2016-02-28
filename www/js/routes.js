angular.module('starter.routes',[])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
      .state('entrar',{
        url:"/entrar",
        templateUrl: "templates/login.html"
      })

      .state('menu', {
        url: '/side-menu-cont',
        abstract:true,
        templateUrl: 'templates/menu.html'
      })

      .state('menu.busqueda', {
        url: '/busqueda',
        views: {
          'side-menu-cont': {
            templateUrl: 'templates/busqueda.html'
          }
        }
      })

      .state('menu.favoritos', {
        url: '/favoritos',
        views: {
          'side-menu-cont': {
            templateUrl: 'templates/favoritos.html'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/entrar');

});
