var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('css',function(){

    return gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
})