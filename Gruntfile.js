module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'nested',
                    require: 'susy'
                },
                files: {
                    'build/stylesheets/styleit.css': 'src/sass/styleit.scss'
                }
            }
        },

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: {"build": ["src/jade/*.jade"]}
            }
        }

    });

    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jade');
    grunt.registerTask('default', ['sass', 'jade']);
};