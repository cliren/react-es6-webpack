var gulp = require('gulp');
var config = require('../config');
var sources = config.sources.concat(config.less.src);

gulp.task('watch', ['browserSync', 'mocks'], function() {
  gulp.watch(sources, ['webpack']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.images.src, ['images']);
});
