$(document).ready(function () {
    var wh = (document.documentElement && document.documentElement.clientHeight) || document.body.clientHeight;
    document.getElementById("r_h").style.height = document.getElementById("l_h").style.height = (wh - document.getElementById("map_header").offsetHeight - document.getElementById("map_search").offsetHeight) + "px";
    //城市切换
    $(".city-select").mouseover(function () {
        $(".city-list").show();
    });
    $(".city-select").mouseleave(function () {
        $(".city-list").hide();
    });
    var wixing = $('<span title="显示卫星地图" style="x: 0px; y: -46px; right: 24px; top: 180px; cursor: pointer; width: 49px; height: 46px; z-index: 100; position: absolute; font-size: 12px; background-color: rgb(255, 255, 255);"><span style="width: 49px; height: 46px; position: absolute; background: url() 0px -46px no-repeat transparent;"><span style="position: absolute; top: 28px; left: 2px; width: 45px; height: 16px; opacity: 0.8; background-color: rgb(255, 255, 255);"></span><span style="position: absolute; top: 30px; left: 2px; width: 45px; color: rgb(102, 102, 102); text-align: center; line-height: 12px;">卫星</span></span></span>');
    $("#allmap").parent().append(wixing);

    wixing.click(function () {
        if (wixing.attr("title") == "显示卫星地图") {
            wixing.attr("title", "显示普通地图")
            wixing.find("span:first").css("background-position-y", "0px");
            wixing.find("span span:last").text("地图");
            map.setMapType(BMAP_HYBRID_MAP);
        } else {
            wixing.attr("title", "显示卫星地图")
            wixing.find("span:first").css("background-position-y", "-46px");
            wixing.find("span span:last").text("卫星");
            map.setMapType(BMAP_NORMAL_MAP);
        }
    });
    //var quanjing = $('<span title="显示全景地图" style="x: 0px; y: -46px; border:1px solid rgb(171, 174, 149); right: 140px; top: 2px; cursor: pointer; width: 45px; height: 46px; z-index: 100; position: absolute; font-size: 12px; background-color: rgb(255, 255, 255);"><span style="width: 45px; height: 46px; position: absolute; background: url(http://map.baidu.com/wolfman/static/common/images/ui3/tools/tools_47a3ea9.png) 0px -327px no-repeat transparent;"><span style="position: absolute; top: 28px; left: 2px; width: 40px; height: 16px; opacity: 0.8; background-color: rgb(255, 255, 255);"></span><span style="position: absolute; top: 30px; left: 2px; width: 43px; color: rgb(102, 102, 102); text-align: center; line-height: 12px;">全景</span></span></span>');
    //$("#allmap").parent().append(quanjing);
    //quanjing.click(function () {
    //    // 覆盖区域图层测试
    //    map.addTileLayer(new BMap.PanoramaCoverageLayer());

    //    var stCtrl = new BMap.PanoramaControl(); //构造全景控件
    //    stCtrl.setOffset(new BMap.Size(20, 20));
    //    map.addControl(stCtrl);//添加全景控件
    //});

    ///*************************************************************
    ///地图开始*****************************************************
    ///*************************************************************
// 1获取地址栏传入的坐标
    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return unescape(r[2]); return null;
    }
    var lng =  GetQueryString("longitude");
    var lat =  GetQueryString("latitude");
    var zoom = 17;
    // 如果传入的坐标为空就会赋值
    if (lng == null || lat == null){
        lng = 123.439115, lat = 41.811871;
    }



    // var lng = 123.439115, lat = 41.811871, zoom = 17;
    citycenter = new BMap.Point(lng, lat); //定位中心点
    zoomPartition = 12;
    zoomAdapt = 15;
    maxDistance = 26200;
    var mapOptions = {
        enableMapClick: false,
        minZoom: 15,
        maxZoom: 19
    };
    var map = new BMap.Map('allmap', mapOptions);
    //map.setMapType();//普通地图:BMAP_NORMAL_MAP     卫星地图:BMAP_SATELLITE_MAP   混合地图:BMAP_HYBRID_MAP
    map.centerAndZoom(citycenter, zoom);
    map.enableScrollWheelZoom();//启用滚轮放大缩小
    map.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT
    })); // 添加平移缩放控件
    map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
    map.addControl(new BMap.OverviewMapControl());//添加缩略地图控件
    map.addEventListener("tilesloaded", function () {
        getData();
    });


    ///*************************************************************
    ///加载地图中的小区*********************************************
    ///*************************************************************
    function getData() {
        var url = mapaddress + "housemap";
        var sw = map.getBounds().getSouthWest(); //西南角
        var ne = map.getBounds().getNorthEast(); //东北角 sw.lng, minlat: sw.lat  进度与纬度  猜测  是作为 整个地图显示区域的范围进行数据库查询吗
        var bounds = { action: "boundsxiaoqu", minlng: sw.lng, minlat: sw.lat, maxlng: ne.lng, maxlat: ne.lat,mapZoom:map.getZoom() };
        xq_ajaxEvent = $.get(url, bounds, function (data) {
            map.clearOverlays();
            var ShowLeftXq = [];

            var myGeo = new BMap.Geocoder();
            for (var i = 0; data && data.data && data.data && i < data.data.length; i++) {
                var lineItem = data.data[i];
                var point = new BMap.Point(lineItem.longitude, lineItem.latitude);



                if (lineItem.loupandizhi == null || lineItem.loupandizhi == "null") {
                    myGeo.getLocation(point, function (rs) {  //创建地址解析,通过坐标点进行方向解析 如果解析成功 就会有返回值
                        var addComp = rs.addressComponents;    // 解析成功就会返回GeocoderResult rs就代表GeocoderResult  addressComponents为结构化的地址描述

                        for (var j = 0; j < data.obj.list.length; j++) {
                            if (data.data[j].longitude == rs.point.lng && data.data[j].latitude == rs.point.lat) {
                                var textaddress = addComp.district + addComp.street + addComp.streetNumber;//streetNumber String 门牌号码street String 街道名称district String 区县名称city String 城市名称province String 省份名称

                                $(".notaddress_" + data.data[j].XqId).text(textaddress);
                                break;
                            }
                        }


                    });
                }

                if (lineItem.msg == "2") {//判断如果此条信息为门店信息时


                    var html =
                        '<div id="MARKER_COMMUNITY_Org_' + lineItem.id + '" style="position:absolute">\
                            <div class="community_head community_bg">\
                                <div class="community_icon">\
                                    <img src="' + BaseUrl_IIS_Application_Name + 'scripts/icon_marker_store.png">\
                                </div>\
                                <div class="community_blue popOrgBorder"><ul class="clearfix"><label>' + lineItem.OrgName + '</label></ul>\
                                </div>\
                            </div>\
                            <div class="community_contain apartment" style="display:none;">\
                                <div class="apartment_icon">\
                                    <img src="' + BaseUrl_IIS_Application_Name + 'scripts/icon_marker_store_on.png">\
                                </div>\
                                <dl class="clearfix">\
                                    <div class="hover_house_box hover_house_2" id="div_xqdetail" style="min-width:230px;">\
                                        <div class="hhdl_title">\
                                            <h2>' + lineItem.OrgName + '<a href='+projectName+'"/dianmian/' + lineItem.id + '/" onclick="window.open(this.href);return false;">(详)</a></h2>\
                                            <p class="notOrgaddress_' + lineItem.id + '">\
                                                <span class="MapOrgAdd">' + lineItem.OrgADD + '</span>\
                                                <span class="MapOrgManagerName">店长:' + lineItem.OrgManagerName + '</span>\
                                                <span class="MapOrgPhone">电话:' + lineItem.OrgPhone + '</span>\
                                            </p>\
                                        </div>\
                                    </div>\
                                </dl>\
                                </div>\
                            </div>\
                        </div>';
                    var richMarker = new BMapLib.RichMarker(html, point, {
                        anchor: new BMap.Size(-10, -30)
                    });
                    $(richMarker).data("OrgID", lineItem.id);
                    //这一步是显示详细信息 和显示基本信息的切换
                    richMarker.addEventListener("mouseover", function (e) {
                        $('#MARKER_COMMUNITY_Org_' + $(this).data("OrgID")).parent('div').css('z-index', '999');
                        $('#MARKER_COMMUNITY_Org_' + $(this).data("OrgID")).find('.community_head').hide();
                        $('#MARKER_COMMUNITY_Org_' + $(this).data("OrgID")).find('.community_contain').show();
                    });
                    richMarker.addEventListener("mouseout", function (e) {
                        $('#MARKER_COMMUNITY_Org_' + $(this).data("OrgID")).parent('div').css('z-index', 'auto');
                        $('#MARKER_COMMUNITY_Org_' + $(this).data("OrgID")).find('.community_head').show();
                        $('#MARKER_COMMUNITY_Org_' + $(this).data("OrgID")).find('.community_contain').hide();
                    });
                    map.addOverlay(richMarker);

                } else {//判断如果此条信息为小区信息时

                    //var ePrice = Math.round(lineItem.SellCount / 1000) / 10;
                    var html =
                        '<div id="MARKER_COMMUNITY_' + lineItem.id + '" style="position:absolute">\
                            <div class="community_head community_bg">\
                                <div class="community_icon">\
                                    <img src="/yuqiaopc/img/ditu/icon_map1.png">\
                                </div>\
                                <div class="community_blue"><ul class="clearfix"><label>' + lineItem.loupanmingcheng + '</label></ul>\
                                </div>\
                            </div>\
                            <div class="community_contain apartment" style="display:none;">\
                                <div class="apartment_icon">\
                                    <img src="/yuqiaopc/img/ditu/icon_map2.png">\
                                </div>\
                                <dl class="clearfix">\
                                    <div class="hover_house_box hover_house_2" id="div_xqdetail" style="min-width:230px;">\
                                        <div class="hhdl_title">\
                                            <h2>' + lineItem.loupanmingcheng + '</h2>\
                                            <p class="notaddress_' + lineItem.id + '">' + lineItem.loupandizhi + '</p>\
                                        </div>\
                                        <div class="hhdl_btn clearfix">\
                                            <ul>\
                                                <li><a href='+projectName+'/ershoufang/xq/' + lineItem.id + '/ class="m_ershoufang" onclick="window.open(this.href);return false;">二手房<span><em>' + lineItem.esfCount + '</em>套</span></a></li>\
                                                <li><a href='+projectName+'/zufang/xq/' + lineItem.id + '/ class="m_zufang" onclick="window.open(this.href);return false;">租房<span><em>' + lineItem.zfCount + '</em>套</span></a></li>\
                                                <li><a href='+projectName+'/xiaoqu/' + lineItem.id + '/ class="m_xiaoqu" onclick="window.open(this.href);return false;">小区详情</a></li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </dl>\
                                </div>\
                            </div>\
                        </div>';
                    //<dt><img src="https://img73.yuqiaocdn.com/' + lineItem.ImageUrl + '" onerror="this.src=\'https://g.517cdn.com//images/none.png\';"></dt>\
                    //<dd><strong>' + lineItem.XqName + '</strong><br />卖房&nbsp;<strong>' + lineItem.SellCount + '套</strong><br />租房&nbsp;<strong>' + lineItem.RentCount + '套</strong></dd>\
                    var richMarker = new BMapLib.RichMarker(html, point, {
                        anchor: new BMap.Size(-10, -30)
                    });

                    $(richMarker).data("XqName", lineItem.loupanmingcheng);
                    $(richMarker).data("xqid", lineItem.id);
                    $(richMarker).data("SellCount", lineItem.esfCount);
                    $(richMarker).data("RentCount", lineItem.zfCount);
                    $(richMarker).data("Address", lineItem.loupandizhi);
                    richMarker.addEventListener("mouseover", function (e) {
                        $('#MARKER_COMMUNITY_' + $(this).data("xqid")).parent('div').css('z-index', '999');
                        $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_head').hide();
                        $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_contain').show();
                    });
                    richMarker.addEventListener("mouseout", function (e) {
                        $('#MARKER_COMMUNITY_' + $(this).data("xqid")).parent('div').css('z-index', 'auto');
                        $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_head').show();
                        $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_contain').hide();
                    });
                    //richMarker.addEventListener("click", function (e) {                    
                    //    //模拟点击链接
                    //    //$("div.h-logo").click();

                    //    //$("#div_address").hide();
                    //    //$("#div_xqdetail").show();
                    //    //$("#div_xqdetail .hhdl_title h2").text($(this).data("XqName")); //小区名
                    //    //$("#div_xqdetail .hhdl_title p").text($(this).data("Address"));//小区地址

                    //    //$("#div_xqdetail .hhdl_btn li:eq(0) em").text($(this).data("SellCount"));//二手房数量
                    //    //$("#div_xqdetail .hhdl_btn li:eq(1) em").text($(this).data("RentCount"));//租房数量

                    //    //$("#div_xqdetail .hhdl_btn li:eq(0) a").attr("href");//小区二手房链接
                    //    //$("#div_xqdetail .hhdl_btn li:eq(1) a").attr("href");//小区租房链接
                    //    //$("#div_xqdetail .hhdl_btn li:eq(2) a").attr("href");//小区详情链接
                    //});
                    map.addOverlay(richMarker);
                    ShowLeftXq.push(lineItem);
                }
            }
            
           
            FillSearchResult(ShowLeftXq);
        });
    }

    ///*************************************************************
    ///右键菜单*****************************************************
    ///*************************************************************
    var menu = new BMap.ContextMenu();
    menu.addItem(new BMap.MenuItem("在此附近500米查找房源", function (fujin_point) { fujin(fujin_point, 500) }, { width: 150 }));
    menu.addSeparator();
    menu.addItem(new BMap.MenuItem("在此附近1公里查找房源", function (fujin_point) { fujin(fujin_point, 1000) }, { width: 150 }));
    menu.addSeparator();
    menu.addItem(new BMap.MenuItem("在此附近1.5公里查找房源", function (fujin_point) { fujin(fujin_point, 1500) }, { width: 150 }));
    menu.addSeparator();
    menu.addItem(new BMap.MenuItem("在此附近2公里查找房源", function (fujin_point) { fujin(fujin_point, 2000) }, { width: 150 }));

    var prevCircle;
    function fujin(point, radius) {
        var zoomset = 0;
        switch (radius) {
            case 500: zoomset = 17; break;
            case 1000: zoomset = 16; break;
            case 1500: zoomset = 15; break;
            case 2000: zoomset = 15; break;
        }
        map.setZoom(zoomset);
        map.setCenter(point);

        map.removeOverlay(prevCircle);
        prevCircle = new BMap.Circle(point, radius, { fillOpacity: 0.2, fillColor: "#4673cc", strokeWeight: 1, strokeOpacity: 0.3 });
        map.addOverlay(prevCircle);//根据当前范围画一个大圆圈
        prevCircle.disableMassClear();

        $("#div_address .hhdl_btn").hide();
        new BMap.Geocoder().getLocation(point, function (lon) {//获取地图信息
            if (lon == null) {
                $("#div_address").hide();
                return;
            }
            $("#div_address").show();
            $("#div_xqdetail").hide();
            var addressText = "";
            if (lon.addressComponents.street)
                addressText += lon.addressComponents.street;
            if (lon.addressComponents.streetNumber)
                addressText += lon.addressComponents.streetNumber;
            $("#div_address .hhdl_title h2").text(addressText);
        });

        var lng = point.lng.toString();
        var lat = point.lat.toString();

        var n = "", a = "", r = "";
        for (var i = 0; i < lng.length; i++) {
            if (lng[i] == ".")
                n += "K";
            else
                n += String.fromCharCode(65 + parseInt(lng[i]));
        }
        for (var i = 0; i < lat.length; i++) {
            if (lat[i] == ".")
                a += "K";
            else
                a += String.fromCharCode(65 + parseInt(lat[i]));
        }
        var radiusstr = radius.toString();
        for (var i = 0; i < radiusstr.length; i++) {
            r += String.fromCharCode(65 + parseInt(radiusstr[i]));
        }
        var param = n + "L" + a + "L" + r;
        var url = BaseUrl_IIS_Application_Name + "Ashx/HouseHandler.ashx";
        var bounds = { action: "houseXiaoquCount", zbso: param };
        $.get(url, bounds, function (data) {
            if (data && data.obj && data.obj.list) {
                $($("#div_address").find("a")[0]).attr("href", projectName+"/ershoufang/zbso" + param);
                $("#div_address .hhdl_btn li:eq(0) em").text(data.data.esfCount);
                $($("#div_address").find("a")[1]).attr("href", projectName+"/zufang/zbso" + param);
                $("#div_address .hhdl_btn li:eq(1) em").text(data.data.zfCount);
                $($("#div_address").find("a")[2]).attr("href", projectName+"/xiaoqu/zbso" + param);
                $("#div_address .hhdl_btn li:eq(2) em").text(data.data.xiaoquCount);
                $("#div_address .hhdl_btn").show();


            }

        });
    }
    map.addContextMenu(menu);

    ///*************************************************************
    ///搜索结果*****************************************************
    ///*************************************************************

    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{
		    "input": "search_keyword"
		, "location": map
		});

    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        var myValue = _value.province + _value.city + _value.district + _value.street + _value.business;

        searchSetPoint(myValue);
    });

    function searchSetPoint(myValue) {
        //var geo = new BMap.Geocoder();
        //geo.getPoint(myValue, function (point) {
        //    map.setCenter(point);
        //    map.setZoom(17);
        //}, getCookie("cityname"));

        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: function () {
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                map.centerAndZoom(pp, 17);
                map.addOverlay(new BMap.Marker(pp));    //添加标注
            }
        });
        local.search(myValue);

    }



    ///*************************************************************
    ///填充结果*****************************************************
    ///*************************************************************
    function FillSearchResult(xqlist, page) {
        $(".ms_fj_jieguo .ms_fj_listbox").empty();

        if (!xqlist)
            return;
        var centerPoint = map.getCenter();
        for (var i = 0; i < xqlist.length; i++) {
            xqlist[i].juli = map.getDistance(centerPoint, new BMap.Point(xqlist[i].Map_BD_Lng, xqlist[i].Map_BD_Lat));
        }
        xqlist.sort(function (a, b) { return a.juli > b.juli ? 1 : -1 });

        $(".ms_fj_jieguo .ms_fj_listbox").append('<div class="ms_fj_searchtext"><p><i>当前显示的小区</i></p></div>');


        var pagesize = parseInt((document.body.clientHeight - 220) / 74);
        if (pagesize < 1)
            pagesize = 1;

        var pagecount = parseInt(xqlist.length / pagesize) + (xqlist.length % pagesize == 0 ? 0 : 1);
        if (!page || page < 1)
            page = 1;
        if (page > pagecount)
            page = pagecount;
        for (var i = (page - 1) * pagesize; i < xqlist.length && i < page * pagesize; i++) {
            var lineItem = xqlist[i];
            var lineElement = $(
                '<div class="l-h-box clearfix">\
                <div class="l-h-title">\
                    <h5><a href='+projectName+'/xiaoqu/' + lineItem.id + '/ target="_blank">' + lineItem.loupanmingcheng + '</a>&nbsp;&nbsp;' + (prevCircle != null ? '距' + lineItem.juli.toFixed(0) + '米' : '') + '</h5>\
                    <p class="notaddress_'+ lineItem.id + '">' + lineItem.loupandizhi + '</p>\
                </div>\
                <div class="l-h-btn"><a href='+projectName+'/ershoufang/xq/' + lineItem.id + '/ target="_blank">查看二手房</a><a href='+projectName+'/zufang/xq/' + lineItem.id + '/ target="_blank">查看租房</a></div>\
            </div>');
            $(".ms_fj_jieguo .ms_fj_listbox").append(lineElement);
            lineElement.data("xqid", lineItem.id);
            lineElement.mouseover(function () {
                //$(this).css("background-color", "#EEE");

                $('#MARKER_COMMUNITY_' + $(this).data("xqid")).parent('div').css('z-index', '999');
                $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_head').hide();
                $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_contain').show();
            });
            lineElement.mouseout(function () {
                //$(this).css("background-color", "#fff");

                $('#MARKER_COMMUNITY_' + $(this).data("xqid")).parent('div').css('z-index', 'auto');
                $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_head').show();
                $('#MARKER_COMMUNITY_' + $(this).data("xqid")).find('.community_contain').hide();
            });
        }

        var fenye = $('<div class="ms_fj_page clearfix"></div>');
        $(".ms_fj_jieguo .ms_fj_listbox").append(fenye);
        if (page > 1) {
            var shouye = $('<a href="#">首页</a>');
            fenye.append(shouye);
            shouye.click(function () {
                FillSearchResult(xqlist, 1);
            })

            var prev = $('<a href="#"><</a>');
            fenye.append(prev);
            prev.click(function () {
                FillSearchResult(xqlist, page - 1);
            })
        }


        for (var i = page - 3; i < page + 2 && i < pagecount; i++) {
            if (i < 0)
                continue;
            var ziye;
            if (i == page - 1) {
                ziye = $('<span class="dangqianpage">' + (i + 1) + '</span>');
            } else {
                ziye = $('<a href="#">' + (i + 1) + '</a>');
                ziye.data("page", i + 1);
                ziye.click(function () {
                    FillSearchResult(xqlist, $(this).data("page"));
                })
            }
            fenye.append(ziye);
        }

        if (page < pagecount) {
            var next = $('<a href="#">></a>');
            fenye.append(next);
            next.click(function () {
                FillSearchResult(xqlist, page + 1);
            })

            var weiye = $('<a href="#">尾页</a>');
            fenye.append(weiye);
            weiye.click(function () {
                FillSearchResult(xqlist, pagecount);
            })
        }

    }



    $(".bdname").click(function () {
        var lng = $(this).attr("maplng");
        var lat = $(this).attr("maplat");
        if (lng > 120 && lng < 140 && lat > 40 && lat < 45) {
            var point = new BMap.Point(lng, lat);
            map.setCenter(point);
            map.setZoom(17);
        }
    });
    $("#search_keyword").keyup(function () {
        if (event.keyCode == 13) {
            $("#search_keyword_btn").click();
        }
    })
    $("#search_keyword_btn").click(function () {
        var text = $("#search_keyword").val();
        searchSetPoint(text);
    });


    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    }
});