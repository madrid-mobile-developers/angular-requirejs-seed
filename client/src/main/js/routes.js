define(['angular', 'app', 'controllers/view1Controller', 'controllers/view2Controller'],
    function (angular, app) {
        'use strict';
        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/view1', {
                    templateUrl: 'partials/view1.html',
                    controller: 'view1Controller'
                })
                .when('/view2', {
                    templateUrl: 'partials/view2.html',
                    controller: 'view2Controller'
                })
                .otherwise({redirectTo: '/view1'});
        }]);
    }
);
