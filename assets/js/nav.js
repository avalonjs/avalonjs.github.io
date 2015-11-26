;(function () {
    var vm = avalon.define({
        $id: "nav",
        array: [
  
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
                        name: "监控数组"
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
                        href: "tutorial/directives/class.html",
                        name: "ms-class"
                    },
                    {
                        href: "tutorial/directives/controller.html",
                        name: "ms-controll"
                    },
                    {
                        href: "tutorial/directives/css.html",
                        name: "ms-css"
                    },
                    {
                        href: "tutorial/directives/duplex.html",
                        name: "ms-duplex"
                    },
                    {
                        href: "tutorial/directives/each.html",
                        name: "ms-repeat"
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
                        href: "tutorial/directives/skip.html",
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
            }
        ]
    })
    avalon.scan(0, vm)

})();