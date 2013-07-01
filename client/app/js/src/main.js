require.config({
	paths: {
		angular: '../libs/angular/angular',
		text: '../libs/require/text'
	},
	baseUrl: 'js/src',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},
	priority: [
		"angular"
	]
});

require(['angular', 'app', 'routes'],
    function(angular, app) {
		angular.bootstrap(document, [app['name']]);
    }
);
