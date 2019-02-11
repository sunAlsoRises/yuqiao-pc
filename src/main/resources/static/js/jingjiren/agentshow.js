$(document).ready(function (){
    function selectTag(showContent, selfObj, pageName) {
        // 操作标签
        var tag = document.getElementById("jjr-info-tags").getElementsByTagName("li");
        var taglength = tag.length;
        for (i = 0; i < taglength; i++) {
            tag[i].className = "";
        }
        selfObj.parentNode.className = "selectTag";
        // 操作内容
        for (i = 0; j = document.getElementById("jjr-info-con-tagContent" + i) ; i++) {
            j.style.display = "none";
        }
        console.log(showContent);
        document.getElementById(showContent).style.display = "block";

        // if (pageName) {
        //     _gaq.push(['_trackPageview', '/virtual/jingjiren/list/' + pageName + '.html']);
        // }
    }
})

    $(function () {
        // $("span.j-s-map").find("a").colorbox({
        //     href: "#inlineMapDiv",
        //     inline: true,
        //     innerWidth: 600,
        //     innerHeight: 278,
        //     onOpen: function () {
        //         //追踪统计
        //         _gaq.push(['_trackPageview', '/virtual/jingjiren/viewMap.html']);
        //         $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=19&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
        //     }
        // });

        $("div.j-tel-btn").find("a").click(function () {

            var postData = {};
            postData.action = "viewMobile";
            postData.userId = location.href.replace("http://", "").split("/")[2];
            postData.mobile = $(this).hide().parent().prev().show().text();
            postData.mapId = postData.userId;
            postData.viewType = 2;


            //$.post(BaseUrl_IIS_Application_Name+"Ashx/HouseByHouseIdHandler.ashx", postData);

            _gaq.push(['_trackPageview', '/virtual/jingjiren/viewMobile.html']);
        });

        $(this).find(".YShouseOther").show();
        $(".YShouseList").mouseover(function () {
            $(this).addClass("YShouseListHover");
        });
        $(".YShouseList").mouseout(function () {
            $(this).removeClass("YShouseListHover");
        });

        $("div.J-ListBox").hover(
            function () {
                $(this).find(".hideDiv").show();
                $(this).addClass("J-ListBox-Bg");
            },
            function () {
                $(this).find(".hideDiv").hide();
                $(this).removeClass("J-ListBox-Bg");
            }
        );

        // $("a.mapYL").colorbox({
        //     href: "#inlineMapDiv",
        //     inline: true,
        //     innerWidth: 600,
        //     innerHeight: 278,
        //     onOpen: function () {
        //         //追踪统计
        //         _gaq.push(['_trackPageview', '/virtual/ershoufang/viewMap.html']);
        //         $("#inlineMapDiv").find("a").attr("href", "https://www.517.cn/ershoufang/" + $(this).attr("dataId") + "/zbpt/");
        //         $("#inlineMapDiv").find("img").attr("src", "https://api.map.baidu.com/staticimage?width=600&height=278&center=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat") + "&zoom=16&markers=" + $(this).attr("dataLng") + "," + $(this).attr("dataLat"));
        //     }
        // });

        //var $recommendList = $("#jjr-info-con-tagContent0").find("div.ListBox-I");
        //if ($recommendList.length == 0) {
        selectTag('jjr-info-con-tagContent1', $("#jjr-info-tags").find("li").eq(0).find("a")[0]);
        //}

        $(".ckgd").click(function () {
            if ($(".ckgd").html().length > 6) {
                $(".divhide").show();
                $(".ckgd").html("隐藏");
            } else {
                $(".divhide").hide();
                $(".ckgd").html("查看更多成交房源记录...");
            }

        });
    });

