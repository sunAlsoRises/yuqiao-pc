
function lishi(id, divmode) {
    $("#lishi_ershoufang").hide();
    $("#lishi_zufang").hide();
    $("#lishi_xiaoqu").hide();
    if (id == 1) {
        $("#lishi_ershoufang").show();
    }
    else if (id == 2) {
        $("#lishi_zufang").show();
    }
    else if (id == 3) {
        $("#lishi_xiaoqu").show();
    }
    $(".ibar-history-head a").removeAttr("class");
    $(".ibar-history-head a:eq(" + (id - 1) + ")").attr("class", "his_on");
}
function GetCookie(mname, sname) {
    if ($.cookie(mname) == null) {
        return null;
    } 
    var cookies = $.cookie(mname).split('&');
    var res = '';
    for (var i = 0; i < cookies.length; i++) {
        var one = cookies[i].split('=');
        if (one[0] == sname) {
            res = one[1];
            break;
        }
    }
    return res;
}

$(function () {
    $("#fydb").click(function () {
        $("#pop-compare").toggle();
    });
    if (GetCookie("usercenter", "web_username") != null) {
        $("#LoginUserInfo").html("<li>" + decodeURI("用户名：" + GetCookie("usercenter", "web_username")) + "</li><li><a href='/usercenter/user/'>进入会员中心</a></li>");
    }

    //创建DOM
    var
        quickHTML = $("div.quick_link_mian"),
        quickShell = $(document.createElement('div')).html(quickHTML).addClass('quick_links_wrap');
    quickShell.appendTo('.mui-mbar-tabs');

    var historySellHouse = $.cookie("historySellHouse");
    var historyRentHouse = $.cookie("historyRentHouse");
    var historyAgent = $.cookie("historyAgent");
    var historyDistrict = $.cookie("historyDistrict");

    var lishiCookies = "";
    var lishi_ershoufang = "";
    if (historySellHouse) {
        var items = historySellHouse.split("々");
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                //ershoufang += "<li class=\"clearfix SellHouse\"><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/ershoufang\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/ershoufang\">" + tmpItems[2] + "</a></span><strong>" + tmpItems[3] + "万</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i>/<i>" + tmpItems[10] + "元/㎡</i></div></li>";
                lishi_ershoufang = " <div class=\"imp_item\">" +
                    "<a href=\"/ershoufang/" + tmpItems[0] + "/\" class=\"pic\" target=\"_blank\"><img src=\"" + tmpItems[1] + "\"></a>" +
                    "<p class=\"tit\"><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\">" + tmpItems[2] + "</a></p>" +
                    "<p class=\"price\"><span>" + tmpItems[4] + "室" + tmpItems[5] + "厅</span><span>" + tmpItems[7] + "㎡</span><span><em>" + tmpItems[3] + "</em>万</span></p></div>" + lishi_ershoufang;
            }
        });

    }
    lishi_ershoufang = "<div id='lishi_ershoufang'>" + lishi_ershoufang + "</div>";

    var lishi_zufang = "";
    if (historyRentHouse) {
        var items = historyRentHouse.split("々");
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                //tmpTag += "<li class=\"clearfix RentHouse\" style=\"display:none\"><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/zufang\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/zufang\">" + tmpItems[2] + "</a></span><strong>" + tmpItems[3] + "元/月</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i></div></li>";
                lishi_zufang = " <div class=\"imp_item\">" +
                    "<a href=\"/zufang/" + tmpItems[0] + "/\" class=\"pic\" target=\"_blank\"><img src=\"" + tmpItems[1] + "\"></a>" +
                    "<p class=\"tit\"><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\">" + tmpItems[2] + "</a></p>" +
                    "<p class=\"price\"><span>" + tmpItems[4] + "室" + tmpItems[5] + "厅</span><span>" + tmpItems[7] + "㎡</span><span><em>" + tmpItems[3] + "</em>元/月</span></p></div>" + lishi_zufang;
            }
        });
    }
    lishi_zufang = "<div id='lishi_zufang' style='display:none;'>" + lishi_zufang + "</div>";

    var lishi_xiaoqu = "";

    if (historyDistrict) {
        tmpTag = "";
        items = historyDistrict.split("々");
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                //tmpTag += "<li class=\"clearfix District\" style=\"display:none\"><a href=\"/xiaoqu/" + tmpItems[3] + "/\" target=\"_blank\" linkType=\"history/xiaoqu\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/xiaoqu/" + tmpItems[3] + "/\" target=\"_blank\" linkType=\"history/xiaoqu\">" + tmpItems[2] + "</a></span><a href=\"/ershoufang/xq" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/xiaoqu/ershoufang\">二手房<strong>" + tmpItems[4] + "</strong>套</a><br><a href=\"/zufang/xq" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/xiaoqu/zufang\">租房<strong>" + tmpItems[5] + "</strong>套</a></div></li>";
                lishi_xiaoqu = " <div class=\"imp_item\">" +
                    "<a href=\"/s/" + tmpItems[3] + "/\" class=\"pic\" target=\"_blank\"><img src=\"" + tmpItems[1] + "\"></a>" +
                    "<p class=\"tit\"><a href=\"/s/" + tmpItems[3] + "/\" target=\"_blank\">" + tmpItems[2] + "</a></p>" +
                    "<p class=\"price\"><span><a href=\"/ershoufang/xq" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/xiaoqu/ershoufang\">二手房<strong>" + tmpItems[4] + "</strong>套</a><br><a href=\"/zufang/xq" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/xiaoqu/zufang\">租房<strong>" + tmpItems[5] + "</strong>套</a></span></p></div>" + lishi_xiaoqu;
            }
        });
    }
    lishi_xiaoqu = "<div id='lishi_xiaoqu' style='display:none;'>" + lishi_xiaoqu + "</div>";

    lishiCookies = "<div class=\"ibar_plugin_content\"><div class=\"ibar-history-head\"><a href='javascript:lishi(1,this);' class='his_on'>二手房</a> <a href='javascript:lishi(2,this);'>租房</a> <a href='javascript:lishi(3,this);'>小区</a></div><div class=\"ibar-moudle-product\">" + lishi_ershoufang + lishi_zufang + lishi_xiaoqu + "</div></div>";

    //具体数据操作 
    var
        quickPopXHR,
        popTmpl = '<a href="javascript:void(0);" class="ibar_closebtn" title="关闭">&#xe646;</a><div class="ibar_plugin_title"><h3><%=title%></h3></div><div class="pop_panel"><%=content%></div><div class="arrow"><i></i></div><div class="fix_bg"></div>',
        quickPop = quickShell.find('#quick_links_pop'),
        quickDataFns = {
            mpbtn_histroy: {
                title: '我的浏览',
                content: lishiCookies,
                init: $.noop
            }//,
            //mpbtn_wdsc: {
            //    title: '我的收藏',
            //    content: '<div class="ibar_plugin_content"><div class="ibar-history-head">共收藏3套<a href="#">清空</a></div><div class="ibar-moudle-product"><div class="imp_item"><a href="#" class="pic"><img src="https://img73.517cdn.com/up2014/zy/2016/4/26/house/big/fid2177288_uid34722_20160426101310083745.jpg"></a><p class="tit"><a href="#">封闭小区 交通便利 配套齐全 商圈集中 楼王位</a></p><p class="price"><span>2室2厅</span><span>93㎡</span><span><em>69</em>万</span></p></div><div class="imp_item"><a href="#" class="pic"><img src="https://g.517cdn.com//up2014/zy/2016/4/26/house/big/fid2177288_uid34722_20160426101310083745.jpg"></a><p class="tit"><a href="#">封闭小区 交通便利 配套齐全 商圈集中 楼王位</a></p><p class="price"><span>2室2厅</span><span>93㎡</span><span><em>69</em>万</span></p></div></div></div>',
            //    init: $.noop
            //}
        };

    //showQuickPop
    var
        prevPopType,
        prevTrigger,
        doc = $(document),
        popDisplayed = false,
        hideQuickPop = function () {
            $("#right_tabs").css("width", "0px");
            if (prevTrigger) {
                prevTrigger.removeClass('current');
            }
            popDisplayed = false;
            prevPopType = '';
            quickPop.hide();
            quickPop.animate({ left: 280, queue: true });
        },
        showQuickPop = function (type) {
            $("#right_tabs").css("width", "320px");
            if (quickPopXHR && quickPopXHR.abort) {
                quickPopXHR.abort();
            }
            if (type !== prevPopType) {
                var fn = quickDataFns[type];
                quickPop.html(ds.tmpl(popTmpl, fn));
                fn.init.call(this, fn);
            }
            doc.unbind('click.quick_links').one('click.quick_links', hideQuickPop);

            quickPop[0].className = 'quick_links_pop quick_' + type;
            popDisplayed = true;
            prevPopType = type;
            quickPop.show();
            quickPop.animate({ left: 0, queue: true });
        };
    quickShell.bind('click.quick_links', function (e) {
        e.stopPropagation();
    });
    quickPop.delegate('a.ibar_closebtn', 'click', function () {
        $("#right_tabs").css("width", "0px");
        quickPop.hide();
        quickPop.animate({ left: 280, queue: true });
        if (prevTrigger) {
            prevTrigger.removeClass('current');
        }
    });

    //通用事件处理
    var
        getHandlerType = function (className) {
            return className.replace(/current/g, '').replace(/\s+/, '');
        },
        showPopFn = function () {
            var type = getHandlerType(this.className);
            if (popDisplayed && type === prevPopType) {
                return hideQuickPop();
            }
            showQuickPop(this.className);
            if (prevTrigger) {
                prevTrigger.removeClass('current');
            }
            prevTrigger = $(this).addClass('current');
        },
        quickHandlers = {
            mpbtn_histroy: showPopFn//,
            // mpbtn_wdsc: showPopFn
        };
    quickShell.delegate('a', 'click', function (e) {
        var type = getHandlerType(this.className);
        if (type && quickHandlers[type]) {
            quickHandlers[type].call(this);
            e.preventDefault();
        }
    });
    $(".quick_links_panel li").mouseenter(function () {//侧边栏会员信息
        $(this).children(".mp_tooltip").stop(true, false).animate({ left: -92 }, { queue: false }).css("visibility", "visible");
        $(this).children(".ibar_login_box").css("display", "block");
    });
    $(".quick_links_panel li").mouseleave(function () {//侧边栏会员信息
        $(this).children(".mp_tooltip").css("visibility", "hidden").stop(true, false).css("left", "-121px");
        $(this).children(".ibar_login_box").css("display", "none");
    });
    $(".quick_toggle li").mouseover(function () {//侧边栏二维码
        $(this).children(".mp_qrcode").show();
    });
    $(".quick_toggle li").mouseleave(function () {//侧边栏二维码
        $(this).children(".mp_qrcode").hide();
    });
});