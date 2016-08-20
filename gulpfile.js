var gulp        = require('gulp');

var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var cssmin      = require('gulp-cssmin');

gulp.task('develop', function () {
    return browserify({entries: './src/index.js', debug: true})
        .transform('babelify', { presets: ['es2015', 'stage-0'] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'))
        .pipe(livereload())
})

gulp.task('build', function () {
    return browserify({entries: './src/index.js', debug: true})
        .transform('babelify', { presets: ['es2015', 'stage-0'] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./'))
})

gulp.task('css', function() {
    gulp.src('./src/index.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./'))
})

gulp.task('watch', ['develop', 'css'], function () {
    livereload.listen()
    gulp.watch('./src/*.js', ['develop'])
    gulp.watch('./src/*.css', ['css'])
})

gulp.task('dev', ['watch'])
gulp.task('default', ['build', 'css'])
