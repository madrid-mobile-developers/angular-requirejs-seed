define(['angular'],
    function(angular) {
        var module = angular.module('app.filters', []);

        module.filter('interpolate', ['version',
            function(version) {
                return function(text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
                };
            }
        ]);

        return module;
    }
);
