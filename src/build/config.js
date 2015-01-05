var colors = require('gulp-util').colors,
    jsDir  = './src/js';

module.exports = {
    jshint: {
        files: [jsDir + '/**/*.js'],
        options: {
            browser: true,
            browserify: true,
            curly: true,
            eqeqeq: true,
            eqnull: true,
            forin: true,
            indent: 4,
            lookup: false,
            scripturl: true,
            strict: false,
            trailing: true,
            undef: true,
            unused: true,
            es3: true
        }
    },
    karma: __dirname + '/../tests/karma.conf.js',
    messages: {
        error: colors.red('Build failed:'),
        rebuild: 'Rebuilt successfully.'
    },
    output: '*-dev',
    paths: {
        src: jsDir + '/entry-points/**/index.js',
        dest: './dist/'
    }
};
