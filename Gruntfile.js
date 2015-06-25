module.exports = function (grunt) {

    grunt.registerTask('watch', [ 'watch' ]);

    grunt.initConfig({
        watch: {
            js: {
                files: ['js/*.js'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['css/*.css'],
                options: {
                    livereload: true
                }
            }
        },
        'uglify': {
            'js': {
                'src': ['js/script.js'],
                'dest': 'js/script.min.js'
            }
        },
        'cssmin': {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
