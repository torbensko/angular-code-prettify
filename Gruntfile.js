'use strict';

module.exports = function(grunt) {

  var pkgConfig = grunt.file.readJSON('package.json');

  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    'pkg': pkgConfig,

    watch: {
      sass: {
        files: ['styles/*.{scss,sass}'],
        tasks: ['sass:dev']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
    },
    // Inject bower dependencies into the HTML page.
    wiredep: {
      app: {
        src: ['index.html'],
      },
      sass: {
        src: ['./styles/*.{scss,sass}'],
        ignorePath: '../bower_components/',
      },
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['wiredep', 'watch']);
};
