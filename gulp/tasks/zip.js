'use strict';

var gulp   = require('gulp');
const zip = require('gulp-zip');
var config = require('../config');

gulp.task('zip', config.tasks.dev, function() {

  return gulp.src(config.zip.src)
    .pipe(zip(config.zip.filename))
    .pipe(gulp.dest(config.zip.dest));

});
