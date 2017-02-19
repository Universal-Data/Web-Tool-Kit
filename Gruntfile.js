module.exports = function (grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                loadPath: [
                    'scss/modules/',
                ],
            },
            dist: {
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            },
        },
        cssmin: {
            css: {
                files: [
                    {
                        src: 'css/app.css',
                        dest: 'css/app.min.css',
                    },
                ],
            },
        },
        watch: {
            css: {
                files: [
                    'scss/*.scss',
                    'scss/**/*.scss',
                ],
                tasks: [
                    'sass',
                    'cssmin',
                ],
            },
        },
    });

    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
