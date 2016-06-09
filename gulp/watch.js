'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['scripts:watch', 'inject', 'config'], function () {

  gulp.watch([conf.paths.html, 'bower.json'], ['inject']);

  gulp.watch([
    conf.paths.css,
    conf.paths.scss
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });


  gulp.watch(conf.paths.html, function(event) {
    browserSync.reload(event.path);
  });
});
