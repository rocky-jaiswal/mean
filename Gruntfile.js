'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    shell: {
      express: {                      
        options: {
          stdout: true
        },
        command: 'node server'
      }
    }
    //watch: {
    //  clientjs: {
    //    files: ['public/js/**/*.js'],
    //    tasks: ['jshint'],
    //    options: {
    //      livereload: true,
    //    }
    //  }
    //}
  });
  
  grunt.registerTask('server', [
   //'watch',
   'shell:express' 
  ]);

  grunt.registerTask('default', ['server']);
};
