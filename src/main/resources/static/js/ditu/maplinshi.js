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
    var wixing = $('<span title="显示卫星地图" style="x: 0px; y: -46px; right: 24px; top: 180px; cursor: pointer; width: 49px; height: 46px; z-index: 100; position: absolute; font-size: 12px; background-color: rgb(255, 255, 255);"><span style="width: 49px; height: 46px; position: absolute; background: url(../img/aaa.png) 0px -46px no-repeat transparent;"><span style="position: absolute; top: 28px; left: 2px; width: 45px; height: 16px; opacity: 0.8; background-color: rgb(255, 255, 255);"></span><span style="position: absolute; top: 30px; left: 2px; width: 45px; color: rgb(102, 102, 102); text-align: center; line-height: 12px;">卫星</span></span></span>');
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
    var lng = 123.439115, lat = 41.811871, zoom = 17;
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
    ///自定义加载地图中的小区*********************************************
    ///*************************************************************
    var countId = 1 ;
    
     var point1 = new BMap.Point(123.436224,41.812643);
     var point2 = new BMap.Point(123.437482,41.813624);
     var html = document.getElementById("MARKER_COMMUNITY_1458");
     var html2 = document.getElementById("MARKER_COMMUNITY_Org_3700");
   function getData() {
   		
         var richMarker = new BMapLib.RichMarker(html, point1, {
                        anchor: new BMap.Size(-10, -30)
                    });
       	var richMarker2 = new BMapLib.RichMarker(html2, point2, {
                        anchor: new BMap.Size(-10, -30)
                    });
            richMarker.addEventListener("mouseover", function (e) {
                        $(html).children(":first").hide();
                        $(html).children(":last").show();
                        $(html).parent('div').css('z-index', '999');
                    });
            richMarker.addEventListener("mouseout", function (e) {
                $(html).children(":first").show();
                $(html).children(":last").hide();
                $(html).parent('div').css('z-index', 'auto');
            });
            richMarker2.addEventListener("mouseover", function (e) {
                        $(html2).children(":first").hide();
                        $(html2).children(":last").show();
                        $(html2).parent('div').css('z-index', '999');
                    });
            richMarker2.addEventListener("mouseout", function (e) {
                $(html2).children(":first").show();
                $(html2).children(":last").hide();
                $(html2).parent('div').css('z-index', 'auto');
            });
    
          map.addOverlay(richMarker);
         map.addOverlay(richMarker2);
   		
   		                        
   }
    /*自定义的点击左面出现右面信息*/
   
   		$(".l-h-box:even").mouseover(function () {
    	$(html).children(":first").hide();
        $(html).children(":last").show();
        $(html).parent('div').css('z-index', '999');
    });
     $(".l-h-box:even").mouseout(function () {
    	$(html).children(":first").show();
        $(html).children(":last").hide();
        $(html).parent('div').css('z-index', 'auto');
    });
 
     
   	$(".l-h-box:odd").mouseover(function () {
    	$(html2).children(":first").hide();
        $(html2).children(":last").show();
        $(html2).parent('div').css('z-index', '999');
    });
     $(".l-h-box:odd").mouseout(function () {
    	$(html2).children(":first").show();
        $(html2).children(":last").hide();
        $(html2).parent('div').css('z-index', 'auto');
    });
  
    /*自定义的点击左面出现右面信息结束*/
    
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
                $($("#div_address").find("a")[0]).attr("href", "/ershoufang/zbso" + param);
                $("#div_address .hhdl_btn li:eq(0) em").text(data.obj.list.sellCount);
                $($("#div_address").find("a")[1]).attr("href", "/zufang/zbso" + param);
                $("#div_address .hhdl_btn li:eq(1) em").text(data.obj.list.rentCount);
                $($("#div_address").find("a")[2]).attr("href", "/xiaoqu/zbso" + param);
                $("#div_address .hhdl_btn li:eq(2) em").text(data.obj.list.xiaoquCount);
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
                    <h5><a href="/xiaoqu/' + lineItem.XqPY + '/" target="_blank">' + lineItem.XqName + '</a>&nbsp;&nbsp;' + (prevCircle != null ? '距' + lineItem.juli.toFixed(0) + '米' : '') + '</h5>\
                    <p class="notaddress_'+ lineItem.XqId + '">' + lineItem.Address + '</p>\
                </div>\
                <div class="l-h-btn"><a href="/ershoufang/xq' + lineItem.XqId + '/" target="_blank">查看二手房</a><a href="/zufang/xq' + lineItem.XqId + '/" target="_blank">查看租房</a></div>\
            </div>');
            $(".ms_fj_jieguo .ms_fj_listbox").append(lineElement);
            lineElement.data("xqid", lineItem.XqId);
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