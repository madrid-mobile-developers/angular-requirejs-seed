 module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['src/main/js/**/*js', 'src/test/**/*.js'],
      options: {
        ignores: []
      }
    },
    karma: {
      options: {
        configFile: 'karma/karma.conf.js'
      },
      continuous: {
        singleRun: true,
        autoWatch: false
      },
      dev: {
        singleRun: false,
        autoWatch: true
      },
      e2e: {
        configFile: 'karma/karma-e2e.conf.js',
        singleRun: true,
        autoWatch: false
      }
    },
    clean: {
      build: {
          src: ["dist/*"]
      }
    },
    uglify: {
      build: {
          src: 'src/main/lib/requirejs/require.js',
          dest: 'dist/lib/requirejs/require.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd:'src/main/css', src: ['**/*'], dest: 'dist/css'},
          {expand: true, cwd:'src/main/img', src: ['**/*'], dest: 'dist'},
          {expand: true, cwd:'src/main/partials', src: ['**/*'], dest: 'dist/partials'},
          {expand: true, cwd:'src/main', src: ['index.html'], dest: 'dist'}
        ]
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "src/main/js",
          mainConfigFile: "src/main/js/main.js",
          include: ['main'],
          insertRequire: ['main'],
          optimize: "uglify2",
          preserveLicenseComments: false,
          generateSourceMaps: true,
          out: "dist/js/main.js"
        }
      }
    }
  });

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task
  grunt.registerTask('default', ['jshint', 'karma:continuous']);

  // Production task
  grunt.registerTask('production', ['clean', 'jshint', 'karma:continuous', 'requirejs', 'uglify', 'copy']);

};