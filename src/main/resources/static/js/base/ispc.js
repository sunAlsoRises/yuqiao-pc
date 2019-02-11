/*判断是否为Mobile*/
function getIsMobile() {
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = ["iphone", "android", "phone", "mobile", "wap", "netfront", "java", "opera mobi", "opera mini", "ucweb", "windows ce", "symbian", "series", "webos", "sony", "blackberry", "dopod", "nokia", "samsung", "palmsource", "xda", "pieplus", "meizu", "midp", "cldc", "motorola", "foma", "docomo", "up.browser", "up.link", "blazer", "helio", "hosin", "huawei", "novarra", "coolpad", "webos", "techfaith", "palmsource", "alcatel", "amoi", "ktouch", "nexian", "ericsson", "philips", "sagem", "wellcom", "bunjalloo", "maui", "smartphone", "iemobile", "spice", "bird", "zte-", "longcos", "pantech", "gionee", "portalmmm", "jig browser", "hiptop", "benq", "haier", "^lct", "320x320", "240x320", "176x220", "w3c ", "acs-", "alav", "alca", "amoi", "audi", "avan", "benq", "bird", "blac", "blaz", "brew", "cell", "cldc", "cmd-", "dang", "doco", "eric", "hipt", "inno", "ipaq", "java", "jigs", "kddi", "keji", "leno", "lg-c", "lg-d", "lg-g", "lge-", "maui", "maxo", "midp", "mits", "mmef", "mobi", "mot-", "moto", "mwbp", "nec-", "newt", "noki", "oper", "palm", "pana", "pant", "phil", "play", "port", "prox", "qwap", "sage", "sams", "sany", "sch-", "sec-", "send", "seri", "sgh-", "shar", "sie-", "siem", "smal", "smar", "sony", "sph-", "symb", "t-mo", "teli", "tim-", "tsm-", "upg1", "upsi", "vk-v", "voda", "wap-", "wapa", "wapi", "wapp", "wapr", "webc", "winw", "winw", "xda", "xda-", "googlebot-mobile"];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

if (getIsMobile()) {
    var url = window.location.href;
    if (url.indexOf("/i/") <= -1 && url.indexOf("/sell/") <= -1 && url.indexOf("/buy/") <= -1 && url.indexOf("/writedir/")<=-1 && url.indexOf("m.shop")<=-1) {
        var href = location.protocol + "//m." + location.host + location.pathname;
        href = href.replace("m.www.", "m.").replace("m.m.", "m.");
        if (!getCookie("IsSelectWeb"))
            location.href = href;
        else
            document.onreadystatechange = function () {
                if (document.readyState == 'complete') {
                    document.body.innerHTML += "<div class='backmobile'><a href=\"javascript: var exp = new Date(); exp.setTime(exp.getTime() + 2 * 60 * 60 * 1000); document.cookie = 'expires=' + exp.toGMTString() + ';path=/;domain=.yuqiao.'+location.host.split('.')[location.host.split('.').length-1];location.href='" + href + "'\">返回手机版网站</a><span onclick=\"this.parentNode.style.display='none'\">&#xe646;</span>";
                }
            }
    } 

} 