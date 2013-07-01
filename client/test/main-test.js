var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return /Spec\.js$/.test(file);
});

require.config({
	paths: {
		angular: '../libs/angular/angular',
		angularMocks: '../../../test/libs/angular/angular-mocks',
		text: '../libs/require/text'
	},
	baseUrl: 'base/app/js/src',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},
	priority: [
		"angular"
	],
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
