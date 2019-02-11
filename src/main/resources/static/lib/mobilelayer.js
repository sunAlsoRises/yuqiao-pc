
var YWYlhyChat = {
    alert: function (opts) {
        var self = this;
        var divdom = jQuery('<div style="position: absolute;top: 0;left: 0;height: 100%;width: 100%;background: rgba(0,0,0,.5);z-index: 99999;">')
        jQuery(document.body).append(divdom);
        var memodom = jQuery('<div style="width: 80%;position: absolute;top: 50%;left: 50%;margin: -15% 0 0 -40%;background: #fff;border-radius: 3px;box-sizing: border-box;"></div>')
        divdom.append(memodom);
        memodom.append('<div style="text-align: center;color: #009143;padding: 30px 10px;">' + opts.title + '</div>')
        var seldom = jQuery('<div style="display: -webkit-box;padding: 10px 0;border-top: 1px #eee solid;">');
        memodom.append(seldom);
        if (opts.button != undefined) {
            jQuery.each(opts.button, function (i, _i) {
                seldom.append(jQuery('<a style="    display: block;-webkit-box-flex: 1;text-align: center;position: relative;font-size: 14px;border-right: 1px #eee solid;" href="javascript:void(0)">' + _i.text + '</a>').click(function () {
                    divdom.remove();
                    if (_i.call != undefined) {
                        _i.call();
                    }
                }))
            })
        }
    },
    Mask: { 

        show: function (dom) {
            this.init(dom);
            jQuery("#zhezhao").show()
            jQuery("#DialogDiv").show()
        },
        init: function (dom) {


            var imgurl = "https://img73.yuqiaocdn.com/Images/mango_loading100x100.gif";
            var top = 10;
            var bodywidth = document.documentElement.clientWidth;//1000
            if (bodywidth < 600) {
                var imgurl = "https://img73.yuqiaocdn.com/Images/mango_loading50x50.gif";
                top = 50;
            }
            if (isJiaMeng == true) {
                imgurl = "https://img73.yuqiaocdn.com/images/yuqiao_loading_100x37.gif";
            }
            if (dom == undefined) {
                jQuery("body").append(jQuery("<div id='zhezhao' style='display: none;position: absolute;width: 100%;height: 100%;background: rgba(0,0,0,.6);top: 0;left: 0;z-index: 92372363266;'></div>" +
                    "<div id='DialogDiv' style='display: none;font-family: \"Microsoft YaHei\", \"微软雅黑\", \"黑体\";position: absolute;z-index: 92372363267;top: " + top + "%;left: 50%;width: 30%;margin: -8% 0 0 -15%;'>" +
                    "<div><table width='100%' cellpadding='0' cellspacing='0' border='0'><tr><td align='center'>" +
           "<img src='" + imgurl + "'></td></tr></table></div></div>").click(function () {
               jQuery("#zhezhao").remove()
               jQuery("#DialogDiv").remove()
           }));
            } else {
                dom.append(jQuery("<div id='zhezhao' style='display: none;position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,.6);top: 0;left: 0;z-index: 92372363266;'></div>" +
                    "<div id='DialogDiv' style='display: none;font-family: \"Microsoft YaHei\", \"微软雅黑\", \"黑体\";position: absolute;z-index: 92372363267;top: 10%;left: 50%;width: 30%;margin: -8% 0 0 -15%;'>" +
                    "<div><table width='100%' cellpadding='0' cellspacing='0' border='0'><tr><td align='center'>" +
           "<img src='" + imgurl + "'></td></tr></table></div></div>").click(function () {
               jQuery("#zhezhao").remove()
               jQuery("#DialogDiv").remove()
           }));
            }
        },
        hide: function () {
            jQuery("#zhezhao").remove()
            jQuery("#DialogDiv").remove()
        }
    }
}


//动态遮罩
var LUMask = { 
    showint: function (data) {//int 1,2,3
        this.init(data);
        jQuery(".lu_zhezhao").show()
        jQuery(".lu_etc").show()
    },
    showstr: function (data) {//url=图片路径
        this.init(data);
        jQuery(".lu_zhezhao").show()
        jQuery(".lu_etc").show()
    },
    init: function (data) {
        data = data || {};
        data.bool = data.bool || false;
        var intstr = ['50x50', '100x100', '150x150']
        var intstring = '50x50';
        data.int && (intstring = intstr[data.int - 1])
        jQuery("body").append(jQuery("<div class='lu_zhezhao' style='display: none;position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,.6);top: 0;left: 0;z-index: 92372363266;'></div>" +
               "<div class='lu_etc' style='display: none;font-family: \"Microsoft YaHei\", \"微软雅黑\", \"黑体\";position: fixed;z-index: 92372363267;top: 50%;left: 50%;width: 30%;margin: -8% 0 0 -15%;'>" +
               "<div><table width='100%' cellpadding='0' cellspacing='0' border='0'><tr><td align='center'>" +
               "<img src='" + (data.url ? data.url : "https://img73.yuqiaocdn.com/Images/mango_loading" + intstring + ".gif") + "'></td></tr></table></div></div>").click(function () {
                   data.bool && jQuery(".lu_zhezhao").remove()
                   data.bool && jQuery(".lu_etc").remove()
               }));
    },
    hide: function () {
        jQuery(".lu_zhezhao").remove()
        jQuery(".lu_etc").remove()
    }
};

//luxx
//dom不是很好用 
var LU_TiShiKuang = {//禁用id=lubeijing
    alert: function (data, dom, ff, int) {
        int = int * 100;//int定时器变量
        var self = this;
        var top = 0; left = 0;
        var height = '100%', width = '100%';
        if (dom) {//用来覆盖部分dom显示提示框,部分dom不支持
            top = dom.offset().top + 'px';
            left = dom.offset().left + 'px';
            height = dom.outerHeight(true) + 'px';
            width = dom.outerWidth(true) + 'px';
        }
        var beijing = jQuery('<div class="lubeijing" style="position: fixed;top: ' + top + ';left: ' + left + ';height: ' + height + ';width: ' + width + ';background: rgba(0,0,0,.5);z-index: 99999;">');
        var tishikuang = jQuery('<div style="width: 70%;position: absolute;top: 50%;left: 55%;margin: -15% 0 0 -40%;background: #fff;border-radius: 3px;box-sizing: border-box;box-shadow: rgb(68, 68, 68) 5px 5px 40px;"></div>');
        var tishistr = jQuery('<div style="text-align: center;color: #009143;padding: 30px 10px;font-weight: 500;font-size: 15px;"></div>');//color: #009143;
        var buttonsdom = jQuery('<div style="display: -webkit-box;padding: 10px 0;border-top: 1px #eee solid;">');
        jQuery(document.body).append(beijing);
        beijing.append(tishikuang);
        tishikuang.append(tishistr);
        ff && ff({ Buttons: buttonsdom, TSstr: tishistr, TSkuang: tishikuang });//先行方法,留着定义修改dom
        if (int) {
            tishistr.html(data);//有int时默认data为dom
            setTimeout(function () {
                beijing.remove();
            }, int);
        } else {
            tishistr.html(data.text);//否则视为变量data.text视为提示文本
            if (data.button) {
                tishikuang.append(buttonsdom);
                jQuery.each(data.button, function (i, _i) {//循环生成按钮及点击事件
                    var button = jQuery('<a style="    display: block;-webkit-box-flex: 1;text-align: center;position: relative;font-size: 14px;border-right: 1px #eee solid;" href="javascript:void(0)"></a>').html(_i.text);
                    button.click(function () {//不用click事件防止误触点击事件
                        event.stopPropagation();
                        _i.click && _i.click(button);
                        _i.remove || beijing.remove();
                    })
                    buttonsdom.append(button)
                })
            }
        }
        return beijing;
    }
}

//data为文本或者一个包含文本以及按钮数组的集合
function peizhi() {
    var tishikuang = jQuery(".lubeijing");//定义一个变量以后改成class好改
    tishikuang.remove();
}

//显示提示框不会消失
var LUshow = function (data, ff, dom) {//data显示提示文字,ff修改样式方法,dom(控制提示框位置大小)备用   
    peizhi();
    LU_TiShiKuang.alert({
        text: data
    }, dom, ff);
}
//隐藏提示框
var LUhide = function () {
    peizhi();
}
//延迟消失的提示框  int  为时间
var LUalert = function (data, int, ff, dom) {
    peizhi();
    if (!int)
        int = 15;
    LU_TiShiKuang.alert(data, dom, ff, int);
}
//一个按钮的提示框 button是按键名 click是按钮的点击方法
var LUbutton1 = function (data, button, click, ff, dom) {
    peizhi();
    LU_TiShiKuang.alert({
        text: data,
        button: [{
            text: button,
            click: click
        }]
    }, dom, ff);
}
//同上
var LUbutton2 = function (data, button1, click1, button2, click2, ff, dom) {
    peizhi();
    LU_TiShiKuang.alert({
        text: data,
        button: [{
            text: button1,
            click: click1
        },
        {
            text: button2,
            click: click2
        }]
    }, dom, ff);
}








