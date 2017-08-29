var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

var sourceAppClientThemesDefaultHome = "app/client/themes/default/views/home/";
var buildAppClientThemesDefaultContent = "www/themes/client/default/content/";

gulp.task('StyleBuildManager', function () {
  return gulp.src(sourceAppClientThemesDefaultHome + '*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildAppClientThemesDefaultContent + 'css'))
});

gulp.task('ScriptBuildManager', function () {
  return gulp.src(
    [
      //Application Client Home
      sourceAppClientThemesDefaultHome + 'script.js'
    ]
  )
    .pipe(gulp.dest(buildAppClientThemesDefaultContent + 'js/'))
});

gulp.task('default', ['StyleBuildManager', "ScriptBuildManager"]);