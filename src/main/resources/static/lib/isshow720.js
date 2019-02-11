$(document).ready(function () {
    $("body").append(
        $('<div id="Div720Cotent" style="display:none;width:100%;height:90%;"></div>')
            .append(
            $('<div id="top720iframe" style="position:fixed;top:0;margin:20px;z-index:1000;"></div>')
                .append($('<div id="hideiframe" onclick="javascript:this.parentNode.parentNode.style.display=\'none\';" style=" position: absolute;width:30px;height:30px; top:0;left:100%; padding:3px;font-size: 26px;line-height: 26px;text-align: center;border:1px #888 solid;border-left: none;border-radius: 8px;border-top-left-radius: unset;border-bottom - left - radius: unset;user-select: none;cursor:pointer;background-color:#888;z-index:1;"><i class="fontfaceicon" style="color:white;">&#xe646;</i></div>'))
                .append($('<iframe id="720imgiframe" src="" width="100%" height="90%" scrolling="no" style="border:0px;display:inline;background-color:black;z-index:1000;"></iframe>'))
                .append($('<div id="bg"></div>'))
                .append($('<div id="show" style="position: absolute; color:#bfbfbf;font-size:16px;width:250px;padding:8px;right:0;bottom:0;-moz-opacity:0.7;opacity:.70;border-radius:6px 6px 6px 6px;background-color:black;overflow:auto;z-index:10;display: none;">您当前浏览器未允许使用flash插件，无法体验全景最佳展示，请手动允许使用flash插件，开启之后，效果更佳<br/><div style="text-align: right; font-size: 18px;"><hr /><span onclick="javascript:this.parentNode.parentNode.style.display = \'none\';">关闭</span></div></div >')
                )
            ) 
            .append($('<div class="quanjingShowbg"></div>'))
    );
    $("#hideiframe").mouseover(function () { 
        $(this).css("background-color","#ddd");
    });
    $("#hideiframe").mouseout(function () {
        $(this).css("background-color", "#888");
    });
    $("#hideiframe>i").mouseover(function () {
        $(this).css("color", "#009416");
    });
    $("#hideiframe>i").mouseout(function () {
        $(this).css("color", "white");
    });
});
//IShow720(是否弹出窗口提示(true|false), 视频url(string), 窗口宽度(number), 窗口高度(number), 全景类型(二手房1,小区3...)(number))
function IShow720(isMsg, src, domWidth, domHeight, classid) {//
    src = src || " ";//视频链接
    src = src == true || src == false ? " " : src;//防止src参数传入bool类型
    isMsg = isMsg == undefined ? true : isMsg; //isMsg如果flash处于关闭状态是否给予弹出框提示 默认提示
    classid = (classid == undefined || isNaN(classid)) ? 1 : classid; //全景类型默认为1
    $('#Div720Cotent iframe').attr("src", "");
    $('#top720iframe h1').remove();
    // 获取窗口宽度
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    // 获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    var newWidth = parseInt(winWidth - 100);
    var newHeight = parseInt(winHeight - 100);
    if (src != "" && src != null && src != undefined && isMsg == true ) {
        $('#Div720Cotent iframe').attr("src", src);
        if (!isNaN(domWidth) && !isNaN(domHeight)) {
            if (domWidth <= 600 && domHeight <= 400) {//高宽 最小值限制
                domWidth = 600;
                domHeight = 400;
            } 
            if (domWidth <= 600 || domHeight <= 400) {//如果高宽 有一个小于600  都按最大比例播放
                domWidth = newWidth;
                domHeight = newHeight;
            } 
            if (domWidth > winWidth) {//宽度不允许溢出
                $("#720imgiframe").css("width", newWidth + "px");
                $('#hideiframe').css("left", newWidth + "px");
            } else {
                $('#Div720Cotent iframe').css("width", domWidth + "px");
                $('#hideiframe').css("left", domWidth + "px");
            }
            if (domHeight > winHeight) {
                $("#top720iframe").css("margin-top", "20px");
                if (domHeight > winHeight) {//高度不允许溢出
                    $("#720imgiframe").css("height", newHeight + "px");
                }
            } else {
                $('#Div720Cotent iframe').css("height", domHeight + "px");
            }

        }
        var leftPX = parseInt((parseInt(winWidth) - parseInt($("#720imgiframe").width()))) / 2;
        var topPX = parseInt((parseInt(winHeight) - parseInt($("#720imgiframe").height()))) / 2;
        if (!isNaN(domWidth) && !isNaN(domHeight)) {
            if (leftPX > 40) {
                $("#top720iframe").css({ "left": leftPX-20});
            }
            $("#top720iframe").css({"top": topPX-20 });
        } else {
            $("#show").css("top", "0").css("bottom", "");
            $("#top720iframe").css({ "width": "95%", "height": "100%" });
        }
        
    }

    if (src == " "){
        if (isMsg == true) {
            $('#top720iframe').prepend($("<h1 style='font-size:50px;color:red;position:absolute;'>该资源不存在</h1>"));
        }
    }
    var rtn = true;
    var isIE = !-[1,];
    if (isIE) {
        try {
            var swf1 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        }
        catch (e) {
            rtn = false;
        }
    }
    else {
        try {
            var swf2 = navigator.plugins['Shockwave Flash'];
            if (swf2 == undefined) {
                rtn = false;
            }
        } catch (e) {
           
        }
    };
    if (rtn == false && classid == 3) { //flash不可用且全景类型为3时src赋空
        $('#Div720Cotent iframe').attr("src", "");
        if (isMsg == true) {
            $("#show").show();
            $('#Div720Cotent').show();
        }
    } else { //flash可用
        if (isMsg == true) {
            rtn = true;
            $('#Div720Cotent').show();
        }
    }
    return rtn;
}