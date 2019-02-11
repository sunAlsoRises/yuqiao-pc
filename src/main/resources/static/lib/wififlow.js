//JS中navigator对象详解  https://blog.csdn.net/jp571534020/article/details/46738511
//wangluoleixing();//使用该方法。
//获取当前网络状态（说明：能识别的浏览器可判断wifi还是4g，不能识别的一律返回4g）
function wangluoleixing() {
    if (IsPC() == false) {//验证手机端方法
        get_status();
    } else {//验证pc端
        if (navigator.appVersion.indexOf("Chrome")) {
            var resultChrome = navigator.connection.effectiveType;//Chrome浏览器专用获取网络类型（公司网络为4g）
            if (resultChrome == "cellular" || resultChrome == undefined || resultChrome == "4g") { //判断是否为手机流量或者undefined返回4g状态
                resultChrome = "wifi";
            }
            return resultChrome;
        } else {
            var result = navigator.connection.type;
            if (result == "cellular" || result == undefined) {//判断是否为手机流量或者undefined返回4g状态
                result = "4g";
            } else {
                result = "wifi";
            }
            return result;
        }
    }
}
//验证手机端网络类型返回4g或者wifi
function get_status() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;//获取设备的网络连接信息
    var retultmobile = connection.type;
    if (typeof (connection.bandwidth) == "number") {//判断是否有宽带
        if (connection.bandwidth > 10) {//高带宽为wifi 低为4g
            retultmobile = 'wifi';
        } else {
            retultmobile = '4g';
        }
    }
    if (retultmobile == "cellular" || retultmobile == undefined) {//判断是否为手机流量或者undefined返回4g状态
        retultmobile = "4g";
    }
    return connection.type;
}
//验证电脑端返回true手机端 返回false
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}