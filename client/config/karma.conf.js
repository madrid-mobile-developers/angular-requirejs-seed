basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    REQUIRE,
    REQUIRE_ADAPTER,
    {pattern: 'app/js/libs/**/*.js', included: false},
    {pattern: 'app/js/**/*.js', included: false},
    {pattern: 'test/libs/**/*.js', included: false},
    {pattern: 'test/unit/**/*Spec.js', included: false},
    // needs to be last https://github.com/testacular/testacular/wiki/RequireJS
    'test/main-test.js'
];

exclude = [
    'app/js/main.js'
];

autoWatch = true;

LogLevel = LOG_DEBUG;

preprocessors = {
    '**/app/js/src/**/*.js': 'coverage'
};

reporters = ['dots', 'junit', 'coverage'];

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'reports/junit/test-results.xml',
  suite: 'unit'
};

coverageReporter = {
    type: 'cobertura',
    dir: 'reports/coverage',
    file: 'coverage-results.xml'
};
