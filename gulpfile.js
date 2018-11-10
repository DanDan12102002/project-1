'use strict';
let gulp = require('gulp'),
  rename = require('gulp-rename'),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css');


//server load
gulp.task('connect', function () {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('css', function () {
  // Do somethhing here;
  gulp.src('assets/scss/style.scss')
    .pipe(sass(''))
    .pipe(prefix('last 15 versions'))
    .pipe(cleanCSS(''))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('assets/public/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('assets/public/css/*.css', ['css']);
  gulp.watch('index.html', ['html'])
});

//html
gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});


// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);