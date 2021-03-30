

var Config = (function(Config){
    /**
     * 设置请求后台路径
     * @type {string}
     */
    var baseUrl = {
        dev: 'http://localhost/gateway/',      //开发环境请求路径
        // pro: 'http://34l6ih72.paas.talkweb.com.cn/gateway/'          //华为云环境请求路径
        // pro: 'http://api.hngsetc.com/gateway/'          //生成环境
        pro: 'http://api.hngsetc.com/'          //测试环境请求路径
    }

    /**
     * 获取后台请求路径
     * @returns {*|string}
     */
    Config.Host = function() {
        var host = baseUrl.pro;
        var href = self.location.href;
        if(href.indexOf("localhost") != -1 || href.indexOf("127.0.0.1") != -1) {
            host = baseUrl.dev;
        }
        return host;
    }

    Config.key = {
        ACCESS_TOKEN: "pangu_sso_token",
        REFRESH_TOKEN: "pangu_sso_refresh_token",
        USER_NAME: "pangu_user_user_nameX",
        PASSWORD: "pangu_passwordX"
    }
    return Config;
}(Config || {}))
