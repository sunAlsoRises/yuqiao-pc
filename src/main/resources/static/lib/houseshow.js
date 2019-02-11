$(function () {
    $("ul.h-m-imglist").find("a").click(function () {
        $("a.img-show").find("img").attr("src", $(this).find("img").attr("src").replace("/middle/", "/small/"));
        $(this).parents("ul").find(".imgCurrent").removeClass("imgCurrent");
        $(this).parent().addClass("imgCurrent");
    });

    ///根据尺寸获取图片地址
    function GetImgBySize(url, size) {
        return url.replace(/\.[0-9]+x[0-9]+\./g, size);
    }
    var imageClick = function () {

        $("#picview_close").click();

        //禁用滚动条
        var scrollTop = document.body.scrollTop;
        function TempScrollFunc() { document.body.scrollTop = scrollTop; }
        document.addEventListener("scroll", TempScrollFunc);
        //禁用框选
        function TempSelectFunc() { event.returnValue = false; }
        document.addEventListener("selectstart", TempSelectFunc);

        var thisIndex = allElements.index($(this));//当前点击的图片位于总个数的第几位   
       // console.log("地址"+url);
        var url = $(this).attr("href").replace("middle", "small");
        //中图入口allbigElements
        if ($(this).hasClass('imga')) {
            allbigElements = $(".imga");
            allElements = $(".imgad");
            thisIndex = allbigElements.index($(this));
            url = $(allElements[thisIndex]).attr("href").replace("middle", "small");
        } else if ($(this).hasClass('imgaxq')){
            allbigElements = $(".imgaxq");
            allElements = $(".imgaxqd");
            thisIndex = allbigElements.index($(this));
            url = $(allElements[thisIndex]).attr("href").replace("middle", "small");
        }

        //*******************************************************
        //黑色透明背景
        //*******************************************************

        var mainDiv = $("<div id='picview_main' style='position:fixed;cursor:pointer;background-color:#000; z-index:10000; left:0px; top:0px; opacity: 0.7;' />");
        mainDiv.css("width", document.documentElement.clientWidth + "px");
        mainDiv.css("height", document.documentElement.clientHeight + "px");

        $(document.body).append(mainDiv);

        //*******************************************************
        //载入中图片
        //*******************************************************
        var loadImg = $("<img id='picview_loading' style='position:fixed; width:50px; height:50px; z-index:10001;' src='data:image/gif;base64,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'>");
        loadImg.css("left", parseInt((document.documentElement.clientWidth - 50) / 2) + "px");
        loadImg.css("top", parseInt((document.documentElement.clientHeight - 50) / 2) + "px");
        $(document.body).append(loadImg);
        //*******************************************************
        //图片
        //*******************************************************

        if (thisIndex < 0) {
            url = GetImgBySize(url, '.960x720.');
        }
        var picImg = $("<img name='mob_smallImg' id='picview_pic' style='position:fixed; left:-10000px; top:-10000px; z-index:10001; box-shadow: 0 0 10px rgba(0,0,0,.8);' src='" + url + "'>");
        //201804 增加mp4视频附件的识别及标签替换
        if (url.indexOf(".mp4") > 0)
            picImg = $("<video name='mob_smallImg' controls='controls' type='video/mp4' id='picview_pic' style='position:fixed; left:-10000px; top:-10000px; z-index:10001; box-shadow: 0 0 10px rgba(0,0,0,.8);' src='" + url + "' controlslist='nodownload' muted='true'>");
        $(document.body).append(picImg);

        var imgWidth, imgHeight;

        //图片加载完成事件没有找到  只能用setInterval了
        var intervalID = setInterval(function () {
            if ((picImg.is("img") && picImg.prop("complete")) || (picImg.is("video") && picImg.prop("duration"))) {
                loadImg.remove();
                //设置屏幕居中
                imgWidth = picImg.prop("offsetWidth");
                imgHeight = picImg.prop("offsetHeight");
                if (imgHeight > document.documentElement.clientHeight - viewsmall.prop("offsetHeight") - toolsDiv.prop("offsetHeight")) {
                    var setHeight = document.documentElement.clientHeight - viewsmall.prop("offsetHeight") - toolsDiv.prop("offsetHeight");
                    imgWidth = setHeight / imgHeight * imgWidth;
                    imgHeight = setHeight;
                    picImg.css("width", imgWidth + "px");
                    picImg.css("height", imgHeight + "px");
                }
                picImg.css("left", parseInt((document.documentElement.clientWidth - imgWidth) / 2) + "px");
                picImg.css("top", parseInt((document.documentElement.clientHeight - imgHeight - viewsmall.prop("offsetHeight") + toolsDiv.prop("offsetHeight")) / 2) + "px");

                //SmallResize();//设置预览框

                var isPress = false;//是否按下鼠标
                var startPoint;//鼠标按下时的位置
                var startLocation;//鼠标按下时图片的位置
                //鼠标按下事件
                picImg.mousedown(function () {
                    isPress = true;
                    startPoint = { x: event.x, y: event.y };
                    startLocation = { l: parseInt($(this).css("left")), t: parseInt($(this).css("top")) };
                });
                //鼠标移动事件
                picImg.mousemove(function () {
                    if (isPress) {
                        $(this).css("left", startLocation.l + (event.x - startPoint.x) + "px");
                        $(this).css("top", startLocation.t + (event.y - startPoint.y) + "px");
                        //SmallResize();//设置预览框
                    }
                });
                //鼠标弹起事件
                picImg.mouseup(function () {
                    isPress = false;
                });
                //鼠标移出事件
                picImg.mouseout(function () {
                    isPress = false;
                });
                //鼠标滚轮事件
                picImg[0].onmousewheel = function () {
                    var setp = (event.deltaY) / 100 * 0.2; //每次放大或缩小基数
                    var thisWidth = parseFloat($(this).css("width"));//原宽度
                    var thisHeight = parseFloat($(this).css("height"));//原高度
                    var thisLeft = parseFloat($(this).css("left"));//原距离左侧距离
                    var thisTop = parseFloat($(this).css("top"));//原距离顶部距离

                    if (event.x >= thisLeft && event.x <= thisLeft + thisWidth && event.y >= thisTop && event.y <= thisTop + thisHeight) {
                        var finnalWidth = thisWidth - thisWidth * setp;//计算后的宽度
                        var finnalHeight = thisHeight - thisHeight * setp;//计算后的高度

                        //放大与缩小的倍数必须小于5
                        if (finnalHeight / imgHeight < 5 && finnalHeight / imgHeight > 0.2) {

                            var mouseLeft = (event.x - thisLeft);//鼠标与图片左侧的距离
                            var mouseTop = (event.y - thisTop);//鼠标与图片顶部的距离

                            //用于在鼠标位置放大或缩小
                            var moveLeft = finnalWidth * mouseLeft / thisWidth - mouseLeft;//计算后需要向左侧移动的距离
                            var moveTop = finnalHeight * mouseTop / thisHeight - mouseTop;//计算后需要向顶部移动的距离

                            $(this).css("left", thisLeft - moveLeft + "px");
                            $(this).css("top", thisTop - moveTop + "px");
                            $(this).css("width", finnalWidth + "px");
                            $(this).css("height", finnalHeight + "px");

                            //提示当前图片的百分比
                            $("#picview_tip").remove();
                            var tip = $("<div id='picview_tip' style='width:100px; height:24px; position:fixed; background-color:#787878; font-size:12px; padding:12px 0 0 0; z-index:10002; color:#fff; text-align:center; opacity: 0.8; border-radius:5px 5px 5px; cursor:default;'>" + parseInt(finnalHeight / imgHeight * 100) + "%</div>");
                            tip.css("left", (document.documentElement.clientWidth - 100) / 2 + "px");
                            tip.css("top", (document.documentElement.clientHeight - 100) / 2 + "px");
                            $(document.body).append(tip);
                            tip[0].onmousewheel = function () { picImg.mousewheel(); };

                            //SmallResize();//设置预览框
                            //1秒后关闭显示图片百分比的div
                            setTimeout(function () {
                                tip.remove();
                            }, 1000);
                        }
                    }
                };
                //屏蔽掉系统的拖拽事件
                $(picImg)[0].ondragstart = function () {
                    return false;
                };

                clearInterval(intervalID);
            }
        }, 100);
        //*******************************************************
        //上一张图片
        //*******************************************************

        var prevDiv = $("<div id='prcview_prev' style='position:fixed; height:200px; z-index:10002; padding:0 20px; left:40px; border-radius: 6px; background-color:#000; text-align:center; cursor:pointer; font-size:50px; color:#fff; line-height:200px;font-family: Tahoma;font-weight: normal;top:50%;margin:-100px 0 0;opacity: .5;'><</div>")
        $(document.body).append(prevDiv);
        prevDiv.click(function () {
            if (thisIndex - 1 < 0) {
                thisIndex = allElements.length - 1;
            } else {
                thisIndex--;
            }
            allElements.eq(thisIndex).click();
        });
        //prevDiv.css("top", (document.documentElement.clientHeight) / 2 - 50 + "px");
        prevDiv.mouseover(function () {
            prevDiv.css("opacity", "1");
        });
        prevDiv.mouseout(function () {
            prevDiv.css("opacity", ".5");
        });
        //*******************************************************
        //下一张图片
        //*******************************************************

        var nextDiv = $("<div id='prcview_next' style='position:fixed; height:200px; z-index:10002; padding:0 20px; right:40px; border-radius: 6px; background-color:#000; text-align:center; cursor:pointer; font-size:50px; color:#fff; line-height:200px;font-family: Tahoma;font-weight: normal;top:50%;margin:-100px 0 0;opacity: .5;'>></div>")
        $(document.body).append(nextDiv);
        nextDiv.click(function () {
            if (thisIndex + 1 >= allElements.length) {
                thisIndex = 0;
            } else {
                thisIndex++;
            }
            allElements.eq(thisIndex).click();
        });
        //nextDiv.css("top", (document.documentElement.clientHeight) / 2 - 50 + "px");
        nextDiv.mouseover(function () {
            nextDiv.css("opacity", "1");
        });
        nextDiv.mouseout(function () {
            nextDiv.css("opacity", ".5");
        });
        //*******************************************************
        //工具栏
        //*******************************************************

        var toolsDiv = $("<div id='prcview_tools' style='position:fixed; z-index:10002; padding:10px 30px; top:0px; border-radius:0px 0px 6px 6px; background:#000;color:#ccc; text-align:center;'/>");
        $(document.body).append(toolsDiv);


        //备注
        var description = $(this).prev("span[name='description']").text();
        if (description) {
            toolsDiv.append("<span style='color:#fff;display:block;padding:0 0 10px;font-size:16px;font-weight: 700;' title='" + description + "'>" + (description.length > 33 ? description.substring(0, 32) + "..." : description) + "</span>");

        }
        //类型
        var title = $(this).attr("title");
        if (title) {
            toolsDiv.append("<span style='color:#ccc;padding:0 3px 0 5px;' title='" + title + "'>" + (title.length > 7 ? title.substring(0, 6) + "..." : title) + "</span>");
        }
        //当前第几个/共几个
        toolsDiv.append("<span style='color:#ccc;padding:0 5px 0 0;'>" + (thisIndex + 1) + "/" + allElements.length + "</span> | ");

        var enableStyle = "font-weight:bold; color:#fff;";//允许使用的样式
        var disableStyle = "cursor:default; color:#909090;";//禁止使用的样式

        toolsDiv.append("<a class='LookHD' href='javascript:void(0)' style='cursor:pointer;color:#ccc;padding:0 5px;'>查看高清</a>|");

        toolsDiv.find(".LookHD").click(function () {
            var url = $("#picview_pic").attr("src");
            var HDurl = GetImgBySize(url, ".1200x1200.");
            window.open(HDurl);
        });
        //按钮 "原始大小"
        toolsDiv.append("<a class='resize' href='javascript:void(0)' style='cursor:pointer;color:#ccc;padding:0 5px;'>原始大小</a>");

        //重置图片大小与位置
        toolsDiv.find(".resize").click(function () {
            //设置宽高
            picImg.css("width", imgWidth + "px");
            picImg.css("height", imgHeight + "px");
            //设置屏幕居中
            picImg.css("left", parseInt((document.documentElement.clientWidth - imgWidth) / 2) + "px");
            picImg.css("top", parseInt((document.documentElement.clientHeight - imgHeight - viewsmall.prop("offsetHeight") + toolsDiv.prop("offsetHeight")) / 2) + "px");
        });
        //下载图片
        toolsDiv.find(".savepic").click(function () {
            var link = document.createElement("a");
            link.href = url;
            link.download = true;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        toolsDiv.append(" | <span class=xuanzhuanimg style='cursor:pointer;color:#ccc;padding:0 5px;'><img width='16' height='16' title='旋转' style='vertical-align: middle;cursor: pointer;margin:0 3px 0 0;' src='data:image/png;base64,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'/>旋转</span>");
        toolsDiv.find(".xuanzhuanimg").click(function () {
            var deg = 360;
            if (picImg.data("deg")) {
                deg = picImg.data("deg");
            }
            deg -= 90;
            picImg.css("-webkit-transform", "rotate(" + deg + "deg)");
            //smallImg.find("img").css("-webkit-transform", "rotate(" + deg + "deg)");
            picImg.data("deg", deg);
        });
        toolsDiv.css("left", (document.documentElement.clientWidth - toolsDiv.prop("offsetWidth")) / 2 + "px");



        //*******************************************************
        //底部的小图
        //*******************************************************

        var viewsmall = $("<div id='prcview_viewsmall' style='position:fixed; z-index:10002; background:#000; opacity: 1; text-align:center; height:110px; width:100%'/>");
        var viewImgs = $("<div style='white-space:nowrap'/>");

        for (var i = 0; i < allElements.length; i++) {
            var itemSrc = $(allElements[i]).attr("href")
            var tempDiv = $("<a style='display:inline-block;padding:5px;position:relative;'/>");
            //201804 增加mp4视频附件的识别及标签替换
            var small_view_img;
            if (itemSrc.indexOf(".mp4") > 0){
                small_view_img = $("<video name='mob_smallImg' width='110' height='100' style='cursor:pointer;' muted='true' />");
            } else {
                small_view_img = $("<img name='mob_smallImg' width='110' height='100' style='cursor:pointer;' />");
            }
            small_view_img.attr("src", itemSrc);
            small_view_img.data("index", i);
            small_view_img.click(function () {
                allElements.eq($(this).data("index")).click();
            });

            if (thisIndex == i) {
                tempDiv.css("background", "#009143");
            }
            tempDiv.append(small_view_img);
            tempDiv.append("<span style='color:#fff;position: absolute;display:block;bottom:7px;left:0;margin:0 5px;width:110px;line-height:20px;text-align:center;background:#000;opacity: .8;'>　" + allElements.eq(i).attr("title") + "　</span>");
            viewImgs.append(tempDiv);
        }
        viewsmall.append(viewImgs);
        $(document.body).append(viewsmall);
        var countnum = allElements.length;
        var allWidth = viewsmall.prop("scrollWidth");
        var itemWidth = allWidth / countnum;
        //var viewcountnum = parseInt(viewsmall.width() / itemWidth);
        var viewsmallWidth = viewsmall.width();

        if (allWidth > viewsmallWidth) {
            var left = thisIndex * itemWidth;
            if (left >= viewsmallWidth / 2) {
                var num = viewsmallWidth / 2 - left;
                if (num > viewsmallWidth - allWidth) {
                    viewImgs.css("margin-left", num + "px");
                } else {
                    viewImgs.css("margin-left", viewsmallWidth - allWidth + "px");
                }
            }
        }
        viewsmall.css("top", document.documentElement.clientHeight - 110 + "px");
        //*******************************************************
        //关闭按钮
        //*******************************************************

        var closeDiv = $("<div id='picview_close' style='position: fixed;z-index: 10002;top: 0;right: 0;width: 60px;padding: 0 0 0 10px;border-radius: 0 0 0 300px;text-align: center;color: #fff;font-size: 40px;cursor: pointer;font-weight: normal;height: 60px;line-height: 40px;background-color: rgb(0, 0, 0);'>×</div>");
        //closeDiv.css("left", document.documentElement.clientWidth - 40 + "px");
        $(document.body).append(closeDiv);
        //鼠标移动在控件上高亮度显示
        //closeDiv.mouseover(function () {
        //    $(this).css("opacity", "1");
        //});
        //鼠标移出控件亮度改为原来的亮度
        //closeDiv.mouseout(function () {
        //    $(this).css("opacity", "0.6");
        //});
        //点击关闭事件
        closeDiv.click(function () {
            HouseImageClose();
        });

        //关闭图片查看器事件
        function HouseImageClose() {
            $("#picview_close").remove();
            $("#prcview_tools").remove();
            $("#picview_pic").remove();
            $("#picview_main").remove();
            $("#prcview_small").remove();
            $("#prcview_prev").remove();
            $("#prcview_next").remove();
            $("#prcview_viewsmall").remove();
            //允许使用滚动条
            document.removeEventListener("scroll", TempScrollFunc);
            //允许使用选择
            document.removeEventListener("selectstart", TempSelectFunc);
            //去掉窗口改变大小事件
            removeEventListener("resize", TempResizeFunc);
            //去掉按键事件
            document.removeEventListener("keydown", TempKeyDown);
        }

        //按键事件
        function TempKeyDown() {
            var key = event.keyCode;
            //var moveSetp = 10;
            //if (event.shiftKey) {
            //    moveSetp = 1;
            //}
            switch (key) {
                case 37://左                        
                case 38://上
                    //picImg.css("top", parseInt(picImg.css("top")) - moveSetp + "px");
                    prevDiv.click();
                    break;
                case 39://右                       
                case 40://下
                    //picImg.css("top", parseInt(picImg.css("top")) + moveSetp + "px");
                    nextDiv.click();
                    break;
                case 27://ESC
                    closeDiv.click();
                    break;
            }
        }
        document.addEventListener("keydown", TempKeyDown);


        //图片加载失败
        picImg.error(function () {
            loadImg.remove();
            //mainDiv.css("z-index", 10);
            //picImg.css("z-index", 11);
            //closeDiv.css("z-index", 12);
            //toolsDiv.css("z-index", 12);
            MG.ui.plugin.msgbox("图片加载错误!", "消息提示", function () {
                mainDiv.css("z-index", 10000);
                closeDiv.css("z-index", 10002);
                toolsDiv.css("z-index", 10002);
            }, { autohide: true });
            clearInterval(intervalID);
            $(this).remove();
        });
        //浏览器大小改变时改变位置
        function TempResizeFunc() {
            //背景
            mainDiv.css("width", document.documentElement.clientWidth + "px");
            mainDiv.css("height", document.documentElement.clientHeight + "px");
            //图片            
            picImg.css("left", parseInt((document.documentElement.clientWidth - picImg.prop("offsetWidth")) / 2) + "px");
            picImg.css("top", parseInt((document.documentElement.clientHeight - picImg.prop("offsetHeight") - viewsmall.height()) / 2) + "px");
            //上一张
            prevDiv.css("top", (document.documentElement.clientHeight) / 2 - 50 + "px");
            //下一张
            nextDiv.css("top", (document.documentElement.clientHeight) / 2 - 50 + "px");
            //工具栏
            toolsDiv.css("left", (document.documentElement.clientWidth - toolsDiv.prop("offsetWidth")) / 2 + "px");
            //关闭按钮
            //closeDiv.css("left", document.documentElement.clientWidth - 40 + "px");
            //底部小图列表
            viewsmall.css("top", document.documentElement.clientHeight - 130 + "px");
            //小图
            //smallImg.css("left", (document.documentElement.clientWidth - 205) + "px");
            //smallImg.css("top", (document.documentElement.clientHeight - 155) + "px");
            //设置预览框
            //SmallResize();
        }
        removeEventListener("resize", TempResizeFunc);
        addEventListener("resize", TempResizeFunc);
        $(document.body).unbind("click").unbind("mousemove").bind({
            mousemove: function (e) {
                var id = $(e.target).attr("id");
                if (id == undefined || (id != "picview_main" && id != "picview_pic" && id != "prcview_next" && id != "prcview_prev")) {
                    $("#prcview_next").css("opacity", ".5");
                    $("#prcview_prev").css("opacity", ".5");
                } else if (id == "picview_main" || id == "picview_pic") {
                    if (e.clientX < $(document.body).width() / 2) {
                        $("#prcview_prev").css("opacity", "1");
                        $("#prcview_next").css("opacity", ".5");
                    }
                    else {
                        $("#prcview_next").css("opacity", "1");
                        $("#prcview_prev").css("opacity", ".5");
                    }
                }
            },//点击事件
            click: function (e) {
                var id = $(e.target).attr("id");
                if (id == undefined || (id != "picview_main" && id != "picview_pic" && id != "prcview_next" && id != "prcview_prev")) {


                } else if (id == "picview_main" || id == "picview_pic") {
                    if (e.clientX < $(document.body).width() / 2) {
                        $("#prcview_prev").click();
                    }
                    else {
                        $("#prcview_next").click();
                    }
                }
            }
        });

        //取消超链接href的连接
        return false;
    }

    var allElements = $(".imgad");
    //$(allElements).click(imageClick);
    $(".imgad").click(imageClick);
    $(".imgaxqd").click(imageClick);
    $(".showAllImage").click(function () {
        $(".imgad:first").click();
        return false;
    });

    var allbigElements = $(".imga");
    $(".imga").click(imageClick);
    $(".imgaxq").click(imageClick);


    $("#jubaobtn").click(function () {
        var reportContent = $("#txtReportContent").val();
        var reportUser = $("#txtReportUser").val();
        var reportMobile = $("#txtReportMobile").val();
        if (!reportContent) {
            layer.msg("请填写举报内容");
            return;
        }
        if (!reportUser || reportUser == "输入您的称呼") {
            layer.msg("请填写您的称呼，以便我们联系您");
            return;
        }
        if (!reportMobile || reportMobile == "输入您的常用联系电话") {
            layer.msg("确定不填写联系方式？成功举报我们会提供100元奖金！");
            return;
        }
        var text = "[用户名:" + reportUser + "]|[用户电话:" + reportMobile + "]|[举报内容:" + reportContent + "]";
        $.post(BaseUrl_IIS_Application_Name + "Ashx/JuBaoHandler.ashx", { "actionType": "0", "mapType": "2", "mapId": $("#reportLink").attr("hid"), "neirong": encodeURIComponent(text) }, function (json) {
            if (json.data > 0) {
                layer.msg("举报成功");
                $("#txtReportContent").val("");
                $("#txtReportUser").val("输入您的称呼");
                $("#txtReportMobile").val("输入您的常用联系电话");
                $("a.closewinbtn").click();
            } else if (json.data == 0) {
                layer.msg("您已经成功举报过该房源信息了，我们的工作人员正在处理中，感谢您的关注。");
                $("a.closewinbtn").click();
            } else {
                layer.msg("哎呀，出错了。");
                $("a.closewinbtn").click();
            }
        });
    });
    var jubaotag = $(".jubaotabs span");
    $(jubaotag).click(function () {
        var jbc = $("#txtReportContent").val() + $(this).text() + ",";
        $("#txtReportContent").val(jbc);
        //jb-t-arr选中的样式
    });
    var usercookies = $.cookie("usercenter");
    if (usercookies != null) {
        usercookies = usercookies.split('&');
        $("#txtReportUser").val(usercookies[1] == undefined ? "" : usercookies[1].split('=')[1]);
    }

    //*******************************************************
    //添加无图片事件
    //*******************************************************
    $("img[name='mob_smallImg']").attr("onerror", "this.src='" + onimgurl_small + "'");
    $("img[name='mob_bigImg']").attr("onerror", "this.src='" + onimgurl_big + "'");
    $("img[name='mob_jjrImg']").attr("onerror", "this.src='" + onimgurl_jjr + "'");

});


