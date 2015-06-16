var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb) {

  runSequence([
      'clean'
    ],
    'lint',
    'test-no-quit',
    'webpack',
    'images',
    'mocks',
    'markup',
    'quit');

  cb();
});
