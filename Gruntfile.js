module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
	dist: {
		files:{
		   'scss/app.scss': 'css/app.css'
		}
	},
    },
    cssmin: {
	css: {
		files: [
			{
				src: 'css/app.css',
				dest: 'min/app.min.css',
			},
		],
	},
    },
    watch:{
	css: {
    		files: [
			'scss/*.scss',
		],
		tasks: [
			'sass',
			'cssmin',
		],
	},
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  grunt.registerTask('default', ['watch']);

};
