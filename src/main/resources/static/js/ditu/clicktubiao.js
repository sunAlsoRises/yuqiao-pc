 $(document).ready(function () {
 		var map = new BMap.Map("_pHouseMap");
	map.centerAndZoom(new BMap.Point(123.332496,41.843078), 17);
	
	map.enableScrollWheelZoom();
	var point = new BMap.Point(123.331012,41.843904);
	var text = "aaa";
// 复杂的自定义覆盖物
function ComplexCustomOverlayView(map, point, text, type, paramid, href) {
    this.point = point;
    this.text = text;
    this._map = map;
    this.type = type;
    this._paramid = paramid;
    this.href = href;
}

function clc_lay_view(map,point,xqName,XqStyleStringCurrent,xqId,xqPy,nearXq,XqStyleStringOther){
    ComplexCustomOverlayView.prototype = new BMap.Overlay();
    ComplexCustomOverlayView.prototype.initialize = function (map) {
        var borderColors = ["#BC3B3A", "#538CA9", "#C47D1D", "#DC0E7A"];
        var backgroundColors = ["#EE5D5B", "#6BADCA", "#FF9524", "#F62298"];
        var arrowbackgroundPositions = [0, -20, -10, -30];
        var div = this._div = document.createElement("div");
        div.style.position = "absolute";
        div.style.zIndex = 0 - this.type;
        div.style.backgroundColor = backgroundColors[this.type];
        div.style.border = "1px solid " + borderColors[this.type];
        div.style.height = "18px";
        div.style.padding = "2px";
        div.style.lineHeight = "18px";
        div.style.whiteSpace = "nowrap";
        div.style.MozUserSelect = "none";
        div.style.fontSize = "12px";
        if (this._paramid) { div.setAttribute("paramid", this._paramid); }
        var span = this._span = document.createElement("span");
        span.style.color = "white";
        div.appendChild(span);
        span.innerHTML = this.text;

        var arrow = this._arrow = document.createElement("div");
        arrow.style.background = "url(https://g.yuqiaocdn.com/mis/misnet2014css/images/mapPoint.png) no-repeat";
        arrow.style.position = "absolute";
        arrow.style.width = "11px";
        arrow.style.height = "10px";
        arrow.style.top = "22px";
        arrow.style.left = "10px";
        arrow.style.overflow = "hidden";
        arrow.style.backgroundPosition = "0px " + arrowbackgroundPositions[this.type] + "px";
        div.appendChild(arrow);

        div.onmouseover = function () { this.style.zIndex = parseInt(this.style.zIndex) + 100; $(this).find("span").css("color", "#3c9"); };
        div.onmouseout = function () { this.style.zIndex = parseInt(this.style.zIndex) - 100; $(this).find("span").css("color", "white"); };
        if (this.href) {
            div.style.cursor = "pointer";
            $(div).data("href", this.href);
            div.title = "点击查看\"" + this.text + "\"小区";
            div.onclick = function () { window.open($(this).data("href")); };
        }
        this._map.getPanes().labelPane.appendChild(div);
        return div;
    }
    ComplexCustomOverlayView.prototype.draw = function () {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this.point);
        this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
        this._div.style.top = pixel.y - 30 + "px";
    }

    var overlay = new ComplexCustomOverlayView(map, point, xqName,XqStyleStringCurrent , xqId, "/xiaoqu/" + xqPy + "/");
    map.addOverlay(overlay);

    for (var i = 0; i < nearXq.length; i++) {
        var overlay = new ComplexCustomOverlayView(map, new BMap.Point(nearXq[i].lng, nearXq[i].lat), nearXq[i].name, XqStyleStringOther, nearXq[i].id, "/xiaoqu/" + nearXq[i].py + "/");
        map.addOverlay(overlay);
    }
}

var baidu_map = function (e) {
    var t, a, n = {}, i = 1000, u = "", p = "10", h = [], f = "",
        r = e.listContainer, o = e.tabEle, l = o.first().data("key"), s = o.first().data("index"), c = o.first().data("length"), r = e.listContainer;
    var map = null, point = null, info = null;
    map_load = function (e) {
        var t = document.createElement("script");
        t.src = "//api.map.baidu.com/api?v=2.0&ak=" + e + "&callback=mapInitialize",
        document.body.appendChild(t)
    }

    map_init = function () {
        t = new BMap.Map(e.mapPanel, { minZoom: e.minZoom, maxZoom: e.maxZoom, enableMapClick: !1 });
        a = new BMap.Point(e.lng, e.lat);
        t.addControl(new BMap.NavigationControl({
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            offset: new BMap.Size(19, 78)
        })),
        t.centerAndZoom(a, e.zoomCurrent);
        //t.enableScrollWheelZoom();
        map = t; point = a; info = e;
        clc_lay_view(map, point, info.xqName, info.XqStyleStringCurrent, info.xqId, info.xqPy, info.nearXq, info.XqStyleStringOther);
        window.map = map;
        $(".tagStyle").first().click();
    }

    map_tlevel_tab = function () {
        var e = l.split(",")
          , t = s.split(",")
          , a = c.split(",")
          , n = "";
        $.each(e, function (e, i) {
            n += '<div class="tagStyle LOGCLICK" data-bl="' + t[e] + '" data-log_evtid="10242" data-index="' + t[e] + '" data-length="' + a[e] + '">' + i + "</div>"
        }),
        $(".two-level-tab").html(n),
        map_li_click();
    }

    map_marker_detail = function (e, a) {
        var n = "<div  class='itemContent'> <span class='icon-" + u + "'></span><span class='itemText itemTitle'>" + a.title + "</span><span class='icon-distance'></span><span class='itemText itemdistance'>" + a.distance + "</span></div><div class='itemInfo'>" + a.address + "</div>"
          , i = $(".near-map-box").offset().top
          , o = $(".blueLabel").offset().top
          , r = '<div class="makerDetailStyle" data-detail="' + e + '">' + n + '<span class="detailArrow"></span></div>';
        $(".labelUp").append(r);
        var l = $(".makerDetailStyle").height()
          , s = i + l + 80
          , c = -parseInt(l) - parseInt($(".blueLabel").height()) - 20;
        s > o && t.panBy(0, s - o),
        $(".makerDetailStyle").css("top", c)
    }

    map_li_click = function () {
        o.on("click", function () {
            $(this).hasClass("selectTag")
                ||
            (
                l = $(this).data("key"),
                s = $(this).data("index"),
                c = $(this).data("length"),
                $(this).parent().find(".selectTag").removeClass("selectTag"),
                $(this).addClass("selectTag"),
                map_tlevel_tab(), $(".tagStyle").first().trigger("click"),
                $(".curr_wrap").removeClass("curr_wrap"),
                $(".two-level-tab").addClass("curr_wrap"),
                $("#mapListContainer").addClass("curr_wrap")
            )
        }),
        $(".tagStyle").on("click", function () {
            d = $(this).text(),
            u = $(this).data("index"),
            p = $(this).data("length"),
            t.clearOverlays(),
            map_set_resblock_overlays(),
            t.reset(),
            $("#mapListContainer").html(""),
            $(".loading").show(),
            $(this).hasClass("select") || ($(this).parent().find(".select").removeClass("select"),
            $(this).addClass("select"),
            n[u] ? map_render() : map_search_deal(d),
            r.scrollTop(0));
            $(".curr_wrap").removeClass("curr_wrap"), $(".two-level-tab").addClass("curr_wrap"), $("#mapListContainer").addClass("curr_wrap");
        }),
        r.delegate("li", "mouseover", function () {
            var e = $(this)
              , t = e.data("index");
            0 == e.hasClass("itemBlue"),
            map_cancel_blue("hover"),
            map_set_blue(t, "hover")
        }),
        r.delegate("li", "mouseout", function () {
            map_cancel_blue("hover")
        }),
        r.delegate("li", "click", function () {
            var e = $(this).data("index")
              , a = $(this).data("address").split(",")
              , i = new BMap.Point(a[0], a[1])
              , o = t.getBounds()
              , r = $(this).index()
              , l = n[u][r];
            f = e,
            map_cancel_blue("click"),
            map_marker_detail(e, l),
            map_set_blue(e, "click"),
            1 != o.containsPoint(i) && (t.setViewport([i]),t.setZoom(16));
        });
    }

    map_label_click = function (e, t, a) {
        e.addEventListener("click", function (e) {
            var n = e || window.event;
            f = t,
            map_cancel_blue("click"),
            map_marker_detail(t, a),
            map_set_blue(t, "click"),
            map_scroll_top(t),
            m = !0,
            n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0
        }),
        e.addEventListener("mouseover", function (e) {
            map_cancel_blue("hover"),
            map_set_blue(t, "hover")
        }),
        e.addEventListener("mouseout", function (e) {
            map_cancel_blue("hover")
        });
    }

    var map_search_deal = function (e) {
        var o = e;
        bdLocalSearch = new BMap.LocalSearch(map),
        bdLocalSearch.searchNearby(o, a, i),
        bdLocalSearch.setSearchCompleteCallback(function (e) {
            var t = [];
            if (bdLocalSearch.getStatus() == BMAP_STATUS_SUCCESS)
                for (var a = 0; a < e.getCurrentNumPois() ; a++)
                    t.push(e.getPoi(a));
            n[u] = t.filter(function (e) {
                return "null" != e.address
            }),
            map_calc_distance()
        });
    }

    var map_calc_distance = function () {
        var e = n[u]
          , t = new BMap.MercatorProjection
          , i = t.lngLatToPoint(a);
        $.each(e, function (e, a) {
            var n = t.lngLatToPoint(a.point)
              , o = Math.round(Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2)));
            a.distance = o + "米"
        });
        map_sort_list();
        map_range_deal();
    }

    map_sort_list = function () {
        $.each(n, function (e, t) {
            t.sort(function (e, t) {
                return parseFloat(e.distance) - parseFloat(t.distance)
            })
        })
    }

    map_range_deal = function () {
        var e = n[u]
          , t = e.filter(function (e) {
              return parseFloat(e.distance) < 2e3 && "null" != e.address
          })
          , a = p >= t.length ? t.length : p - t.length;
        t.splice(a);
        n[u] = t;
        map_render();
    }

    map_render = function () {
        var e = n[u]
          , a = "";
        if (t.clearOverlays(),
        map_set_resblock_overlays(),
        e.length > 0) {
            var i = "";
            $.each(e, function (e, t) {
                var a = "<div  class='itemContent'> <span class='icon iconfont icon-" + u + "'></span><span class='itemText itemTitle'>" + t.title + "</span><span class='icon-distance'></span><span class='itemText itemdistance'>" + t.distance + "</span></div><div class='itemInfo'>" + t.address + "</div>";
                i += "<li data-index=" + u + e + " data-address=" + t.point.lng + "," + t.point.lat + " title=" + t.title + "><div class='map-content-box'>" + a + "</div></li>",
                map_add_item_overlays("icon-" + u, u + e, t),
                h.push(t.point)
            }),
            a += "<ul class='itemBox'>" + i + "</ul>"
        }
        a = "" != a ? a : "<div class='nullSupport'>很抱歉，该配套下无相关内容，请查看其它配套</div>",
        $("#mapListContainer").html(a),
        $(".addr-list .name").eq(0).css("border-top", "none"),
        $(".loading").hide();
    }

    map_set_resblock_overlays = function () {
        //var n = "<div class='name'>" + e.xqName + "<i class='arrow'></i></div>"
        //  , i = new BMap.Label(n, {
        //      position: a,
        //      offset: new BMap.Size(-30, -24)
        //  });
        //i.setStyle({
        //    border: 0,
        //    backgroundColor: "transparent"
        //}),
        //t.addOverlay(i);
        clc_lay_view(map, point, info.xqName, info.XqStyleStringCurrent, info.xqId, info.xqPy, info.nearXq, info.XqStyleStringOther);
    }

    map_add_item_overlays = function (e, a, n) {
        var i = "<i class='item " + e + "' data-label='" + a + "' title='" + n.title + "'></i>";
        var o = new BMap.Label(i, {
              position: n.point,
              offset: new BMap.Size(-17, -40)
          });
        o.setStyle({
            border: 0,
            backgroundColor: "transparent"
        });
        t.addOverlay(o);
        $(".BMapLabel").eq(0).css("z-index", 2);
        map_label_click(o, a, n);
        clc_lay_view(map, point, info.xqName, info.XqStyleStringCurrent, info.xqId, info.xqPy, info.nearXq, info.XqStyleStringOther)
    }

    map_scroll_top = function (e) {
        for (var t = 0, a = r.find("li"), n = 0; n < a.length; n++) {
            var i = a.eq(n).data("index");
            if (i == e)
                return r.scrollTop(t),
                !1;
            t += a.eq(n).height() + 20
        }
    }

    map_cancel_blue = function (e) {
        "click" == e ? ($(".map-content-box").removeClass("contentActive"),
        $(".itemText").removeClass("itemActive"),
        $(".itemInfo").removeClass("itemActive"),
        $(".makerDetailStyle").remove()) : r.find("li").css("backgroundColor", "#fff"),
        $(".BMapLabel").removeClass("labelUp"),
        $(".BMapLabel .item").removeClass("blueLabel"),
        f && map_set_blue(f, "click")
    }
    map_set_blue = function (e, t) {
        var a = $('[data-index="' + e + '"]')
          , n = $('[data-label="' + e + '"]')
          , i = $('[data-detail="' + e + '"]');
        "click" == t ? (a.find(".map-content-box").addClass("contentActive"),
        a.find(".itemText").addClass("itemActive"),
        a.find(".itemInfo").addClass("itemActive"),
        i.removeClass("hideMarkerDetail").addClass("showMarkerDetail")) : a.css("backgroundColor", "#f6f6f6"),
        n.parent().addClass("labelUp"),
        n.addClass("blueLabel")
    }
    
    map_distance_click = function (e) {
        e.click(function () {
            var myDis = new BMapLib.DistanceTool(map);
            myDis.open(); 
        });
    }

    map_load(e.ak);
    window.mapInitialize = map_init;
    map_distance_click(e.btnDistance,map);
    map_tlevel_tab();
};

});