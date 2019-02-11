var WindowPage = {
    selecttion: null,
    data: {
        Count: 0,//总数
        Page: 1, // 当前页数默认为1
        Size: 20, //每页显示多少条 默认为20
        Zuo: 2, //当前页的左边个数默认为2
        You: 2,//当前页的右边个数默认为2
        Index: 1, // 首页是否显示 默认显示
        End: 1, //尾页是否显示 默认显示
        Jump: 0, // 跳转到第几页是否显示 默认不显示
        selecttion: 0
    },
    fenye: function (dom, data, call) {
        var self = WindowPage.data;
        var page = data.Page || self.Page;
        var zuo = data.Zuo || self.Zuo;
        var you = data.You || self.You;
        var index = data.Index != undefined ? data.Index : self.Index;
        var end = data.End != undefined ? data.End : self.End;;
        var jump = data.Jump || self.Jump;
        var count = data.Count || self.Count;
        var size = data.Size || self.Size;
        var yesu = parseInt(count / size) + ((count % size) ? 1 : 0);
        var gengduo = 0;
        if (count <= 0 || page <= 0) {
            dom.append("当前无任何页数,请联系管理员");
            return;
        }
        if (page > yesu || page == yesu) {
            page = yesu;
            you = 0;
        }
        if (page == 1) {
            zuo = 0;
        }
        if (zuo) {
            if ((page - zuo) > 1) {
                if (index) {
                    dom.append(WindowPage.AppendDom(1, "首页", {}, call));
                }
            }
            dom.append(WindowPage.AppendDom(page - 1, "上一页", {}, call));
            if ((page - zuo) > 1) {
                dom.append(WindowPage.AppendDom(0, "...", {}, call).click(function () {
                    call && call({ page: page - zuo - 1 });
                }));
            }
            for (var i = zuo; i > 0; i--) {
                if ((page - i) != 0) {
                    dom.append(WindowPage.AppendDom(page - i, page - i, {}, call));
                }
            }

        }
        dom.append(WindowPage.AppendDom(page, page, { "border": "none !important"}, call).addClass("curr").css({
            "color": "#009143",
        }));
        if (you) {
            for (var i = 1; i <= you; i++) {
                if (page + i <= yesu) {
                    dom.append(WindowPage.AppendDom(page + i, page + i, {}, call));
                }
            }
            if ((page + you < yesu) > 0) {
                dom.append(WindowPage.AppendDom(0, "...", {}, call).click(function () {
                    call && call({ page : page + you + 1 });
                }));
            }
            dom.append(WindowPage.AppendDom(page + 1, "下一页", {}, call));
            if (end) {
                dom.append(WindowPage.AppendDom(yesu, "尾页", {}, call));
            }
        }
        if (yesu > 1 && jump) {
            WindowPage.selecttion = WindowPage.AppendSelecttion(yesu);
            dom.append(WindowPage.selecttion);
            dom.append($("<a/>").append("跳转").click(function () {
                call && call({ page: WindowPage.selecttion.val() });
            }));
        }
        dom.find('a').css({
            display: "inline-block",
            float: "left",
            border: "1px #eee solid",
            height: "28px",
            "line-height": "28px",
            padding: "0 12px",
            margin: "0 2px",
        }).hover(function () {
                $(this).css({
                    "color": "#009143",
                });
        }, function () {
            if ($(this).hasClass("current")) {
                return;
            }
            $(this).css({
                "color": "",
            });
        });
        dom.find("select").css({
            display: "inline-block",
            float: "left",
            border: "1px #eee solid",
            height: "28px",
            "line-height": "28px",
            padding: "0 12px",
            margin: "0 2px",
        });
        $(".curr").css("border","none");
        return dom;
    },
    AppendDom: function (page, html, css, call) {
        var dom = $("<a href='javascript:void(0)'/>").append(html).css(css);
        dom.click(function () {
            if (page == 0) {
                return;
            }
            call && call({ page: page });
        })
        return dom;
    },
    AppendSelecttion: function (Count) {
        var dom = $("<select id='select-window-fenye' />");
        if (Count > 1) {
            for (var i = 1; i <= Count; i++) {
                dom.append($("<option>").val(i).html(i));
            }
        }
        return dom;
    }
}