module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            build: {
                files: {
                    'dist/css/main.css': 'src/css/style.less'
                    }
                }
            }
        });
        
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ["less"]);
};