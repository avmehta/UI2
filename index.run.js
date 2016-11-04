(function() {
  'use strict';

  angular
    .module('historyCapture')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
