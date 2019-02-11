

$(".searchbutton").click(function () {//搜索按钮
    var searchText = replaceSpecial($("#txtSearch").val());
    var searchTypeUrl = "/xinfang/";
    pageTracker(searchTypeUrl);//行为追踪
    if (searchText != "") {
        var urlxf = searchTypeUrl + "pg1/so" + searchText;
        location.href = urlxf;
    } else {
        location.href = searchTypeUrl;
    }
});
var postId;

$("#txtSearch").keyup(function (event) {//首页导航大搜索

    var searchTypeUrl = "/xinfang/";
    var searchText = replaceSpecial($("#txtSearch").val());
    if (!searchText) {
        $(".searchinput-text").hide();
        return false;
    }
    if (event.keyCode == 27 || event.keyCode == 13 || event.keyCode == 38 || event.keyCode == 40) {
        searchControl(event.keyCode, searchTypeUrl);
        return false;
    }
    if (postId) {
        postId.abort();
    }

    postId = $.post(BaseUrl_IIS_Application_Name + "MApi/yunSearch_xf_xf.ashx", { "searchstr": encodeURIComponent(searchText) }, function (data) {
        var $tag = $("#ulSearchResult").empty();
        if (data.data != null && data.data.length != 0) {
            for (i = 0; i < data.data.length; i++) {
                $($tag).append("<li class=\"searchtext-current\"><a href='../" + data.data[i].XqPY + "/' target=\"_blank\">" + data.data[i].XqName + "<em>" + data.data[i].AreaName + "</em></a></li>");
            }

            $(".searchinput-text").show();

        } else {
            $(".searchinput-text").hide();
        }
    });

    //postId =$.ajax({
    //    url: BaseUrl_IIS_Application_Name + "MApi/yunSearch_xf_xf.ashx",
    //    type: "POST",
    //    data: { searchstr: searchText },
    //    dataType: "json",            
    //    success: function (data) {
    //        var $tag = $("#ulSearchResult").empty();
    //        if (data.result.items != null && data.result.num != 0) {
    //            $.each(data.result.items, function (i, item) {                       
    //                    $($tag).append("<li class=\"searchtext-current\"><a href=\"xinfang/" + item.XqPY + item.XqId + "\" target=\"_blank\">" + item.XqName + "<em>" + item.AreaName + "</em></a></li>");                       
    //            });
    //            $(".searchinput-text").show();

    //        } else {
    //            $(".searchinput-text").hide();
    //        }
    //    }
    //});

    return false;
});

//真房源查询
$(".no-sea-btn").click(function () {
    checkHouse();
});
//真房源查询
$("#txtCheck").keyup(function (event) {
    if (event.keyCode == 13) {
        checkHouse();
    }
});
//真房源查询X的隐藏
$("#btnCloseCheck").click(function () {
    $(".no-search-con").hide();
    return false;
});

function checkHouse() {

    $("#pIllegal").hide().next().hide().next().hide().next().hide();
    var houseId = $.trim($("#txtCheck").val());
    if (/^[0-9]{6,7}$/.test(houseId)) {
        $.post(BaseUrl_IIS_Application_Name + "Ashx/HouseHandler.ashx", { "action": "index", "houseId": houseId }, function (json) {

            if (json.flag <= 0) {
                $("#pCheckFailed").find("em").text(houseId).end().show();
            } else {
                var hId = json.obj.list.HouseId;
                var imgUrl = HousePhoto + json.obj.list.CoverImg;
                var title = json.obj.list.XqName;
                var priceSum = json.obj.list.PriceSum;
                var dealText;
                var xqPy = json.obj.list.xqPy;
                var errorImg = HousePhoto + "/images/none.gif";
                if (json.obj.list.Title) {
                    title = json.obj.list.Title;
                }
                if (json.obj.list.DealType == 77) {
                    dealText = "ershoufang";
                    priceSum = priceSum + "万";
                } else {
                    dealText = "zufang";
                    priceSum = priceSum + "元/月";
                }
                $("#divCheckComplete").find("a").eq(0).attr("href", "/" + dealText + "/" + hId + "/").attr("title", title).html("<img src=\"" + imgUrl + "\" alt=\"" + title + "\" onerror=\"this.src='" + errorImg + "'\">").end().eq(1).attr("href", "/" + dealText + "/" + hId + "/").attr("title", title).text(title).next().text(priceSum).end().end().end().show().next().find("a").attr("href", "/xiaoqu/" + xqPy + "/" + dealText + "/").end().show();
            }
        });
    } else {
        $("#pIllegal").show();
    }
    $(".no-search-con").show();
}



function searchControl(keyCode, searchTypeUrl) {
    var selectItem;
    var selectIndex;
    var resultItems;
    if (keyCode == 38) {
        //向上键
        selectItem = $(".searchtext-current");
        resultItems = $("#ulSearchResult").find("li");
        selectIndex = resultItems.index($(selectItem));
        resultItems.removeClass("searchtext-current");
        if (selectIndex == 0) {
            resultItems.eq(resultItems.length - 1).addClass("searchtext-current");
        } else {
            selectItem.prev().addClass("searchtext-current");
        }
    } else if (keyCode == 40) {
        //向下键
        selectItem = $(".searchtext-current");
        resultItems = $("#ulSearchResult").find("li");
        selectIndex = resultItems.index($(selectItem));
        resultItems.removeClass("searchtext-current");
        if (resultItems.length == selectIndex + 1) {
            resultItems.eq(0).addClass("searchtext-current");
        } else {
            selectItem.next().addClass("searchtext-current");
        }
    } else if (keyCode == 27) {
        $(".searchinput-text").hide();
    } else if (keyCode == 13) {
        var selectItemLink = $(".searchtext-current").find("a");
        var selectText = selectItemLink.text().replace(selectItemLink.find("em").text(), "");
        $(".searchinput-text").hide();
        if (!selectText) {
            goSearch(searchTypeUrl, true);
            return;
        }
        searchTypeUrl = selectItemLink.attr("href");
        $("#txtSearch").val(selectText);
        goSearch(searchTypeUrl, true, true);
    }
}

function goSearch(searchTypeUrl, isHref, isSelect) {
    var searchText = replaceSpecial($("#txtSearch").val());
    //行为追踪
    pageTracker(searchTypeUrl);

    if (isHref) {
        if (searchText && searchText != "请输入您想找到的房源名称或地区" && !isSelect) {
            location.href = searchTypeUrl + "so" + searchText;
        } else {
            location.href = searchTypeUrl.replace("//", "/");
        }
    } else {
        if (searchText && searchText != "请输入您想找到的房源名称或地区" && !isSelect) {
            window.open(searchTypeUrl + "so" + searchText);
        } else {
            window.open(searchTypeUrl.replace("//", "/"));
        }
    }
}

//追踪统计
function pageTracker(name) {
    try {
        name = name.substring(1, name.indexOf("/", 1));
        _gaq.push(['_trackPageview', '/virtual/index/' + name + '.html']);
    } catch (e) { }
}

function replaceSpecial(characters) {
    if (characters) {
        return characters.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g, '');
    }
    return characters;
}


function UserLogin() {
    if ($.cookie("usercenter")) {
        var loginDiv = "<i></i>";
        loginDiv = loginDiv + "<span class='userName'>" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
        loginDiv = loginDiv + "<a href=\"/usercenter/shoucang/ershoufang/\" target=\"_blank\">管理</a>";
        loginDiv = loginDiv + "<a id=\"btnLogout\" href=\"javascript:void(0)\">退出</a>";
        $("#LoginUser").html(loginDiv);
        $("#btnLogout").click(function () {


            $.cookie("usercenter", null, { expires: -1, path: '/' });
            if (window.location.href.indexOf("usercenter") != -1) {
                window.location.href = "/";
            } else {
                UserLogin();
            }

        });
    } else {
        {
            $("#LoginUser").html("<i></i><a rel=\"nofollow\" href=\"/usercenter/login/\" class=\"logintopbtn\" target=\"_blank\">登录</a><a rel=\"nofollow\" href=\"/usercenter/reg/\" target=\"_blank\">注册</a>");

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

UserLogin();


function otherShow() {
    var sWidth = $("#focus").width();
    var len = $("#focus ul li").length;
    var index = 0;
    var picTimer;
    var btn = "<div class='btnBg'></div><div class='btn'>";
    for (var i = 0; i < len; i++) {
        btn += "<span></span>";
    }
    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
    $("#focus").append(btn);
    $("#focus .btnBg").css("opacity", 0);
    $("#focus .btn span").css("opacity", 0.4).mouseenter(function () {
        index = $("#focus .btn span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
    $("#focus .preNext").css("opacity", 0.0).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.5" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0" }, 300);
    });
    $("#focus .pre").click(function () {
        index -= 1;
        if (index == -1) {
            index = len - 1;
        }
        showPics(index);
    });
    $("#focus .next").click(function () {
        index += 1;
        if (index == len) {
            index = 0;
        }
        showPics(index);
    });
    $("#focus ul").css("width", sWidth * (len));
    $("#focus").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 2000);
    }).trigger("mouseleave");

    function showPics(index) {
        var nowLeft = -index * sWidth;
        $("#focus ul").stop(true, false).animate({ "left": nowLeft }, 300);
        $("#focus .btn span").stop(true, false).animate({ "opacity": "0.4" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300);
    }
}

otherShow();


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

