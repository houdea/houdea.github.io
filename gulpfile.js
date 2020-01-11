var gulp = require('gulp');
    sass = require('gulp-sass');
    watch = require('gulp-watch');
    compass= require('compass-importer');
    //compass = require('gulp-compass');
    minifyCSS = require('gulp-minify-css');

// Test gulp task
gulp.task('hello', function() {
    console.log('Hello Andrew Houde');
});

gulp.task('sass', function(){
    return gulp.src('site/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass({ importer: compass }).on('error', sass.logError)) // Using gulp-sass
        .pipe(gulp.dest('site/css'))
});

gulp.task('watch', function(){
    gulp.watch('site/scss/**/*.scss', gulp.series(['sass']));
});
