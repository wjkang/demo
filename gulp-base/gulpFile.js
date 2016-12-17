var gulp=require("gulp");
gulp.task('css', function () {
    return gulp.src('src/scss/*.css')
        .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function () {
    return gulp.src('src/es6/*.js')
        .pipe(gulp.dest('dist/js'))
})

gulp.task('html', function () {
    return gulp.src('src/tpl/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('build', ['css', 'js', 'html'])