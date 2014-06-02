'use strict';

angular.module('app', [
  'app.templates',
  'w11k.select',
  'w11k.select.template'
]);

angular.module('app').controller('DemoCtrl', function ($scope) {

  var amount = 10000;

  $scope.options = {
    data: []
  };

  $scope.selected = {
    data: []
  };

  $scope.staticConfig = {
    disabled: false,
    header: {
      placeholder: 'Please Select Something ...'
    }
  };

  $scope.dynamicConfig = {
    required: true,
    multiple: true
  };

  function createOptions() {
    $scope.options.data = [];
    for (var i = 1; i <= amount; i++) {
      $scope.options.data.push({ label: i, value: i });
    }
  }

  $scope.selectRandom = function () {
    var randomIndex = Math.floor((Math.random() * $scope.options.data.length));
    var randomValue = $scope.options.data[randomIndex].value;

    if (angular.isArray($scope.selected.data) === false) {
      $scope.selected.data = [];
    }

    if ($scope.selected.data.indexOf(randomValue) < 0) {
      $scope.selected.data.push(randomValue);
      // we have to assign a different object, otherwise ng-model will not detect the change
      $scope.selected.data = angular.copy($scope.selected.data);
    }
  };

  $scope.createNewOptions = function () {
    $scope.options.data = $scope.options.data.slice(($scope.options.data.length / 2) - 1);
  };

  createOptions();
});
