var gulp = require('gulp'),
    browserSync = require('browser-sync');
var glob = [
	'*.html',
	'css/**/*.css', 
	'js/**/*.js'
	];

gulp.task('browser-sync', function () {
  browserSync.init(null, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('build', function () {
	return gulp.src(glob)
		.pipe(browserSync.reload({stream: true, once: true}));
})

gulp.task('default', ['browser-sync'], function (done) {
  gulp.watch(glob, ['build']);
});
