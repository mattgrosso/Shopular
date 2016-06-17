(function() {
  'use strict';

  angular
    .module('shopular')
    .controller('HeaderController', HeaderController);

  var username;
  var loggedIn = false;

  if(!localStorage.username) {
    username = "";
  } else {
    username = JSON.parse(localStorage.username);
    loggedIn = true;
  }

  function HeaderController() {
    this.loginTime = new Date();

    this.username = username;

    this.loggedIn = loggedIn;

    this.login = function login(form) {
      this.loggedIn = true;
      localStorage.setItem('username', JSON.stringify(this.username));
    };

    this.logout = function logout() {
      localStorage.setItem('username', "");
      username = "";
      this.username = username;
      loggedIn = false;
      this.loggedIn = loggedIn;
    };
  }

})();
