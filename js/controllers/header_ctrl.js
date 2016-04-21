(function() {
  'use strict';

  angular
    .module('shopular')
    .controller('HeaderController', HeaderController);

  var username = 'Stanley';

  function HeaderController() {
    this.username = username;
    this.loginTime = new Date();
  }

})();
