var gulp 	= require('gulp');
var sass	= require( 'gulp-sass');


gulp.task( 'sass', function() {
	return gulp.src( 'app/sass/main2.scss')
		.pipe( sass().on('error' , sass.logError))
		.pipe( gulp.dest('./dist/css/'));
});

gulp.task('default', function() {
	gulp.watch( './app/sass/*.scss', ['sass']);
});
