/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

angular
  .module('myComponent.version', [])
  .value('version', '0.1');

'use strict';

angular
  .module('myComponent.version')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);

})();