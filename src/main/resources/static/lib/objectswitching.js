
/**
 * 初始化方法
 * @param {any} arrayList
 * 简述:arrayList对象里有两个属性(objlist/objswitchL)<Array>
 *      objlist:切换的对象(必填)
 *      objswitchL:切换的对象的下标值(必填)
 *      注:页面需要引用两个标签部分CSS和JQ包,(必选)
 * 注释:方法详细以及注意事项和使用请看WIKI:http://wiki.517.jiali/index.php/Wangenqi/%E6%B2%99%E7%9B%92
 */
function initSwitch(arrayList) {
    
    var obj1 = $("#top720iframe1");
    var obj2 = $("#qjlbUL");
    //绑定切换对象部分
    for (var k = 0; k < arrayList.objlist.length; k++) {
        var divObj = $('<div name="qj' + (k + 1) + '" style="display:' + ((k + 1) > 1 ? "none" : "inline") + ';height:100%"></div>');
        divObj.append($(arrayList.objlist[k].replace(/&zuo/g, '<').replace(/&you/g, '>')).css("position","absolute"));
        obj1.append(divObj);
    }
    //绑定切换对象下标值部分
    if (arrayList.objlist.length > 1) {
        var j = 1;
        //如果objlist录入数据跟objswitchL数量不符合 那么最后几个就是多余的(进行删除)==>如果想调试 请注释下方if即可
        //var surplusObj = arrayList.objlist.length - arrayList.objswitch.length;
        //if (surplusObj > 0) { 
        //    for (var e = 0; e < surplusObj; e++) {
        //        arrayList.objlis.pop();//删除最后一个元素
        //    }
        //}
        $.each(arrayList.objswitch, function (k, v) {
            var liObj = $('<li style="padding: 15px;" ></li>');//li
            var liDivObj = $('<div xb="qj' + (j) + '" class="' + (j > 1 ? ' ' : 'qjlbgreen') + '"> ' + v + ' </div>');//下标值对象
            var bottomDiv = $('<div class="' + (j > 1 ? '' : 'qjlbbot_green') + '" style="width:0px"></div>');//底部绿线
            liObj.append(liDivObj);
            liObj.append(bottomDiv);
            obj2.append(liObj);
            bottomDiv.css("width", liDivObj.width() + "px");
            j++;
        });
    }
   
    //JS部分
    if ($("#qjlbUL")) {
        var marleft = parseInt($("#qjlbUL").width() - $("#qjlbUL li").length * $("#qjlbUL li").width()) / 2 - 35;
        $("#qjlbUL>li:eq(0)").css('margin-left', marleft);
        $("#qjlbUL>li>div").on("mouseover", function () {
            this.style.cursor = 'pointer';
            $("#top720iframe1>div[name='" + $(this).attr("xb") + "']").show().siblings("div[name*='qj']").hide();
            $(this).addClass("qjlbgreen").parent("li").siblings().children("div").removeClass("qjlbgreen");
            $(this).next().addClass("qjlbbot_green").parent("li").siblings().children("div").removeClass("qjlbbot_green");
        });
    }
        
}