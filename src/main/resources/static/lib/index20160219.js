$(document).ready(function () {

    //-------用户登录-------//
/*    function UserLogin() {
        if ($.cookie("usercenter")) { 
            var loginDiv = "";
            loginDiv = loginDiv + "<span>您好&nbsp;" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
            loginDiv = loginDiv + "<div id=\"userLoginDiv\" class=\"login-tc-menu\" style=\"display: none\">";
            loginDiv = loginDiv + "<em></em>";
            loginDiv = loginDiv + "<a href=\"/usercenter/shoucang/ershoufang/\">进入管理</a>";
            loginDiv = loginDiv + "<a id=\"btnLogout\" href=\"javascript:void(0);\">退出</a>";
            loginDiv = loginDiv + "</div>";



            //loginDiv = loginDiv + "<span class='userName'>" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
            //loginDiv = loginDiv + "<i>|</i><a href=\"/usercenter/shoucang/ershoufang/\" target=\"_blank\">管理</a>";
            //loginDiv = loginDiv + "<i>|</i><a  id=\"btnLogout\" href=\"javascript:void(0)\">退出</a>";
            $("#LoginUser").html(loginDiv);
            $("#btnLogout").click(function () {
                //清除cookie,主页,原版的cookie清除不彻底
                $.cookie("usercenter", null, { expires: -1, path: '/', domain: '.yuqiao.dev' });
                $.cookie("usercenter", null, { expires: -1, path: '/', domain: '.yuqiao.cn' });
                $.cookie("usercenter", null, { expires: -1, path: '/' });
                if (window.location.href.indexOf("usercenter") != -1) {
                    window.location.href = "/";
                } else {
                    UserLogin();
                }

            });
            $("#LoginUser").mouseover(function () {
                $("#userLoginDiv").show();
            });
            $("#LoginUser").mouseout(function () {
                $("#userLoginDiv").hide();
            });
        } else {
            {
                $("#LoginUser").html("<a rel=\"nofollow\" href=\"../login-res/login.html\" class=\"logintopbtn\" target=\"_blank\">登录</a><i>|</i><a rel=\"nofollow\" href=\"../login-res/regist.html\" target=\"_blank\">注册</a>");

            }
        }
    }
*/
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
    /*UserLogin();*/
    //-------用户登录-------//



    //-------真假房源-------//
    //真房源查询
    $("#HChaxun").click(function (e) {
        checkHouse(e);
    });
    //真房源查询
    $("#txtCheck").keyup(function (event) {
        if (event.keyCode == 13) {
            checkHouse();
        }
    });
    //隐藏查询条件
    $(document.body).on("click", function (e) {
        $("#pCheckFailed").hide();
        $("#pIllegal").hide();
    });

    //真房源查询X的隐藏
    $("#btnCloseCheck").click(function () {
        $(".no-search-con").hide();
        return false;
    });

    function checkHouse(e) {
        var houseId = $.trim($("#txtCheck").val());
        if (houseId != "") {
            $("#pIllegal").hide();
            $("#pCheckFailed").hide();

            if (/^[0-9]{6,7}$/.test(houseId)) {
                $.post(BaseUrl_IIS_Application_Name + "Ashx/HouseHandler.ashx", { "action": "index", "houseId": houseId }, function (json) {

                    if (json.flag <= 0) {//如果没查到信息
                        $("#pIllegal p").html("不存在编号为" + houseId + "的房源<br />服务监督电话：024-23897777");
                        $("#pIllegal").show();
                    } else {
                        var hId = json.obj.list.HouseId;
                        var CountRoom = json.obj.list.CountRoom;
                        var Mianji = json.obj.list.Mianji;
                        var imgUrl = HousePhoto + json.obj.list.CoverImg;//房源图片
                        var title = json.obj.list.XqName + " " + CountRoom + "室 " + Mianji + "平";//标题
                        var url = "/ershoufang/" + hId + "/";//跳转链接
                        var priceSum = json.obj.list.PriceSum + "万";//价格
                        var xqPy = json.obj.list.xqPy;//小区拼音
                        if (json.obj.list.DealType == 78) {//如果是租房
                            url = "/zufang/" + hId + "/";
                            priceSum = json.obj.list.PriceSum + "元/月";
                        }
                        $("#HimgUrl").attr("href", url);
                        $("#Himg").attr("src", imgUrl);
                        $("#Himg").attr("title", title);
                        $("#Htitle").text(title);
                        $("#Htitle").attr("title", title);
                        $("#Htitle").attr("href", url);
                        $("#Hprice").text(priceSum);
                        $("#Hxq").attr("href", "/xiaoqu/" + xqPy + "/");
                        $("#pCheckFailed").show();
                    }
                });
            } else {
                $("#pIllegal p").text("请输入6-7位的房源编码");
                $("#pIllegal").show();
            }
            e.stopPropagation();
        }
    }
    //-------真假房源-------//

     

    //---------顶部大搜索----------//
    $(".search-menu li").click(function () {//搜索选项卡
        $(this).parent().find("li").removeClass("selectCurrent");
        $(this).addClass("selectCurrent");
        var type = $(this).find("a").attr("href").replace(/\//g, "");
        $(".GJCtongji").hide();
        $("#" + type + "TJ").show();
        var tags = $("#searchtags").find("." + type + "showtag");
        $.each(tags.find("a"), function (i, _i) {
            var taghref = $(_i).attr("href").replace("ershoufang", type).replace("zufang", type).replace("xinfang", type).replace("shangyongfang", type);
            $(_i).attr("href", taghref);
        })
        $("#searchtags").find("li").hide();
        tags.show();
        return false;
    });
    $(".searchbutton").click(function () {//搜索按钮
        var searchText = replaceSpecial($("#txtSearch").val());
        var searchTypeUrl = $(".selectCurrent").find("a").attr("href");
        pageTracker(searchTypeUrl);//行为追踪
        if (searchText != "") {
            location.href = searchTypeUrl + "so" + searchText + (searchTypeUrl == "/xinfang/" ? "/pg1/" : "");//这里因为跳转问题输入英文不会跳到列表页而是跳到详情页导致404,所以新房路径加上/pg1/
        } else {
            location.href = searchTypeUrl;
        }
    });

    var postId;
    //输入框
    $("#txtSearch").keyup(function (event) {//首页导航大搜索
        //搜索类型
        var searchTypeUrl = $(".selectCurrent").find("a").attr("href");
        //搜索关键字
        var searchText = replaceSpecial($(this).val());
        if (!searchText) {
            $(".searchinput-text").hide();
            return false;
        }
        //搜索结果选择
        if (event.keyCode == 27 || event.keyCode == 13 || event.keyCode == 38 || event.keyCode == 40) {
            searchControl(event.keyCode, searchTypeUrl);
            return false;
        }
        //请求终止
        if (postId) {
            postId.abort();
        }
        if (isJiaMeng == "false") {
            $.ajax({
                type: "post",
                url: BaseUrl_IIS_Application_Name + "MApi/yunSearch.ashx",
                dataType: "json",
                data: { "searchstr": searchText },
                success: function (data) {
                    var $tag = $("#ulSearchResult").empty();
                    if (data.result.items != null && data.result.num != 0) {
                        $.each(data.result.items, function (i, item) {
                            if (i == 0) {
                                $($tag).append("<li class=\"searchtext-current\"><a href=\"" + searchTypeUrl + "xq" + item.xqid + "/\" target=\"_blank\">" + item.xqname + "<em>" + item.areaname + (item.xqaddressfilter == "" ? "" : "-" + item.xqaddressfilter) + "</em></a></li>");
                            } else {
                                $($tag).append("<li><a href=\"" + searchTypeUrl + "xq" + item.xqid + "/\" target=\"_blank\">" + item.xqname + "<em>" + item.areaname + (item.xqaddressfilter == "" ? "" : "-" + item.xqaddressfilter) + "</em></a></li>");
                            }
                        })
                        $(".searchinput-text").show();
                    } else {
                        $(".searchinput-text").hide();
                    }
                }
            });
        }

        //postId = $.post(BaseUrl_IIS_Application_Name + "Ashx/DistrictPinYinHandler.ashx", { "FuzzyContent": encodeURIComponent(searchText) }, function (data) {
        //    var $tag = $("#ulSearchResult").empty();
        //    if (data.data != null && data.data.flag != 0) {
        //        $.each(data.data, function (i, item) {
        //            if (i == 0) {
        //                $($tag).append("<li class=\"searchtext-current\"><a href=\"" + searchTypeUrl + "xq" + item.XqId + "/\" target=\"_blank\">" + item.XqName + "<em>" + item.AreaName + "</em></a></li>");
        //            } else {
        //                $($tag).append("<li><a href=\"" + searchTypeUrl + "xq" + item.XqId + "/\" target=\"_blank\">" + item.XqName + "<em>" + item.AreaName + "</em></a></li>");
        //            }
        //        });
        //        $(".searchinput-text").show();

        //    } else {
        //        $(".searchinput-text").hide();
        //    }
        //});
        return false;
    });

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
    //---------顶部大搜索----------//

    //*******************************************************
    //添加无图片事件
    //*******************************************************
    $("img[name='mob_smallImg']").attr("onerror", "this.src='" + onimgurl_small + "'");
    $("img[name='mob_bigImg']").attr("onerror", "this.src='" + onimgurl_big + "'");
    $("img[name='mob_jjrImg']").attr("onerror", "this.src='" + onimgurl_jjr + "'");


});
