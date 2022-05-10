import svgSprite from "gulp-svg-sprite";
export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                massage: "Error: <%= error.massage %>"
            }))
        )
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    //Створювати сторінку з перечнем іконок
                    example: true
                }
            },
        }
        ))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}
