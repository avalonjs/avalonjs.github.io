;
(function () {
    var bannerHeight = $(".navbar .container").height() - 10
    window.activeArray = []
    var vm = avalon.define({
        $id: "nav",
        aname: "",
        bname: "",
        aclick: function (href, e) {
            vm.aname = href
            $('html,body').animate({scrollTop: 0}, 500)
        },
        bclick: function (href, e) {
            vm.bname = href
            //如果从一个子页跳转到另一个子页
            if (window.activeArray.length <= 1) {
                $('html,body').animate({
                    scrollTop: 0
                }, 500)
            } else {
                //如果是一个子页间的锚点的移动
                window.activeArray.some(function (el) {
                    if (el.id === href) {
                        $('html,body').animate({
                            scrollTop: Math.max(0, el.top - bannerHeight)
                        }, 500)
                    }
                })
            }
        },
        array: [
            {
                href: "tutorial/home/index.html",
                name: "介绍",
                sub: [
                    {
                        href: "home-download",
                        name: "下载"
                    },
                    {
                        href: "home-cdn",
                        name: "CDN"
                    },
                    {
                        href: "home-10",
                        name: "10秒看懂avalon"
                    },
                    {
                        href: "home-origin",
                        name: "avalon的起源"
                    }

                ]
            },
            {
                href: "tutorial/concepts/index.html",
                name: "核心概念",
                sub: [
                    {
                        href: "tutorial/concepts/vmodel.html",
                        name: "视图模型"
                    },
                    {
                        href: "tutorial/concepts/$model.html",
                        name: "数据模型"
                    },
                    {
                        href: "tutorial/concepts/observable.html",
                        name: "监控属性"
                    },
                    {
                        href: "tutorial/concepts/collection.html",
                        name: "监控数组"
                    },
                    {
                        href: "tutorial/concepts/computed.html",
                        name: "计算属性"
                    },
                    {
                        href: "tutorial/concepts/$watch.html",
                        name: "$watch方法"
                    },
                    {
                        href: "tutorial/concepts/$unwatch.html",
                        name: "$unwatch方法"
                    },
                    {
                        href: "tutorial/concepts/unobservable.html",
                        name: "非监控属性"
                    }
                ]
            },
            {
                href: "tutorial/directives/index.html",
                name: "指令",
                sub: [
                    {
                        href: "tutorial/directives/attr.html",
                        name: "ms-attr"
                    },
                    {
                        href: "tutorial/directives/class.html",
                        name: "ms-active"
                    },
                    {
                        href: "tutorial/directives/controller.html",
                        name: "ms-controller"
                    },
                    {
                        href: "tutorial/directives/class.html",
                        name: "ms-class"
                    },
                    {
                        href: "tutorial/directives/css.html",
                        name: "ms-css"
                    },
                    {
                        href: "tutorial/directives/data.html",
                        name: "ms-data"
                    },
                    {
                        href: "tutorial/directives/duplex.html",
                        name: "ms-duplex"
                    },
                    {
                        href: "tutorial/directives/repeat.html",
                        name: "ms-each"
                    },
                    {
                        href: "tutorial/directives/effect.html",
                        name: "ms-effect"
                    },
                    {
                        href: "tutorial/directives/html.html",
                        name: "ms-html"
                    },
                    {
                        href: "tutorial/directives/class.html",
                        name: "ms-hover"
                    },
                    {
                        href: "tutorial/directives/if.html",
                        name: "ms-if"
                    },
                    {
                        href: "tutorial/directives/controller.html",
                        name: "ms-important"
                    },
                    {
                        href: "tutorial/directives/include.html",
                        name: "ms-include"
                    },
                    {
                        href: "tutorial/directives/on.html",
                        name: "ms-on"
                    },
                    {
                        href: "tutorial/directives/repeat.html",
                        name: "ms-repeat"
                    },
                    {
                        href: "tutorial/directives/controller.html",
                        name: "ms-skip"
                    },
                    {
                        href: "tutorial/directives/text.html",
                        name: "ms-text"
                    },
                    {
                        href: "tutorial/directives/visible.html",
                        name: "ms-visible"
                    },
                    {
                        href: "tutorial/directives/repeat.html",
                        name: "ms-with"
                    }
                ]
            },
            {
                href: "tutorial/filters/index.html",
                name: "过滤器",
                sub: [
                    {
                        href: "tutorial/filters/camelize.html",
                        name: "camelize"
                    },
                    {
                        href: "tutorial/filters/currency.html",
                        name: "currency"
                    },
                    {
                        href: "tutorial/filters/date.html",
                        name: "date"
                    },
                    {
                        href: "tutorial/filters/escape.html",
                        name: "escape"
                    },
                    {
                        href: "tutorial/filters/html.html",
                        name: "html"
                    },
                    {
                        href: "tutorial/filters/lowercase.html",
                        name: "lowercase"
                    },
                    {
                        href: "tutorial/filters/number.html",
                        name: "number"
                    },
                    {
                        href: "tutorial/filters/sanitize.html",
                        name: "sanitize"
                    },
                    {
                        href: "tutorial/filters/truncate.html",
                        name: "truncate"
                    },
                    {
                        href: "tutorial/filters/uppercase.html",
                        name: "uppercase"
                    }
                ]
            },
            {
                href: "tutorial/interceptors/index.html",
                name: "拦截器"
            },
            {
                href: "tutorial/component/index.html",
                name: "组件"
            }

        ]
    })

    avalon.scan(0, vm)
    $(".navbar-nav a").click(function (e) {
        var hash = this.getAttribute("href", 2)
        if (hash.indexOf("/") > 0) {
            vm.aname = hash.replace(/^#/, "")
        }
    })
    var bname = ""
    var now = new Date - 0

    $(window).scroll(function () {
        var then = new Date
        if (then - now > 30) {
            now = then
            var height = $(window).scrollTop()
            var name = ""
            window.activeArray.forEach(function (el) {
                if (el.top + bannerHeight < height) {
                    name = el.id
                }
            })

            if (name != bname && name) {
                bname = vm.bname = name
            }
        }

    })
})();