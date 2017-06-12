'use strict';

var config        = require('../config');
var gulp          = require('gulp');
var watch         = require('gulp-watch');

gulp.task('watch', ['browserSync', 'server'], function() {

  global.isWatching = true;

  // ForEach Task
  var watchTasks = config.tasks.watch;
  watchTasks.forEach(function(task) {
    watch(config[task].src, function(){
      gulp.start( [task] );
    });
  });

});