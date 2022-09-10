(function() {
    'use strict';
    
    angular.module('AppLunch', [])
    
        .controller('LunchController', function($scope) {
            
            $scope.items = [];
            $scope.message = '';
            $scope.classChecker = null;
            $scope.whiteSpaceChecker = false;
    
            $scope.getItems = function() {
                if (!$scope.items || !$scope.items.length) {

                    $scope.message = 'Please input the dishes you usually have for lunch.';
                    
                    $scope.classChecker = false;

                } 
                else {
                    var tempTotal = $scope.items.split(',');
                    $scope.classChecker = true;
                        if (tempTotal.length > 3) {
                            $scope.message = 'Too much!';
                        } else {
                            $scope.message = 'Enjoy';
                        }
                }
            }
        });
    
    })();