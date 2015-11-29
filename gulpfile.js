var gulp = require('gulp')
var path = require('path')
var concat = require('gulp-concat')
var replace = require('gulp-replace')
var js_beautify = require("./assets/js/beautify").js_beautify
var html_beautify = require("./assets/js/beautify-html").html_beautify
var css_beautify = require("./assets/js/beautify-css").css_beautify

var headerUrl = path.join(__dirname, "./partials/header.html")
var footerUrl = path.join(__dirname, "./partials/footer.html")
var rlt = /</g
var rgt = />/g
var rxmp = /<xmp\s+class\=(['"])(\w+)\1\s*>([\s\S]+?)<\/xmp>/mg
gulp.task('combo', function () {
//https://github.com/isaacs/node-glob
//http://www.linuxjournal.com/content/bash-extended-globbing
    return gulp.src('./dev/**/*.html', function (a, files) {

        files.forEach(function (file) {
            var fileName = file.match(/[^/]+$/)[0]
            var wsn = 100
            gulp.src([headerUrl, file, footerUrl])
                    .pipe(concat(fileName))
                    .pipe(replace(rxmp, function (a, b, c, d) {
                        switch (c) {
                            case "javascript":
                                d = js_beautify(d)
                                break
                            case "css":
                                d = css_beautify(d)
                                break
                            case "html":
                                d = html_beautify(d).replace(rlt,"&lt;").replace(rgt,"&gt;")
                                break
                            default:
                                var lines = d.split(/[\r\n]/)
                                lines.forEach(function (line) {
                                    if (line) {
                                        var ws = line.match(/^\s+/)
                                        if (ws) {
                                            if (ws[0].length < wsn) {
                                                wsn = ws[0].length
                                            }
                                        }
                                    }
                                })
                                if (wsn !== 100) {
                                    d = ""
                                    var rex = new RegExp("^\\s{" + wsn + "}")
                                    lines.forEach(function (line) {
                                        d += line.replace(rex, "") + "\r"
                                    })
                                }
                                d = d.replace(/\s+$/, "")
                                break

                        }
                        return "<div ms-skip style='background:rgb(237,237,237);padding:4px;'><pre class='brush:" + c + ";gutter:false;toolbar:false'>" + d + "</pre></div>"
                    }))
                    .pipe(gulp.dest(file.replace("/dev", "").replace(fileName, "")))
        })


    })
})

gulp.task('default', ['combo'], function () {
    console.log('合并完毕')
});

