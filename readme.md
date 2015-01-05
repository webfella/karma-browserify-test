# Karma Browserify Test

Test repo to reproduce [#75](https://github.com/Nikku/karma-browserify/issues/75).

## Issue

When `autoWatch=true` is set the following error occurs when a source file is changed that's referenced from a test.

```
PhantomJS 1.9.8 (Mac OS X) ERROR
  ReferenceError: Can't find variable: require
```

Tests are usually ran twice when files are changed. During the second run, it almost always encounters the error.

## Environment

* Install [Node JS](http://nodejs.org/)
* Install dependencies with `npm install`

## Tasks

* Watches for changes in source and tests and rebuilds `npm start`
* Run the test suite once with `npm test`
