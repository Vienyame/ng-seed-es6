/**
 * Created by Serge on 08/06/2016.
 */
import NGSEEDConfig from './configuration.js';

let Application = angular.module('ngseed.app', [
  'ui.router',
  NGSEEDConfig.name
]);

angular.element(document).ready(function(){
  angular.bootstrap(document, [Application.name]);
});