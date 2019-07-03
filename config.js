module.exports = function() {

	var source       = 'src',
		development  = 'dist',
		remove       = ['.sass-cache', 'dist'],

		// 템플릿 경로
		template = {
			src  : source + '/template/**/!(_)*.html',
			parts: source + '/template/**/_*.html',
			dest : development + '/views',
			src_m  : source + '/template_m/**/!(_)*.html',
			parts_m : source + '/template_m/**/_*.html',
			dest_m : development + '/views_m'
		},

		// Sass 경로
		sass = {
			src : source + '/sass/**/*.{scss,sass}',
			// src       : source + '/sass/**',
			dest: development + '/static/'
		},

		// Css 경로
		css = {
			// src : source + '/static/css/**/*.css',
			src : source + '/static/**/*.css',
			dest: development + '/static'
		},

		// JS 경로
		js = {
			// src : source + '/static/js/**/*.js',
			src : source + '/static/**/*.js',
			dest: development + '/static'
		},

		img = {
			src : source + '/img/**/*.{gif,jpg,png}',
			dest: development + '/img'
		},

		// HTML 옵션
		htmlbeautify = {
			"indentSize": 4
		};

	return {
		del  : remove,
		src  : source,
		dev  : development,
		
		template : template,
		sass     : sass,
		css      : css,
		js       : js,

		img  : img,

		htmlbeautify : htmlbeautify
	};
};