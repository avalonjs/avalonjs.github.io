
function browserLanguage() {
    var nav = navigator;
    return (nav.browserLanguage || nav.language || nav.userLanguage || "").substr(0, 2);
}
var vm = avalon.define({
    $id: "main",
    userLanguage: browserLanguage() === "zh" ? "zh" : "en",
    currentPath: "zh/introduction.html",
    concepts: [
        {
            name: "非监控属性",
            id: "unobservable"
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
            name: "视图模型",
            id: "vmodel"
        },
        {
            name: "数据模型",
            id: "$model"
        }],
    changePath: function() {
        vm.currentPath = location.href.split("#")[1]
    },
    highlight: function() {
        SyntaxHighlighter.highlight()
    }
})