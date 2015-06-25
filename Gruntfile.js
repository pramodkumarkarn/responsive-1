module.exports = function (grunt) {

    grunt.registerTask('watch', [ 'watch' ]);

    grunt.initConfig({
        'watch': {
            'js': {
                'files': ['js/*.js'],
                'options': {
                    'spawn': false
                },
                'tasks': ['uglify']
            },
            'css': {
                'files': ['css/*.css'],
                'options': {
                    'spawn': false
                },
                'tasks': ['cssmin']
            }
        },
        'uglify': {
            'js': {
                'src': ['js/*.js', '!*.min.js'],
                'dest': 'js/script.min.js'
            }
        },
        'cssmin': {
            'target': {
                'files': [{
                    'expand': true,
                    'cwd': 'css',
                    'src': ['*.css', '!*.min.css'],
                    'dest': 'css/style',
                    'ext': '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
