$(function () {
    function reset() {
        if (parent != window) {
           // setTimeout(function () {
                var sw = $(document).width()
                var sh = Math.min($(document).height(), document.documentElement.offsetHeight)
                $("iframe", parent.document).css({
                    width: sw,
                    height: sh
                })
                document.body.style.padding = 0
                var array = []

                $("h2").each(function () {
                    if (this.id) {
                        array.push({
                            id: this.id,
                            top: $(this).offset().top
                        })
                    }
                })
                parent.activeArray = array
           // })
        }
    }
    $(window).on("load", reset)
    $(window).on("resize", reset)

})