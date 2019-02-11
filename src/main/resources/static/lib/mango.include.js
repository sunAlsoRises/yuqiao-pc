///去http://tool.chinaz.com/js.aspx加密压缩
//
function writejsurl(url) {
    document.write("<script language='javascript' src='" + url + "' > </script>");
}
//var tt_host = "";
//var dnz_win_host = window.location.host;
//var dnz_win_host_array = dnz_win_host.split(".");
//var tt_dev;
//var tt_http = "https";
//var tt_urlbase_domain="https://g.yuqiaocdn.com";
//if (dnz_win_host_array.length < 3) {
//    tt_dev = "dev";
//    tt_http="http";
//    tt_urlbase_domain="http://mango-js.yuqiao.dev";
//} else {
//    tt_dev = dnz_win_host_array[dnz_win_host_array.length - 1];
//    if (tt_dev.indexOf(":")) tt_dev = tt_dev.split(":")[0];
//    if (dnz_win_host_array[0].toLowerCase().indexOf("mango-bbs") < 0) {
//        document.domain = dnz_win_host_array[dnz_win_host_array.length - 2] + "." + tt_dev;
//    }
//}
//if ((window.location.host.indexOf("-jm.yuqiao.") > -1 && tt_dev != "dev") || dnz_win_host_array[dnz_win_host_array.length - 1] == "cc") {
//    tt_host = "-jm";
//    tt_http="http";
//    tt_urlbase_domain="http://mango-js-jm.yuqiao.cc";
//}
//tt_urlbase_domain="https://mangojs153.yuqiao.cn";; 
//writejsurl(tt_urlbase_domain + "/mis/misnet2014js/mango.urlbase.js?v=20150709");//服务器版本sssssss
writejsurl("https://mango-js153.yuqiao.cn/Api.aspx?action=urlbase");
