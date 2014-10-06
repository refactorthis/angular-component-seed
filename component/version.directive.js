'use strict';

angular
  .module('myComponent.version')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);
