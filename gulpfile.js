var gulp = require('gulp')
var path = require('path')
var concat = require('gulp-concat')

var headerUrl = path.join(__dirname, "./partials/header.html")
var footerUrl = path.join(__dirname, "./partials/footer.html")

gulp.task('combo', function () {
//https://github.com/isaacs/node-glob
//http://www.linuxjournal.com/content/bash-extended-globbing
    return gulp.src('./dev/**/*.html', function (a, files) {

        files.forEach(function (file) {
            var fileName = file.match(/[^/]+$/)[0]
            console.log(fileName)
            gulp.src([headerUrl, file, footerUrl])
                    .pipe(concat(fileName))
                    .pipe(gulp.dest(file.replace("/dev", "").replace(fileName, "")))
        })


    })
})

gulp.task('default', ['combo'], function () {
    console.log('合并完毕')
});
