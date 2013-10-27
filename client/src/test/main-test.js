var tests = Object.keys(window.__karma__.files).filter(function (file) {
    var expression = /Spec\.js$/;
    return expression.test(file);
});

require.config({
	paths: {
        angular: '../lib/angular/angular',
        angularRoute: '../lib/angular-route/angular-route',
        angularMocks: '../lib/angular-mocks/angular-mocks',
        text: '../lib/requirejs-text/text'
	},

    baseUrl: 'base/src/main/js',

    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            exports:'angular.mock'
        }
    },

    priority: [
        "angular"
    ],

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
