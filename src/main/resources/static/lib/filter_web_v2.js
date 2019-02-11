$(function () {

    var AreaDom = $("#No0"); //区域
    var DitieDom = $("#No1"); //地铁
    var SchoolDom = $("#No2"); //学校
    var AreaMenu = $("#AreaMenu");//按区域查询
    var DitieMenu = $("#DitieMenu");//按区域查询
    var SchoolMenu = $("#SchoolMenu");//按区域查询
    var Filter = {  //一个json 数组  监听器
        Post: function (url, action, call) { // post方法,封装一下  url为请求的地址  action 为发送的数据

            $.post(url, action, function (redata) {
                call && call(redata);

            });
        },
        GetArea: function (call) {  //获取区域信息
            url = "/ershoufang/mapi/mapMessage";
            action = "getshangquan";
            Filter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        GetSchool: function (call) { // 获取学校
            url = "/ershoufang/mapi/mapMessage";
            action = "getschools";
            Filter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        GetDitie: function (call) { //获取地铁
            url = "/ershoufang/mapi/mapMessage";
            action = "getsubways";
            Filter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        GetXinfang: function () { //获取新房
            Filter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        Getjingjiren: function () { //获取经纪人
            Filter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        DomNono: function (dom, self) { //上边,菜单点击切换dom
            AreaDom.parent().hide();
            DitieDom.parent().hide();
            SchoolDom.parent().hide();
            $(".tabsmenu2 li").removeClass("current");
            dom.parent().show();
            $(self).addClass("current");
        },
        DomAppend: function (selfdomlist, domlist, data) {  //添加对应的二级悬浮,如铁西对应 保工乐购
            var sqFirst = "";                              //selfdomlist 区域dom的集合   如:铁西,大东
            $.each(selfdomlist, function (i, _i) {
                console.log("i="+_i);
                var rel = $(_i).attr("rel");              //dom的Id  对应悬浮的父级ID
                $.each(data, function (k, _k) {
                    if (_k.sqFirst) {                    //判断是否首字符
                        sqFirst = _k.sqFirst;
                    };
                    if (_k.parentid == rel) {    //parentid 父级ID
                        if (sqFirst) {
                            domlist.eq(i).append($(sqFirst));
                            sqFirst = "";//添加样式
                        };
                        var url = window.location.href.split("/");    //Url集合  第一次添加被选中
                        var calsscurr;

                        var ErjiHover = $('<a href="' + _k.url + '" onclick= "return false;" />').append(_k.name);
                        domlist.eq(i).append(ErjiHover);
                        ErjiHover.click(function () {
                            Filter.AppendCurr(ErjiHover, _k.name, _k.url, 0, $(this).parents(".chooseblock-p ").attr("isduoxuan"));
                        });
                        $.each(url, function (j, _j) {
                            if (_k.url == _j) {
                                calsscurr = 1;
                            }
                        });
                        if (calsscurr) {
                            Filter.AppendCurr(ErjiHover, _k.name, _k.url, 0, 1, 1);
                        };
                    }
                });
                $(_i).hover(function () {
                    domlist.eq(i).show();
                    domlist.eq(i).hover(function () {
                        domlist.eq(i).show();
                    }, function () {
                        domlist.eq(i).hide();
                    });
                }, function () {
                    domlist.eq(i).hide();
                });
            });
        },			//			  30-50m2 30max50
       // Filter.AppendCurr(null, zhi, url, 1);
        AppendCurr: function (self, name, url, isspan, isduoxuan, isGetData ) { //添加curr的算法,添加到你已经选择
            if (isspan == 1) {           //self dom   name 名字  url 参数  isspan是不是span  isduoxuan 是否多选  isGetData 是否刷新数据  默认刷新  undefind ,0 为刷新, 随便填 不刷新
                if (Filter.removeDanXuanClassCurr(url)) {
                    Filter.GetUrl();
                    return;
                }
                var span = $('<span/>').attr("url", url).append(name).append($('<a style="" onclick="return false;">').append("x"));
                span.click(function () {
                    Filter.removeDuoXuanClassCurr($(this).attr("url"));
                    Filter.GetUrl();
                });
            }
            else if (isduoxuan == 1) {
                if (Filter.removeDuoXuanClassCurr(url)) {
                    Filter.GetUrl();
                    return;
                };
                var span = $('<span/>').attr("url", url).append(name).append($('<a style="" onclick="return false;">').append("x"));
                span.click(function () {
                    Filter.removeDuoXuanClassCurr($(this).attr("url"));
                    Filter.GetUrl();
                });
            } else {
                if (Filter.removeDanXuanClassCurr(url)) {
                    Filter.GetUrl();
                    return;
                };
                var span = $('<span/>').attr("url", url).append(name).append($('<a style="" onclick="return false;">').append("x"));
                span.click(function () {
                    Filter.removeDuoXuanClassCurr($(this).attr("url"));
                    Filter.GetUrl();
                });
            }
            Filter.AddClassCurr(url);
            $("#currspan").append(span);
            if (isGetData) {
                return;
            };
            Filter.GetUrl();

        },
        ClearCurr: function () {   //清除全部被选中
            $("#currspan").html("");
            $(".curr").removeClass("curr");
            Filter.GetUrl();
        },
        GetUrl: function (isGetData) {  //默认不传参不刷新,用于第一次加载,根据你已经选择获取url
            //获取当前的Url参数
            var url = Filter.GetPageName();
            url = "/ershoufang/";
            $.each($("#currspan span"), function (i, _i) {
                url += $(_i).attr("url") + "/";
            });
            var pg = $("#fanye2 .current").html() ? $("#fanye2 .current").html() : 1;
            url += Filter.GetOrder();
            url += "pg" + pg + "/";
            if (isGetData != undefined && isGetData != 0) {
                return;
            };
            Filter.GetData(url);
        },
        GetData: function (url) {  //刷新数据更新地址栏
            window.history.pushState({ "html": 11, "pageTitle": "111" }, 'title', url);
            baseTable(1, 20, { action: "list", xqzbkg: false });
        },
        GetZengze: function (url, reg) { //获取正则表达式信息
            if (!reg) {
                var reg = /[a-z,A-Z]{1,3}/;
            };
            var t = url.match(reg);
            if (t) {
                return t[0];
            };
        },
        isUrl: function (url) {  //判断URl是否存在于地址栏
            var span = $("#currspan span");
            var filter = Filter.GetZengze(url);
            var num = 0;
            $.each(span, function (i, _i) {
                if (Filter.GetZengze($(_i).attr("url")) == filter) {
                    num = 1;
                };
            });
            return num;
        },
        removeDanXuanClassCurr: function (url) {  //单选时判断是否被选中当前集合信息,判断当前是否被选中,删除已选择,删除集合,添加当前被选中
            var num = Filter.isUrl(url);
            var iscunzai = 0;
            if (num) {
                var currhref;
                var currurl = Filter.GetZengze(url);
                $.each($(".curr"), function (i, _i) {
                    currhref = Filter.GetZengze($(_i).attr("href"));
                    if (currhref == currurl) {
                        $(_i).removeClass("curr");
                    };
                    if ($(_i).attr("href") == url) {
                        $(_i).removeClass("curr");
                        iscunzai = 1;
                    };
                });
                $.each($("#currspan span"), function (i, _i) {
                    currhref = Filter.GetZengze($(_i).attr("url"));
                    if (currhref == currurl) {
                        $(_i).remove();
                    };
                });
                return iscunzai;
            };
        },
        GetOrder: function () {
            var order = "";
            if ($(".arrdown-curr").length) {
                order = Filter.GetZengze($(".arrdown-curr").parent().attr("onclick").replace(Filter.GetPageName(), "").replace("0", "1"), /o[a-z0-9]{1,3}/) + "/";
            };
            if ($(".arrup-curr").length) {
                order = Filter.GetZengze($(".arrup-curr").parent().attr("onclick").replace(Filter.GetPageName(), "").replace("1", "0"), /o[a-z0-9]{1,3}/) + "/";
            };
            return order;
        },
        removeDuoXuanClassCurr: function (url) { //删除当前已选中信息
            var num = 0;
            $.each($(".curr"), function (i, _i) {
                if ($(_i).attr("href") == url) {
                    $(_i).removeClass("curr");
                    num = 1;
                };
            });
            $.each($("#currspan span"), function (i, _i) {
                if ($(_i).attr("url") == url) {
                    $(_i).remove();
                };
            });
            return num;
        },
        AddClassCurr: function (url) {  // 添加被选中信息
            $.each($(".chooseblock-p a"), function (k, _k) {
                if ($(_k).attr("href") == url) {
                    $(_k).addClass("curr");
                };
            });
        },
        //获取url 地址标志
        GetPageName: function () {
            var Name = "";
            var Url = window.location.href;
            if (Url.indexOf("zufang") > 0) {
                Name = "/zufang/";
            }
            else if (Url.indexOf("zufanggr") > 0) {
                Name = "/zufanggr/";
            }
            else if (Url.indexOf("ershoufang") > 0) {
                Name = "/ershoufang/";
            }
            else if (Url.indexOf("ershoufanggr") > 0) {
                Name = "/ershoufanggr/";
            }
            else if (Url.indexOf("/s/") > 0) {
                Name = "/s/";
            }
            else if (Url.indexOf("/xinfang/") > 0) {
                Name = "/xinfang/";
            }
            else if (Url.indexOf("/shangyongfang/") > 0) {
                Name = "/shangyongfang/";
            }
            else if (Url.indexOf("/xiaoqu/") > 0) {
                Name = "/xiaoqu/";
            } else {
                Name = "/ershoufang/";
            };
            return Name;
        },
        LoadSpanClick: function () {
            $("#currspan span").click(function () {
                Filter.removeDuoXuanClassCurr($(this).attr("url"));
                Filter.GetUrl();
            });
        }
    }
    $(document).ready(function () {

        var isCan = $("#isCan");    //更多条件按钮
        isCan.click(function () { //更多点击事件
            if (isCan.html().indexOf("更多") >= 0) {
                isCan.html("收起")
                $("#No0").height("auto");
                $("#No1").height("auto");
                $("#No2").height("auto");
            }
            else {
                var AreaDom = $("#No0"); //区域学习
                AreaDom.find(".HAclass .HAclass")
                var DitieDom = $("#No1"); //地铁
                var SchoolDom = $("#No2"); //地铁
                isCan.html("更多搜索条件");
                $("#No0").height("220px");
                $("#No1").height("220px");
                $("#No2").height("220px");
            };
        });
        AreaMenu.click(function () {
            Filter.DomNono(AreaDom, $(this)); //dom的显示与隐藏
        });
        DitieMenu.click(function () {
            Filter.DomNono(DitieDom, $(this));  //dom的显示与隐藏
        });
        SchoolMenu.click(function () {
            Filter.DomNono(SchoolDom, $(this)); //dom的显示与隐藏
        });
        //文本框的确定悬浮
        typeName = Filter.GetPageName(); // pageName
        var type;
        if (typeName == "/ershoufang/" || typeName == "/zufang/") {  //判断是否是二手房
            type = 1;
        }
        else {
            type = 1;
        };
        switch (type) {
            case 1: //二手房信息
                Filter.GetArea(function (data) {
                    if (data) {
                        var selfdom = $("#No0 .chooseblock-p ").eq(0).find('.HAclass').find('a');
                        var dom = $("#No0 .chooseblock-p ").eq(0).find('.HAclass').find('.areachild');
                        Filter.DomAppend(selfdom, dom, data.data);
                    }
                })
                Filter.GetDitie(function (data) {
                    if (data) {
                        var selfdom = $("#No1 .chooseblock-p ").eq(0).find('.HAclass').find('a');
                        var dom = $("#No1  .chooseblock-p ").eq(0).find('.HAclass').find('.areachild');
                        Filter.DomAppend(selfdom, dom, data.data);
                    }
                })
                Filter.GetSchool(function (data) {
                    if (data) {
                        var selfdom = $("#No2 .chooseblock-p ").eq(0).find('.HAclass').find('a');
                        var dom = $("#No2 .chooseblock-p ").eq(0).find('.HAclass').find('.areachild');
                        Filter.DomAppend(selfdom, dom, data.data);
                    }
                })
                break;
            case 2:
                break;
            case 3:
                break;
        };

        //$.each($(".isop"), function (i, _i) {  //选择框   塞选数据
        //    var op = $(_i).attr("op").split(",");
        //    var inputindex = $('<input placeholder="' + op[0] + '" type="text"  class="inpmin CurrText1">');
        //    var inputEnd = $('<input type="text" placeholder="' + op[1] + '"  class="inpmax CurrText1">');
        //    var input = $('<input  min="' + op[3] + '" max="' + op[4] + '" danwei="' + op[2] + '" type="button"  class="CurrButton" value="确定">').click(function () {
        //        var zhi = "";
        //        var url = op[3];
        //        if (inputindex.val()) {
        //            zhi += inputindex.val();
        //        } else {
        //            zhi += inputindex.attr("placeholder");
        //        }
        //        url += zhi + op[4];
        //        zhi += "-";
        //        if (inputEnd.val()) {
        //            zhi += inputindex.val();
        //            url += inputindex.val();
        //        }

        //        else {
        //            zhi += inputEnd.attr("placeholder");
        //            url += inputEnd.attr("placeholder");
        //        }
        //        zhi += op[2];
        //        Filter.AppendCurr(null, zhi, url, 1);
        //    });
        //    var div = $('<div  style="z-index: 100; width: 190px; padding: 5px;">').hover(function () {
        //        input.css("display", "block");
        //        $(_i).css({ "border": "1px solid rgb(233,233,233)" });
        //    }, function () {
        //        input.css("display", "none");
        //        $(_i).css({ "border": "" });
        //    });
        //    $(div).append(inputindex);
        //    $(div).append('-');
        //    $(div).append(inputEnd);
        //    $(div).append(op[2]);
        //    $(div).append(input);
        //    $(_i).append(div);
        //});
        $.each($(".isop"), function (i, _i) {
            var button;
            $(_i).hover(function () {
                button = $(this).find(".CurrButton").show();;
                $(_i).css({ "border": "1px solid rgb(233,233,233)" });
            }, function () {
                button = $(this).find(".CurrButton").hide();;
                $(_i).css({ "border": "" });
            });
            $(_i).find(".CurrText1").keydown(function () {
                if (!Number($(this).val())) {
                    $(this).val("");
                    return;
                }
            }).keyup(function () {
                if (!Number($(this).val())) {
                    $(this).val("");
                    return;
                }
            });;
        });

        $(".CurrButton").click(function () {
            var self = $(this);   // 隐藏的确定按钮
            var inputindex = self.parents(".isop").find(".inpmin ");  //确定按钮统计的输入框第一个
            var inputEnd = self.parents(".isop").find(".inpmax "); //确定按钮统计的输入框第二个
            var indexzhi = 0;
            var Endzhi = 0;
            var zhi = "";
            var url = self.attr("min");  // 确定按钮的 min值 url = min
            if (inputindex.val()) {
                zhi += inputindex.val();     //30
                indexzhi = inputindex.val();   //输入框的值
            }
            else {
                zhi += inputindex.attr("placeholder");
                indexzhi = inputindex.attr("placeholder");   //默认情况下输入框的值
            };
            url += zhi + self.attr("max");;  //  现在地址等于输入框的值+ 确定按钮的max的值 就是 30max
            zhi += "-";
            if (inputEnd.val()) {   // 50
                zhi += inputEnd.val();   //30-50
                url += inputEnd.val();    //30max50
                Endzhi = inputEnd.attr("placeholder"); //50
            }
            else {
                zhi += inputEnd.attr("placeholder");
                url += inputEnd.attr("placeholder");
                Endzhi = inputEnd.attr("placeholder");
            };
            if (!Number(indexzhi) && indexzhi != 0) {  //如果输入错了  就会清空输入框并返回
                inputindex.val("");
                return;
            };
            if (!Number(Endzhi)) {
                inputEnd.val("");
                return;
            };
            if (indexzhi * 1 >= Endzhi * 1) {
                return;
            };
            zhi += self.attr("danwei");;
            Filter.AppendCurr(null, zhi, url, 1);
        });
        $(".heightauto").find(".c-tab a").click(function () {
            //默认点击事件
            var url = $(this).attr("href");
            var name = $(this).html();
            var num = Filter.isUrl(url);
            var isduoxuan = $(this).parents(".chooseblock-p").attr("isduoxuan");
            Filter.AppendCurr($(this), name, url, 0, isduoxuan);
        });
        $("#clearcurrspan").click(function () { //全部清空
            Filter.ClearCurr();
        });
        //Filter.LoadAddCurr(); //第一次加载
        Filter.LoadSpanClick(); //第一次加载
    });
});