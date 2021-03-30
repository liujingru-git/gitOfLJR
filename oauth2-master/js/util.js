/**
 * 相关工具类
 */
var Util = (function(Util){
    /**
     * 根据参数名获取参数值
     * @param name
     * @returns {*}
     */
    Util.getParam = function(name,key) {
        var pObj = Util.getParams();
        if(!$.isEmptyObject(pObj)) {
            return pObj[name];
        } else {
            return "";
        }
    }
    /**
     * 获取所有参数，封装成对象
     */
    Util.getParams = function() {
        var paramObj = {};
        var url = window.location.href;
        if(url.indexOf('?') < 0) {
            return paramObj;
        }
        var keyValueArr = url.split('?')[1].split('&');
        for(var i = 0; i < keyValueArr.length; i++) {
            var keyValue = keyValueArr[i].split('=');
            paramObj[keyValue[0]] = keyValue[1];
        }
        return paramObj
    }

    /**
     * 判断字符串是否为空，包括undefined/null
     * @param str
     * @returns {Boolean}
     */
    Util.isEmpty = function (str){
        try {
            if (str == "  " || str == "" || str == " "
                || str == null || str == "null" || str.length == 0
                || typeof str === "undefined" || str === "undefined") {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    return Util;
}(Util || {}))