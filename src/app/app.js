'use strict';

import NGSEEDConfig from './configuration';

let Application = angular.module('ngseed.app', [
  'ui.router',
  NGSEEDConfig.name
]);

angular.element(document).ready(function(){
  angular.bootstrap(document, [Application.name]);
});