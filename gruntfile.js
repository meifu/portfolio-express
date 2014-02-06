'use strict';

var path = require('path');

module.exports = function(grunt) {
	// set up grunt

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// uglify: {
		// },
		express: {
			// uses_defaults: {},
			server: {
				options: {
					port: 3000,
					bases: './'
				}
			}
			
			// ,livereload: {
			// 	options: {
			// 		server: path.resolve('./js'),
			// 		livereload: true,
			// 		serverreload: true,
			// 		bases: './'
			// 	}
			// }
		},
		sass: {
			dist: {
				files: {
					'css/main.css' : 'sass/main.scss'
				}
			}
		},
		
		haml: {
			dist: {
				files: {
					'views/index.html': 'views/index.haml'
				}
			}
		},
		watch: {
			css: {
				files: 'sass/*.scss',
				tasks: ['sass']
			},
			haml: {
				files: ['views/*.haml'],
				tasks: ['haml']
			}
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-modernizr');
	
	// grunt.registerTask('server', function(target){
	// 	grunt.task.run(['express:livereload','watch']);
	// });
	grunt.registerTask('server', ['express','express-keepalive']);
	grunt.registerTask('default', ['watch','haml']);

};