var _          = require('lodash'),
    browserify = require('browserify'),
    buffer     = require('vinyl-buffer'),
    config     = require('../../config'),
    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    paths      = require('../../helpers/paths'),
    rename     = require('gulp-rename'),
    size       = require('gulp-size'),
    source     = require('vinyl-source-stream'),
    transform  = require('vinyl-transform'),
    watchify   = require('watchify');

gulp.task('watchify', function() {
    var watchified = transform(function(fileName) {
        var b = browserify(
                fileName,
                _.extend({debug: true}, config.browserify, watchify.args)
            ),
            bundler = watchify(b);

        bundler.on('update', rebundle.bind(bundler));

        return bundler.bundle();
    });

    return gulp.src(config.paths.src)
        .on('error', gutil.log.bind(gutil, config.messages.error))
        .pipe(watchified)
        .pipe(rename(paths.fileOutput))
        .pipe(gulp.dest(config.paths.dest));

    function rebundle() {
        var trimmedPath = paths.trimPath(this._bpack.standaloneModule);

        return this.bundle()
            .on('end', gutil.log.bind(gutil, config.messages.rebuild))
            .on('error', gutil.log.bind(gutil, config.messages.error))
            .pipe(source(trimmedPath))
            .pipe(buffer())
            .pipe(rename(paths.fileOutput))
            .pipe(gulp.dest(config.paths.dest));
    };
});
