var gulp = require('gulp'),
    less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');


//监听文件
gulp.task('dev', function () {
    gulp.watch('src/css/**/*',['less'])
     gulp.watch('src/js/**/*',['js'])    
	console.log("success")
});
//less转义和压缩
gulp.task('less', function () {
    gulp.src('src/css/**/*')
        .pipe(less())
	     .pipe(cleanCSS({compatibility: 'ie8'})) 
        .pipe(gulp.dest('dist/css'));
	console.log("success")
});
//js压缩转义es6

gulp.task('js', function () {
    gulp.src('src/js/**/*')
	    .pipe(babel({
      presets: ['es2015']
    }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});