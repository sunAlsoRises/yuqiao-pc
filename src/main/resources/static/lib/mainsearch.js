$(function () {
    var url = decodeURI(location.pathname);
    var reg=/\bso/;
    var result =url.match(reg)
    if (result) {
        seturl('so' + $("#txtSearch").val(), this);
    }
   
    var searchTypeUrl = "/" + $(".t-sbox").attr("searchType") + "/";
    var postId;

    $(".searchbutton").click(function () {
        seturl('so' + $("#txtSearch").val(), this);
        //window.history.pushState({ "html": 11, "pageTitle": "111" }, 'title', searchTypeUrl + "so" + replaceSpecial($("#txtSearch").val()) + "/");
        //var filter = replaceSpecial($("#txtSearch").val());
        $("#ulSearchResult").hide();
        //baseTable(1, datas.list.pager.size, { action: "list" });
        //$("#ContentPlaceHolder1_WUCSearch__pConditionShow").show();
        //$("#ContentPlaceHolder1_WUCSearch__pConditionShow").html("<label>您已经选择：</label>");

        //$("#ContentPlaceHolder1_WUCSearch__pConditionShow").append("<span>" + filter + "<a onclick=\"seturl('so');return false;\">x</a></span>");



        // location.href = searchTypeUrl + "so" + replaceSpecial($("#txtSearch").val());
    });

    $("#txtSearch").keydown(function (event) {
        if (event.keyCode == 13) {
            return false;
        }
        return true;
    });


    $("#txtSearch").keyup(function (event) {
        var searchText = replaceSpecial($(this).val());
        if (!searchText) {
            $(".searchinput-text").hide();
            return false;
        }
        var keyCode = event.keyCode;
        if (keyCode == 27 || keyCode == 13 || keyCode == 38 || keyCode == 40) {
            var selectItem;
            var selectIndex;
            var resultItems;
            if (keyCode == 38) {
                //向上键
                selectItem = $(".searchtext-current");
                resultItems = $("#ulSearchResult").find("li");
                selectIndex = resultItems.index($(selectItem));
                resultItems.removeClass("searchtext-current");
                if (selectIndex == 0) {
                    resultItems.eq(resultItems.length - 1).addClass("searchtext-current");
                } else {
                    selectItem.prev().addClass("searchtext-current");
                }
            } else if (keyCode == 40) {
                //向下键
                selectItem = $(".searchtext-current");
                resultItems = $("#ulSearchResult").find("li");
                selectIndex = resultItems.index($(selectItem));
                resultItems.removeClass("searchtext-current");
                if (resultItems.length == selectIndex + 1) {
                    resultItems.eq(0).addClass("searchtext-current");
                } else {
                    selectItem.next().addClass("searchtext-current");
                }
            } else if (keyCode == 27) {
                $(".searchinput-text").hide();
            } else if (keyCode == 13) {
                //回车键
                var selectItemLink = $(".searchtext-current").find("a");
                var selectText = selectItemLink.text().replace(selectItemLink.find("em").text(), "");
                $(".searchinput-text").hide();
                if (!selectText) {
                    selectText = replaceSpecial($("#txtSearch").val());
                } else {
                    $("#txtSearch").val(selectText);
                }
                //location.href = searchTypeUrl + "so" + selectText;
                seturl('so' + $("#txtSearch").val(), this);
            }
            return false;
        }
        if (postId) {
            postId.abort();
        }
        if (isJiaMeng == "false") {
            $.ajax({
                type: "post",
                url: BaseUrl_IIS_Application_Name + "MApi/yunSearch.ashx",
                dataType: "json",
                data: { "searchstr": searchText },
                success: function (data) {
                    var $tag = $("#ulSearchResult").empty();
                    if (data.result.items != null && data.result.num != 0) {
                        $.each(data.result.items, function (i, item) {
                            var urlfilter = "xq";
                            if (searchTypeUrl.indexOf("xiaoqu") >= 0 || searchTypeUrl.indexOf("xinfang") >= 0)
                            {
                                urlfilter = "";
                            }

                            if (i == 0) {
                                $($tag).append("<li class=\"searchtext-current\"><a href=\"" + searchTypeUrl + urlfilter + item.xqid + "/\" target=\"_blank\">" + item.xqname + "<em>" + item.areaname + (item.xqaddressfilter == "" ? "" : "-" + item.xqaddressfilter) + "</em></a></li>");
                            } else {
                                $($tag).append("<li><a href=\"" + searchTypeUrl + urlfilter + item.xqid + "/\" target=\"_blank\">" + item.xqname + "<em>" + item.areaname + (item.xqaddressfilter == "" ? "" : "-" + item.xqaddressfilter) + "</em></a></li>");
                            }
                        });
                        $(".searchinput-text").show();

                    } else {
                        $(".searchinput-text").hide();
                    }
                }
            });
        }

        return false;
    });

    function replaceSpecial(characters) {
        if (characters) {
            return characters.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g, '');
        }
        return characters;
    }

    var maxTops = [
				{
				    dom: document.getElementById("topSearchFloat"),
				    classes: ["topSearchFloat", "topSearchFloat topSearchFloat2"]
				}
    ];

    function buffer(callback, timer) {
        var d;
        return function () {
            if (d) return;
            d = setTimeout(function () {
                callback.call(this),
                d = undefined;
            }, timer);
        };
    } (function () {
        var count = maxTops.length;
        function setTop() {
            var d = document.body.scrollTop || document.documentElement.scrollTop;
            for (var j = 0; j < count; j++) {
                tmp = maxTops[j];
                if (tmp.dom != null) {
                    d > tmp.maxTop ? (tmp.dom.className = tmp.classes[1], c && (tmp.dom.style.top = d - tmp.maxTop + "px")) : tmp.dom.className = tmp.classes[0];
                }
            }
        }
        for (var i = 0; i < count; i++) {
            maxTops[i].maxTop = 0;
            var tmp = maxTops[i].dom;
            if (tmp == undefined) continue;
            var tmpParent = tmp;
            while (tmpParent)
                maxTops[i].maxTop += tmpParent.offsetTop, tmpParent = tmpParent.offsetParent;

        }
        var c = window.ActiveXObject && !window.XMLHttpRequest;
        window.onscroll = buffer(setTop, 150, this);
    })();
});