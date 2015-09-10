'use strict';

angular.module('drugName.version', [
  'drugName.version.interpolate-filter',
  'drugName.version.version-directive'
])

.value('version', '0.5');
