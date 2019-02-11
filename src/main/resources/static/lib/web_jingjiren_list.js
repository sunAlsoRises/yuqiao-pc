var isajax = 0;

//function getfavitem(favFenLeiId) {
//    post("getfavitem", { classid: classid }, function (redata) {

//    });
//}

//获取 指定class ID的页

function getList(action, callback) {
    var url = BaseUrl_IIS_Application_Name + "Ashx/HouseHandler.ashx", pagename = "_pAgentPanel",
        get = function (action, data, callback) { return MG.get.wcf(url, pagename, action, data, callback); },
        getlist = function (action, data, filter, order, callback) {
            return MG.ajax({
                data: data,
                url: url,
                action: action,
                callback: callback,
                pagename: pagename,
                notmark: true
            });
        },
        post = function (action, data, callback) { return MG.post.wcf(url, pagename, action, data, callback); };
    var weburl =    location.pathname;;
    if (isajax == 0) {
        var data = {};
        data["list"] = 1;
        callback(data);
    } else {
        var sp = SetPage(datas[action].pager.page);
        if (navigator.appVersion.indexOf("MSIE 7.0") != -1 || navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1) //解决ie7不兼容
        {
            window.location.href = sp;
            return;
        }
        window.history.pushState({ "html": 11, "pageTitle": "111" }, 'title', sp);
        $('body,html').animate({ scrollTop: 0 }, 1);
        YWYlhyChat.Mask.show($("#ContentPlaceHolder1__pAgentPanel"));

        //$("#ContentPlaceHolder1__pAgentPanel").html("<div class=\"yb_loadgif\"></div><div class=\"yb_bg\"></div><div style=\"height:200px\"></div>");
        getlist("jingjiren", { url: weburl, radius: 3000, "pageIndex": datas[action].pager.page, "pageSize": datas[action].pager.size }, $.extend({}, datas[action].filter, []), datas[action].order, function (data) {

            if (data.flag == -301 || data.flag == -503) {
                document.getElementById("ContentPlaceHolder1__pNoneResult").style.display = 'block';
                document.getElementById("ContentPlaceHolder1__pAgentPanel").style.display = 'none';
                document.getElementById("fanye").style.display = 'none';
                document.getElementById("fanye2").style.display = 'none';
                document.getElementById("ContentPlaceHolder1_WUCSearch__hlDefaultOrder").style = 'block';


            } else {
                document.getElementById("fanye").style.display = 'block';
                document.getElementById("fanye2").style.display = 'block';
                document.getElementById("ContentPlaceHolder1__pNoneResult").style.display = 'none';
                document.getElementById("ContentPlaceHolder1__pAgentPanel").style.display = 'block';
                callback(data);
                datas.jiaMengNotShow();
            }


        });
    }
}

function getItemDoms(opts) {

    var rows = [];
    $.each(opts.data, function (i, _i) {
        rows.push(datas[opts.action].domgetter(_i, opts.isShow));
    });
    return rows;
}

function getItemDom(data) {
    var isjyh = data.IsJYH == "1" ? "block" : "none";
    var str = "誉桥";
    if (isJiaMeng == "true") {
        str = "yuqiao";
    }

    var dom = $("<div class=\"J-box-I clearfix\"> " +
        "<div class=\"j-photo\">" +
        "<span title=\"誉桥精英会成员\" style=\"display:" + isjyh
+ "\" class=\"jyhicon\"></span><a href=\"" + data.MyShopUrl + "\" target=\"_blank\">" +
        "<img onerror=\"this.src = '" + onimgurl_jjr + "' \" src=\"" + data.HeadImg + "\" width=\"125\" height=\"179\" alt=\"" + data.UserName2 + "\"></a>" +
        "</div>" +
        "<div class=\"j-inofbox\">" +
        "<div class=\"j-j-info clearfix\">" +
        "<ul>" +
        "<li class=\"j-name\">" +
        "<span>姓名</span>" +
        "<div class=\"j-n-w\"><a href=\"" + data.MyShopUrl + "\" target=\"_blank\">" + data.UserName2 + "</a></div>" +
        "</li>" +
        "<li class=\"j-store\">" +
        "<span>区域门店</span>" +
        "<div class=\"j-s-w\"><a href=\"/dianmian/" + data.OrgId + "/\" target=\"_blank\">" + data.AreaName + "- " + data.OrgName + "</a></div>" +
        "</li>" +
        "<li class=\"j-lvbox _jiaMengNotShowDengJiDiv\" style=\"display:none;\">" +
        "<span>等级</span> " +
        "<div class=\"j-lv\">" +
        "<div class=\"j-lv-tishi\" style=\"left: " + ((-17 + 11 * data.UserGrade)/2) + "px\">D" + data.UserGrade + "</div>" +
        "<div class=\"j-lv-jd\" style=\"width: " + ((0 + 11 * data.UserGrade) / 2) + "px\"></div>" +
        "</div>" +
        "<div class=\"j-lv-help\"><a href=\"javascript:void(0)\"><span>本级别是根据经纪人上个季度的业绩设定，最低级为D0级，最高级为D19级。</span></a></div>" +
        "</li>" + "<li style=\"clear:both;\"></li>" +
        "<li class=\"j-telphone\">" +
        "<span>电话</span>" +
        "<div class=\"j-tel\" style=\"display: block;\"><i></i>" + updateTeltype(data.mobile) + "</div>" +
        "</li>" +
        "<li class=\"j-tishi\">" +
        "联系我时请说是在" + str + "在线上看到的,谢谢" +
        "</li>" +
    "</li>" +
        "</ul>" +
        "</div>" +
        "<div class=\"j-j-o-info clearfix _jiaMengNotShowDianPuDiv\" style=\"display:none;\">" +
        "<div class=\"j-s-btn\"><i></i><a href=\"" + data.MyShopUrl + "\" target=\"_blank\">Ta的店铺</a></div>" +
        "<div class=\"j-s-m-btn\"><i></i><a href=\"javascript:void(0)\" datalat=\"" + data.map_bd_lat + "\" datalng=\"" + data.map_bd_lng + "\" dataxq=\"" + data.OrgName + "\" dataid=\"" + data.UserId + "\">Ta的位置</a></div>" +
        "<div class=\"j-cj\"><span>最近成交二手房：<em>" + data.SellHTCount + "</em>套</span><span>最近成交租房：<em>" + data.RentHTCount + "</em>套</span></div>" +
        "</div>" +
        "<div class=\"j-qm-url clearfix\">" +
        "<div class=\"j-qmb\">签名：" + data.JianJie + "</div>" +
        "<div class=\"j-urlb\"><span class=\"j-share\"><a href=\"javascript:void(0)\" title=\"点我分享\"></a></span>Ta的链接：<a href=\"" + data.iWebDomainName + "\" target=\"_blank\"  style=\"display: inline-table;\">" + data.iWebDomainName + "</a></div>" +
        "</div>" +
        "</div>" +
        "</div>");

    return dom;

}

//修改电话格式js   参数str 为  字符串格式
function updateTeltype(str) {
    if (str == null)
        return str;
    if (str.length == 11) {
        str = str.substring(0, 3) + "-" + str.substring(3, 7) + "-" + str.substring(7, 11);
    }
    return str;
}

function appendMore(dom, data) {
    if ($.isArray(data)) {
        $.each(data, function (i, _i) {
            dom.append(_i);
        });
    } else if (data) {
        dom.append(data);
    }
    return dom;
}

doms: function domGetterModule(data, isShow) {
    var dom = getItemDom(data);
    return dom;
}
;


function baseTable(page, size, opts) {
    datas[opts.action].pager.page = page;
    datas[opts.action].pager.size = size;
    datas[opts.action].filter = opts.filters;

    document.getElementById("ContentPlaceHolder1_WUCSearch__pOrders").style.width = "330px";
    getList(opts.action, function (data) {
        var rows = getItemDoms({
            action: opts.action,
            data: data.list,
            isShow: true
        });
        easyTable($("#ContentPlaceHolder1__pAgentPanel"), rows, page, size, data.count, baseTable, opts);
    });
}

;

function easyTable(base, rows, defalutpage, pagesize, count, getter, opts) {


    var pager = $("<div>");
    var pager2 = $("<div>");
    $("#Pagination").html("");
    $("#Pagination2").html("");
    $("#Pagination").append($("<div class='ld-page'>").append(pager));
    $("#Pagination2").append($("<div class='ld-page'>").append(pager2));
    if (count != undefined) {
        $("#countpage").html(count);
        $("#countpage2").html(count);
    }
    if (isajax == 0) {

        isajax = 1;

        pager.ttpager({
            total: $("#countpage").html(),
            pagesize: 20,
            defaultPage: Number(defalutpage),
            onChange: function (page, size) {
                getter(page, size, opts);
            },
            buttonnumber: 3,
            sizes: "",
            pagesizeinfo: "",
            infotext: "",
            gototext: null
        });
        pager2.ttpager({
            total: $("#countpage2").html(),
            pagesize: 20,
            defaultPage: Number(defalutpage),
            onChange: function (page, size) {
                getter(page, size, opts);
            },
            buttonnumber: 3,
            sizes: "",
            pagesizeinfo: "",
            infotext: "",
            pagertext: "<div class='black1'></div>",
            gototext: null
        });

    } else {
        base.empty();
        $.each(rows, function (i, _i) {
            base.append(_i);
        });
        pager.ttpager({
            total: count,
            pagesize: 20,
            defaultPage: Number(defalutpage),
            onChange: function (page, size) {
                getter(page, size, opts);
            },
            buttonnumber: 3,
            sizes: "",
            pagesizeinfo: "",
            infotext: "",
            gototext: null
        });
        pager2.ttpager({
            total: count,
            pagesize: 20,
            defaultPage: Number(defalutpage),
            onChange: function (page, size) {
                getter(page, size, opts);
            },
            buttonnumber: 3,
            sizes: "",
            pagesizeinfo: "",
            infotext: "",
            pagertext: "<div class='black1'></div>",
            gototext: null
        });
    }
    pager.find("select").remove();
    pager2.find("select").remove();
    pager2.find("input").remove();
    var a = $(".black2>a");
    var a2 = $(".black1>a");
    for (var i = 0; i < a.length; i++) {
        if (i == a.length - 1) {
            $(a[i]).remove();
            $(a2[i]).remove();
        }
    }
    $("div.j-tel-btn").find("a").click(function () {

        var postData = {};
        postData.action = "viewMobile";
        postData.userId = location.href.replace("http://", "").split("/")[2];
        postData.mobile = $(this).hide().parent().prev().show().text();
        postData.mapId = postData.userId;
        postData.viewType = 2;
        _gaq.push(['_trackPageview', '/virtual/jingjiren/viewMobile.html']);
    });
    $("div.j-s-m-btn").find("a").colorbox({
        href: "#inlineMapDiv",
        inline: true,
        innerWidth: 600,
        innerHeight: 278,
        onOpen: function () {
            //追踪统计
            //_gaq.push(['_trackPageview', '/virtual/jingjiren/viewMap.html']);


            //if ($("#inlineMapDiv").find("img").attr("dataLng") == "" || $("#inlineMapDiv").find("img").attr("dataLat") == "" || $("#inlineMapDiv").find("img").attr("dataLng") == "0" || $("#inlineMapDiv").find("img").attr("dataLat") == "0") {
            //    $("#inlineMapDiv").find("div").html("无此店面位置信息");
            //} else {
            //    $("#inlineMapDiv").find("a").attr("href", "https://www.yuqiao.cn/jingjiren/" + $(this).attr("dataId") + "/");
            //    $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=19&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
            //}

        }
    });
}
var datas = {
    list: {
        filter: [],
        order: { disorder: 1 },
        pager: { page: 1, size: 20 },
        domgetter: domGetterModule
        //column: modulefilter
    },
    jiaMengNotShow: function () {
        //加盟隐藏等级,店铺,位置,排行榜等信息
        if (isJiaMeng == "false") {
            $("._jiaMengNotShowDengJiDiv").show();
            $("._jiaMengNotShowDianPuDiv").show();
            $("#_jiaMengNotShowYeJiDiv").show();
        }
    }
};

$(document).ready(function () {
    var page = GetPage(window.location.href.replace("http://","").replace("https://",""));
    if (page < 1) {
        page = 1;
    }
    baseTable(page, datas.list.pager.size, { action: "list" });
    datas.jiaMengNotShow();
});