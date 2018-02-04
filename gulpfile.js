const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('compileLESS', function () {

  gulp.src('./dist/*.less')
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/'));

});

gulp.task('browserSync', function () {

  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

});

gulp.task('watch', ['browserSync'], function () {

  gulp.watch('./dist/*.less', ['compileLESS']);
  gulp.watch('./dist/*', browserSync.reload);

});
