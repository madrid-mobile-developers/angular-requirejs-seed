basePath = '../';

files = [
  'test/libs/angular/angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;

browsers = ['PhantomJS'];

singleRun = true;

reporters = ['dots', 'junit'];

proxies = {
  '/': 'http://localhost:3000/'
};

urlRoot = "__karma__";

junitReporter = {
  outputFile: 'reports/e2e/e2e-results.xml',
  suite: 'e2e'
};
