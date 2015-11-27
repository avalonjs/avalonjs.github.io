$(function () {
    function reset() {
        if (parent != window) {
            
            var sw = $(document).width()
            var sh = $(document).height()
            console.log(sw, sh)
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
            parent.array = array

        }
    }
    $(window).on("load", reset)
    $(window).on("reset", reset)

})