define(['controllers/controllers','filters/filters','services/version'],
    function (module) {
        module.controller('view2Controller', ['$scope',
            function ($scope) {
                // You can access the scope of the controller from here
                $scope.welcomeMessage = 'hey this is view2Controller.js!';
            }
         ]);
    }
);