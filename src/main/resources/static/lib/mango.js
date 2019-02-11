var MG = {
    _manager: null,
    //角色
    _roles: [],
    userinfo: function () {
        var userdataString = { tt_userstatus: "" };
        userdataString = tcookie(userdataString);
        if (!userdataString || userdataString == "")
            return null;
        var userdata = eval('userdata = ' + userdataString.tt_userstatus);
        if (userdata && userdata.roles && userdata.roles != "")
            userdata.roles = userdata.roles.substring(0, userdata.roles.length - 1).split(",");
        return userdata;
    },
    loginfor2014: function (parent, opts) {
        var url = mgurl.buildTrueJsUrl("loginfor2014");
        if (opts && opts.url)
            url = opts.url;
        var dom = document.createElement("iframe");
        dom.src = url;
        dom.style.height = 0;
        dom.style.border = 0;
        dom.style.width = 0;
        dom.onreadystatechange = doCallback;
        dom.onload = function () {
            this.readyState = "complete";
            doCallback();
        };
        var ErrorHandler = window.setTimeout(doError, 20000);
        function doCallback() {
            if (dom.readyState == "complete" || dom.readyState == "loaded") {
                dom.onload = dom.onreadystatechange = new Function();
                window.clearTimeout(ErrorHandler);
                if (opts.showMarker) {
                    MG.dom.hidemarker({ dom: parent });
                }
                (opts && opts.callback && opts.callback());
            }
        }
        function doError() {
            dom.parentNode.removeChild(dom);
        }
        if (opts.showMarker) {
            MG.dom.showmarker({ dom: parent });
        }
        parent[0].appendChild(dom);
    },
    Is_Ipad: null,
    Is_Iphone: null,
    Is_Android: null,
    Is_Mobile: null,
    InitMobile: function() {
        var ua = navigator.userAgent;
        MG.Is_Ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        MG.Is_Iphone = !MG.Is_Ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        MG.Is_Android = ua.match(/(Android)\s+([\d.]+)/);
        MG.Is_Mobile = MG.Is_Iphone || MG.Is_Android;
    },
    //管理模块
    manager: function () {
        if (MG._manager != null)
            return MG._manager;
        var tmpdom = $("#TT_PowerManagerDiv");
        var parentDom = $("<div />");
        tmpdom.after(parentDom);
        if (tmpdom.length > 0) {
            MG._manager = tmpdom;
            var tmpRole = tmpdom.attr("name");
            if (tmpRole) {
                MG._roles = tmpRole.split(",");
                tmpdom.removeAttr("name");
            }
        }
        else
            MG._manager = undefined;
        if (!MG._roles || MG._roles == "") {
            MG._roles = [];
        }
        if (typeof (url) != "undefined" && MG.ifRole("68")) {
            parentDom.append(MG.ui.input.button("权限管理", function () {
                MG.openUrl(url + "?pageaction=defalutzxfpage", "powermanager", "1150px", "870px");
            }));
            parentDom.append(MG.ui.input.button("查看WCF使用情况", function () {
                MG.openUrl("/lookwcfappconfig", "lookatwcfused", "1150px", "870px");
            }));
            parentDom.append(MG.ui.input.button("进入配置页面", function () {
                MG.openUrl("/defalutzxfpage", "lookitsetting", "1150px", "870px");
            }));
        }
        if (MG._manager) {
            MG._manager.opts = {
                hide: function () {
                    MG._manager.hide();
                    parentDom.hide();
                    $("#TT_PowerManagerDiv_Btns").hide();
                },
                show: function () {
                    MG._manager.show();
                    parentDom.show();
                    $("#TT_PowerManagerDiv_Btns").show();
                }
            };
        }
        return MG._manager;
    },
    ifRole: function (roles) {
        var tmpRoles = roles.split(",");
        for (var i = 0; i < MG._roles.length; i++) {
            for (var j = 0; j < tmpRoles.length; j++) {
                if (MG._roles[i] + "" == tmpRoles[j] + "")
                    return true;
            }
        }
        return false;
    },

    //取地址栏参数
    urlParam: function (key) {
        return (new RegExp("(^|&)" + key + "=([^(&|#)]*)").test(window.location.search.substr(1) + "#")) ? RegExp.$2 : null;
    },

    plugin: function (name, fun) {
        $.fn[name] = function () {
            var s = $(this);
            var obj = s.data(name);
            var arg = arguments;
            if (!obj) {
                if (!arg || arg.length == 0)
                    arg = [{}];
                if (typeof arg[0] != "object" && s.data("isdestroy" + name)) {
                    console.log(name + "插件已经被销毁.请重新实例!");
                    return null;
                }
                var opts = { dom: s };
                for (var i = 0; i < arg.length; i++) {
                    if ($.isPlainObject(arg[i])) {
                        opts = $.extend({}, arg[i], opts);
                        break;
                    }
                }
                obj = new fun(opts,arg);
                obj.destroy = function () {
                    (obj.close && obj.close());
                    if (obj.base)
                        obj.base.remove();
                    s.unbind(name);
                    s[name] = undefined;
                    s.data(name, null);
                    s.data("isdestroy" + name, true);
                };
                s.data(name, obj);
                s.data("isdestroy" + name, false);
            } else if (arg && arg.length > 0 && typeof arg[0] === "string") {
                var action = arg[0];
                var options = arg[1];
                var ret = obj[action];
                if (ret === undefined) {
                    console.log("调用了错误的方法");
                    return undefined;
                }
                if (typeof ret === "function") {
                    return obj[action](options);
                }
                return ret;
            }
            return obj;
        };
    },
    //打开新窗口
    openUrl: function (url, name, swidth, sheight, sreplace, sclose) {
        var objNewWin;
        if (!swidth || swidth == "") swidth = "790px";
        if (!sheight || sheight == "") sheight = "480px";
        if (!sreplace || sreplace == "") sreplace = false;
        if (!sclose || sclose == "") sclose = false;
        objNewWin = window.open(url, name, "fullscreen=0,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=" + swidth + ",height=" + sheight + ",top=200,left=200", sreplace);
        if (sclose) window.close();
        objNewWin.focus();
    },
    //把Json对象转成字符串
    toJsonString: function (obj) {
        if (!obj) return "";
        var isArray = $.isArray(obj), isFirst = true;
        var ret = isArray ? "[" : "{";
        $.each(obj, function (i, _i) {
            if (_i) {
                if (!isFirst) {
                    ret += ",";
                }
                if (!isArray) {
                    ret += "\"" + i + "\":";
                }
                var type = typeof _i;
                switch (type) {
                    case "number":
                        ret += _i;
                        break;
                    case "object":
                        ret += MG.toJsonString(_i);
                        break;
                    default:
                        ret += "\"" + _i + "\"";
                        break;
                }
                isFirst = false;
            }
        });
        ret += isArray ? "]" : "}";
        return ret;
    },
    buildAjaxData: function (opts) {
        var updata = { action: opts.action, pagename: opts.pagename || "noPageName" },
            postData = {};
        if (opts.data) {
            for (var i in opts.data) {
                if (opts.data[i] == "null")
                    continue;
                postData[i] = escape(opts.data[i]);
            }
        }
        updata = $.extend(updata, postData);
        if (opts.filter)
            updata.filters = MG.prepare.wcfFilters(opts.filter);
        if (opts.order)
            updata.orders = MG.prepare.wcfOrders(opts.order);
        if (opts.param)
            updata.postparam = MG.prepare.postParam(opts.param);
        return updata;
    },
    /*
        参数:isfast:true/false 是否快速关闭遮罩
            type: "get"/"post" 提交方式 默认Get
            dataType: "Json" 默认
            gettype : 可选 "json" 不写就是正常Ajax
            callback: 回调函数            
            mark: 遮罩参数
            notmark: 无遮罩
            data: 提交数据 格式 {"action":"GetList",page:1} PS(如果 notautomsg:1 则不显示自动消息)
            url: 数据提交地址 格式 "/code/xxx.ashx" 或者 "http://www.baidu.com",
            action: 同 data中的action参数,
            filter: WCF筛选条件 格式 [{ name: "htid", value: 13213, filter: "=" }],
            order: WCF排序条件 格式{order:1,order:0} 1 倒序
            param: 参数.格式{name:"1",age:2},
            pagename: 页面名

    */
    ajax: function (opts) {
        if (!opts) opts = { };
        var isfast = opts.isfast || false,
            type = opts.type || "get",
            dataType = opts.dataType || "json",
            url = opts.url,
            callback = opts.callback || function () {
            };
        var updata = MG.buildAjaxData(opts);
        var notautomsg = opts.data && opts.data.notautomsg;
        if (!opts.notmark) {
            if (opts.mark) {
                MG.dom.showmarker(opts.mark);
            } else {
                MG.dom.showmarker(true);
            }
        }
        if (opts.mark) {
            isfast = opts.mark;
        }
        if(url.indexOf("http://")>-1) {
            var tmpUrl = new URL(url);
            if(tmpUrl.hostname != window.location.hostname) {
                opts.gettype = "json";
            }
        }
        if (opts.gettype == "json") {
            if (url.indexOf("callback=?")<0) {
                if(url.indexOf("?")>-1) {
                    url += "&";
                } else {
                    url += "?";
                }
                url += "callback=?";
            }
            return $.getJSON(url, updata, function (data) {
                MG.extandFunction.beforeWCFCallBack(data, callback, notautomsg, isfast);
            });
        } else {
            return $.ajax({
                type: type,
                dataType: dataType,
                data: updata,
                url: url,
                success: function (data) {
                    MG.extandFunction.beforeWCFCallBack(data, callback, notautomsg, isfast);
                },
                error: function (e) {
                    if (!opts.notmark) {
                        MG.dom.hidemarker(e);
                    }
                    (opts.error && opts.error(e));
                }
            });
        }
    },
    //取得数据
    get: {
        wcf: function (url, pagename, action, data, filter, order, param, callback) {
            if (!url || !pagename || !action) return null;
            if (data) {
                if (filter == undefined) {
                    callback = data;
                    data = undefined;
                }
                else if (order == undefined){
                    callback = filter;
                    filter = undefined;
                }
                else if (param == undefined){
                    callback = order;
                    order = undefined;
                }
                else if (callback == undefined){
                    callback = param;
                    param = undefined;
                }
            }
            return MG.ajax({
                data: data,
                url: url,
                action: action,
                filter: filter,
                order: order,
                param: param,
                callback: callback,
                pagename: pagename
            });
        }
    },
    post: {
        wcf: function (url, pagename, action, data, callback) {
            if (!url || !pagename || !action) return null;
            if (data) {
                if (callback == undefined) {
                    callback = data;
                    data = undefined;
                }
            }
            return MG.ajax({
                type: "post",
                data: data,
                url: url,
                action: action,
                callback: callback,
                pagename: pagename
            });
        }
    },
    dom: {
        marker: [],
        showmarker: function (loading) {
           // if (typeof w2utils !== "undefined") {
                if (loading == true) {
                    MG.dom.lock($("body"), "正在为您拼命加载中...<br/>请稍候片刻....", true);
                } else {
                    if (typeof loading === "object") {
                        var tmpDom;
                        if (loading.dom)
                            tmpDom = loading.dom;
                        else
                            tmpDom = $("body");
                        if (loading.msg) 
                            MG.dom.lock(tmpDom, loading.msg, true);
                        else
                            MG.dom.lock(tmpDom);

                    } else {
                        MG.dom.lock($("body"));
                    }
                }
                $("body").find('.w2ui-lock-msg').css("height", "auto");
           // } else {
                //var loadstring = "";
                //if (loading) {
                //    var height = $(window).height();
                //    loadstring = "<div style='margin: auto;width: 592px;height:20px;text-align:center;'><div style='position: absolute;top:" + ((height - 130) / 2) + "px;'><img src='" + mgurl.buildTrueJsUrl("loadimg") + "' /><div class='textFs20 textColor13 textbold textBTY'>数据较大.系统正在为你玩命加载中.请耐心多少稍等一会儿吧~...</div></div></div>";
                //}
                //var dom = $("<div style='top: 0;bottom: 0; left: 0;right: 0;position: fixed;opacity: .8;;z-index:9999;'>" + loadstring + "</div>");
                //MG.dom.marker.push(dom);
                //$("body").append(dom);

           // }
        },
        //遮罩的样式
        cover_masker_style: "display: block;z-index: 9999;opacity: 0.60;position:absolute;background-color: #333;",
        //消息的样式
        cover_msg_style: "display: block;z-index: 13999;position:fixed;color: #fff;background-color: #555;border-radius: 5px;" +
            "border: 2px solid #444;padding: 0;top: 45%;left: 50%;opacity: 0.85;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;" +
            "-webkit-transform: translateX(-50%) translateY(-50%);-moz-transform: translateX(-50%) translateY(-50%);-ms-transform: translateX(-50%) translateY(-50%);-o-transform: translateX(-50%) translateY(-50%);" +
            "transform: translateX(-50%) translateY(-50%);",
        //图片的样式
        cover_img_style: "opacity: 0.85;display: inline-block;background-size: 100%;background-repeat: no-repeat;" +
            "float: left;margin-left: 5px;",
        //文字的样式
        cover_text_style: "margin-left: 5px;font-size: 14px;line-height: 24px;margin-top: 10px;float: left;color:#555;",
        //改变某属性的值{dom:dom,type:"css",name:"position",unagreevalue:"static"/agreevalue:"hidden",value:"relative"}
        change_attr: function (opts) {
            //取得旧属性
            var old_value = opts.dom[opts.type](opts.name);
            //判断当前是否有此属性
            if (!old_value ||
                //判断属性不允许的值
                ((opts.unagreevalue && old_value == opts.unagreevalue)
                //判断属性允许的值
                || (opts.agreevalue && old_value != opts.agreevalue)
                )
                ) {
                opts.dom.data("old_" + opts.name, old_value || "");
                opts.dom.css(opts.name, opts.value);
            }
        },
        //恢复某属性的值{dom:dom,type:"css",name:"position"}
        back_attr: function (opts) {
            if (opts.dom.data("old_" + opts.name) || opts.dom.data("old_" + opts.name) == "") {
                opts.dom[opts.type](opts.name, opts.dom.data("old_" + opts.name));
                opts.dom.data("old_" + opts.name, false);
            }
        },
        un_mobile_move: function (event) {
            event.preventDefault();
        },
        //新版本遮罩,DN.Zxf制作
        cover: function (opts) {
            if (!opts) opts = {};
            //判断是否有传入的节点
            var dom = opts.dom || $("body");
            if (dom.data("dnz_locker")) MG.dom.uncover(dom);
            MG.dom.change_attr({ dom: dom, type: "css", name: "overflow", agreevalue: "hidden", value: "hidden" });
            var offset = dom.offset();
            var top = dom.scrollTop() + offset.top, left = dom.scrollLeft() + offset.left, height = dom.outerHeight(), width = dom.outerWidth();
            if (height > $(window).height() || dom.is("body")) height = $(window).height();
            if (width > $(window).width() || dom.is("body")) width = $(window).width();
            if (dom.is("body")) { top = dom.scrollTop();
                left = dom.scrollLeft();
            }
            var locker = $("<div class='dnz_locker' style='" + MG.dom.cover_masker_style
                + "top: " + top + "px;left: " + left + "px;width:" + width + "px;height: " + height + "px;' />");
            dom.data("dnz_locker", locker);
            $("body").append(locker);
            if (!opts.notip) {
                //判断取得的图片
                var size = opts && opts.size;
                if (!size) size = 100;
                var isnomsg = opts.nomsg == true;
                var url;
                if (tt_host && tt_host != "") {
                    url = "http://jm.yuqiao.cc/images/yuqiao_loading_" + size + "x" + (size == 50 ? 19 : (size == 100 ? 37 : 56)) + ".gif";
                } else {
                    if (size == 100) size = 64;
                    else if (size == 50) size = 32;
                    else if (size == 150) size = 128;
                    url = "http://mango-img.yuqiao.cn/Images/" + size + "_tm.gif";
                }
                var locker_tip = $("<div class='dnz_locker_dom' style='" + MG.dom.cover_msg_style
                    + "' />");
                var locker_tip_tmp = $("<div style='background:#fff;'/>");
                var locker_img = $("<div class='dnz_locker_img' style='" + MG.dom.cover_img_style + "width: " + size + "px;height: " + size + "px;'/>");
                locker_img.append("<img src='" + url + "'/>");
                locker_tip_tmp.append(locker_img);
                if (!isnomsg) {
                    var msg = opts.msg || "亲!正在加载哦!<br>请稍候片刻~~";
                    var locker_text = $("<div class='dnz_locker_text' style='" + MG.dom.cover_text_style + "left: " + size + "px;'/>").append(msg);
                    locker_tip_tmp.append(locker_text);
                }
                locker_tip_tmp.append("<div style='clear: both;'></div>");
                locker_tip.append(locker_tip_tmp);
                dom.data("dnz_locker_tip", locker_tip);
                dom.append(locker_tip);
            }
            if (MG.Is_Mobile || MG.Is_Ipad) {
                dom[0].addEventListener("touchmove", MG.dom.un_mobile_move, false);
            }
        },
        //新版本遮罩,DN.Zxf制作
        uncover: function (opts) {
            var dom;
            if (!opts) dom = $("body");
            else if (!opts.dom) dom = opts;
            else dom = opts.dom;
            if (dom.data("dnz_locker")) {
                dom.data("dnz_locker").remove();
            }
            if (dom.data("dnz_locker_tip")) {
                dom.data("dnz_locker_tip").remove();
            }
            MG.dom.back_attr({ dom: dom, type: "css", name: "overflow" });
            if (MG.Is_Mobile || MG.Is_Ipad) {
                dom[0].removeEventListener("touchmove", MG.dom.un_mobile_move, false);
            }
        },
        //老版本遮罩,改造于W2ui
        lock: function (dom, msg, isShowSpin, opts) {
            MG.dom.cover($.extend({ dom: dom, msg: msg }, opts));
        },
        unlock: function (dom) {
            MG.dom.uncover({ dom: dom });
        },
        hidemarker: function (fast) {
            //if (typeof w2utils !== "undefined") {
                if (typeof fast === "object") {
                    var tmpDom;
                    if (fast.dom)
                        tmpDom = fast.dom;
                    else
                        tmpDom = $("body");
                    MG.dom.unlock(tmpDom);
                } else {
                    MG.dom.unlock($("body"));
                }
           // } else {
                //var length = MG.dom.marker.length - 1;
                //if (length > -1) {
                //    var dom = MG.dom.marker[length];
                //    MG.dom.marker.splice(length, 1);
                //    if (fast == true) {
                //        dom.remove();
                //    } else {
                //        dom.fadeOut(200, function () {
                //            dom.remove();
                //        });
                //    }
                //}
         //   }
        }
    },
    d_alert: function (msg) {
        if (MG.ui && MG.ui.plugin && MG.ui.plugin.msgbox)
            MG.ui.plugin.msgbox(msg);
        else
            alert(msg);
    },
    extandFunction: {
        beforeW2UICallback: function (data, callback, opts) {
            if (data.debug && data.debug != "") {
                MG.setDebug(data.debug);
            }
            var d = data.obj !== undefined && data.obj != "null" ? data.obj : data;
            if (data.flag == undefined && data.data && data.data.flag)
                d = data.data;
            if ((!opts || !opts.notautomsg) && d.flag < 0 && d.msg && d.msg != "") {
                if (d.flag == -301) {
                    (callback && callback(d));
                    return;
                }
                MG.d_alert(d.msg);
                return;
            }
            (callback && callback(d));

        },
        //返回数据之前的操作(包括写入Debug)
        beforeWCFCallBack: function (data, callback, notautomsg, hidefast) {
            if (data.debug && data.debug != "") {
                MG.setDebug(data.debug);
            }
            var d = data.obj && data.obj != "null" ? data.obj : data;
            if (data.data && data.data.flag)
                d = data.data;
            MG.dom.hidemarker(hidefast);
            if (!notautomsg && d.flag < 0 && d.msg && d.msg != "") {
                if (data.havenodataret || d.flag == -301) {
                    (callback && callback(d));
                    return;
                }
                MG.d_alert(d.msg);
                return;
            }
            (callback && callback(d));
        }
    },
    //准备数据
    prepare: {
        //通过PostParam取得的数据
        /*
        data结构{username:"zxf",orgname:"wlb"}
        */
        postParam: function (data) {
            var ret = "";
            for (var i in data) {
                if (ret != "")
                    ret += "$ac$";
                ret += i + "$bc$" + data[i];
            }
            return ret;
        },
        //通过Filters取得的数据
        /*
        data结构[{name:"isdel",type:"=",value:"1"/["1","2"]}]
        */
        wcfFilters: function (data) {
            var ret = "";
            $.each(data, function (i, _i) {
                if (ret != "")
                    ret += "$ac$";
                ret += _i.name += "$bc$";
                if (_i.type) {
                    ret += _i.type;
                } else if (_i.filter) {
                    ret += _i.filter;
                } else {
                    ret += "=";
                }
                var val = "";
                if (typeof (_i.value) == "object") {
                    $.each(_i.value, function (j, _j) {
                        if (val != "")
                            val += "$cc$";
                        val += _j;
                    });
                } else {
                    val = _i.value;
                }
                ret += "$bc$" + val;
            });
            return escape(ret);
        },
        //通过Orders取得的数据
        /*
        data结构{id:1(倒序),username:0(正序)}
        */
        wcfOrders: function (data) {
            var ret = "";
            $.each(data, function (i, _i) {
                if (_i != undefined) {
                    if (ret != "")
                        ret += "$ac$";
                    ret += i + "$bc$";
                    if (_i) {
                        ret += _i;
                    } else {
                        ret += "0";
                    }
                }
            });
            return ret;
        }
    },
    //设置Debug
    setDebug: function (text) {
        if ($(".tt_frame_debug").length > 0) {
            $(".tt_frame_debug:eq(0)").before(text);
        } else {
            $("body").append(text);
        }
    }
};
String.prototype.date = function () {
    var DString = this.split(" ")[0].split("-");
    return new Date(DString[0], (DString[1] * 1 - 1), DString[2]);
};
String.prototype.lenStr = function (length) {
    var str = this;
    if (str.length > length) {
        return str.substr(str.length - length, length);
    } else if (str.length < length) {
        while (str.length < length) {
            str = "0" + str;
        }
    }
    return str;
};
String.prototype.MGReplace = function(txt,obj) {
    if(typeof txt === "string" && obj && typeof obj === "string")
        return this.replace(new RegExp(txt, 'g'), obj);
    else if(typeof txt === "object") {
        var text = this;
        for (var i in txt) {
            if (text.indexOf("{" + i + "}") > -1) {
                if (!txt[i] || txt[i] == "null")
                    text = text.replace(new RegExp("{" + i + "}", 'g'), "");
                else 
                    text = text.replace(new RegExp("{" + i + "}", 'g'), txt[i]);
            }
        }
        return text;
    }
    return this;
};
Date.prototype.add = function (type, num) {
    var date = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    switch (type) {
        case "d":
            date.setDate(date.getDate() + num);
            break;
        case "m":
            date.setMonth(date.getMonth() + num);
            break;
        case "y":
            date.setYear(date.getFullYear() + num);
            break;
        case "fd":
            date.setDate(1);
            break;
        case "fy":
            date.setMonth(1);
            date.setDate(1);
            break;
        default:
            break;
    }
    return date;
};
Date.prototype.str = function (format) {
    if (!format)
        return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate();
    var ret = format;
    ret = ret.replace(/yyyy/g, this.getFullYear());
    ret = ret.replace(/yy/g, (this.getFullYear() + "").lenStr(2));
    ret = ret.replace(/mmmm/g, (this.getMonth() + 1));
    ret = ret.replace(/mm/g, ((this.getMonth() + 1) + "").lenStr(2));
    ret = ret.replace(/dddd/g, this.getDate());
    ret = ret.replace(/dd/g, (this.getDate() + "").lenStr(2));
    ret = ret.replace(/hhhh/g, this.getHours());
    ret = ret.replace(/hh/g, (this.getHours() + "").lenStr(2));
    ret = ret.replace(/mimi/g, this.getMinutes());
    ret = ret.replace(/mi/g, (this.getMinutes() + "").lenStr(2));
    ret = ret.replace(/ssss/g, this.getSeconds());
    ret = ret.replace(/ss/g, (this.getSeconds() + "").lenStr(2));
    ret = ret.replace(/msms/g, this.getMilliseconds());
    ret = ret.replace(/ms/g, (this.getMilliseconds() + "").lenStr(3));
    ret = ret.replace(/week/g, "天一二三四五六".split('')[this.getDay()]);
    return ret;
};

function tcookie(data, cookieset) {
    if (cookieset && cookieset.type == "set") {
        $.each(data, function (i, _i) {
            var exp = new Date();
            if (cookieset.time == undefined) {
                cookieset.time = 24 * 60 * 60 * 1000;
            }
            if (cookieset.time == 0) {
                if ($.isArray(_i)) {
                    document.cookie = i + "=" + escape(_i.join("∷")) + ";path=/;";
                } else {
                    document.cookie = i + "=" + escape(_i) + ";path=/;";
                }
            } else {
                exp.setTime(exp.getTime() + cookieset.time);
                if ($.isArray(_i)) {
                    document.cookie = i + "=" + escape(_i.join("∷")) + ";path=/;expires=" + exp.toGMTString();
                } else {
                    document.cookie = i + "=" + escape(_i) + ";path=/;expires=" + exp.toGMTString();
                }
            }
        });
    } else {
        $.each(data, function (i) {
            var arr = document.cookie.match(new RegExp("(^| )" + i + "=([^;]*)(;|$)"));
            if (arr && arr.length > 2) {
                if (arr[2].indexOf("^") > -1) {
                    data[i] = unescape(arr[2]).split("∷");
                } else {
                    data[i] = unescape(arr[2]);
                }
            } else {
                data[i] = null;
            }
        });
        return data;
    }
    return undefined;
}
MG.InitMobile();