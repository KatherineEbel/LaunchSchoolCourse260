module.exports = (grunt) => {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'public/javascripts/vendor/all.js': ['public/javascripts/vendor/all.js']
        }
      }
    },
    bower_concat: {
      all: {
        dest: 'public/javascripts/vendor/all.js',
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore'
        }
      }
    },
    handlebars: {
      all: {
        files: {
          'public/javascripts/handlebarsTemplates.js': ['handlebars/**/*.hbs']
        },
        options: {
          processContent: removeWhitespace,
          processName: extractFilename
        }
      }
    }
  });

  [
    'grunt-bower-concat',
    'grunt-contrib-uglify',
    'grunt-contrib-handlebars'
  ].forEach(task => grunt.loadNpmTasks(task));

  grunt.registerTask('default', ['bower_concat', 'uglify']);
}

let removeWhitespace = (template) => template.replace(/ {2,}/mg, '').replace(/\r|\n/mg, '');

let extractFilename = (file) => file.match(/\/(.+)\.hbs$/).pop();

