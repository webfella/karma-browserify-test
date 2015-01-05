var config = require('../../config'),
    gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    jshint = require('gulp-jshint'),
    watch  = require('gulp-watch');

gulp.task('jshint', function() {
    return gulp.src(config.jshint.files)
        .pipe(watch(config.jshint.files))
        .on('error', gutil.log.bind(gutil, config.messages.error))
        .pipe(jshint(config.jshint.options))
        .pipe(jshint.reporter('jshint-stylish'));
});
