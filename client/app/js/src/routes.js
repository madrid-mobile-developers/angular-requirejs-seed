define(['app', 'controllers/view1Controller', 'controllers/view2Controller'],
    function (app) {
        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/view1', {
                    templateUrl: 'views/view1.html',
                    controller: 'view1Controller'
                })
                .when('/view2', {
                    templateUrl: 'views/view2.html',
                    controller: 'view2Controller'
                })
                .otherwise({redirectTo: '/view1'});
        }]);
    }
);
