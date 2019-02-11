

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function getPositionSize(element) {
    var l = element.offsetLeft;
    var t = element.offsetTop;
    var w = element.offsetWidth;
    var h = element.offsetHeight;
    while (element = element.offsetParent) {
        l += element.offsetLeft;
        t += element.offsetTop;
    }
    return { t: t, l: l, w: w, h: h };
}
function myScroll() {
    var x = document.body.scrollTop || document.documentElement.scrollTop;
    var timer = setInterval(function () {
        x = x - 100;
        if (x < 100) {
            x = 0;
            window.scrollTo(x, x);
            clearInterval(timer);
        }
        window.scrollTo(x, x);
    }, "1");
}
$(document).ready(function () {
    $("a[name='menu']").mouseover(function () {
        $("a[name='menu']").parent().find("ul").css("display", "none");
        var ul = $(this).parent().find("ul");
        if (ul.length != 0) {
            ul.css("display", "");
            var thisWidth = this.offsetWidth;
            var ulWidth = ul[0].offsetWidth;
            var left = parseInt((thisWidth - ulWidth) / 2);
            ul.css("left", left + "px");
        }
    });
    $("a[name='menu']").mouseleave(function () {
        var ul = $(this).parent().find("ul");
        if (ul.length != 0) {
            var event = arguments[0] || window.event;
            var ulsize = getPositionSize(ul[0]);
            var x = event.clientX;
            var y = event.clientY;
            var isul = x < ulsize.l || x > ulsize.l + ulsize.w || y < ulsize.t || y > ulsize.t + ulsize.h;
            if (isul) {
                ul.css("display", "none");
            }
        }
    });
    $("a[name='menu']").parent().find("ul").mouseleave(function () {
        var btnsize = getPositionSize($(this).parent().find("a")[0]);
        var event = arguments[0] || window.event;//兼容火狐
        var x = event.clientX;
        var y = event.clientY;
        var isbtn = x < btnsize.l || x > btnsize.l + btnsize.w || y < btnsize.t || y > btnsize.t + btnsize.h;
        if (isbtn) {
            $(this).css("display", "none");
        }
    });

    $(".city-select").mouseover(function () {
        $(".city-list").show();
    });
    $(".city-select").mouseleave(function () {
        $(".city-list").hide();
    });

    function actions(id) {
        $(".r-f-content-1").hide();
        $(id).show();
    }
    function _open() {
        $(".r-f-content-1").hide();
    }

    $(".main_menu li").hover(
        function () {
            $(this).addClass("hover");
            $(this).children("ul li").attr('class', '');
        }, function () {
            $(this).removeClass("hover");
            $(this).children("ul li").attr('class', '');

        });
    $(".main_menu li.no_sub").hover(
        function () {
            $(this).addClass("hover1");
        }, function () {
            $(this).removeClass("hover1");
        });

    chected_ul();

    $(".h-nav li ul li a").mouseover(function () {
        $(this).parent().parent().parent().find("a").eq(0).mouseenter();
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $("#dingbu").show();
        } else {
            $("#dingbu").hide();
        }
    });
    if (location.pathname.toLowerCase().indexOf('/ucenter/') == -1) {
        $("#view_ls").parent().css("display", "");
        $("#view_db").parent().css("display", "");
        $("#view_sc").parent().css("display", "");
    }
});
var timeCount;
var cookieName = "";
function chected_ul() {

    var inm = window.location.pathname.toLowerCase();
    if (inm.indexOf('ershoufang') > -1 && inm.indexOf('xiaoqu') == -1 && inm.indexOf("usercenter") == -1) {
        inm = "ershoufang";
        cookieName = "esf_db";
        timeCount = setInterval(function () { getdata(cookieName); }, 1000);
    }else if (inm.indexOf('zufang') > -1 && inm.indexOf('xiaoqu') == -1 && inm.indexOf("usercenter") == -1) {
        inm = "zufang";
        cookieName = "zf_db";
        timeCount = setInterval(function () { getdata(cookieName); }, 1000);
    } else if (inm.indexOf('xiaoqu') > -1 && inm.indexOf("usercenter") == -1) {
        inm = "xiaoqu";
        cookieName = "xq_db";
        timeCount = setInterval(function () { getdata(cookieName); }, 1000);
    } else if (inm.indexOf('jingjiren') > -1 && inm.indexOf('xiaoqu') == -1 && inm.indexOf("usercenter") == -1) {
        inm = "jingjiren";
    } else if (inm.indexOf('xinwen') > -1 && inm.indexOf('xiaoqu') == -1 && inm.indexOf("usercenter") == -1) {
        inm = "/xinwen/";
    } else if (inm.indexOf('daikuan') > -1 && inm.indexOf('xiaoqu') == -1 && inm.indexOf("usercenter") == -1) {
        inm = "/daikuan/";
    } else if (inm.indexOf('shangyongfang') > -1 && inm.indexOf('xiaoqu') == -1 && inm.indexOf("usercenter") == -1) {
        inm = "/shangyongfang/";
    }


    var items = document.getElementsByName('menu');
    var i = 0;
    for (; i < items.length; i++) {
        if ($(items[i]).attr("href").toLowerCase().indexOf(inm) > -1) {
            $(items[i]).attr("class", "a-off");
            var $_parent = $(items[i]).parent(),
                curW = $_parent.outerWidth(true),
                curP = $_parent.position().left;

            $slider = $(".curBg"),
            $navBox = $(".h-nav");
            $targetEle = $(items),
            $slider.animate({
                "left": curP,
                "width": curW
            });
            $targetEle.mouseenter(function () {
                var $_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
                $slider.stop(true, true).animate({
                    "left": posL,
                    "width": _width
                }, "fast");
            });
            $navBox.mouseleave(function (cur, wid) {
                cur = curP;
                wid = curW;
                $slider.stop(true, true).animate({
                    "left": cur,
                    "width": wid
                }, "fast");
            });
            break;
        } else {
            $(items[i]).attr("class", false);
        }
    }
    if (i == items.length && items.length != 0) {
        var $_parent = $(".h-nav a").parent(),
         curW = $_parent.outerWidth(true),
         curP = $_parent.position().left;
        $slider = $(".curBg"),
            $navBox = $(".h-nav");
        $targetEle = $(items),
            $slider.animate({
                "left": curP,
                "width": curW
            });
        $targetEle.mouseenter(function () {
            var $_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
            $slider.stop(true, true).animate({
                "left": posL,
                "width": _width
            }, "fast");
        });
        $navBox.mouseleave(function (cur, wid) {
            cur = curP;
            wid = curW;
            $slider.stop(true, true).animate({
                "left": cur,
                "width": wid
            }, "fast");
        });
    }
}

function startTime() {
    timeCount = setInterval(function () { getdata(cookieName); }, 1000);
}

function stopTime() {
    clearInterval(timeCount);
}
function tag(a, type) {
    $(a).parent().find("a").attr("class", false);
    $(a).attr("class", "tag-hover");
    var param = $(a).attr("param");
    $("#" + param + "_" + type).parent().find("ul").css("display", "none");
    $("#" + param + "_" + type).css("display", "");
}
function jempduibi(type) {
    var items = $("#" + type + " .tagtab a");
    var param = "";
    for (var i = 0; i < items.length; i++) {
        if ($(items[i]).attr("class") == "tag-hover") {
            param = $(items[i]).attr("param");
        }
    }
    if (type == "db") {
        var arrayDuibi = getcookie(param + "_db");
        if (arrayDuibi.length > 1) {
            window.open('/duibi/' + param + '/');
        } else {
            $.alert("提示", "对比数量不能小于2个！");
        }
    } else {
        var typeName = "";
        if (param == "esf") {
            typeName = "ershoufang";
        } else if (param == "zf") {
            typeName = "zufang";
        } else if (param == "xq") {
            typeName = "xiaoqu";
        } else if (param == "jjr") {
            typeName = "jingjiren";
        }
        var typeText = "";
        if (type == "ls") {
            typeText = "lishi";
        } else if (type == "sc") {
            typeText = "shoucang";
        }
        window.open("/usercenter/" + typeText + "/" + typeName + "/");
    }

}
function actions(id) {
    $(".r-f-content-1").hide();
    var url = location.pathname.toLowerCase();
    var name = id.substring(1);
    $(id + " ul").html("");
    getdata("esf_" + name);
    getdata("zf_" + name);
    getdata("xq_" + name);
    getdata("jjr_" + name);

    var isSelected = false;

    if (name != "db") {
        if (url.indexOf("jingjiren") > -1) {
            var items = $(id + " .tagtab a");
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).attr("param") == "jjr") {
                    items[i].click();
                    isSelected = true;
                }
            }
        }
    }
    if (url.indexOf("xiaoqu") > -1) {
        var items = $(id + " .tagtab a");
        if (url.indexOf("ershoufang") > -1) {
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).attr("param") == "esf") {
                    items[i].click();
                }
            }
        } else if (url.indexOf("zufang") > -1) {
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).attr("param") == "zf") {
                    items[i].click();
                    isSelected = true;
                }
            }
        }
        else {
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).attr("param") == "xq") {
                    items[i].click();
                    isSelected = true;
                }
            }
        }
    }
    if (url.indexOf("zufang") > -1) {
        var items = $(id + " .tagtab a");
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).attr("param") == "zf") {
                items[i].click();
                isSelected = true;
            }
        }
    }
    if (!isSelected) {
        var items = $(id + " .tagtab a");
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).attr("param") == "esf") {
                items[i].click();
            }
        }
    }
    $(id).show();
}
var url001 = window.location.origin;
var xqTemplate = "<li name=\"{id}\" class=\"clearfix\"><a href=\"" + url001 + "/xiaoqu/{xqpy}/\" target=\"_blank\"><img src=\"{img}\" onerror=\"this.src='" + XqPhoto + "/images/none.gif'\"/></a><div class=\"r-lishi-fy-info\"><span><a href=\"" + url001 + "/xiaoqu/{xqpy}/\" target=\"_blank\">{xqname}</a></span><a href=\"" + url001 + "/xiaoqu/{xqpy}/ershoufang/\" target=\"_blank\">二手房<strong>{sell}</strong>套</a><br /><a href=\"" + url001 + "/xiaoqu/{xqpy}/zufang/\" target=\"_blank\">租房<strong>{rent}</strong>套</a></div><div class=\"db-del\"><a href=\"javascript:void(0)\" onclick=\"cookieremove('{NAME}','{xqid}');\" title=\"删除\">X</a></div></li>";
var esfTemplate = "<li name=\"{id}\" class=\"clearfix\"><a href=\"" + url001 + "/ershoufang/{houseid}/\" target=\"_blank\"><img src=\"{img}\" width=\"80px\" height=\"60px\" onerror=\"this.src='" + HousePhoto + "/images/none.gif'\"/></a><div class=\"r-lishi-fy-info\"><span><a href=\"" + url001 + "/ershoufang/{houseid}/\" target=\"_blank\">{title}</a></span><strong>{psum}万</strong>/<i>{room}室{hall}厅{bathroom}卫</i>/<i>{mianji}㎡</i>/<i>{cx}</i>/<i>{zx}</i>/<i>{punit}元/㎡</i></div><div class=\"db-del\" style=\"display:none\"><a href=\"javascript:void(0)\" onclick=\"cookieremove('{NAME}','{UPDATEID}');\" title=\"删除\">X</a></div></li>";
var zfTemplate = "<li name=\"{id}\" class=\"clearfix\"><a href=\"" + url001 + "/zufang/{houseid}/\" target=\"_blank\"><img src=\"{img}\" width=\"80px\" height=\"60px\" onerror=\"this.src='" + HousePhoto + "/images/none.gif'\"/></a><div class=\"r-lishi-fy-info\"><span><a href=\"" + url001 + "/zufang/{houseid}/\" target=\"_blank\">{title}</a></span><strong>{psum}元</strong>/<i>{room}室{hall}厅{bathroom}卫</i>/<i>{mianji}㎡</i>/<i>{cx}</i>/<i>{zx}</i></div><div class=\"db-del\"><a href=\"javascript:void(0)\" onclick=\"cookieremove('{NAME}','{UPDATEID}');\" title=\"删除\">X</a></div></li>";
var jjrTemplate = "<li name=\"{id}\" class=\"clearfix\"><a href=\"" + url001 + "/s/{userid}/\" target=\"_blank\"><img src=\"{img}\" height=\"75px\" onerror=\"this.src='" + UserPhoto + "/imgurl/nophoto.gif'\"/></a><div class=\"r-lishi-fy-info\"><span><a href=\"" + url001 + "/s/{userid}/\" target=\"_blank\">{orgname} - {username2}</a></span><span>电话:{mobile}</span><a href=\"" + url001 + "/sell/{userid}/\" target=\"_blank\">委托卖房</a><br /><a href=\"" + url001 + "/buy/{userid}/\" target=\"_blank\">委托买房</a></div><div class=\"db-del\"><a href=\"javascript:void(0)\" onclick=\"cookieremove('{NAME}','{UPDATEID}');\" title=\"删除\">X</a></div></li>";
function getdata(name) {
    if (name.split('_')[1] == "db") {
        $("#" + name + " li").each(function () {
            var houseId = $(this).attr("name");
            if (getTimeByCookie(name, houseId) == null) {
                $("#db_" + houseId).text("加入对比");
            }
        });
    }

    var type = name.split('_')[0];
    var template = "";
    var updateid = "";
    var url = "";
    switch (type) {
        case "esf":
            template = esfTemplate;
            updateid = "houseid";
            url = "ershoufang/";
            break;
        case "zf":
            template = zfTemplate;
            updateid = "houseid";
            url = "zufang/";
            break;
        case "xq":
            template = xqTemplate;
            updateid = "xqpy";
            url = "xiaoqu/";
            break;
        case "jjr":
            template = jjrTemplate;
            updateid = "userid";
            url = "jingjiren/";
            break;
    }
    var items = getcookie(name);
    var html = "";
    if (items.length == 0) {
        $("#" + name).css("cursor", "default");
        html = "<center>您还没有" + $("#view_" + name.split('_')[1]).text() + "相关信息!" + (location.pathname.substring(1, type.length + 1) == type ? "" : "<br /><a href=\"/" + url + "\" target=\"_blank\" style='color:blue'>马上看看?</a>") + "</center>";
    }
    for (var i = 0; i < items.length; i++) {
        if (items[i] == "" || items[i].split("|").length != 3)
            break;
        var id = items[i].split("|")[0];
        var data = items[i].split("|")[2].split('&');
        var temp = template;
        for (var j = 0; j < data.length; j++) {
            if (updateid == data[j].split('=')[0].toLocaleLowerCase()) {
                temp = temp.replace(new RegExp("{UPDATEID}", 'g'), data[j].split('=')[1]);
            }
            var htmlName = data[j].split('=')[0];
            var htmlText = data[j].split('=')[1];
            if (htmlName == "img") {
                htmlText = HousePhoto + htmlText;
            }
            temp = temp.replace(new RegExp("{" + htmlName + "}", 'g'), htmlText);
        }
        temp = temp.replace(/{NAME}/g, name);
        temp = temp.replace(new RegExp("{id}", 'g'), id);
        if (temp.indexOf("{") <= -1 && temp.indexOf("}") <= -1) {
            html += temp;
        }
    }
    $("#" + name).html(html);
    //if (name.split('_')[1] != "ls") {
    $('.r-f-content-1 ul li').mousemove(function () {
        $(this).find('.db-del').slideDown();
    });
    $('.r-f-content-1 ul li').mouseleave(function () {
        $(this).find('.db-del').slideUp("fast");
    });
    //}
}

function convertImg(img) {
    var url = HousePhoto;
    if (img.indexOf(url) != -1) {
        return img;
    } else if (img == "" || img == null || img == "images/none.gif") {
        url = HousePhoto+"images/none.gif";
    } else {
        url += img;
    }
    return url;
}
function ly() {
    $(".r-f-content-1").hide();
    $('#liuyan').show();
}
function _open() {
    $(".r-f-content-1").hide();
}
function cookieadd(name, id, data) {
    var arrayName = name.split('_');
    if (getTimeByCookie(name, id) != null) {
        cookieremove(name, id);
        if (arrayName[1] != "ls") {
            return 1;
        }
    }

    var typeName = "";
    switch (arrayName[1]) {
        case "db":
            typeName = "对比";
            break;
        case "sc":
            typeName = "收藏";
            break;
    }

    var array = getcookie(name);
    //if (arrayName[1] == "db" && array.length >= 4) {
    //    $.alert("提示", "对比列表已满,请删除!", 140, 80, function () { jempduibi("db"); });
    //    return 0;
    //}
    var cookiestr = "";
    var num = 0;
    var arrayCookieLength = array.length;
    if (arrayCookieLength == 4) {
        arrayCookieLength = 3;
        var hId = array[3].split("|")[0];
        $("#" + arrayName[1] + "_" + hId).text("加入" + typeName);
    }
    for (var i = 0; i < arrayCookieLength; i++) {
        if (array[i].split("|")[0] != id) {
            cookiestr += "^" + array[i];
            num++;
            //最大长度检测
            if (num == 6) {
                break;
            }
        }
    }
    while (cookiestr != "" && cookiestr[0] == "^") {
        cookiestr = cookiestr.substring(1);
    }
    if (cookiestr == "") {
        cookiestr = id + "|" + new Date().getTime() + "|" + data;
    } else {
        cookiestr = id + "|" + new Date().getTime() + "|" + data + "^" + cookiestr;
    }
    $.cookie(name, cookiestr, { expires: 7, path: '/' });
    switch (name.split("_")[1]) {
        case "db": $("#view_db").mouseover(); break;
        case "sc": $("#view_sc").mouseover(); break;
    }
    if (document.getElementById(arrayName[1] + "_" + id) != null) {
        $("#" + arrayName[1] + "_" + id).text("取消" + typeName);
    } else {
        $("#" + arrayName[1] + "_" + id).text("加入" + typeName);
    }
    if (web_userid != "" && web_userid != null && (arrayName[1] == "sc" || arrayName[1] == "ls")) {
        var typenum;
        switch (arrayName[0]) {
            case "esf":
                typenum = 1;
                break;
            case "zf":
                typenum = 2;
                break;
            case "xq":
                typenum = 3;
                break;
            case "jjr":
                typenum = 4;
                break;
        }
        switch (arrayName[1]) {
            case "sc":
                $.post("/Ashx/FavHandler.ashx", { "method": "Add", "favClass": typenum, "UserId": web_userid, "MapId": id });
                break;
            case "ls":
                $.post("/Ashx/HistoryHandler.ashx", { "method": "Add", "HisType": typenum, "UserId": web_userid, "MapId": id });
                break;
        }
    }
    return 1;
}
function getcookie(name) {
    var cookievalue = $.cookie(name);
    var array = new Array();
    if (cookievalue != null) {
        var num = 0;
        for (var i = 0; i < cookievalue.split("^").length; i++) {
            var item = cookievalue.split("^")[i];
            if (item != "") {
                array[num] = item;
                num++;
            }
        }
    }
    return array;
}
function getTimeByCookie(name, id) {
    var array = getcookie(name);
    var times = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].split("|")[0] == id) {
            times = array[i].split("|")[1];
        }
    }
    if (times == 0) {
        return null;
    }
    var date = new Date(parseInt(times));
    var now = new Date();
    var result = "";
    switch (parseInt((now - date) / 1000 / 60 / 60 / 24)) {
        case 0: result = "今天"; break;
        case 1: result = "昨天"; break;
        case 2: result = "前天"; break;
        default: result = (date.getYear() + 1900) + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日"; break;
    }
    return result + " " + date.getHours() + ":" + date.getMinutes();
}
function cookieremove(name, id, func) {
    var array = getcookie(name);
    var cookiestr = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].split("|")[0] != id) {
            cookiestr += array[i] + "^";
        }
    }
    while (cookiestr != "" && cookiestr.substring(cookiestr.length - 1) == "^") {
        cookiestr = cookiestr.substring(0, cookiestr.length - 1);
    }
    $.cookie(name, cookiestr, { expires: 7, path: '/' });

    if (func != null) {
        func();
    }
    getdata(name);
    var arrayName = name.split('_');
    var typeName = "";
    switch (arrayName[1]) {
        case "db":
            typeName = "对比";
            break;
        case "sc":
            typeName = "收藏";
            break;
    }
    if (document.getElementById(arrayName[1] + "_" + id) != null) {
        $("#" + arrayName[1] + "_" + id).text("加入" + typeName);
    }

    if (web_userid != "" && (arrayName[1] == "ls" || arrayName[1] == "sc")) {
        var typenum;
        switch (arrayName[0]) {
            case "esf":
                typenum = 1;
                break;
            case "zf":
                typenum = 2;
                break;
            case "xq":
                typenum = 3;
                break;
            case "jjr":
                typenum = 4;
                break;
        }
        switch (arrayName[1]) {
            case "sc":
                $.post("/Ashx/FavHandler.ashx", { "method": "Delete", "favClass": typenum, "UserId": web_userid, "MapId": id }, function (json) {
                    if (json.data != null) {
                        $("#collection" + json.data).hide();
                    }
                });
                break;
            case "ls":
                $.post("/Ashx/HistoryHandler.ashx", { "method": "Delete", "HisType": typenum, "UserId": web_userid, "MapId": id }, function (json) {
                    if (json.data != null) {
                        $("#history" + json.data).hide();
                    }
                });
                break;
        }
    }
}

function cookieclear(element) {
    var parentDiv = $(element).parent().parent();
    var id = $(parentDiv).attr("id");
    var items = $(parentDiv).find(".tagtab a");
    var param = "";
    for (var i = 0; i < items.length; i++) {
        if ($(items[i]).attr("class") == "tag-hover") {
            param = $(items[i]).attr("param");
        }
    }
    var name = param + "_" + id;
    var typenum = "";

    if (id == "db") {
        if (param == "esf") {
            $("a[name='esf_list_db']").text("加入对比");
            $("a[name='esf_content_db']").text("加入对比");
        }
        if (param == "zf") {
            $("a[name='zf_list_db']").text("加入对比");
            $("a[name='zf_content_db']").text("加入对比");
        }
        if (param == "xq") {
            $("a[name='xq_list_db']").text("加入对比");
            $("a[name='xq_content_db']").text("加入对比");
        }
        $.cookie(name, null, { expires: 7, path: '/' });
        $("#" + param + "_" + id).html("");
    }
    if (id == "sc" || id == "ls") {
        var ids = "";
        if (param == "esf") {
            $("#esf_" + id + " li").each(function () {
                var houseId = $(this).attr("name");
                ids += houseId + ",";
            });
            typenum = "1";
        }
        if (param == "zf") {
            $("#zf_" + id + " li").each(function () {
                ids += $(this).attr("name") + ",";
            });
            typenum = "2";
        }
        if (param == "xq") {
            $("#xq_" + id + " li").each(function () {
                ids += $(this).attr("name") + ",";
            });
            typenum = "3";
        }
        if (param == "jjr") {
            $("#jjr_" + id + " li").each(function () {
                ids += $(this).attr("name") + ",";
            });
            typenum = "4";
        }
        if (ids != "" && ids != null) {
            ids = ids.substring(0, ids.length - 1);
        }

        var arrayIds = ids.split(',');
        var newCookie = $.cookie(name);
        if (newCookie != null && newCookie != "") {
            var array = newCookie.split('^');
            for (var i = 0; i < array.length; i++) {
                var item = array[i].split('|')[0];
                for (var j = 0; j < arrayIds.length; j++) {
                    if (arrayIds[j] == item) {
                        newCookie = newCookie.replace(array[i], "") + "^";
                    }
                }
            }
        }
        $.cookie(name, newCookie, { expires: 7, path: '/' });
        var typeText = "";
        if (id == "sc") {
            typeText = "收藏";
        } else if (id == "ls") {
            typeText = "历史";
        }
        if (param == "esf") {
            $("a[name='esf_content_" + id + "']").text("加入" + typeText);
            $("#esf_" + id + " li").each(function () {
                var houseId = $(this).attr("name");
                if (getTimeByCookie("esf_" + id, houseId) == null) {
                    $("#" + id + "_" + houseId).text("加入" + typeText);
                }
            });
        }
        if (param == "zf") {
            $("a[name='zf_content_" + id + "']").text("加入" + typeText);
            $("#zf_" + id + " li").each(function () {
                var houseId = $(this).attr("name");
                if (getTimeByCookie("zf_" + id, houseId) == null) {
                    $("#" + id + "_" + houseId).text("加入" + typeText);
                }
            });
        }
        if (param == "xq") {
            $("a[name='xq_content_" + id + "']").text("加入" + typeText);
            $("#xq_" + id + " li").each(function () {
                var houseId = $(this).attr("name");
                if (getTimeByCookie("xq_" + id, houseId) == null) {
                    $("#" + id + "_" + houseId).text("加入" + typeText);
                }
            });
        }
        if (param == "jjr") {
            $(".z-s-info a:contains('收藏')").text("加入" + typeText);
        }
        getdata(name);
        if (web_userid != "" && ids != "") {
            if (id == "sc") {
                $.post("/Ashx/FavHandler.ashx", { "method": "delAll", "ids": ids, "UserId": web_userid, "FavClass": typenum });
            } else if (id == "ls") {
                $.post("/Ashx/HistoryHandler.ashx", { "method": "delAll", "HisType": typenum, "UserId": web_userid, "ids": ids });
            }
        }
    }
}

jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};