// 使用立即执行函数避免全局污染
(function () {
    'use strict';

    function getCurrentLayerName() {
        // 没有打开的文档返回 null
        if (app.documents.length === 0) return null;
        // activeDocument 为当前打开的文档， activeLayer 为当前选中的图层
        var currentLayer = activeDocument.activeLayer;
        return currentLayer ? currentLayer.name : null;
    }

    // 使用全局变量 api 存放我们所有暴露给浏览器代码调用的 API
    // $.global 类似浏览器环境中的 window 和 nodejs 中的 global
    $.global.api = {};
    api.getCurrentLayerName = getCurrentLayerName;
})();
