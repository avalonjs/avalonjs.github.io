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
                        href: "tutorial/directives/text.html",
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
                    },
                    {
                        href: "tutorial/directives/widget.html",
                        name: "ms-widget"
                    },
                     {
                        href: "tutorial/directives/custom.html",
                        name: "自定义标签"
                    },
                     {
                        href: "tutorial/directives/i20n.html",
                        name: "国际化"
                    }
                ]
            },
            {
                href: "tutorial/filters/index.html",
                name: "过滤器",
                sub: [
                    {
                        href: "camelize",
                        name: "camelize"
                    },
                    {
                        href: "currency",
                        name: "currency"
                    },
                    {
                        href: "date",
                        name: "date"
                    },
                    {
                        href: "escape",
                        name: "escape"
                    },
                    {
                        href: "html",
                        name: "html"
                    },
                    {
                        href: "lowercase",
                        name: "lowercase"
                    },
                    {
                        href: "number",
                        name: "number"
                    },
                    {
                        href: "sanitize",
                        name: "sanitize"
                    },
                    {
                        href: "truncate",
                        name: "truncate"
                    },
                    {
                        href: "uppercase",
                        name: "uppercase"
                    }
                ]
            },
            {
                href: "tutorial/interceptors/index.html",
                name: "拦截器",
                sub: [
                    {
                        href: "ms-duplex-string",
                        name: "ms-duplex-string"
                    },
                    {
                        href: "ms-duplex-checked",
                        name: "ms-duplex-checked"
                    },
                    {
                        href: "ms-duplex-boolean",
                        name: "ms-duplex-boolean"
                    },
                    {
                        href: "ms-duplex-number",
                        name: "ms-duplex-number"
                    }
                ]
            },
            {
                href: "tutorial/component/index.html",
                name: "组件",
                sub: [
                    {
                        href: "callbacks",
                        name: "所有回调的执行顺序"
                    },
                    {
                        href: "config",
                        name: "组件的配置"
                    },
                    {
                        href: "slot",
                        name: "插入点的使用"
                    },
                    {
                        href: "getvm",
                        name: "获取组件VM"
                    },
                    {
                        href: "construct",
                        name: "组件的构建全过程"
                    },
                    {
                        href: "ie68",
                        name: "IE6-8的特殊处理"
                    },
                    {
                        href: "tag",
                        name: "自定义标签"
                    }
                ]
            },
            {
                href: "tutorial/callbacks/index.html",
                name: "回调"
            },
            {
                href: "tutorial/configuration/index.html",
                name: "配置"
            },
            {
                href: "tutorial/engineering/index.html",
                name: "工程化",
                sub:[
                  {
                      href: "tutorial/engineering/jquery.html",
                      name: "与jquery混用"
                  },
                  {
                      href: "tutorial/engineering/weixin.html",
                      name: "在微信中使用"
                  },
                  {
                      href: "tutorial/engineering/loader.html",
                      name: "与requirejs混用"
                  },
                  
                   {
                      href: "tutorial/engineering/project.html",
                      name: "样板工程"
                  },
                ]
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
