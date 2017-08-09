'use strict';

var config        = require('../config');
var gulp          = require('gulp');
var watch         = require('gulp-watch');

gulp.task('watch', ['browserSync', 'server'], function() {

  global.isWatching = true;

  // ForEach Task
  var watchTasks = config.tasks.watch;
  watchTasks.forEach(function(task) {
    var src = '';
    if(task === 'fabricator') {
      src = config.styleguide.fabricator.src;
    } else if (task === 'scripts') {
      src = config.styleguide.scripts.src.concat(config.uikit.scripts.src);
    } else if (task === 'styles') {
      src = config.styleguide.styles.src.concat(config.uikit.styles.src);
    } else {
      src = config[task].src;
    }

    watch(src, function(){
      gulp.start( [task] );
    });
  });

});