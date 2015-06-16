var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var config = require('../config');
var sources = config.sources;
var lintConfig = path.join(__dirname, './lint-config.json');

gulp.task('lint', function() {
  return gulp.src(sources)
    .pipe(eslint({
      config: lintConfig
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
