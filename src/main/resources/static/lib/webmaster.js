$(function () {

    hoverInit();

    historyInit();
   
    compareReadInit();
    compareOtherInit();
    favInit();
    UserLogin();
    go_duibi();
    $("a.popLink").click(function () { 
        //$("div.r-f-content-1").hide();
        //$("#" + $(this).attr("for")).show();
        $("#pop-compare").show();
    });
    $("a.popLishi").click(function () {
        $("#lishi").show();
    }); 
    var self = this;
    var dataId = $("#ContentPlaceHolder1__hlFavLink").attr("dataid");
    var favClass = "1";
    if ($(self).hasClass("btnFavRentHouse")) {
        favClass = "2";
    } else if ($(self).hasClass("btnFavDistrict")) {
        favClass = "3";
    } else if ($(self).hasClass("btnFavCommercial")) {
        favClass = "5";
    } else if ($(self).hasClass("btnFavNewHouse")) {
        favClass = "6";
    }
    $.post(BaseUrl_IIS_Application_Name + "Ashx/UserCenter/UserFav.ashx", { action: "getuserfav", mapId: dataId, favClass: favClass }, function (redata) {
        if (redata > 0) {
            $("#ContentPlaceHolder1__hlFavLink").html("<i></i>已收藏");
        };
        
    });
    //$("div.r-f-content-1").mouseleave(function () {
    //    $(this).hide();
    //});
    $("a.btnClose").click(function () {
        $(this).parent().parent().hide();
    });

    $("#yijian").click(function () {
        $("#jianyibox").show();
    });
    $("#jianyibtn").click(function () {
        var jubaoTxtContent = $("#jubao_txtContent").val();
        var jubaoTxtUser = $("#jubao_txtUser").val();
        var jubaoTxtMobile = $("#jubao_txtMobile").val();
        if (!jubaoTxtContent) {
            alert("请填写意见建议内容");
            return;
        }
        if (!jubaoTxtUser || jubaoTxtUser == "输入您的称呼") {
            alert("请填写您的称呼，以便我们联系您");
            return;
        }
        if (!jubaoTxtMobile || jubaoTxtMobile == "输入您的常用联系电话") {
            alert("请填写您的电话，以便我们联系您");
            return;
        }
        $.post(BaseUrl_IIS_Application_Name + "Ashx/JuBaoHandler.ashx", { "actionType": "1", "fkMemo": jubaoTxtContent, "tell": jubaoTxtMobile, "WebName": jubaoTxtUser }, function (json) {
            if (json.data.Data > 0) {
                alert("感谢您提出的宝贵意见。");
                $("#jubao_txtContent").val("");
                $("#jubao_txtUser").val("");
                $("#jubao_txtMobile").val("");
                $("#jianyibox").hide();
            } else {
                alert("哎呀服务器过于繁忙,请稍候重试。");
                $("#jianyibox").hide();
            }
        });
    });
});


function user_history() {
    $.post(BaseUrl_IIS_Application_Name + "Ashx/HistoryHandler.ashx", {}, function (datahis) {

    });
}


/*
$("#btnLogout").click(function () {
        $.cookie("usercenter", null, { expires: -1, path: '/' });
        if (window.location.href.indexOf("usercenter") != -1) {
            window.location.href = "/";
        } else {
            UserLogin();
        }
    });
function UserLogin() {
    if ($.cookie("usercenter")) {
        var loginDiv = "<i></i>";
        loginDiv = loginDiv + "<span class='userName'>" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
        loginDiv = loginDiv + "<a href=\"/usercenter/shoucang/ershoufang/\" target=\"_blank\">管理</a>";
        loginDiv = loginDiv + "<a id=\"btnLogout\" href=\"javascript:void(0)\">退出</a>";
        $("#LoginUser").html(loginDiv);
    } else {
        {
            $("#LoginUser").html("<i></i><a rel=\"nofollow\" href=\"../../login-res/login.html\" class=\"logintopbtn\" target=\"_blank\">登录</a><a rel=\"nofollow\" href=\"/usercenter/reg/\" target=\"_blank\">注册</a>");

        }
    }
}
function GetCookie(mname, sname) {
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
*/

//-------用户登录-------//
function UserLogin() {
//  var hostUrl = window.location.host;
//  if (hostUrl.indexOf(".") < 0 && hostUrl != "") {//如果是加盟的话屏蔽登陆.
//      $("#LoginUser").html("");
//      return;
//  }
//
//  if (hostUrl == "i.yuqiao.cn") {
//      hostUrl = "https://www.yuqiao.cn/";
//  } else {
//      hostUrl = "/";
//  }
//  if ($.cookie("usercenter")) {
//      var loginDiv = "";
//      loginDiv = loginDiv + "<span>您好&nbsp;" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
//      loginDiv = loginDiv + "<div id=\"userLoginDiv\" class=\"login-tc-menu\" style=\"display: none\">";
//      loginDiv = loginDiv + "<em></em>";
//      loginDiv = loginDiv + "<a href=\"" + hostUrl + "usercenter/shoucang/ershoufang/\">进入管理</a>";
//      loginDiv = loginDiv + "<a id=\"btnLogout\" href=\"javascript:void(0);\">退出</a>";
//      loginDiv = loginDiv + "</div>";
//
//
//
//      //loginDiv = loginDiv + "<span class='userName'>" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
//      //loginDiv = loginDiv + "<i>|</i><a href=\"/usercenter/shoucang/ershoufang/\" target=\"_blank\">管理</a>";
//      //loginDiv = loginDiv + "<i>|</i><a  id=\"btnLogout\" href=\"javascript:void(0)\">退出</a>";
//      $("#LoginUser").html(loginDiv);
//      $("#btnLogout").click(function () {
//
//          $.cookie("usercenter", null, { expires: -1, path: '/', domain: '.yuqiao.dev' });
//          $.cookie("usercenter", null, { expires: -1, path: '/', domain: '.yuqiao.cn' });
//          $.cookie("usercenter", null, { expires: -1, path: '/' });
//          if (window.location.href.indexOf("usercenter") != -1) {
//              window.location.href = hostUrl;
//          } else {
//              UserLogin();
//          }
//
//      });
//      $("#LoginUser").mouseover(function () {
//          $("#userLoginDiv").show();
//      });
//      $("#LoginUser").mouseout(function () {
//          $("#userLoginDiv").hide();
//      });
//  } else {
//      {
//          $("#LoginUser").html("<a rel=\"nofollow\" href=\"" + hostUrl + "usercenter/login/\" class=\"logintopbtn\" target=\"_blank\">登录</a><i>|</i><a rel=\"nofollow\" href=\"" + hostUrl + "usercenter/reg/\" target=\"_blank\">注册</a>");
//
//      }
//  }
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
UserLogin();
//-------用户登录-------//



var clicktime = null;

function favInit() {
    $("a.btnFavSellHouse,a.btnFavRentHouse,a.btnFavDistrict,a.btnFavCommercial,a.btnFavNewHouse").click(function () {
        //if (clicktime == null) {
        //    clicktime = new Date().getTime();
        //}
        //else {
        //    if ((new Date().getTime() - clicktime) < 1000)
        //    {
        //        clicktime = null;
        //        return;
        //    }
        //} 
        if (!$.cookie("usercenter")) {
            window.location.href = '../../login-res/login.html?url=' + window.location.href;
            return;
            var loginDiv = $("div.loginLayer");
            var top = ($(window).height() - loginDiv.height()) / 2;
            var left = ($(window).width() - loginDiv.width()) / 2;
            var scrollTop = $(document).scrollTop();
            var scrollLeft = $(document).scrollLeft();
            loginDiv.css({ position: 'absolute', 'top': top + scrollTop, left: left + scrollLeft }).show();
            return;
        }

        var self = this;
        var dataId = $(self).attr("dataid");
        var favClass = "1";
        if ($(self).hasClass("btnFavRentHouse")) {
            favClass = "2";
        } else if ($(self).hasClass("btnFavDistrict")) {
            favClass = "3";
        } else if ($(self).hasClass("btnFavCommercial")) {
            favClass = "5";
        } else if ($(self).hasClass("btnFavNewHouse")) {
            favClass = "6";
        }
        var Isdel = "1";
        if ($(self).html() == "<i></i>取消收藏")
        {
            Isdel = "2";        
        }
        $.post(BaseUrl_IIS_Application_Name + "Ashx/UserCenter/UserFav.ashx", { action: "addUserFav", mapId: dataId, favClass: favClass, Isdel: Isdel }, function (data) {
            if (data == "-1") {
                alert("您还未登录,请登录后再收藏");//显示提示框 让用户确认是否跳转登陆
            } else if (data == "-2") {
                $(self).html("<i></i>已收藏");//改完之后应该不会出现这种问题       
                alert("您已收藏过此房源");

            }
            else if (data == "-3") {
                $(self).html("<i></i>收藏");
            } else if (data < 1) {
                alert("添加收藏失败，请联系管理员QQ：18698883703，会有奖励哦。");//为啥添加失败
            } 
            else {
                $(self).html("<i></i>已收藏");//这个是添加成功发生的事件
             
            }
         
        });
    });
    $("a.btnFavSellHouse,a.btnFavRentHouse,a.btnFavDistrict,a.btnFavCommercial,a.btnFavNewHouse").mouseover(function () {
        if ($(this).html() == "<i></i>已收藏")
        {
            $(this).html("<i></i>取消收藏")
        }
    });
    $("a.btnFavSellHouse,a.btnFavRentHouse,a.btnFavDistrict,a.btnFavCommercial,a.btnFavNewHouse").mouseout(function () {
        if ($(this).html() == "<i></i>取消收藏") {
            $(this).html("<i></i>已收藏")
        }
    });

    $("a.btnCloseLogin").click(function () {
        $("div.loginLayer").hide();
    });

    $("div.loginboxinput").find("input").keyup(function (event) {
        if (event.keyCode == 13) {
            $("a.logintextbtn").click();
        }
    });

    $("a.logintextbtn").click(function () {
        var loginInfo = {};
        $("div.loginboxinput").find("input").map(function () {
            loginInfo[$(this).attr("pName")] = $(this).val();
        });
        if (!loginInfo.userName || !loginInfo.password) {
            alert("请确认登录信息已全部填写");
            return;
        }

        $.post(BaseUrl_IIS_Application_Name + "Ashx/UserCenter/Account.ashx?action=quickLogin", loginInfo, function (data) {
            if (data == "-1") {
                alert("请确认登录信息已全部填写");
            } else if (data == "-2") {
                alert("用户名或密码错误，请确认输入的信息是否正确");
            } else if (data == 1) {
                alert("登录成功，下面将跳转到登录前页面。");
                location.href = location.href;
            } else {
                alert("登录失败。");
            }
        });
    });
}

function compareOtherInit() {
    $(".del-items").click(function () {
        $("dl.hasItem").remove();
        if (location.href.indexOf("ershoufang") > 0) {
            $.cookie("compareSellHouse", null, { expires: -1, path: '/' });
        }

        if (location.href.indexOf("zufang") > 0) {
            $.cookie("compareRentHouse", null, { expires: -1, path: '/' });
        }
        if (location.href.indexOf("shangyongfang") > 0) {
            if (location.href.indexOf("jy78") > 0) {
                $.cookie("compareRentHouse", null, { expires: -1, path: '/' });
            } else {

                $.cookie("compareSellHouse", null, { expires: -1, path: '/' });
            }
        }
        if (location.href.indexOf("duibi") > 0) {
            $(".titlieLi").nextAll().remove();
            for (var i = 0; i < 4; i++) {
                $(".ulclass").append("<li><div style=\"height: 134px\">" +
                    "</div> <div><a href=\"/ershoufang/\" class=\"btnClose\" style=\"display: inline-block;background: #34B85E;padding: 3px 5px;margin: 0 5px;color: #fff;border-radius: 2px;\" hid=\"\">添加</a></div>" +
                    "<div><a href=\"/ershoufang//\" target=\"_blank\" style=\"color: #06C;\"></a></div>" +
                    "<div><a href=\"/xiaoqu//\" target=\"_blank\" style=\"color: #06C;line-height:32px\"></a></div>  <div></div><div></div>  <div></div>  <div></div>" +
                    "<div></div><div></div><div></div><div></div><div></div><div></div><div></div>" +
                    "</li>");
            }
            $.cookie("compareSellHouse", null, { expires: -1, path: '/' });
            if (!!(window.history && history.replaceState)) {
                // 支持History API
                history.replaceState(null, null, '/duibi/');
            } else {
                // 不支持
                window.location.href = "/duibi/";
            }
        }
        //_gaq.push(['_trackPageview', '/virtual/compare/clear.html']);             //失效注释

        //if (location.href.indexOf("/shangyongfang/") > -1) {      //都是加入对比 17-10-08
        //    $("a.addCompare").html("<i></i>对比");
        //} else {
        $("a.addCompare").html("<i></i>加入对比");
        //}

    });

    $("a.addCompare").click(function () {
        if ((location.href.indexOf("ershoufang") < 0 && location.href.indexOf("duibi") < 0) || location.href.indexOf("ershoufanggr") > 0) {
            layer.msg('非常抱歉,暂时只支持二手房对比');
            return;
        }
        var self = this;
        var act = "addHouseCompare";
        var dataId = $(self).attr("dataid");
        var contentText = $(self).text();
        if (contentText == "取消对比" || contentText == "取消") {
            act = act.replace("add", "remove");
        }
        $("#pop-compare").show();
        if (contentText.indexOf("请稍候") > -1) {      //由于添加对比需要异步处理,为防止报错在post前添加请稍候提示,如果状态为请稍候则跳出,不继续执行
            return;
        }
        $(self).html("请稍候...");                     //post前添加请稍候状态,防止用户多次点击出现BUG,当异步执行完成后callback会对文字进行再次处理
        $.post(BaseUrl_IIS_Application_Name + "Ashx/FavHandler.ashx", { action: act, id: dataId }, function (data) {
            if (data.data.flag == 1) {
                $(".compareList").append(data.data.data.html);
                $("div.tagtab").find("a").removeClass("tag-hover").end().next().find("li.clearfix").hide();
                $("div.tagtab").find("a[for='" + data.data.data.type + "']").addClass("tag-hover");
                $("li." + data.data.data.type).show();
                $(self).html("<i></i>取消对比");
                //_gaq.push(['_trackPageview', '/virtual/compare/addCompare.html']);                //失效注释
                var tmpIds = $("#duibi").find("li." + data.data.data.type).map(function () {
                    return $(this).attr("dataid");
                }).get();
                if (tmpIds.length > 1) {
                    $("#btnCompare").attr("href", "/duibi/" + tmpIds.join(",") + "/").attr("target", "_blank");
                } else {
                    $("#btnCompare").attr("href", "javascript:void(0)").attr("target", "_self");
                }

            } else if (data.data.flag == 0) {
                $("dl[dataId='" + dataId + "']").remove();
                $(self).html("<i></i>加入对比");
            } else {
                layer.msg(data.data.msg);
                if (data.data.flag == -3) {
                    $(self).html("<i></i>取消对比");
                } else {
                    $(self).html("<i></i>加入对比");
                }
            }
            ReBindDelButtonEvent();
        });
    });

    $("input.addCompare").change(function () {
        if (location.href.indexOf("ershoufang") < 0 && location.href.indexOf("duibi") < 0 || location.href.indexOf("ershoufanggr") > 0) {
            layer.msg('非常抱歉,暂时只支持二手房对比');
            return;
        }
        $("#pop-compare").show();
        var self = this;
        var act = "addHouseCompare";
        var dataId = $(self).parents("form").find("#reportLink").attr("hid");
        if (!$(self).is(":checked")) {
            act = act.replace("add", "remove");
        }
        $(self).prop("disabled", true);
        $.post(BaseUrl_IIS_Application_Name + "Ashx/FavHandler.ashx", { action: act, id: dataId }, function (data) {
            $(self).prop("disabled", false);
            if (data.data.flag == 1) {
                $(".compareList").append(data.data.data.html);
                $("div.tagtab").find("a").removeClass("tag-hover").end().next().find("li.clearfix").hide();
                $("div.tagtab").find("a[for='" + data.data.data.type + "']").addClass("tag-hover");
                $("li." + data.data.data.type).show();
                $(self).prop("checked", true);
                var tmpIds = $("#duibi").find("li." + data.data.data.type).map(function () {
                    return $(self).attr("dataid");
                }).get();
                if (tmpIds.length > 1) {
                    $("#btnCompare").attr("href", "/duibi/" + tmpIds.join(",") + "/").attr("target", "_blank");
                } else {
                    $("#btnCompare").attr("href", "javascript:void(0)").attr("target", "_self");
                }
            } else if (data.data.flag == 0) {
                $("dl[dataId='" + dataId + "']").remove();
                $(self).prop("checked", false);
            } else {
                layer.msg(data.data.msg);
                if (data.data.flag == -3) {
                    $(self).prop("checked", true);
                } else {
                    $(self).prop("checked", false);
                }
            }
            ReBindDelButtonEvent();
        });
    });

    $("#duibi").find("div.tagtab").find("a").click(function () {
        var self = this;
        $(self).parent().find("a").removeClass("tag-hover").end().next().find("li.clearfix").hide();
        $(self).addClass("tag-hover");
        $("#duibi").find("li." + $(self).attr("for")).show();
        var tmpIds = $("#duibi").find("li." + $("#duibi").find("a.tag-hover").attr("for")).map(function () {
            return $(this).attr("dataid");
        }).get();
        if (tmpIds.length > 1) {
            $("#btnCompare").attr("href", "/duibi/" + tmpIds.join(",") + "/").attr("target", "_blank");
        } else {
            $("#btnCompare").attr("href", "javascript:void(0)").attr("target", "_self");
        }
    });

    $("#btnCompare").click(function () {
        var forName = $(this).parents("div").find("a.tag-hover").attr("for");

        //_gaq.push(['_trackPageview', '/virtual/compare/' + forName + '.html']);               //失效注释
    });
    $(".hide-me").click(function () {
        $("#pop-compare").hide();
        $(".quick_links_panel li>.mp_tooltip.fydbTip").css("visibility", "visible")
            .animate({ left: -97 }, 500).animate({ left: -121 }, 500)
            .animate({ left: -97 }, 500).animate({ left: -121 }, 500)
            .animate({ left: -97 }, 500).animate({ left: -121 }, 500)
            .animate({ left: -97 }, 500, function () { setTimeout(function () { $(".quick_links_panel li>.mp_tooltip.fydbTip").css("visibility", "hidden").css("left", "-121px"); }, 3000); });
    })
}


function go_duibi() {
    $("#goto-contrast").click(function () {
        if ($("#diff-items > .hasItem").length == 0) {
            layer.msg('请先添加房源之后再进行对比');
            return;
        }
        var cookidstr = getCookie("compareSellHouse").split('々');
        var houseids = "";
        $.each(cookidstr, function (i, _i) {
            houseids += _i.split('|')[0] + ",";
        });
        houseids = houseids.substring(0, houseids.length - 1)
        window.open("https://" + window.location.hostname+"/duibi/" + houseids);
    })
}
function delduibi(houseid) {
    if (houseid == undefined) {
        return;
    }
    $.post(BaseUrl_IIS_Application_Name + "Ashx/FavHandler.ashx", { action: "DelHouseCompare", id: houseid }, function (data) {
        if (data.data.flag == 1) {
            $.each($(".hasItem"), function (i, _i) {
                if ($(_i).attr("dataid") == houseid) {
                    $(_i).remove();
                    $("#guanzhu").prop("checked", false);
                }
            })
            $.each($(".addCompare"), function (i, _i) {
                if ($(_i).attr("dataid") == houseid) {
                    $(_i).html("<i></i>加入对比");
                }
            })
            var url = window.location.href;
            if (url.indexOf("/duibi") > 0) {
                url = url.substring(url.indexOf("/duibi"));
                var newurl = url.replace(houseid + ",", "").replace("," + houseid, "").replace(houseid, "");
                if (!!(window.history && history.replaceState)) {
                    // 支持History API
                    history.replaceState(null, null, newurl);
                } else {
                    // 不支持
                    window.location.href = newurl;
                }
            }
        }
        layer.msg(data.data.msg);
    });
}
function tongbushanchu(houseid) {
    $(".btnClose[hid=" + houseid + "]").parent().parent().remove();
    $(".ulclass").append("<li><div style=\"height: 134px\">" +
        "</div> <div><a href=\"/ershoufang/\" class=\"btnClose\" style=\"display: inline-block;background: #34B85E;padding: 3px 5px;margin: 0 5px;color: #fff;border-radius: 2px;\" hid=\"\">添加</a></div>" +
        "<div><a href=\"/ershoufang//\" target=\"_blank\" style=\"color: #06C;\"></a></div>" +
        "<div><a href=\"/xiaoqu//\" target=\"_blank\" style=\"color: #06C;line-height:32px\"></a></div>  <div></div><div></div>  <div></div>  <div></div>" +
        "<div></div><div></div><div></div><div></div><div></div><div></div><div></div>" +
        "</li>");
}
function compareReadInit() {
    var compareSellHouse = $.cookie("compareSellHouse");
    var compareRentHouse = $.cookie("compareRentHouse");
    var tmpTag;
    var items;
    var compareListHtml = $(".compareList").html();
    if (compareSellHouse) {
        tmpTag = "";
        items = compareSellHouse.split("々");
        $("li.sellHouse").remove();
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                if (compareListHtml.indexOf(tmpItems[0]) == -1) {
                    tmpTag += "<dl class='hasItem' dataId=\"" + tmpItems[0] + "\" fore='0'>" +
                        "<dt><a target='_blank' href='#'><img src='" + tmpItems[1] + "' width='50' height='50'></a></dt>" +
                        "<dd>" +
                        "<div class='r-lishi-fy-info'>" +
                        "<span><a href='/ershoufang/" + tmpItems[0] + "/' target='_blank'>" + tmpItems[2] + "</a></span>" +
                        "<strong>" + tmpItems[3] + "万</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i>/<i>" + tmpItems[10] + "元/㎡</i>" +
                        "<a class='del-comp-item isdelcookie' hostiod='" + tmpItems[0] + "' onclick='tongbushanchu(" + tmpItems[0] + ")'>删除</a>" +
                        "</div>" +
                        "</dd>" +
                        "</dl>";
                    //tmpTag += "<li dataId=\"" + tmpItems[0] + "\" class=\"clearfix SellHouse\"><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\">" + tmpItems[2] + "</a></span><strong>" + tmpItems[3] + "万</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i>/<i>" + tmpItems[10] + "元/㎡</i></div></li>";
                    $("div.ListBox-I[hid='yuqiao" + tmpItems[0] + "']").find("a.addCompare").html("<i></i>取消对比");
                    if (tmpItems[0] == $("#reportLink").attr("hid")) {
                        $("#guanzhu").attr("checked", true);
                    }
                } else {
                    $("div.ListBox-I[hid='yuqiao" + tmpItems[0] + "']").find("a.addCompare").html("<i></i>取消对比");
                    if (tmpItems[0] == $("#reportLink").attr("hid")) {
                        $("#guanzhu").attr("checked", true);
                    }
                }
            }
        });
        $(".compareList").append(tmpTag);
        //$(".pop-compare").show();
    }

    if (compareRentHouse) {
        tmpTag = "";
        items = compareRentHouse.split("々");
        $("li.rentHouse").remove();
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                if (compareListHtml.indexOf(tmpItems[0]) == -1) {
                    tmpTag += "<li dataId=\"" + tmpItems[0] + "\" class=\"clearfix RentHouse\" style=\"display:none\"><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\">" + tmpItems[2] + "</a></span><strong>" + tmpItems[3] + "元/月</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i></div></li>";
                    $("div.ListBox-I[hid='yuqiao" + tmpItems[0] + "']").find("a.addCompare").html("<i></i>取消对比");
                    if (tmpItems[0] == $("#reportLink").attr("hid")) {
                        $("#guanzhu").attr("checked", true);
                    }
                }
            }
        });
        $(".compareList").append(tmpTag);
    }

    if (compareRentHouse || compareSellHouse) {
        var tmpIds = $("#duibi").find("li." + $("#duibi").find("a.tag-hover").attr("for")).map(function () {
            return $(this).attr("dataid");
        }).get();
        if (tmpIds.length > 1) {
            $("#btnCompare").attr("href", "/duibi/" + tmpIds.join(",") + "/").attr("target", "_blank");
        } else {
            $("#btnCompare").attr("href", "javascript:void(0)").attr("target", "_self");
        }
    }

    ReBindDelButtonEvent();
}

function historyInit() {//老版的最近浏览
    var historySellHouse = $.cookie("historySellHouse");
    var historyRentHouse = $.cookie("historyRentHouse");
    var historyAgent = $.cookie("historyAgent");
    var historyDistrict = $.cookie("historyDistrict");
    var tmpTag;
    var items;
    if (historySellHouse) {
        tmpTag = "";
        items = historySellHouse.split("々");
        $("li.sellHouse").remove();
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                tmpTag += "<li class=\"clearfix SellHouse\"><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/ershoufang\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/ershoufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/ershoufang\">" + tmpItems[2] + "</a></span><strong>" + tmpItems[3] + "万</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i>/<i>" + tmpItems[10] + "元/㎡</i></div></li>";
            }
        });
        $("ul.historyList").append(tmpTag);
    }

    if (historyRentHouse) {
        tmpTag = "";
        items = historyRentHouse.split("々");
        $("li.rentHouse").remove();
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                tmpTag += "<li class=\"clearfix RentHouse\" style=\"display:none\"><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/zufang\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/zufang/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/zufang\">" + tmpItems[2] + "</a></span><strong>" + tmpItems[3] + "元/月</strong>/<i>" + tmpItems[4] + "室" + tmpItems[5] + "厅" + tmpItems[6] + "卫</i>/<i>" + tmpItems[7] + "㎡</i>/<i>" + tmpItems[8] + "</i>/<i>" + tmpItems[9] + "</i></div></li>";
            }
        });
        $("ul.historyList").append(tmpTag);
    }

    if (historyAgent) {
        tmpTag = "";
        items = historyAgent.split("々");
        $("li.agent").remove();
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                tmpTag += "<li class=\"clearfix Agent\" style=\"display:none\"><a href=\"/s/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/jingjiren\"><img src=\"" + tmpItems[1] + "\" ></a><div class=\"r-lishi-fy-info\"><span><a href=\"/s/" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/jingjiren\">" + tmpItems[2] + " - " + tmpItems[3] + "</a></span><span>电话:" + tmpItems[4] + "</span><a href=\"/sell/" + tmpItems[0] + "/\" target=\"_blank\">委托卖房</a><br><a href=\"/buy/" + tmpItems[0] + "/\" target=\"_blank\">委托买房</a></div></li>";
            }
        });
        $("ul.historyList").append(tmpTag);
    }

    if (historyDistrict) {
        tmpTag = "";
        items = historyDistrict.split("々");
        $("li.district").remove();
        $.each(items, function (i, item) {
            if (item) {
                var tmpItems = item.split("|");
                tmpTag += "<li class=\"clearfix District\" style=\"display:none\"><a href=\"/xiaoqu/" + tmpItems[3] + "/\" target=\"_blank\" linkType=\"history/xiaoqu\"><img src=\"" + tmpItems[1] + "\" style=\" height: 57px; \"></a><div class=\"r-lishi-fy-info\"><span><a href=\"/xiaoqu/" + tmpItems[3] + "/\" target=\"_blank\" linkType=\"history/xiaoqu\">" + tmpItems[2] + "</a></span><a href=\"/ershoufang/xq" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/xiaoqu/ershoufang\">二手房<strong>" + tmpItems[4] + "</strong>套</a><br><a href=\"/zufang/xq" + tmpItems[0] + "/\" target=\"_blank\" linkType=\"history/xiaoqu/zufang\">租房<strong>" + tmpItems[5] + "</strong>套</a></div></li>";
            }
        });
        $("ul.historyList").append(tmpTag);
    }

    $("#lishi").find("div.tagtab").find("a").click(function () {
        $(this).parent().find("a").removeClass("tag-hover").end().next().find("li.clearfix").hide();
        $(this).addClass("tag-hover");
        $("#lishi").find("li." + $(this).attr("for")).show();
    });

    $("#btnClearHistory").click(function () {
        $("li." + $("#lishi").find("a.tag-hover").attr("for")).remove();
        $.cookie("history" + $("#lishi").find("a.tag-hover").attr("for"), null, { expires: -1, path: '/' });

        //_gaq.push(['_trackPageview', '/virtual/history/clear.html']);             //失效注释
    });

    $("ul.historyList").find("a").bind("click", function () {
        //_gaq.push(['_trackPageview', '/virtual/' + $(this).attr('linkType') + '.html']);          //失效注释
    });
}

function hoverInit() {
    //$("img").attr("onerror", "this.src='" + HousePhoto + "/images/none.png'");            //最新方案 给img标签加name属性 批量为每一组图片加适合的报错图片   17-09-30
    //批量修改Start     小图name为mob_smallImg  大图name为mob_bigImg   经纪人图片name为mob_jjrImg  属性设定好就可以使用
    $("img[name='mob_smallImg']").attr("onerror", "this.src='" + onimgurl_small + "'");
    $("img[name='mob_bigImg']").attr("onerror", "this.src='" + onimgurl_big + "'");
    $("img[name='mob_jjrImg']").attr("onerror", "this.src='" + onimgurl_jjr + "'");
    //批量修改End
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
    $("div.p-tab-nav").find("a").mouseover(function () {
        $("div.p-tab-nav").find("a").removeClass("c-curr-b");
        $("div.p-tab-c-links").find("li").hide();
        $(this).addClass("c-curr-b");
        $("div.p-tab-c-links").find("li[rel='" + $(this).text() + "']").show();
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $(".r-f-2").show();
        } else {
            $(".r-f-2").hide();
        }
    });

    $("#pageflip").hover(function () {
        $("#pageflip img , .msg_block").stop()
            .animate({
                width: '307px',
                height: '319px'
            }, 500);
    }, function () {
        $("#pageflip img").stop()
            .animate({
                width: '50px',
                height: '52px'
            }, 220);
        $(".msg_block").stop()
            .animate({
                width: '50px',
                height: '50px'
            }, 200);
    });

    //网站地图经过用
    $(".n-top-mapsite").mouseover(function () {
        $(".n-top-mapsite").addClass("n-top-mapsite-hover");
        $(".mapmenu-btn").show();
    });
    $(".mapmenu-btn").mouseleave(function () {
        $(".mapmenu-btn").hide();
        $(".n-top-mapsite").removeClass("n-top-mapsite-hover");
    });
    //城市切换经过用
    $(".city-m-b").mouseover(function () {
        $(".city-list-n").show();
    });
    $(".city-list-n").mouseleave(function () {
        $(".city-list-n").hide();
    });
};

function ReBindDelButtonEvent() {
    $(".isdelcookie").unbind().click(function () {
        delduibi($(this).attr("hostiod"));
    });
}