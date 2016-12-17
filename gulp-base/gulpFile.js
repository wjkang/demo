var gulp=require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
gulp.task('css', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'  // 此配置使文件编译并输出压缩过的文件
        }))
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

gulp.task('css:dev', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream: true}))
})

gulp.task('js:dev', function () {
    return gulp.src('src/es6/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream: true}))
})

gulp.task('html:dev', function () {
    return gulp.src('src/tpl/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream: true}))
})

gulp.task('build', ['css', 'js', 'html']);
gulp.task('dev', ['css:dev', 'js:dev', 'html:dev'],function(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
    gulp.watch('src/es6/*.js', ['js:dev']);
    gulp.watch('src/scss/*.scss', ['css:dev']);
    gulp.watch('src/tpl/*.html', ['html:dev']);
});
