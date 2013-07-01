define(['controllers/controllers','services/version'],
    function (module) {
        module.controller('view1Controller', ['$scope', 'version',
            function ($scope, version) {
                $scope.scopedAppVersion = version;
            }
        ]);
    }
);
