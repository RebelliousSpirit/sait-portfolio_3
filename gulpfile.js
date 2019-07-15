//подключаем библиотеки Gulp
var gulp         = require('gulp');
//npm install node-sass gulp-sass --save-dev
var sass         = require('gulp-sass');
//browserSync - 'npm install browser-sync --save-dev'
var browserSync  = require('browser-sync');
//npm install --save-dev gulp-concat
var concat    	 = require('gulp-concat');
//npm install --save-dev gulp-uglify
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
//npm install --save gulp-uglifycss
var uglifycss    = require('gulp-uglifycss');
// тестовый таск
gulp.task('hello',function(){
	console.log('Hello World!!!');
});
// преобразует файлы .scss .sass в файл с расширением .css
gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.scss','app/sass/**/*.sass')
	//сжимаем css стили
	.pipe(sass({outputStyle: 'expanded'})).on('error', sass.logError)
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});
gulp.task('html', function () {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function () {
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))
});
// осущетвляет автоматическую перезагрузку страницы при изменениях в файлах.
gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app',
            index: 'portfolio.html'
        },
        notify: false
    });
});
// наблюдение за изменениями в файлах .scss
gulp.task('watch',function(){
	gulp.watch(['app/sass/**/*.scss','app/sass/**/*.sass','app/*.html','app/js/*.js'],gulp.parallel('sass','html','js'));
});
// запускаем все таски по умолчанию командой 'gulp'
gulp.task('default',gulp.parallel('watch','sass','browser-sync'));

//*-------------------------------------------------------------------------------------*//
//*выгружаем готовые файлы в папку продакшн 'dist'
gulp.task('bild',function (){
	var bildJs = gulp.src('app/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));

	var bildJquery = gulp.src('app/bower_components/jquery/dist/jquery.min.js')
	.pipe(gulp.dest('dist/js'));

	var bildCss = gulp.src([
		'app/css/**/*.css'
	])
	.pipe(gulp.dest('dist/css'));

	var blidMainCss = gulp.src('app/css/**/*.css')
	.pipe(uglifycss({
      "maxLineLen": 1,
      "uglyComments": true
    }))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'));

	var bildFonts = gulp.src(['app/fonts/**/*.'])
	.pipe(gulp.dest('dist/fonts'));

	var bildHtml = gulp.src('app/index.html')
	.pipe(gulp.dest('dist'));
});