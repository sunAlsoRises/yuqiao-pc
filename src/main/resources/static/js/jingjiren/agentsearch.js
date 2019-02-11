$(function () {
    $("div.j-s-m-btn").find("a").colorbox({
        href: "#inlineMapDiv",
        inline: true,
        innerWidth: 600,
        innerHeight: 278,
        onOpen: function () {
            //追踪统计
            //_gaq.push(['_trackPageview', '/virtual/jingjiren/viewMap.html']);
            if ($(this).attr("dataLng") == "" || $(this).attr("dataLat") == "" || $(this).attr("dataLng") == "0" || $(this).attr("dataLat") == "0") {
                $("#inlineMapDiv").find("div").attr("style", "margin-top: 120px;aling: center;font-size: 30px;text-align: center;");
                $("#inlineMapDiv").find("div").html("无此店面位置信息");
            } else {
                $("#inlineMapDiv").find("a").attr("href", "https://www.yuqiao.cn/s/" + $(this).attr("dataId") + "/");
                var img = $("#inlineMapDiv").find("img");
                var lng = $(this).attr("dataLng");
                var lat = $(this).attr("dataLat");
                var zoom = 15;
                function imgurl(int) {
                    img.attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + lng + "," + lat + "&zoom=" + int + "&markers=" + lng + "," + lat);
                }
                function dom(int, padding) {
                    return $('<div style="width: ' + int + '%; height: 100%; display: inline-block;line-height: 25px;margin: 0 ' + padding + ';">');
                }
                //img.attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=19&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
                imgurl(zoom);
                var div = $("#inlineMapDiv").find("div");
                var button_css = {
                    'border-radius': '3px',
                    background: '#ddd',
                    cursor: 'pointer',
                };
                $(div).html('').append(
                    $('<div style="opacity: inherit;">').append(
                        $('<div style="position: absolute; width: 575px; height: 25px;top: 280px;text-align: center;">').append([
                            dom(80).html($(this).attr('org_add') || $(this).attr('org_name') || '&nbsp;').css({
                                'text-align': 'left',
                                'font-weight': '600',
                                'font-size': '15px'
                            }),
                            dom(8, '1%').html('放大').css(button_css).click(function () {
                                if (zoom >= 10 && zoom < 19) {
                                    zoom++;
                                    imgurl(zoom);
                                }
                            }),
                            dom(8, '1%').html('缩小').css(button_css).click(function () {
                                if (zoom <= 19 && zoom > 10) {
                                    zoom--;
                                    imgurl(zoom);
                                }
                            }),
                        ])));
            }
            //$("#inlineMapDiv").find("a").attr("href", "https://www.yuqiao.cn/jingjiren/" + $(this).attr("dataId") + "/");
            //$("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=19&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat")); 
        }
    });

    //$("div.j-tel-btn").find("a").click(function () {

    //    var postData = {};
    //    postData.action = "viewMobile";
    //    postData.userId = $(this).parents("ul").find("li.j-name").find("a").attr("href").split("/")[2];
    //    postData.mobile = $(this).hide().parent().prev().show().text();
    //    postData.mapId = postData.userId;
    //    postData.viewType = 2;

    //    $.post(BaseUrl_IIS_Application_Name+"Ashx/HouseByHouseIdHandler.ashx", postData);

    //    _gaq.push(['_trackPageview', '/virtual/jingjiren/viewMobile.html']);
    //});
});