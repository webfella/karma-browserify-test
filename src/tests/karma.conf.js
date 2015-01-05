module.exports = function(config) {
    config.set({
        autoWatch: false,
        basePath: './',
        browserify: {
            debug: true
        },
        browsers: [
            'PhantomJS'
        ],
        client: {
            captureConsole: true
        },
        files: [
            './**/*.spec.js'
        ],
        frameworks: [
            'browserify',
            'jasmine'
        ],
        logLevel: config.LOG_DEBUG,
        preprocessors: {
            './**/*.spec.js': ['browserify']
        },
        reportSlowerThan: 500,
        reporters: [
            'spec'
        ],
        singleRun: true
    });
};
