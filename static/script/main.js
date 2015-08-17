
(function() {

    function browserLanguage() {
        var nav = navigator;
        var lang =  (nav.browserLanguage || nav.language || nav.userLanguage || "").substr(0, 2);
        return  "zh"//lang === "zh" ? "zh" : "en"
    }
    var currentLang = browserLanguage()
    require([currentLang], function(langBag) {
        var menuNodes = []
        var vm = avalon.define(avalon.mix(langBag, {
            $id: "main",
            userLanguage: currentLang,
            currentPath: currentLang + "/introduction.html",
            collectMenu: function() {
                avalon.Array.ensure(menuNodes, this)
            },
            //  concepts: [],//form langBag
            //  statics: {},//form langBag
            //  engineering: [], //form langBag
            //  mobiles: [],//form langBag
            bindings: [
                {
                    name: "ms-controller",
                    id: "controller"
                },
                {
                    name: "one-time",
                    id: "one-time"
                },
                {
                    name: "component",
                    id: "component"
                },
                {
                    name: "ms-important",
                    id: "controller"
                },
                {
                    name: "ms-skip",
                    id: "controller"
                },
                {
                    name: "ms-text",
                    id: "text"
                },
                {
                    name: "ms-html",
                    id: "text"
                },
                {
                    name: "ms-visible",
                    id: "visible"
                },
                {
                    name: "directive",
                    id: "directive"
                },
                {
                    name: "ms-if",
                    id: "if"
                },
                {
                    name: "ms-data-*",
                    id: "data"
                },
                {
                    name: "ms-attr-*",
                    id: "attr"
                },
                {
                    name: "ms-class-*",
                    id: "class"
                },
                {
                    name: "ms-active-*",
                    id: "class"
                },
                {
                    name: "ms-effect",
                    id: "effect"
                },
                {
                    name: "ms-hover-*",
                    id: "class"
                },
                {
                    name: "ms-css-*",
                    id: "css"
                },
                {
                    name: "ms-on-*",
                    id: "on"
                },
                {
                    name: "ms-include",
                    id: "include"
                },
                {
                    name: "ms-duplex",
                    id: "duplex"
                },
                {
                    name: "ms-repeat",
                    id: "repeat"
                },
                {
                    name: "ms-each",
                    id: "repeat"
                },
                {
                    name: "ms-with",
                    id: "repeat"
                },
                {
                    name: "ms-widget",
                    id: "widget"
                },
                {
                    name: "ms-l20n",
                    id: "l20n"
                }
            ].sort(),
            filters: [
                {
                    name: "html",
                    id: "html"
                },
                {
                    name: "uppercase",
                    id: "uppercase"
                },
                {
                    name: "lowercase",
                    id: "lowercase"
                },
                {
                    name: "currency",
                    id: "currency"
                },
                {
                    name: "number",
                    id: "number"
                },
                {
                    name: "escape",
                    id: "escape"
                },
                {
                    name: "truncate",
                    id: "truncate"
                },
                {
                    name: "sanitize",
                    id: "sanitize"
                },
                {
                    name: "date",
                    id: "date"
                }
            ],
            components: [
                {
                    name: "mmRouter",
                    id: "mmRouter"
                }
            ],
            supportSVG: !!window.dispatchEvent,
            changePath: function() {
                var next = this
                setTimeout(function() {
                    vm.currentPath = location.href.split("#")[1]
                    try {
                        window.scrollTo({left: 0, top: 0, behavior: 'smooth'})
                    } catch (e) {
                        window.scrollTo(0, 0)
                    }
                })
                if (next.nodeName === "A" && next.parentNode.nodeName !== "LI") {
                    while (next = next.nextSibling) {
                        if (next.nodeType === 1) {
                            break
                        }
                    }
                    menuNodes.forEach(function(el) {
                        el.style.display = el === next ? "" : "none"
                    })
                }

            },
            highlight: function() {
                SyntaxHighlighter.highlight()
            }
        }))
        var href = location.href
        if (href.indexOf("#zh") !== -1 || href.indexOf("#en") !== -1) {
            vm.currentPath = href.split("#")[1]
        }

        avalon.scan(document.documentElement, vm)
    })

})()
