module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'app/libs/**/*.js', included: false},
            {pattern: 'app/js/**/*.js', included: false},
            {pattern: 'test/libs/**/*.js', included: false},
            {pattern: 'test/unit.js', included: false},
            {pattern: 'test/unit/**/*Spec.js', included: false},
            // needs to be last https://github.com/testacular/testacular/wiki/RequireJS
            'test/main-test.js'
        ],

        // list of files to exclude
        exclude: [
            'app/js/main.js'
        ],

        preprocessors: {
            '**/app/js/src/**/*.js': 'coverage'
        },

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress', 'junit', 'teamcity'
        // CLI --reporters progress
        reporters: ['junit', 'coverage'],

        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'reports/junit/test-results.xml',
            suite: 'unit'
        },

        coverageReporter: {
            type: 'cobertura',
            dir: 'reports/coverage',
            file: 'coverage-results.xml'
        },

        // web server port
        // CLI --port 9876
        port: 9876,

        // cli runner port
        // CLI --runner-port 9100
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 5000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        frameworks: ["jasmine", "requirejs"]
    });
};


