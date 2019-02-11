function seturl(filter, control) {
    if (filter.indexOf("xinfang") > 0) {
        window.location.href = filter;
        return;
    }
    var seft = $(this);
    isajax = 1;
    Judgefilter(filter);
    ISBindSeach(filter);
    var weburl = window.location.href.replace("http://", "");
    //判断是否有 filter ==jy  是否重新绑定搜索条件
    //ISBindSeach(filter);
    if (filter == "jy78" || filter == "jy77") {
        weburl = "/shangyongfang/";
    }
    //$(".H-Lbox").html("<div class=\"yb_loadgif\"></div><div class=\"yb_bg\"></div><div style=\"height:200px\"></div>");
    //$(control).parent().find(".curr").attr("class", "");
    //$(control).attr("class", "curr");
    $.post(BaseUrl_IIS_Application_Name + "mapi/mapMessage", { pagename: "", action: "filter", filter: filter, weburl: weburl }, function (data) {

        var str = data.obj.str.split("/");
        var stri = "/";
        var so = /so\S+/;
        var pg = "";
        var page = 0;
        $.each(str, function (c, _c) {
            //if (_c) {
            //    //    if (so.test(_c)) {
            //    //        str.splice(c, 1);
            //    //    } else {
            //    stri += _c + "/";
            //    //}
            //}
            if (_c) {
                if (_c.indexOf("pg") >= 0) {
                    pg = _c + "/";
                    page = _c.replace("pg", "");
                }
                else {
                    stri += _c + "/";
                }
            }

        });
        if (navigator.appVersion.indexOf("MSIE 7.0") != -1 || navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1) //解决ie7不兼容
        {
            window.location.href = stri;
            return;
        }
        window.history.pushState({ "html": 11, "pageTitle": "111" }, 'title', stri);
        var url = data.obj.urllists;
        baseTable(page, datas.list.pager.size, { action: "list", xqzbkg: false });//绑数据
        $.each($(".chooseblock").find("a"), function (k, _k) {
            $(_k).attr("class", "");
        });
        $.each($("a[name$='_all']"), function (k, _k) {
            $(_k).attr("class", "curr");
        });
        if (data.obj.hanhua.length > 0) {
            $("#ContentPlaceHolder1_WUCSearch__pConditionShow").show();
            $("#ContentPlaceHolder1_WUCSearch__pConditionShow").html("<label>您已经选择：</label>");
            //_i  是返回hanhualist中的对象
            $.each($("#currspan span"), function (i, _i) {
                if ($(_i).find('a').attr('href') == 'so') {
                    $(_i).remove();
                }
            })
            $.each(data.obj.hanhua, function (i, _i) {
                var currdom = $(".choose-Condition-show");
                if (_i.Dkey == "so") {
                    $("#currspan").append("<span url='so" + _i.Value + "'>" + _i.Value + "<a  href='so' style=\"cursor: pointer\" onclick=\"seturl('" + _i.Dkey + "');return false;\">x</a></span>");
                }
                if (currdom.html().indexOf(_i.name) >= 0 || currdom.html().indexOf(_i.Value) && (location.href.indexOf("ershoufang") > 0 || location.href.indexOf("ershoufang") > 0)) {
                    return;
                }
                $("#ContentPlaceHolder1_WUCSearch__pConditionShow").append("<span onclick=\"seturl('" + _i.Dkey + "');return false;\">" + _i.Value + "<a style=\"cursor: pointer\" onclick=\"seturl('" + _i.Dkey + "');return false;\">x</a></span>");
                //_k 是页面中所有a链接
                $.each($(".chooseblock").find("a"), function (k, _k) {
                    if ($(_k).attr("name") != undefined) {
                        var hrefvalue = data.obj.str;
                        if ($(_k).attr("name").indexOf("a") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是否是区域
                            hrefvalue = substringurl(hrefvalue, "a");
                            $(_k).attr("href", "/" + hrefvalue + $(_k).attr("name"));
                            var aa = hrefvalue;
                        } else if ($(_k).attr("name").indexOf("sq") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是不是商圈
                            hrefvalue = substringurl(hrefvalue, "sq");
                            $(_k).attr("href", "/" + hrefvalue + "/a" + $(_k).attr("parentid") + "/" + $(_k).attr("name"));
                        } else if ($(_k).attr("name").indexOf("bp") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是否是价格
                            hrefvalue = substringurl(hrefvalue, "bp");
                            $(_k).attr("href", "/" + hrefvalue + $(_k).attr("name"));
                        } else if ($(_k).attr("name").indexOf("bmj") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是否是面积
                            hrefvalue = substringurl(hrefvalue, "bmj");
                            $(_k).attr("href", "/" + hrefvalue + $(_k).attr("name"));
                        } else if ($(_k).attr("name").indexOf("lx") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//是否是类型
                            hrefvalue = substringurl(hrefvalue, "lx");
                            $(_k).attr("href", "/" + hrefvalue + $(_k).attr("name"));
                        } else if ($(_k).attr("name").indexOf("ts") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//是否是特色
                            $(_k).attr("href", $(_k).attr("hrefvalue"));
                        } else if ($(_k).attr("name").indexOf("so") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//_k 是页面中所有a链接
                            hrefvalue = substringurl(hrefvalue, "so");
                            $(_k).attr("href", "/" + hrefvalue + $(_k).attr("name"));
                        } else {//租赁或出售

                        }
                        //判断无限是不是红色状态
                        if ($(_k).attr("name") == _i.Key.replace(/[^a-z]/ig, "") + "_all" || ($(_k).attr("name").indexOf(_i.Key.replace(/[^a-z]/ig, "")) >= 0 && $(_k).attr("name").indexOf("_all") >= 0)) {
                            $(_k).attr("class", "");
                        }
                        //如果是返回的汉化的链接加红色标注
                        if ($(_k).attr("name") == _i.Key) {
                            $(_k).attr("class", "curr");
                            if ($(_k).attr("name").indexOf("bp") >= 0) {
                                ClearMoney();
                            }
                            if ($(_k).attr("name").indexOf("bmj") >= 0) {
                                ClearArea();
                            }
                        }
                    }
                });
            });
            $("#ContentPlaceHolder1_WUCSearch__pConditionShow").append("<a id=\" ContentPlaceHolder1_WUCSearch__hlClearAll\"  class=\" all-clear\"  onclick=\" seturl('/',this);return false;\" >全部清空</a>");
            if (window.location.href.indexOf("/s/") > -1) {
                $("#ContentPlaceHolder1_WUCSearch__pConditionShow").hide();
            }
            //
        } else {
            $("#ContentPlaceHolder1_WUCSearch__pConditionShow").hide();
            $.each($(".chooseblock").find("a"), function (k, _k) {
                $(_k).attr("class", "");
            });
            $.each($("a[name$='_all']"), function (k, _k) {
                $(_k).attr("class", "curr");
            });
            $.each($(".chooseblock").find("a"), function (k, _k) {
                if ($(_k).attr("name") != undefined && $(_k).attr("hrefvalue") != undefined) {
                    if ($(_k).attr("name").indexOf("a") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是否是区域
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    } else if ($(_k).attr("name").indexOf("sq") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是不是商圈
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    } else if ($(_k).attr("name").indexOf("bp") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是否是价格
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    } else if ($(_k).attr("name").indexOf("bmj") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//判断是否是面积
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    } else if ($(_k).attr("name").indexOf("lx") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//是否是类型
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    } else if ($(_k).attr("name").indexOf("ts") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//是否是特色
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    } else if ($(_k).attr("name").indexOf("so") >= 0 && $(_k).attr("name").indexOf("_all") < 0) {//_k 是页面中所有a链接
                        $(_k).attr("href", $(_k).attr("hrefvalue"));
                    }
                }
            });
        }
        if (data.obj.title != "") {
            document.title = data.obj.title;
        }
        setorder(control);
     

    });
}

//截取url --把从 stastr 开始 到第一个 "/" 的字符串去掉
function substringurl(str, stastr) {
    var a = str.substring(0, str.indexOf("/" + stastr) + 1);
    str = str.substring(str.indexOf("/" + stastr) + 1);
    a += str.substring(str.indexOf("/") + 1);
    return a;
}

function ISBindSeach(filter) {
    var weburl = window.location.href.replace("http://", "");
    if (filter == "jy78") {
        $.post(BaseUrl_IIS_Application_Name + "mapi/mapMessage", { pagename: "", action: "changeshoufangtozulin", filter: filter, weburl: weburl }, function (data) {
            var str = "";
            for (var i = 0; i < data.obj.priceList.length; i++) {
                str += "<a href=\"/shangyongfang/" + data.obj.priceList[i].Value + "/jy78/\" class=\"\" name=\"" + data.obj.priceList[i].Value + "\" onclick=\"seturl('" + data.obj.priceList[i].Value + "',this);return false;\">" + data.obj.priceList[i].Key + "</a>";
            }
            $("#price").html(str);
            var stringObj = $("#danwei").html();
            var newstr = stringObj.replace("万", "元");
            $("#danwei").html(newstr);


        });
    } else if (filter == "jy77") {
        $.post(BaseUrl_IIS_Application_Name + "mapi/mapMessage", { pagename: "", action: "changezulintoshoufang", filter: filter, weburl: weburl }, function (data) {
            var str = "";
            for (var i = 0; i < data.obj.priceList.length; i++) {
                str += "<a href=\"/shangyongfang/" + data.obj.priceList[i].Value + "/jy77/\" class=\"\" name=\"" + data.obj.priceList[i].Value + "\" onclick=\"seturl('" + data.obj.priceList[i].Value + "',this);return false;\">" + data.obj.priceList[i].Key + "</a>";
            }
            $("#price").html(str);
            var stringObj = $("#danwei").html();
            var newstr = stringObj.replace("元", "万");
            $("#danwei").html(newstr);
        });
    } else {

    }

}

function setorder(control) {
    var weburl = window.location.href.replace("http://", "");
    $(".arrup-curr").attr("class", "arrup");
    $(".arrdown-curr").attr("class", "arrdown");
    opa(control, weburl);
    op(control, weburl);
    opu(control, weburl);
    omj(control, weburl);
    odj(control, weburl);
    osht(control, weburl);
    orht(control, weburl);
    ops(control, weburl);
    opr(control, weburl);
    osj(control, weburl);
    blc(control, weburl);
    sj(control, weburl);
    fl(control, weburl);
    zx(control, weburl);
    cx(control, weburl);
    tt(control, weburl);
    ojyh(control, weburl);
    $("#ContentPlaceHolder1_WUCSearch__hlDefaultOrder").attr("class", "normal");
}




function tt(control, weburl) {
    var tt = /tt\d+/;
    if (tt.test(weburl)) {
        var od = weburl.match(tt)[0];
        if (od == "tt1") {
            $("#SelTag").text("学区");
        } else if (od == "tt2") {
            $("#SelTag").text("无税");
        } else if (od == "tt3") {
            $("#SelTag").text("急售");
        } else {
            $("#SelTag").text("独家");
        }

    }

}








function cx(control, weburl) {
    var cx = /cx\d+/;
    if (cx.test(weburl)) {
        var od = weburl.match(cx)[0];
        if (od == "cx346") {
            $("#SelChaoxiang").text("东");
        } else if (od == "cx344") {
            $("#SelChaoxiang").text("南");
        } else if (od == "cx347") {
            $("#SelChaoxiang").text("西");
        } else if (od == "cx345") {
            $("#SelChaoxiang").text("北");
        } else {
            $("#SelChaoxiang").text("南北");
        }

    }

}



function zx(control, weburl) {
    var zx = /zx\d+/;
    if (zx.test(weburl)) {
        var od = weburl.match(zx)[0];
        if (od == "zx47") {
            $("#SelZhuangxiu").text("清水");
        } else if (od == "zx48") {
            $("#SelZhuangxiu").text("简装");
        } else {
            $("#SelZhuangxiu").text("豪华");
        }

    }

}

function fl(control, weburl) {
    var fl = /fl\d+/;
    if (fl.test(weburl)) {
        var od = weburl.match(fl)[0];
        if (od == "fl5") {
            $("#SelBuildYear").text("5年内");
        } else if (od == "fl10") {
            $("#SelBuildYear").text("10年内");
        } else if (od == "fl15") {
            $("#SelBuildYear").text("10-20年");
        } else {
            $("#SelBuildYear").text("200年以上");
        }

    }

}


function sj(control, weburl) {

    var sj = /sj\d+/;
    if (sj.test(weburl)) {
        var od = weburl.match(sj)[0];
        if (od == "sj1") {
            $("#SelDate").text("一天内");
        }
        else if (od == "sj3") {
            $("#SelDate").text("三天内");
        } else if (od == "sj7") {
            $("#SelDate").text("3-7天内");
        } else {
            $("#SelDate").text("7天以上");
        }

    }

}


function blc(control, weburl) {

    if (weburl.indexOf("blc1elc1") > -1) {
        $("#SelFloor").text("1层");
    }
    else if (weburl.indexOf("blc1elc5") > -1) {
        $("#SelFloor").text("6层以下");
    }
    else if (weburl.indexOf("blc6elc12") > -1) {
        $("#SelFloor").text("6-12层");
    }
    else if (weburl.indexOf("blc13") > -1) {
        $("#SelFloor").text("12层以上");
    } else {
        $("#SelFloor").text("楼层");
    }
}



function opa(control, weburl) {
    var opa = /opa\d+/;
    if (opa.test(weburl)) {
        var od = weburl.match(opa)[0];
        var value = od.replace("opa", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlAvgPriceOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlAvgPriceOrder").attr("onclick", "seturl('opa1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlAvgPriceOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlAvgPriceOrder").attr("onclick", "seturl('opa0', this); return false");
        }
    }
}
function osj(control, weburl) {
    var osj = /osj\d+/;
    if (osj.test(weburl)) {
        var od = weburl.match(osj)[0];
        var value = od.replace("osj", "");
        //if (value == "0") {
        $($("#ContentPlaceHolder1_WUCSearch__hlDateOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
        $("#ContentPlaceHolder1_WUCSearch__hlDateOrder").attr("onclick", "seturl('osj1', this); return false");
        //} else {
        //    $($("#ContentPlaceHolder1_WUCSearch__hlDateOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
        //    $("#ContentPlaceHolder1_WUCSearch__hlDateOrder").attr("onclick", "seturl('opa0', this); return false");
        //}
    }
}
function op(control, weburl) {
    var op = /op\d+/;
    if (op.test(weburl)) {
        var od = weburl.match(op)[0];
        var value = od.replace("op", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlPriceOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlPriceOrder").attr("onclick", "seturl('op1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlPriceOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlPriceOrder").attr("onclick", "seturl('op0', this); return false");
        }
    }
}
function opu(control, weburl) {
    var opu = /opu\d+/;
    if (opu.test(weburl)) {
        var od = weburl.match(opu)[0];
        var value = od.replace("opu", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlPriceUnitOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlPriceUnitOrder").attr("onclick", "seturl('opu1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlPriceUnitOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlPriceUnitOrder").attr("onclick", "seturl('opu0', this); return false");
        }
    }
}
function omj(control, weburl) {
    var omj = /omj\d+/;
    if (omj.test(weburl)) {
        var od = weburl.match(omj)[0];
        var value = od.replace("omj", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlMianjiOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlMianjiOrder").attr("onclick", "seturl('omj1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlMianjiOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlMianjiOrder").attr("onclick", "seturl('omj0', this); return false");
        }
    }
}
function odj(control, weburl) {
    var odj = /odj\d+/;
    if (odj.test(weburl)) {
        var od = weburl.match(odj)[0];
        var value = od.replace("odj", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlAgentLevelOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlAgentLevelOrder").attr("onclick", "seturl('odj1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlAgentLevelOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlAgentLevelOrder").attr("onclick", "seturl('odj0', this); return false");
        }
    }
}
function osht(control, weburl) {
    var osht = /osht\d+/;
    if (osht.test(weburl)) {
        var od = weburl.match(osht)[0];
        var value = od.replace("osht", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlSellDealOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlSellDealOrder").attr("onclick", "seturl('osht1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlSellDealOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlSellDealOrder").attr("onclick", "seturl('osht0', this); return false");
        }
    }
}
function orht(control, weburl) {
    var orht = /orht\d+/;
    if (orht.test(weburl)) {
        var od = weburl.match(orht)[0];
        var value = od.replace("orht", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlRentDealOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlRentDealOrder").attr("onclick", "seturl('orht1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlRentDealOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlRentDealOrder").attr("onclick", "seturl('orht0', this); return false");
        }
    }
}
function ops(control, weburl) {
    var ops = /ops\d+/;
    if (ops.test(weburl)) {
        var od = weburl.match(ops)[0];
        var value = od.replace("ops", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlSellCountOrder").find("i")[0]).attr("class", "arrup arrup-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlSellCountOrder").attr("onclick", "seturl('ops1', this); return false");
        }
        else {
            $($("#ContentPlaceHolder1_WUCSearch__hlSellCountOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");
            $("#ContentPlaceHolder1_WUCSearch__hlSellCountOrder").attr("onclick", "seturl('ops0', this); return false");
        }
    }
}

function opr(control, weburl) {
    var opr = /opr\d+/;
    if (opr.test(weburl)) {
        var od = weburl.match(opr)[0];
        var value = od.replace("opr", "");
        if (value == "0") {
            $($("#ContentPlaceHolder1_WUCSearch__hlRentCountOrder").find("i")[0]).attr("class", "arrup arrup-curr");

            $("#ContentPlaceHolder1_WUCSearch__hlRentCountOrder").attr("onclick", "seturl('opr1', this); return false");
        } else {
            $($("#ContentPlaceHolder1_WUCSearch__hlRentCountOrder").find("i")[1]).attr("class", "arrdown arrdown-curr");

            $("#ContentPlaceHolder1_WUCSearch__hlRentCountOrder").attr("onclick", "seturl('opr0', this); return false");
        }
    }
}
function ojyh(control, weburl) {
    var odj = /ojyh\d+/;
    if (odj.test(weburl)) {
        var od = weburl.match(odj)[0];
        var value = od.replace("ojyh", "");
        //if (value == "0") {
        $($("#ContentPlaceHolder1_WUCSearch__hlEliteOrder").find("i")[0]).attr("class", "arrup arrup-curr");
        $("#ContentPlaceHolder1_WUCSearch__hlEliteOrder").attr("onclick", "seturl('ojyh1', this); return false");
        //} else {
        //    $($("#ContentPlaceHolder1_WUCSearch__hlAgentLevelOrder").find("i")[1]).attr("class","arrdown arrdown-curr");
        //    $("#ContentPlaceHolder1_WUCSearch__hlAgentLevelOrder").attr("onclick", "seturl('odj0', this); return false");
        //}
    }
}

function GetPage(url) {
    var reg = /pg\d+/;
    var value = "";
    if (reg.test(url)) {
        value = url.match(reg)[0];
        value = value.replace("pg", "");
    }
    return value;
}

function SetPage(page) {
    var url = window.location.href;
    var reg = /pg\d+/;
    if (reg.test(url)) {
        var value = url.match(reg)[0];
        url = url.replace(value, "pg" + page);
    } else {
        if (url[url.length - 1] != "/") {
            url += "/";
        }
        url += "pg" + page + "/";
    }
    return url;
}
//自定义价钱搜索按钮点击事件
function CustomPrice(obj) {
    var minmoney = $("#minmoney").val().trim();
    var maxmoney = $("#maxmoney").val().trim();
    var str = "";
    if (minmoney != "" && maxmoney != "") {
        str += "bp" + minmoney;
        str += "ep" + maxmoney;
    }
    if (minmoney != "" && maxmoney == "") {
        str += "bp" + minmoney;
    }
    if (minmoney == "" && maxmoney != "") {
        str += "bp0ep" + maxmoney;
    }
    if (str.trim() != "") {
        seturl(str, obj);
    }
}
//自定义面积搜索点击事件
function CustomArea(obj) {
    var minarea = $("#minarea").val().trim();
    var maxarea = $("#maxarea").val().trim();
    var str = "";
    if (minarea != "" && maxarea != "") {
        str += "bmj" + minarea;
        str += "emj" + maxarea;
    }
    if (minarea != "" && maxarea == "") {
        str += "bmj" + minarea;
    }
    if (minarea == "" && maxarea != "") {
        str += "bmj0emj" + maxarea;
    }
    if (str.trim() != "") {
        seturl(str, obj);
    }
}
//根据传入参数判断要清空的对象
function Judgefilter(filter) {
    switch (filter) {
        case "so":
            $("#txtSearch").val("");
            $.each($("#currspan span"), function (i, _i) {
                if ($(_i).find('a').attr('href') == 'so') {
                    $(_i).remove();
                }
            })
            break;
        case "/":
            ClearMoney();
            ClearArea();
            break;
        case "bmj":
            ClearArea();
            break;
        case "bp":
            ClearMoney();
            break;
    }
}

function ClearMoney() {
    $("#minmoney").val("");
    $("#maxmoney").val("");
}

function ClearArea() {
    $("#minarea").val("");
    $("#maxarea").val("");
}
//function clearNoNum(obj) {
//    obj.value = obj.value.replace(/[^\d]/g, "");  //清除“数字”和“.”以外的字符  
//    //obj.value = obj.value.replace(/^\./g, "");  //验证第一个字符是数字而不是. 
//    //obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的.   
//    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
//}
//function seturlpg(Order, urlxinfang) {
//    var filter = "";
//    if ($(urlxinfang).attr("href").indexOf("xinfang") < 0 && $(urlxinfang).attr("href").indexOf("ershoufanggr") < 0 && $(urlxinfang).attr("href").indexOf("zufanggr") < 0) {
//        return;
//    }
//    $.each($(".curr"), function (i, _i) {
//        if ($(_i).html() == "不限") {
//            return;
//        }
//        filter += $(_i).attr("name") + "/";
//    })
//    if (window.location.href.indexOf(Order) < 0) {
//        if (location.href.search("xinfang") >= 0) {
//            window.location.href = '/xinfang/' + filter + Order + "/pg1";
//        }
//        if (location.href.search("ershoufanggr") >= 0) {
//            window.location.href = '/ershoufanggr/' + filter + Order + "/pg1";
//        }
//        if (location.href.search("zufanggr") >= 0) {
//            window.location.href = '/zufanggr/' + filter + Order + "/pg1";
//        }
//    } else {
//        var NewOrder = Order.indexOf("0") > 0 ? Order.replace("0", "1") : Order.replace("1", "0");//验证排序是0还是1返回新的反序
//        window.location.href = window.location.href.replace(Order, NewOrder);
//    }
//}

