'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var del         = require('del');

gulp.task('clean', function(cb) {

  var dirs = process.argv[2] === 'prod'? [config.root.build, config.root.docs] : [config.root.dist];

  return del(dirs, cb);

});
