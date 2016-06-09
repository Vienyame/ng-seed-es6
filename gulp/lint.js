'use strict';

var gulp = require('gulp'),
    conf = require('./conf'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'run-sequence', 'plato']
    });

gulp.task('plato', function() {
    return $.plato.inspect(conf.paths.tmp + '/serve/app/bundle.js', 'tools/reports/plato/', {
        title: 'ng-seed Quality Report',
        exclude: /.*\.spec\.js/
    }, function() {});
});

gulp.task('js-hint', function() {
    return gulp.src(conf.paths.js)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('es-lint', function() {
    return gulp.src(conf.paths.js)
        .pipe($.eslint({
            reset: true
        }))
        .pipe($.eslint.format());
});

gulp.task('scss-lint', function() {
    return gulp.src(conf.paths.scss)
        .pipe($.scssLint({
            config: '.scsslintrc.yml'
        }));
});

gulp.task('html-hint', function() {
    return gulp.src(conf.paths.html)
        .pipe($.htmlhint({
            htmlhintrc: '.htmlhintrc'
        }));
});

gulp.task('lint', function() {
    return $.runSequence(
        'js-hint', 'es-lint' //, 'scss-lint', 'html-hint'
    );
});
