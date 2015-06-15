module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'nested',
                    noCache: false,
                    update: true,
                    sourcemap: 'none',
                    require: 'susy'
                },
                files: {
                    'build/assets/stylesheets/styleit.css': 'src/sass/styleit.scss'
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
        },

        jquery: {
            dist: {
                output: "build/assets/javascripts/jquery",
                options: {
                    prefix: "jquery-min-",
                    minify: true
                },
                versions: {
                    "1.10.0": ["ajax", "deprecated"]
                }
            }
        }

    });

    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jade');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks("grunt-jquery-builder");

    grunt.registerTask('default', ['sass', 'jade', 'newer:jquery']);
};