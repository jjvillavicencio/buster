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
  })
