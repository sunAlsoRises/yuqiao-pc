(function ($) {

    var TTPagination = function (Dom,opts) {
        this.opts = $.extend({},this.defaults, opts);
        this.pageset = {
            page: this.opts.defaultPage ? this.opts.defaultPage : 1,
            pagesize: this.opts.pagesize
        };
        this.total = opts.total;
        this.init(Dom);
    };

    TTPagination.prototype = {
        pagenumber: function () {
            return Math.ceil(this.total / this.pageset.pagesize);
        },
        page: function () {
            this.pageset.page = this.pageset.page < 1 ? 1 : (this.pageset.page > this.pagenumber() ? this.pagenumber() : this.pageset.page);
            return this.pageset.page;
        },
        select: function (page, size) {
            if (page && page * 1 > 1)
                this.pageset.page = page*1;
            if (size && size * 1 > 1)
                this.pageset.pagesize = size * 1;
            (this.opts.onChange && this.opts.onChange(this.page(), this.pageset.pagesize));
            this.build();
        },
        
        buildpage: function (dom,isdot,isfirstlast,isprevnext) {
            var self=this,begin, end, current = this.page(), pagenum = this.pagenumber()
                , linknum = this.opts.buttonnumber, begindot, enddot, tempint;
            tempint = Math.floor(linknum / 2);
            if (current <= tempint) {
                begin = 1;
            } else {
                begin = current - tempint;
                begindot = begin - 1;
            }
            if (linknum % 2 == 0) 
                tempint--;
            if ((pagenum - current) <= tempint)
                end = pagenum;
            else {
                end = current + tempint;
                enddot = end + 1;
            }
            if (begin == 1) {
                end = Math.min(pagenum, linknum);
            }
            if (end == pagenum) {
                begin = Math.max((pagenum - linknum) + 1, 1);
            }
            var links = [];
            var addlink = function (text, page) {
                links.push($(self.opts.pagetext.replace("$page", text)).data("p", page).click(function () {
                    self.pageset.page = $(this).data("p");
                    self.select();
                }));
            };
            if (isfirstlast && current != 1) 
                addlink(this.opts.first, 1);
            if (isprevnext && current != 1)
                addlink(this.opts.prev, current - 1);
            if (isdot && begindot && begin != 1)
                addlink(this.opts.dot, begindot);
            for (var i = begin; i <= end; i++) {
                if (i == current) {
                    links.push(this.opts.currenttext.replace("$page", i));
                } else {
                    addlink(i,i);
                }
            }
            if (isdot && enddot && end != pagenum)
                addlink(this.opts.dot, enddot);
            if (isprevnext && current != pagenum)
                addlink(this.opts.next, current + 1);
            if (isfirstlast && current != pagenum)
                addlink(this.opts.last, pagenum);
            $.each(links, function(i, _i) {
                dom.append(_i);
            });
        },
        
        build: function () {
            this.Dom.empty();
            this.Dom.append("<input style='opacity: 0;width: 1px;'/>");
            var infos = this.opts.showinfos, panel = this.opts.showpanel, self = this;
            var isit = function(have) {
                return infos.indexOf("|" + have + "|") > -1;
            };
            for (var k = 0 ; k < panel.length ;k++)
            {
                switch (panel[k]) {
                case "info":
                    this.Dom.append(this.opts.infotext.replace(/\$nowpage/g, this.page()).replace(/\$pagetotal/g, this.pagenumber()).replace(/\$total/g, this.total));
                    break;
                case "pagesize":
                    {
                        if (this.total == 0) break;
                        this.Dom.append(self.opts.pagesizeinfo);
                        var sel = $("<select />");
                        $.each(this.opts.sizes, function(i, _i) {
                            sel.append("<option value='" + _i + "'>" + self.opts.pagesizetext.replace("$pagesize", _i) + "</option>");
                        });
                        sel.val(this.pageset.pagesize);
                        sel.change(function() {
                            self.select(undefined, $(this).val());
                        });
                        this.Dom.append(sel);
                    }
                    break;
                case "goto":
                    {
                        if (this.total == 0) break;
                        this.Dom.append(this.opts.gototext);
                        var gotoit = this.Dom.find(".gotoclass");
                        if (gotoit && gotoit.is(":text")) {
                            gotoit.keydown(function(e) {
                                if (e.keyCode == 13) {
                                    if (isNaN($(this).val())) {
                                        alert(self.opts.errornumber);
                                    } else {
                                        self.select($(this).val());
                                    }
                                }
                            });
                        }
                    }

                    break;
                case "link":
                    {
                        if (this.total == 0) break;
                        if (this.opts.pagecontent == "")
                            this.buildpage(this.Dom, isit("dot"), isit("firstlast"), isit("prevnext"));
                        else {
                            var tempdom = $(this.opts.pagecontent);
                            this.buildpage(tempdom, isit("dot"), isit("firstlast"), isit("prevnext"));
                            this.Dom.append(tempdom);
                        }
                    }
                    break;
                }
            }
        },
        init: function (dom) {
            this.Dom = $(this.opts.pagertext);
            this.Dom.css({ "margin": "0", padding: "2px" });
            $(dom).append(this.Dom);
            this.build();
            $(dom).data("pager", this);
        },
        setOpts: function (opts) {
            this.opts = $.extend(this.defaults, opts);
            this.pageset = {
                page: this.opts.defaultPage ? this.opts.defaultPage : 1,
                pagesize: this.opts.pagesize
            };
        },
        setTotal: function (total) {
            this.total = total;
            this.build();
        },
        setPage: function (page) {
            this.pageset.page = page * 1;
            this.build();
        },
        setSize: function (size) {
            this.pageset.pagesize = size * 1;
            this.build();
        },
        getPage: function () {
            return this.page();
        },
        getSize: function () {
            return this.pageset.pagesize;
        },
        reBuild: function (option) {
            if (option && option.size)
                this.pageset.pagesize = option.size * 1;
            if (option && option.page)
                this.pageset.page = option.page * 1;
            this.build();
        }
    };
    $.fn.ttpager = function (action, param) {
        if (!param && typeof (action) != "string") {
            param = action;
            action = undefined;
        }
        var pager;
        if (!(this).data("pager"))
            pager = new TTPagination(this, param);
        else {
            pager = (this).data("pager");
        }
        if (action) {
            return (pager[action] && pager[action](param));
        } else {
            if (param && param.total != undefined) {
                pager.total = param.total;
            }
            if (param) {
                pager.opts = $.extend(pager.opts, param);
            }
            pager.build();
        }

    };
    TTPagination.prototype.defaults = {
        defaultPage: 1,             //默认当前页
        pagesize: 20,               //默认每页显示
        sizes: [10, 20, 30, 40, 50],     //每页显示条数列表
        //当前页面信息
        infotext: " <span class=\"pagetext1\">共$nowpage/<strong>$pagetotal</strong>页 共<strong>$total</strong>条信息</span>",
        pagetext: "<a style='cursor:pointer'>$page</a>",   //页码按键
        pagecontent: "",            //页码按钮容器
        currenttext: "<span class=\"current\">$page</span>",  //当前页
        gototext: " 跳转到 <input type='text' size='3' class='inputupdata gotoclass'/>页",//跳转到
        pagesizeinfo: " 当前显示",       //每页显示条数列表 说明
        pagesizetext: "每页$pagesize条",   //每页显示条数列表 可选项目模版
        pagertext: "<div class='black2'></div>", //分页容器
        showpanel:["info","pagesize","link","goto"],    //当前支持显示的内容
        showinfos: "|firstlast|prevnext|dot|",          //页码按钮支持内容
        first: "首页",
        last: "尾页",
        prev: "上一页",
        next: "下一页",
        errornumber:"请输入正确的数字",
        buttonnumber: 9,                                //最多页码按钮数目
        dot: "..."
        //onChange: function(page,size) {}
    };
})(jQuery);