//bower install firebase --save
//bower install angularfire --save
//cordova plugin add cordova-plugin-inappbrowser
angular.module('starter.controllers', ['ionic','firebase'])

  .controller('loginCtrl', function($scope, Auth, $location,loginSrv) {

    Auth.$onAuth(function (authData) {
      if (authData === null) {
        console.log("Usuario no autenticado.");
      }else {
        console.log("usuario Auttenticado");
        loginSrv.data = authData;
        $location.path('/side-menu-cont/busqueda');
        console.log(authData);
      }
      $scope.authData = authData;
    })

    $scope.login = function (authMethod) {
      Auth.$authWithOAuthRedirect(authMethod).then(function (authData) {

      }).catch(function (error) {
        if (error.code === 'TRANSPORT_UNAVAILABLE') {
          Auth.$authWithOAuthPopup(authMethod).then(function (authData) {

          });
        }else {
          console.log(error);
        }
      })
      console.log('logFb');

    }
  })

  .controller('menuCtrl', function($scope, Auth, $location, loginSrv) {
    $scope.authData = loginSrv.data;
    $scope.logout = function () {
      $location.path('/entrar');
      loginSrv.data = null;
      console.log('holas');
      Auth.$unauth();
    }

    $scope.verDatos = function (red) {
      switch (red) {
        case 'twitter':
              if (loginSrv.data.provider === 'twitter') {
                return true
              }else {
                return false;
              }
          break;
        case 'facebook':
              if (loginSrv.data.provider === 'facebook') {
                return true
              }else {
                return false;
              }
          break;
        case 'google':
              if (loginSrv.data.provider === 'google') {
                return true
              }else {
                return false;
              }
          break;
        default:

      }
    }
  })

  .controller('busquedaCtrl', function($scope, Auth, $location,loginSrv) {
    $scope.fav = function () {
      return 'hola';
    }

  })

  .controller('favoritosCtrl', function($scope, Auth, $location,loginSrv) {
    $scope.fav = function () {
      return 'hola';
    }

  })
