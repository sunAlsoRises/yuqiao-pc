

//var isajax = 0;

////$("#sizebox").append($("<div class='ld-page'>").append(pager));
//function getList(action, callback) {
//    var url = BaseUrl_IIS_Application_Name + "Ashx/xq_list_xf.ashx"
//        , pagename = "xq_list_xf"
//        , get = function (action, data, filter, order, callback) { return MG.get.wcf(url, pagename, action, data, filter, order, callback); }
//        , post = function (action, data, callback) { return MG.post.wcf(url, pagename, action, data, callback); };
//    if (isajax == 0) {
//        var data = {};
//        data["list"] = 1;
//        callback(data);
//    } else {
//        var sp = SetPage(datas[action].pager.page);
//        if (navigator.appVersion.indexOf("MSIE 7.0") != -1 || navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1) //解决ie7不兼容
//        {
//            window.location.href = sp;
//            return;
//        }
//        window.history.pushState({ "html": 11, "pageTitle": "111" }, 'title', sp);
//        var weburl = window.location.href.replace("http://", "");
//        get("list", { url: weburl, "page": datas[action].pager.page, "size": datas[action].pager.size, }, $.extend({}, datas[action].filter, datas[action].cFilter), datas[action].order, function (data) {
//            if (data.flag == -301 || data.flag == -503) {
//                $("#ContentPlaceHolder1__pHousePanel").css("display", "none");
//                $("#ContentPlaceHolder1__pNoneResult").css("display", "block");
//                $("#ContentPlaceHolder1_pageinfo2").html("");
//                $("#ContentPlaceHolder1_pageinfo").html("");
//                $("#Pagination").html("");
//                $("#Pagination2").html("");
//            } else {
//                callback(data);
//                $("#ContentPlaceHolder1_pageinfo2").html('共找到 <span id="countpage">' + data.count + '</span>个沈阳新房团购信息');
//                $("#ContentPlaceHolder1_pageinfo").html('共找到 <span id="countpage">' + data.count + '</span>个沈阳新房团购信息');
//                $("#ContentPlaceHolder1__pHousePanel").css("display", "block");
//                $("#ContentPlaceHolder1__pNoneResult").css("display", "none");
//                $("div.H-Lbox").find(".ListBox-I").hover(
//                    function () {
//                        $(this).find(".hideDiv").show();
//                        $(this).addClass("H-Listbox-bg");
//                    },
//                    function () {
//                        $(this).find(".hideDiv").hide();
//                        $(this).removeClass("H-Listbox-bg");
//                    }
//                );
//                $("a.mapYL").colorbox({
//                    href: "#inlineMapDiv",
//                    inline: true,
//                    innerWidth: 600,
//                    innerHeight: 278,
//                    onOpen: function () {
//                        //追踪统计
//                        _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
//                        $("#inlineMapDiv").find("a").attr("href", "#ershoufang/" + $(this).attr("dataId") + "/zbpt/");
//                        $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
//                    }
//                });
//            }

//        });
//    }
//}
//function getItemDoms(opts) {
//    var rows = [];
//    $.each(opts.data, function (i, _i) {
//        rows.push(datas[opts.action].domgetter(_i, opts.isShow));
//    });
//    return rows;
//}
//function appendMore(dom, data) {
//    if ($.isArray(data)) {
//        $.each(data, function (i, _i) {
//            dom.append(_i);
//        });
//    } else if (data) {
//        dom.append(data);
//    }
//    return dom;
//}
//doms: function domGetterModule(data, isShow) {

//    if (data == "null") return $("<div style=\"overflow: hidden\" class=\"l-b clearfix\"/>");
//    var dom = $("<div class='ListBox-I clearfix' hid='yuqiao" + data.XqPY + "'>" +
//        "<div class='LB-f-img'>" +
//        "<a href='/xinfang/" + data.XqPY + "/' title='" + data.XqName + "' target='_blank'>" +
//        "<img onerror=\"this.src ='" + onimgurl_small + "' \" src='" + data.imgIndexImage + "' width='161' height='121' alt='" + data.XqName + "' /></a></div>" +
//        "<div class='details'>" +
//        "<h3><a href='/xinfang/" + data.XqPY + "/' target='_blank'>" + data.XqName + "</a></h3>" +
//        "<p style='display: none;' id='xqpy'>" + data.XqPY + "</p>" +
//        "<div class='xf-zhekou' style='margin-top: 2px; width: 480px; font-size: 15px; text-align: justify;'>" + data.MemoZheKouToWeb + "</div>" +
//        "<div class='details-o'>" +
//        "<a href='/xiaoqu/" + data.XqPy + "/' target='_blank'>" + data.Addresssub + "</a><a href='javascript:void(0)' class='mapYL' datalat='" + data.Map_BD_Lat + "' datalng='" + data.Map_BD_Lng + "' dataxq='" + data.XqName + "' dataid='" + data.xqid + "'><i></i>地图</a></div>" +
//        "<div class='HDtags' id='FuJinSheShi' runat='server'>" +
//        "<span class='t-dt' style='" + data.isditie + "'><a href='javascript:void(0)'>地铁</a></span>" +
//        "<span class='t-xq' style='" + data.isxuequ + "'><a href='javascript:void(0)'>学区</a></span>" +
//        "<span class='t-ms' style='" + data.isyanglao + "'><a href='javascript:void(0)'>养老</a></span>" +
//        "<span class='t-mwn' style='" + data.isshuijing + "'><a href='javascript:void(0)'>水景</a></span>" +
//        "<span class='t-tg' style='" + data.isyiliao + "'><a href='javascript:void(0)'>医疗完善</a></span>" +
//        "<span class='t-tg' style='" + data.isshangye + "'><a href='javascript:void(0)'>商业齐全</a></span>" +
//        "<span class='t-tg' style='" + data.isjiaotong + "'><a href='javascript:void(0)'>交通便利</a></span>" +
//        "<div class='Hbtn hideDiv'><a href='javascript:void(0)' class='favFY btnFavNewHouse' dataid='" + data.xqid + "'><i></i>收藏新房</a></div>"+
//        "<div class='price'><p class='P-zj'><b>" + data.PriceAvgAvg + "</b>元/平</p><p style='height: 5px;'></p><p>开盘时间：" + data.HeZuoDateBegin + "</p></div></div>", "");
//    return dom;
//};
//function baseTable(page, size, opts) {
//    datas[opts.action].pager.page = page;
//    datas[opts.action].pager.size = size;
//    getList(opts.action, function (data) {
//        var rows = getItemDoms({
//            action: opts.action,
//            data: data.list,
//            isShow: true
//        });
//        easyTable($("#entitylist"), rows, page, size, data.count, baseTable, opts);
//    });
//};

//function easyTable(base, rows, defalutpage, pagesize, count, getter, opts) {


//    var pager = $("<div>");
//    var pager2 = $("<div>");

//    $("#Pagination").html("");
//    $("#Pagination2").html("");
//    $("#Pagination").append($("<div class='ld-page'>").append(pager));

//    $("#Pagination2").append($("<div class='ld-page'>").append(pager2));
//    if (count != undefined) {
//        $("#countpage").html(count);
//    }
//    if (isajax == 0) {

//        isajax = 1;

//        pager.ttpager({
//            total: $("#countpage").html(),
//            pagesize: 20,
//            defaultPage: Number(defalutpage),
//            onChange: function (page, size) {
//                getter(page, size, opts);
//            },
//            buttonnumber: 3,
//            sizes: "",
//            pagesizeinfo: "",
//            infotext: "",
//              pagertext: "<div class='black1'></div>",
//            gototext: null,
//        });
//        pager2.ttpager({
//            total: $("#countpage").html(),
//            pagesize: 20,
//            defaultPage: Number(defalutpage),
//            onChange: function (page, size) {
//                getter(page, size, opts);
//            },
//            buttonnumber: 3,
//            sizes: "",
//            pagesizeinfo: "",
//            infotext: "",
//            pagertext: "<div class='black1'></div>",
//            gototext: null,
//        });

//    } else {
//        base.empty();
//        $.each(rows, function (i, _i) {
//            base.append(_i);
//        });
//        pager.ttpager({
//            total: count,
//            pagesize: 20,
//            defaultPage: Number(defalutpage),
//            onChange: function (page, size) {
//                getter(page, size, opts);
//            },
//            buttonnumber: 3,
//            sizes: "",
//            pagesizeinfo: "",
//            infotext: "",
//            pagertext: "<div class='black1'></div>",
//            gototext: null,
//        });
//        pager2.ttpager({
//            total: count,
//            pagesize: 20,
//            defaultPage: Number(defalutpage),
//            onChange: function (page, size) {
//                getter(page, size, opts);
//            },
//            buttonnumber: 3,
//            sizes: "",
//            pagesizeinfo: "",
//            infotext: "",
//            pagertext: "<div class='black1'></div>",
//            gototext: null,
//        });
//    }
//    pager.find("select").remove();
//    pager2.find("select").remove();
//    pager2.find("input").remove();
//    var a = $(".black2>a");
//    var a2 = $(".black1>a");
//    for (var i = 0; i < a.length; i++) {
//        if (i == a.length - 1) {
//            $(a[i]).remove();
//            $(a2[i]).remove();
//        }
//    }
//}
//var datas = {
//    list: {
//        filter: [],
//        order: { disorder: 1 },
//        pager: { page: 1, size: 20 },
//        domgetter: domGetterModule
//        //column: modulefilter                                                                                                                                                                                 
//    }
//};
//$(document).ready(function () {
//    init();
//    $("div.H-Lbox").find(".ListBox-I").hover(
//        function () {
//            $(this).find(".hideDiv").show();
//            $(this).addClass("H-Listbox-bg");
//        },
//        function () {
//            $(this).find(".hideDiv").hide();
//            $(this).removeClass("H-Listbox-bg");
//        }
//    );

//    $(".detial").mouseenter(function () {
//        var ldid = $(this).attr("ldid");
//        $(this).hide();
//        $.each($(this).parent().find(".show"), function (i, _i) {
//            if ($(_i).attr("ldid") == ldid) {
//                $(_i).show()
//            } else {
//                $(_i).hide();
//                var ldname = $(_i).attr("ldid");
//                $(this).parent().find(".detial[ldid='" + ldname + "']").show();

//            }
//        })
//    });



//    $("a.mapYL").colorbox({
//        href: "#inlineMapDiv",
//        inline: true,
//        innerWidth: 600,
//        innerHeight: 278,
//        onOpen: function () {
//            //追踪统计
//            _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
//            $("#inlineMapDiv").find("a").attr("href", "#ershoufang/" + $(this).attr("dataId") + "/zbpt/");
//            $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
//        }
//    });
//});
//function init() {
//    var url = BaseUrl_IIS_Application_Name + "Ashx/xq_list_xf.ashx"
//        , pagename = "xq_list_xf"
//        , get = function (action, data, filter, order, callback) { return MG.get.wcf(url, pagename, action, data, filter, order, callback); }
//        , post = function (action, data, callback) { return MG.post.wcf(url, pagename, action, data, callback); };
//    baseTable(1, datas.list.pager.size, { action: "list", isShow: true });
//    var hothtml = "";
//    var newhtml = "";
//    //<li class="xf-r-l-hot"><a href="#" class="xf-r-l-img">
//    //<img src="v2014images/p4.jpg" alt=""></a><h3><a href="#">君临天下六期假日蓝湾</a></h3>
//    //                <br>
//    //                <p>
//    //                    均价：8900元/平米
//    //                <br>
//    //                    铁西区
//    //                </p>
//    //            </li>
//    //<li class="xf-r-l-hot"><a href="#" class="xf-r-l-img"><img src="v2014images/p4.jpg" alt=""></a><h3><a href="#">君临天下六期假日蓝湾</a></h3><br><p>均价：8900元/平米<br>铁西区</p></li>

//    //post("newlist", {}, function (redata) {
//    //    $.each(redata.list, function (i, _i) {
//    //        newhtml += "<li><a href=\"/xinfang/" + _i.XqPY + "/\">" + _i.XqName + "</a><span>" + _i.PriceAvgAvg + "元/平米</span></li>";
//    //    });
//    //    $("#newdistrict").html(newhtml);
//    //});
//    //post("hotlist", {}, function (redata) {
//    //    $.each(redata.list, function (i, _i) {
//    //        hothtml += "<li><a href=\"/xinfang/" + _i.XqPY + "/\">" + _i.XqName + "</a><span>" + _i.PriceAvgAvg + "元/平米</span></li>";
//    //    });
//    //    $("#hotdistrict").html(hothtml);
//    //});
//}
//-------------------------------------------------------


var isajax = 0;

//$("#sizebox").append($("<div class='ld-page'>").append(pager));
function getList(action, callback) {
    YWYlhyChat.Mask.show($("#entitylist"));
    var url = BaseUrl_IIS_Application_Name + "Ashx/xq_list_xf.ashx"
        , pagename = "xq_list_xf"
        , get = function (action, data, filter, order, callback) { return MG.get.wcf(url, pagename, action, data, filter, order, callback); }
        , post = function (action, data, callback) { return MG.post.wcf(url, pagename, action, data, callback); }
        , getlist = function (action, data, filter, order, callback) {
            return MG.ajax({
                data: data,
                url: url,
                action: action,
                callback: callback,
                pagename: pagename,
                notmark: true
            });
        };
    if (isajax == 0) {
        var data = {};
        data["list"] = 1;
        callback(data);
        YWYlhyChat.Mask.hide("#entitylist");
    } else {
        var sp = SetPage(datas[action].pager.page);
        if (navigator.appVersion.indexOf("MSIE 7.0") != -1 || navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1) //解决ie7不兼容
        {
            window.location.href = sp;
            return;
        }
        window.history.pushState({ "html": 11, "pageTitle": "111" }, 'title', sp);
        var weburl = window.location.href.replace("http://", "").replace("https://", "");
        getlist("list", { url: weburl, radius: 3000, "page": datas[action].pager.page, "size": datas[action].pager.size }, $.extend({}, datas[action].filter, []), datas[action].order, function (data) {
                YWYlhyChat.Mask.hide("#entitylist");
                if (data.flag == -301 || data.flag == -503) {
                $("#ContentPlaceHolder1__pHousePanel").css("display", "none");
                $("#ContentPlaceHolder1__pNoneResult").css("display", "block");
                $("#ContentPlaceHolder1_pageinfo2").html("");
                $("#ContentPlaceHolder1_pageinfo").html("");
                $("#Pagination").html("");
                $("#Pagination2").html("");
            } else {
                callback(data);
                $("#ContentPlaceHolder1_pageinfo2").html('共找到 <span id="countpage">' + data.count + '</span>个沈阳新房团购信息');
                $("#ContentPlaceHolder1_pageinfo").html('共找到 <span id="countpage">' + data.count + '</span>个沈阳新房团购信息');
                $("#ContentPlaceHolder1__pHousePanel").css("display", "block");
                $("#ContentPlaceHolder1__pNoneResult").css("display", "none");
                $("div.H-Lbox").find(".ListBox-I").hover(
                    function () {
                        $(this).find(".hideDiv").show();
                        $(this).addClass("H-Listbox-bg");
                    },
                    function () {
                        $(this).find(".hideDiv").hide();
                        $(this).removeClass("H-Listbox-bg");
                    }
                );
                $("a.mapYL").colorbox({
                    href: "#inlineMapDiv",
                    inline: true,
                    innerWidth: 600,
                    innerHeight: 278,
                    onOpen: function () {
                        //追踪统计
                        _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
                        $("#inlineMapDiv").find("a").attr("href", "#xinfang/" + $(this).attr("dataId") + "/#zbpt/");
                        $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
                    }
                });
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

    if (data == "null") return $("<div style=\"overflow: hidden\" class=\"l-b clearfix\"/>");
    var xqxs = "<a href='/xiaoqu/" + data.XqPY + "/' target='_blank'>" + data.Addresssub + "</a><a href='javascript:void(0)' class='mapYL' datalat='" + data.Map_BD_Lat + "' datalng='" + data.Map_BD_Lng + "' dataxq='" + data.XqName + "' dataid='" + data.xqid + "'><i></i>地图</a></div>";
    if (data.xqxs == "1") {
        xqxs = "<li style='color:#6C9;line-height:24px;font-size: 14px;'>" + data.Addresssub + "</li>";
    }
    var dom = $("<div class='ListBox-I clearfix' hid='yuqiao" + data.XqPY + "'>" +
        "<div class='LB-f-img'>" +
        "<a href='/xinfang/" + data.XqPY + "/' title='" + data.XqName + "' target='_blank'>" +
        "<img onerror=\"this.src ='" + onimgurl_small + "' \" src='" + data.imgIndexImage + "' width='161' height='121' alt='" + data.XqName + "' /></a></div>" +
        "<div class='details'>" +
        "<h3><a href='/xinfang/" + data.XqPY + "/' target='_blank'>" + data.XqName + "</a></h3>" +
        "<p style='display: none;' id='xqpy'>" + data.XqPY + "</p>" +
        "<div class='xf-zhekou' style='margin-top: 2px; width: 480px; font-size: 15px; text-align: justify;'>" + data.MemoZheKouToWeb + "</div>" +
        "<div class='details-o'>" +
        xqxs +
        "<div class='HDtags' id='FuJinSheShi' runat='server'>" +
        "<span class='t-dt' style='" + data.isditie + "'><a href='javascript:void(0)'>地铁</a></span>" +
        "<span class='t-xq' style='" + data.isxuequ + "'><a href='javascript:void(0)'>学区</a></span>" +
        "<span class='t-ms' style='" + data.isyanglao + "'><a href='javascript:void(0)'>养老</a></span>" +
        "<span class='t-mwn' style='" + data.isshuijing + "'><a href='javascript:void(0)'>水景</a></span>" +
        "<span class='t-tg' style='" + data.isyiliao + "'><a href='javascript:void(0)'>医疗完善</a></span>" +
        "<span class='t-tg' style='" + data.isshangye + "'><a href='javascript:void(0)'>商业齐全</a></span>" +
        "<span class='t-tg' style='" + data.isjiaotong + "'><a href='javascript:void(0)'>交通便利</a></span>" +
        "<div class='Hbtn hideDiv'><a href='javascript:void(0)' class='favFY btnFavNewHouse' dataid='" + data.xqid + "'><i></i>收藏新房</a></div>" +
        "<div class='price'><p class='P-zj'><b>" + data.PriceAvgAvg + "</b>元/平</p><p style='height: 5px;'></p><p>开盘时间：" + data.HeZuoDateBegin + "</p></div></div>", "");
    return dom;
};
function baseTable(page, size, opts) {
    datas[opts.action].pager.page = page;
    datas[opts.action].pager.size = size;
    getList(opts.action, function (data) {
        var rows = getItemDoms({
            action: opts.action,
            data: data.list,
            isShow: true
        });
        easyTable($("#entitylist"), rows, page, size, data.count, baseTable, opts);
    });
};

function easyTable(base, rows, defalutpage, pagesize, count, getter, opts) {


    var pager = $("<div>");
    var pager2 = $("<div>");

    $("#Pagination").html("");
    $("#Pagination2").html("");
    $("#Pagination").append($("<div class='ld-page'>").append(pager));

    $("#Pagination2").append($("<div class='ld-page'>").append(pager2));
    if (count != undefined) {
        $("#countpage").html(count);
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
            pagertext: "<div class='black1'></div>",
            gototext: null,
        });
        pager2.ttpager({
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
            pagertext: "<div class='black1'></div>",
            gototext: null,
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
            pagertext: "<div class='black1'></div>",
            gototext: null,
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
            gototext: null,
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
}
var datas = {
    list: {
        filter: [],
        order: { disorder: 1 },
        pager: { page: 1, size: 20 },
        domgetter: domGetterModule
        //column: modulefilter                                                                                                                                                                                 
    }
};
$(document).ready(function () {

    $("div.H-Lbox").find(".ListBox-I").hover(
        function () {
            $(this).find(".hideDiv").show();
            $(this).addClass("H-Listbox-bg");
        },
        function () {
            $(this).find(".hideDiv").hide();
            $(this).removeClass("H-Listbox-bg");
        }
    );

    $(".detial").mouseenter(function () {
        var ldid = $(this).attr("ldid");
        $(this).hide();
        $.each($(this).parent().find(".show"), function (i, _i) {
            if ($(_i).attr("ldid") == ldid) {
                $(_i).show()
            } else {
                $(_i).hide();
                var ldname = $(_i).attr("ldid");
                $(this).parent().find(".detial[ldid='" + ldname + "']").show();

            }
        })
    });

    function init() {
        var url = BaseUrl_IIS_Application_Name + "Ashx/xq_list_xf.ashx"
            , pagename = "xq_list_xf"
            , get = function (action, data, filter, order, callback) { return MG.get.wcf(url, pagename, action, data, filter, order, callback); }
            , post = function (action, data, callback) { return MG.post.wcf(url, pagename, action, data, callback); };
        baseTable(1, datas.list.pager.size, { action: "list", isShow: true });
        var hothtml = "";
        var newhtml = "";
        //<li class="xf-r-l-hot"><a href="#" class="xf-r-l-img">
        //<img src="v2014images/p4.jpg" alt=""></a><h3><a href="#">君临天下六期假日蓝湾</a></h3>
        //                <br>
        //                <p>
        //                    均价：8900元/平米
        //                <br>
        //                    铁西区
        //                </p>
        //            </li>
        //<li class="xf-r-l-hot"><a href="#" class="xf-r-l-img"><img src="v2014images/p4.jpg" alt=""></a><h3><a href="#">君临天下六期假日蓝湾</a></h3><br><p>均价：8900元/平米<br>铁西区</p></li>

        //post("newlist", {}, function (redata) {
        //    $.each(redata.list, function (i, _i) {
        //        newhtml += "<li><a href=\"/xinfang/" + _i.XqPY + "/\">" + _i.XqName + "</a><span>" + _i.PriceAvgAvg + "元/平米</span></li>";
        //    });
        //    $("#newdistrict").html(newhtml);
        //});
        //post("hotlist", {}, function (redata) {
        //    $.each(redata.list, function (i, _i) {
        //        hothtml += "<li><a href=\"/xinfang/" + _i.XqPY + "/\">" + _i.XqName + "</a><span>" + _i.PriceAvgAvg + "元/平米</span></li>";
        //    });
        //    $("#hotdistrict").html(hothtml);
        //});
        ;
    }

    $("a.mapYL").colorbox({
        href: "#inlineMapDiv",
        inline: true,
        innerWidth: 600,
        innerHeight: 278,
        onOpen: function () {
            //追踪统计
            _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
            $("#inlineMapDiv").find("a").attr("href", "#xinfang/" + $(this).attr("dataId") + "/#zbpt/");
            $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
        }
    });

    init();
});