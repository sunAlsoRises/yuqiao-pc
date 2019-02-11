var isajax = 0;
var page;
var HouseCount;
//function getfavitem(favFenLeiId) {
//    post("getfavitem", { classid: classid }, function (redata) {

//    });
//}

//获取 指定class ID的页

function getList(action, callback) {
    var url = BaseUrl_IIS_Application_Name + "mapi/mapMessage", pagename = "houselist",
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
    var weburl =  location.pathname;
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
        YWYlhyChat.Mask.show($("#houselist"));
        //$("#houselist").html("<div class=\"yb_loadgif\"></div><div class=\"yb_bg\"></div><div style=\"height:200px\"></div>");
        $("#houselist").attr("readORother", 0);
        getlist("newershoufang", { url: weburl, radius: 3000, "pageIndex": datas[action].pager.page, "pageSize": datas[action].pager.size, DealType: 77 }, $.extend({}, datas[action].filter, []), datas[action].order, function (data) {

            if (data.flag == -301 || data.flag == -503) {
                document.getElementById("ContentPlaceHolder1__pNoneResult").style.display = 'block';
                document.getElementById("ContentPlaceHolder1__pHousePanel").style.display = 'none';
                document.getElementById("fanye").style.display = 'none';
                document.getElementById("fanye2").style.display = 'none';
                document.getElementById("ContentPlaceHolder1__pNoneResult").style.display = 'block';
            } else {
                document.getElementById("fanye").style.display = 'block';
                document.getElementById("fanye2").style.display = 'block';
                document.getElementById("ContentPlaceHolder1__pNoneResult").style.display = 'none';
                document.getElementById("ContentPlaceHolder1__pHousePanel").style.display = 'block';
                callback(data);
                //$(".ListBox-I").mouseenter(function () {
                //    $(".hideDiv").show();
                //});
                //$(".ListBox-I").mouseleave(function () {
                //    $(".hideDiv").hide();
                //});

                var readORother = parseInt($("#houselist").attr("readORother"));
                $("#houselist").attr("readORother", readORother + 1);
                if (readORother + 1 >= 3) {
                    favInit();
                    compareReadInit();
                    compareOtherInit();
                    
                }
                mapbind();
                datas.jiaMengHideJiBie();
                $("#TuijianListDiv a[name='bid']").one("click", function () {
                    var url = $(this).attr("url");
                    $.post(url);
                });
                $("#JingPinListDiv a[name='bid']").one("click", function () {
                    var url = $(this).attr("url");
                    $.post(url);
                });
            }
           
            mgurl.appendTagToHead({ url: tongjiurl + "?key=1,1,2,2,0" });//提交页面打开次数统计数据
        });
    }
}

function mapbind() {

    $("a.mapYL").colorbox({
        href: "#inlineMapDiv",
        inline: true,
        innerWidth: 600,
        innerHeight: 278,
        onOpen: function () {
            //追踪统计
            _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
            $("#inlineMapDiv").find("a").attr("href", "#ershoufang/" + $(this).attr("dataId") + "/#zbpt/");
            $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
        }
    });

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

}

function getItemDoms(opts) {

    var rows = [];
    if (opts && opts.data) {
        $.each(opts.data, function (i, _i) {
            rows.push(datas[opts.action].domgetter(_i, opts.isShow));
        });
    }

    return rows;
}

function getItemDom(data, isbid) {
    var bidspan = "";
    var houseUrl = "";
    var houseAurl = "";
    var bidname = "";
    var titleTag = "";
    var duiBiDiv = "";
    var stylebid = ""
    if (isbid == 1 || data.badtype =="ZhiDing") {
        bidspan = "<span class='tgrightupicon'>推荐房源</span>";
        houseAurl = "/Bid/" + data.BidId + "/1/2/";
        houseUrl = "/ershoufang/" + data.HouseId + "/p" + data.UserId;
        bidname = "name='bid'";
        titleTag = "<i class=\"d-icon\">顶</i>";
        stylebid = "tuiguangbox ";
    }
    else if (isbid == 2 || data.badtype =="JingZhun") {
        bidspan = "<span class='jprightupicon'>精品房源</span>";
        houseAurl = "/Bid/" + data.BidId + "/3/2/";
        houseUrl = "/ershoufang/" + data.HouseId + "/p" + data.UserId;
        bidname = "name='bid'";
        titleTag = "<i class=\"j-icon\">精</i>";
        stylebid = "tuiguangbox ";
    } else {
        houseUrl = "/ershoufang/" + data.HouseId + "/";
    }
    if (data.CoverImg.indexOf("120x120") > -1) {
        data.CoverImg = data.CoverImg.replace("120x120", "201x153");
    }
    var userGradeDiv = "";
    if (data.UserGrade >= 1) {
        userGradeDiv = "<i class=\"jjr-icon\" style=\"display:none;\"  title=\"经纪人级别是根据经纪人&#10;上个季度的业绩设定,最低&#10;级为D0级,最高级为D19级.\">D" + data.UserGrade + "</i>";
    }
    var imageCount = "";//图片数量
    //加盟不显示收藏,图片数量
    if (isJiaMeng == "false") {
        duiBiDiv = "<a href=\"javascript:void(0)\" class=\"addDB addCompare\" dataid=\"" + data.HouseId + "\" act=\"house\"><i></i>加入对比</a><a href=\"javascript:void(0)\" class=\"favFY btnFavSellHouse\" dataid=\"" + data.HouseId + "\"><i></i>收藏房源</a>";
        imageCount = "";//"<span class=\"SLimg\">" + data.PicCount + "图</span><span class=\"SLbg\"></span>";
    }
    var dom = $(
        "<div class=\"ListBox-I clearfix\" hid=\"yuqiao" + data.HouseId + "\">" +
        "<div class=\"LB-f-img " + stylebid+"\"><a " + bidname + " href=\"" + houseUrl + "\" title=\"" + data.Title + "\" target=\"_blank\" url=\"" + houseAurl + "\">" + bidspan + "<span class=\"LB-QJ-icon\" " + data.vrid + "></span>" + imageCount + "<img src=\"" + data.CoverImg + "\" width=\"161\" height=\"121\"   onerror=\"this.src = '" + onimgurl_small + "' \" alt=\"" + data.Title + "\" /></a></div>" +
        "<div class=\"details\">" +
        "<h3><a " + bidname + " href=\"" + houseUrl + "\" target=\"_blank\"  url=\"" + houseAurl + "\">" + data.Title + "</a><span class=\"iconboxT clearfix\">" +
                            titleTag +
                            userGradeDiv +
                            "<i class=\"jjr-nx-icon\" style=\"display:none;\" title=\"誉桥认证从业" + data.UserZaizhiYear + "年\">" + data.UserZaizhiYear + "年</i>" +
                       " </span></h3>" +
        "<div class=\"details-all\">" + data.CountRoom + "室" + data.CountHall + "厅" + data.CountBathroom + "卫 ，" + data.Mianji + "平 ，楼层：" + data.Floor + "层(共" + data.FloorHighest + "层)，" + data.DicChaoXiangName + "，" + data.DicZhuangXiuName + "，" + data.BuildYear + "</div>" +
        "<div class=\"details-o\" style=\"display:none;\"><a href=\"/xiaoqu/" + data.XqPy + "/\" target=\"_blank\">" + data.XqName + "</a>" + data.IsNearBy + "<span></span><a href=\"javascript:void(0)\" class=\"mapYL\" datalat=\"" + data.map_bd_lat + "\" datalng=\"" + data.Map_BD_Lng + "\" dataxq=\"" + data.XqName + "\" dataid=\"" + data.HouseId + "\"><i></i>地图</a>" + data.subwayString + "</div>" +
        "<div class=\"HDtags\">" +
        "<span class=\"t-tg\" " + data.OrderNo + "><a href=\"javascript:void(0)\">推荐</a></span>" +
        "<span class=\"t-xq\"" + data.school + "><a href=\"javascript:void(0)\">学区</a></span>" +

        "<span class=\"t-ms\" " + data.WuShui + "><a href=\"javascript:void(0)\">无税</a></span>" +
        "<span class=\"t-mwn\" " + data.DuJia + "><a href=\"javascript:void(0)\">独家</a></span>" +
        "<span class=\"t-wy\" " + data.JiMai + "><a href=\"javascript:void(0)\">急售</a></span>" +
        data.subway_line_pc +
        "<span class=\"t-qj\" " + data.vrid + "><a onclick=\"IShow720(true,'https://720.yuqiao.cn/house/" + data.HouseId +"/',1600,1600);\"><i></i>全景看房</a></span>" +
        "</div>" +
        "</div>" +
        "<div class=\"price\">" +
        "<p class=\"P-zj\"><b>" + data.PriceSum + "</b>万</p>" +
        "<p class=\"P-dj\">" + data.PriceUnit + " 元/平</p>" +
        "<p class=\"P-gx\">" +
        //"<a href=\"javascript:void(0)\" class=\"txupimg\" title=\"提醒他上传房源或小区图片\" " + data.uploadPic + "><i></i></a>"+
        "<a href=\"" + data.MyShopUrl + "\" target=\"_blank\">" + data.UserName2 + "</a>" + data.LastTime + "</p>" +
        "</div>" +
        "<div class=\"Hbtn hideDiv\">" + duiBiDiv + "</div>" +
        "<div class=\"HBrowse hideDiv\">" +
        "<p>被查看 " + data.CountWeb + " 次</p>" +
        "</div>" +
        "</div>");
    if (data.badtype == "ZhiDing") {
        if ($("#TuijianListDiv").length == 0) {
            $("#houselist").prepend("<div class='tuiguangbox' id='TuijianListDiv'></div>"); 
        } 
        $("#TuijianListDiv").append(dom);
    }
    if (data.badtype == "JingZhun") {
        if ($("#JingPinListDiv").length == 0) {
            $("#houselist").prepend("<div class='tuiguangbox' id='JingPinListDiv'></div>");
        }
        $("#JingPinListDiv").append(dom);
    }
    return dom;

}

//function reMenHouse(page,action) {
//    var weburl = window.location.href.replace("http://", "");
//    $.post(BaseUrl_IIS_Application_Name + "Ashx/HouseHandler.ashx", { url: weburl, action: action, pageIndex: page, pageSize: 3, pageName: "ershoufang" }, function (data) {
//        if (data && data.obj && data.obj.list) {

//            var dom = "";
//            $.each(data.obj.list, function (i, item) {
//                dom +=
//                   "<div class=\"R-H-T-Img-List clearfix\"><span><a href=\"/ershoufang/" + item.HouseId + "/\" title=\"" + item.Title + "\" target=\"_blank\"><img src=\"" + item.CoverImg + "\" alt=\"" + item.Title + "\" /></a></span><div class=\"R-H-T-title\"><b><a href=\"/ershoufang/" + item.HouseId + "/\" title=\"" + item.Title + "\" target=\"_blank\">" + item.Title + "</a></b><p><span><em>" + item.CountRoom + "</em>室<em>" + item.CountHall + "</em>厅</span><span><em>" + item.Mianji + "</em>平米</span><br /><span>" + item.DicChaoXiangName + "</span><span>" + item.DicZhuangXiuName + "</span><span class=\"R-H-T-zongjia\">" + item.PriceSum + "万</span></p></div></div>";
//            });
//            $('#remenhouser').empty();
//            $('#remenhouser').append(dom);
//        }

//    });

//}
//function reMenXiaoQu(page) {
//    var weburl = window.location.href.replace("http://", "");
//    $.post(BaseUrl_IIS_Application_Name + "Ashx/HouseHandler.ashx", { url: weburl, action: "remenxiaoqu", pageIndex: page, pageSize: 3, pageName: "ershoufang" }, function (data) {
//        if (data && data.obj && data.obj.list) {

//            var dom = "";
//            $.each(data.obj.list, function(i, item) {
//                dom +=
//                    "<div class=\"R-H-T-Img-List clearfix\"><span><a href=\"/xiaoqu/" + item.XqPY + "/\" title=\"" + item.XqName + "\" target=\"_blank\"> <img src=\"" + item.CoverImg + "\" alt=\"" + item.XqName + "\" /></a></span><div class=\"R-H-T-title\"><b><a href=\"/xiaoqu/" + item.XqPY + "/\" target=\"_blank\">" + item.XqName + "</a></b><p class=\"R-H-T-xqinfo\"><span><a href=\"/ershoufang/xq" + item.XqId + "/\" target=\"_blank\">二手房(" + item.SellCount + ">套)</a></span><span><a href=\"/zufang/xq" + item.XqId + "/\" target=\"_blank\">租房(" + item.RentCount + "套)</a></span><br /> <span class=\"R-H-T-junjia\">均价<br /><strong>" + item.SellAvgPrice + "</strong><br />元/㎡</span></p></div> </div>";
//            });
//            $('#remenxiaoqu').empty();
//            $('#remenxiaoqu').append(dom);
//        }
//    });

//}



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
    var dom = getItemDom(data, 0);
    return dom;
}
;


function baseTable(page, size, opts) {
    datas[opts.action].pager.page = page;
    datas[opts.action].pager.size = size;
    datas[opts.action].filter = opts.filters;
    //var action = "ermenfang";
    //reMenHouse(page, action);
    //reMenXiaoQu(page);

    getList(opts.action, function (data) {
        var rows = getItemDoms({
            action: opts.action,
            data: data.list,
            isShow: true
        });
        Appenddom($("#houselist"), rows);
        AppendFenYe(page, data.count);
        
    });
};
function Appenddom(base, rows) {
    if (isajax == 0) {
        isajax = 1;
        return;
    }
    base.empty();
    $.each(rows, function (i, _i) {
        base.append(_i);
    });
    
}
function AppendFenYe(page, Count) {
    $("#fanye").html('');
    Count = (Count ? Count : HouseCount) * 1;
    page = page * 1;
    HouseList.fenye($("#fanye"), {
        Page: page ? page : 1,
        Size: 20,
        End: 0,
        Zuo: 1,
        You: 1,
        Count: Count * 1 ,
        Title: "共找到" + Count+"个二手房房源",
    }, function (redata) {
        baseTable(redata.page, 20, { action: "list" });
    });
    $("#fanye2").html('');
    HouseList.fenye($("#fanye2"), {
        Page: page ? page : 1,
        Size: 20,
        End: 0,
        Zuo: 1,
        You: 1,
        Count: Count,
        Title: "共找到" + (Count <= 0 ? 0 : Count) + "个二手房房源",
    }, function (redata) {
        baseTable(redata.page, 20, {action:"list"});
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
    //加盟隐藏
    jiaMengHideJiBie: function () {
        if (isJiaMeng == "false") {
            $(".jjr-icon").show();//经纪人级别
            $(".jjr-nx-icon").show();//经纪人认证
            $("._jiaMengNotShowXqDiv").show();//右侧热门小区
            $("._jiaMengNotShowJjrDiv").show();//右侧经纪人
            $(".details-o").show();//小区地址
            $("._jiaMengNotShowShouCangDiv").show();//收藏图标
        }
    }
};
function GetPage(url) {
    var reg = /pg\d+/;
    var value = "";
    if (reg.test(url)) {
        value = url.match(reg)[0];
        value = value.replace("pg", "");
    }
    return value;
}
$(document).ready(function () {
    var page = GetPage(window.location.href.replace("http://", ""));
    if (page < 1) {
        page = 1;
    }
    baseTable(page, datas.list.pager.size, { action: "list" });
    var url = window.location.href.replace("http://", "");
    if (url.indexOf("zbso") < 0) {
        //var geolocation = new BMap.Geolocation();
        //geolocation.getCurrentPosition(function (r) {//获取当前浏览器坐标
        //    if (this.getStatus() == BMAP_STATUS_SUCCESS) {

        //        var lat = r.point.lat.toString();
        //        var lng = r.point.lng.toString();
        //        var radius = "3000";
        //        var n = "", a = "", r = "";
        //        for (var i = 0; i < lng.length; i++) {
        //            if (lng[i] == ".")
        //                n += "K";
        //            else
        //                n += String.fromCharCode(65 + parseInt(lng[i]));
        //        }
        //        for (var i = 0; i < lat.length; i++) {
        //            if (lat[i] == ".")
        //                a += "K";
        //            else
        //                a += String.fromCharCode(65 + parseInt(lat[i]));
        //        }
        //        for (var i = 0; i < radius.length; i++) {
        //            r += String.fromCharCode(65 + parseInt(radius[i]));
        //        }
        //        var param = n + "L" + a + "L" + r;



        //        $("#bdzbp").html("找到了您的位置,是否看看附近的二手房   ");
        //        var buttondom = $("<a  class='bd-zuobiao-a-green' href=\"/ershoufang/zbso" + param + "\"  class=\"buttonSta03 bZ\">确定</a>");
        //        var buttonnodom = $("<a class='bd-zuobiao-a-white' href='javascript:void(0);'>取消</a>");
        //        $("#bdzbp").append(buttondom);
        //        $("#bdzbp").append(buttonnodom);
        //        buttonnodom.click(function () {
        //            $("#bdzb").hide();
        //        });
        //        $("#bdzb").show();



        //    }
        //}, { enableHighAccuracy: true });
    }
    $("#jingpinList a[name='bid']").one("click", function () {
        var url = $(this).attr("url");
        $.post(url);
    });
    $("#tuiguangList a[name='bid']").click(function () {
        var url = $(this).attr("url");
        $.post(url);
    });

    //tongji
    /*mgurl.appendTagToHead({ url: tongjiurl + "?key=1,1,2,2,0" });//提交页面打开次数统计数据*/


    var ItemBidIdList = "0";
    $("#tuiguangList h3 a[name=bid]").each(function () {
        ItemBidIdList += "," + $(this).attr("bidid");
    });
    ItemBidIdList = ItemBidIdList.replace("0,", "");
   /* mgurl.appendTagToHead({ url: tongjiurl + "?key=1,2,1,2&key2=" + ItemBidIdList });//提交统计数据*/




    ItemBidIdList = "0";
    $("#jingpinList h3 a[name=bid]").each(function () {
        ItemBidIdList += "," + $(this).attr("bidid");
    });
    ItemBidIdList = ItemBidIdList.replace("0,", "");
    /*mgurl.appendTagToHead({ url: tongjiurl + "?key=1,3,1,2&key2=" + ItemBidIdList });//提交统计数据*/

    datas.jiaMengHideJiBie();



});