define(['angular', 'angularRoute', 'services/services', 'controllers/controllers', 'directives/directives', 'filters/filters'],
    function (angular) {
        return angular.module('app', ['ngRoute', 'app.services', 'app.controllers', 'app.directives', 'app.filters']);
    }
);