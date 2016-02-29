// Ionic Starter App

angular.module('starter', ['ionic', 'firebase', 'starter.routes', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.factory('Auth', function ($firebaseAuth) {
  var endPoint = "https://buster-dev.firebaseio.com/users";
  var usersRef = new Firebase(endPoint);

  return $firebaseAuth(usersRef);   
})
