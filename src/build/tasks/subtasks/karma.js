var config = require('../../config'),
    gulp   = require('gulp'),
    karma  = require('karma').server;

gulp.task('karma', function() {
    return karma.start({
        configFile: config.karma
    }, cleanUpProcesses);
});

gulp.task('karma-watch', function() {
    return karma.start({
        configFile: config.karma,
        autoWatch: true,
        singleRun: false
    }, cleanUpProcesses);
});

function cleanUpProcesses() {
    // temp fix while processes seem to linger from karma
    return process.exit(0);
}
