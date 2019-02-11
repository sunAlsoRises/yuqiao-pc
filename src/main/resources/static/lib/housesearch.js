$(function () {
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

    //$("a.txupimg").click(function() {
    //    _gaq.push(['_trackPageview', '/virtual/list/upimg.html']);
    //});
    var urlresult = "ershoufang";
    if (window.location.href.indexOf("ershoufanggr") >= 0) {
        urlresult = "ershoufanggr"
    } else if (window.location.href.indexOf("zufanggr") >= 0) {
        urlresult = "zufanggr"
    } else if (window.location.href.indexOf("zufang") >= 0) {
        urlresult = "zufang"
    } else if (window.location.href.indexOf("xiaoqu") >= 0) {
        urlresult = "xiaoqu"
    }
    $("a.mapYL").colorbox({
        href: "#inlineMapDiv",
        inline: true,
        innerWidth: 600,
        innerHeight: 278,
        onOpen: function() {
            //追踪统计
            _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
            $("#inlineMapDiv").find("a").attr("href", "#" + urlresult +"/" + $(this).attr("dataId") + "/#zbpt/");
            $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
        }
    });
});