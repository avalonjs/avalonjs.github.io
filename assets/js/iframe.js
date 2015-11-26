$(function () {
    function reset() {
        if (top != window) {
            var sw = $(document).width()
            var sh = $(document).height()
            console.log(sw, sh)
            $("iframe", top.document).css({
                width: sw,
                height: sh
            })
            document.body.style.padding = 0
        }
    }
    $(window).on("load", reset)
    $(window).on("reset", reset)

})