define(['angular', 'angularMocks', 'app',  'controllers/view1Controller', 'controllers/view2Controller', 'services/version'],
    function(angular, mocks, app, view1Controller, view2Controller, version) {
        describe('Controllers', function() {
            var $scope, ctrl, _version;
            //you need to indicate your module in a test
            beforeEach(
                mocks.module('app.controllers')
            );
            beforeEach(function() {
                this.addMatchers({
                    toEqualData: function(expected) {
                        return angular.equals(this.actual, expected);
                    }
                });
            });
            describe('view1Controller', function() {
                var mockBackend, recipe;
                beforeEach(mocks.inject(function($rootScope, $controller) {
                    $scope = $rootScope.$new();
                    ctrl = $controller('view1Controller', {
                        $scope: $scope,
                        version: '0,1'
                    });
                }));
                it('should have a scopedAppVersion', function() {
                    expect($scope.scopedAppVersion).toEqual('0,1');
                });
            });
            describe('view2Controller', function() {
                var mockBackend, recipe;
                beforeEach(mocks.inject(function($rootScope, $controller) {
                    $scope = $rootScope.$new();
                    ctrl = $controller('view2Controller', {
                        $scope: $scope
                    });
                }));
                it('should have a welcomeMessage', function() {
                    expect($scope.welcomeMessage).toEqual('hey this is view2Controller.js!');
                });
            });
        });
    }
);