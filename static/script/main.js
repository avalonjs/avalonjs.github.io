
(function() {

    function browserLanguage() {
        var nav = navigator;
        return (nav.browserLanguage || nav.language || nav.userLanguage || "").substr(0, 2);
    }
    var menuNodes = []
    var vm = avalon.define({
        $id: "main",
        userLanguage: browserLanguage() === "zh" ? "zh" : "en",
        currentPath: "zh/introduction.html",
        concepts: [
            {
                name: "视图模型",
                id: "vmodel"
            },
            {
                name: "数据模型",
                id: "$model"
            },
            {
                name: "监控属性",
                id: "observable"
            },
            {
                name: "监控数组",
                id: "collection"
            },
            {
                name: "计算属性",
                id: "computed"
            },
            {
                name: "$watch方法",
                id: "$watch"
            },
            {
                name: "$fire方法",
                id: "$fire"
            },
            {
                name: "非监控属性",
                id: "unobservable"
            }
        ],
        statics: {
            "mix(a,b)": "★★★相当于jQuery.extend，参数个数不定，用于深浅拷贝属性，比如avalon.mix(a), avalon.mix(true, target, c, d)",
            "log(s)": "打印日志, 参数个数不定， 比如<br/>avalon.log(a);<br/> avalon.log(a, b)",
            "isFunction(s)": "判定是否为函数,1.3.6新增 <br/> avalon.isFunction(alert) ==> true",
            "error(s)": "抛出异常，比如avalon.error('类型不正确')",
            "ui": "一个对象，用于放置各种widget的构造器。大家在控制台下查看console.log(avalon.ui)就明白什么回事了。",
            "vmodels": "★★★用于放置avalon.define(id, fn)产生的ViewModel。大家在控制台下查看console.log(avalon.vmodels)就明白什么回事了。",
            "noop": "一个空函数",
            "ready(fn)": "★★★domReady，将回调延迟到DOM树后才执行<br/>" +
                    "avalon.ready(function(){alert('页面上的标签已经全部变成DOM对象')})",
            "oneObject(str | array, val?)": "★★★如果传入一个字符串则将它以逗号转换为一个字符串数组，否则一定要传字符串数组" +
                    "，第二个参数可选，为生成的对象的值。此方法是用于生成一个键名不一样，但键值都一样的对象。比如<br/>" +
                    "avalon.oneObject('a,b,c,d') ==> {a:1, b:1, c:1, d:1}",
            "type(obj)": "★★★返回传参的数据类型，值可能为array, date, object, json, number, string, null, undefined，比如<br/>" +
                    "avalon.type('aaa') ==> 'string' <br/>" +
                    "avalon.type(12345) ==> 'number' <br/>" +
                    "avalon.type(null) ==> 'null' <br/>" +
                    "avalon.type(void 0) ==> 'undefined' <br/>" +
                    "avalon.type(window) ==> 'object' <br/>" +
                    "avalon.type([1,2,3]) ==> 'array' ",
            "isWindow(obj)": "判定是否为window对象",
            "isPlainObject(obj)": "判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例",
            "slice(obj, start?, end?)": "用于转换一个类数组对象为一个纯数组，后面两个为索引值，可以只取原对象的一部分元素，比如<br>" +
                    "avalon.slice(document.getElementsByTagName('p'), 10)<br/>" +
                    "avalon.slice(arguments)",
            "range(start, end, step)": "生成一个整数数组，功能与underscorejs或python的同名函数一致，比如<br>" +
                    "avalon.range(10) ==>  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] <br/>" +
                    "avalon.range(1, 11) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] <br/>" +
                    "avalon.range(0, 30, 5) ==>  [0, 5, 10, 15, 20, 25]<br/>" +
                    "avalon.range(0, -10, -1) ==> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]" +
                    "avalon.range(0) ==> []",
            "bind(el, type, fn, phase?)": "绑定事件，返回一个回调给你自行卸载，比如<br>" +
                    "avalon.bind(document.body, 'keydown', callback)",
            "unbind(el, type, fn, phase)": "卸载事件，比如<br>" +
                    "avalon.unbind(document.body, 'keydown', callback)",
            "each(obj,fn)": "★★★功能同jQuery.each， 都是索引值或键名在前，值或元素在后",
            "avalon.define(id, factory)": "★★★定义一个ViewModel, <br/>" +
                    "旧风格： avalon.define('test', function(vm){ vm.aaa = 1})<br/>" +
                    "新风格： avalon.define({$id: 'test', aaa: 1})",
            "scan(el?, vmodels?)": "★★★扫描DOM树，抽取绑定(el默认为DOM,vmodels默认为空数组<br/>" +
                    "avalon默认在domReady时，从body开始扫描一次，以后自己动态添加了新内容，需要自己手动scan。<br/>" +
                    "如果你的VM是定义在某个回调里面，如require回调，也需要自己手动扫描",
            "define(id?, deps?, factory)": "●一个全局方法，用于定义AMD规范的JS模块",
            "require(deps, callback)": "●一个全局方法，用于加载JS模块",
            "css(node, name, value?)": "如果只有两个参数，读取元素的某个样式，三个参数时，设置元素某个样式;<br/>" +
                    "在设置样式时,如果是长宽等计量属性,你可以直接传一个数值,框架会自动帮你添加px单位;<br/>" +
                    "如果是取值时,你的第三个参数是true,它会帮你去掉单位,转换为纯数值",
            "nextTick(fn)": "延迟执行某个函数，类似于setTimeout(fn, 0)",
            "contains(a, b)": "判定A元素包含B元素，比如<br/>" +
                    "avalon.contains(document.documentElement, document.body) ==> true",
            "parseHTML(str)": "将一段字符串转换为文档碎片",
            "innerHTML(node, str)": "对节点node进行innerHTML操作，在旧式IE下，head, table, td, tr, th等元素的innerHTML是只读，这个方法进行了兼容处理",
            "clearHTML(node)": "清空元素的所有子节点",
            "Array.remove(array, el)": "移除某个元素，成功返回true，失败返回false",
            "Array.removeAt(array, index)": "移除某个位置上的元素，成功返回true，失败返回false",
            "Array.ensure(array, el)": "只有数组不存在此元素时才添加它"


        },
        collectMenu: function() {
            avalon.Array.ensure(menuNodes, this)
        },
        bindings: [
            {
                name: "ms-controller",
                id: "controller"
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
        engineering: [
            {
                name: "跨模块通信",
                id: "communication"
            },
            {
                name: "与jQuery混用",
                id: "jquery"
            },
             {
                name: "加载器",
                id: "loader"
            },
            {
                name: "SEO策略",
                id: "seo"
            },
            {
                name: "与富文本编辑器的整合",
                id: "integratewithrichtext"
            }
        ],
        components: [
            {
                name: "mmRouter",
                id: "mmRouter"
            }
        ],
        mobiles: [
            {
                name: "触屏事件",
                id: "touch"
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
    })
    var href = location.href
    if (href.indexOf("#zh") !== -1 || href.indexOf("#en") !== -1) {
        vm.currentPath = href.split("#")[1]
    }
})()
