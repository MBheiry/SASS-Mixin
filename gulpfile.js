
//---------
const cssPublic = './UserInterface/Public/Linkdev.MofaicAid.Public.Web/CSS/';
const cssInternal = './UserInterface/Internal/Linkdev.MofaicAid.Internal.Web/CSS/';
//---------
const { src, dest, parallel, series, watch, task } = require('gulp');
const sass = require('gulp-sass');
//const run = require('gulp-run-command');
//const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

//---------



//function RunThis(cb) {
//    return run('copy "D:\LD-Project\MofaicAid\MOFAIC Aid\UserInterface\
//Public\Linkdev.MofaicAid.Public.Web\CSS\Style.css" C:\MofaicAid\Public\CSS');
//    //cb();
//}

function css() {
    return src( cssPublic + '_SASS/Style.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest(cssPublic) )
}
function css_Internal() {
    return src( cssPublic + '_SASS/StyleMM.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest(cssPublic) )
}
function cssConcat_Internal() {
    return src([cssInternal + 'Style.css', cssPublic + 'StyleMM.css' ])
        .pipe(concat('Style.css'))
        .pipe( dest(cssInternal) )
}



function uiWatch(cb) {
    //watch([cssPublic + '_SASS/*.scss'], css);
    watch([cssPublic + '_SASS/*.scss'], allCss2);
    //watch(['./UserInterface/**/CSS/_SASS/*.scss'], css);
    //watch(['./gulpfile.js'], uiWatch);

    cb();
}
//task(uiWatch);



const allCss2 = series(parallel(css, css_Internal), cssConcat_Internal);

//watch(['./UserInterface/Public/Linkdev.MofaicAid.Public.Web/CSS/_SASS/*.scss'], css);

//exports.js = js;
exports.uiWatch = uiWatch;
exports.css = css;
exports.allCss2 = allCss2;
//exports.allCss2 = series(parallel(css, css_Internal), cssConcat_Internal);

//exports.allCss2 = series(clean, parallel(css, javascript));
//exports.RunThis = RunThis;
//exports.html = html;
//exports.default = parallel(html, css, js);
//exports.default = parallel(css);

