'use strict';

var gutil  = require('gulp-util');
var notify = require('gulp-notify');

module.exports = function(error, errorType) {

  if( !global.isProd ) {

    gutil.beep();
    notify.onError({
      title: errorType + ' Error',
      message: error,
      sound: 'Pop'
    })(error);

    // Keep gulp from hanging on this task
    // this.emit('end');

  } else {
    // Log the error and stop the process
    // to prevent broken code from building
    console.log(error);
    process.exit(1);
  }

};