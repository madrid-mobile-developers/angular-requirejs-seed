define(['angular', 'services/services', 'controllers/controllers', 'directives/directives', 'filters/filters'],
    function (angular) {
        return angular.module('app', ['app.services', 'app.controllers', 'app.directives', 'app.filters']);
    }
);