 $(function () { 
 var key = 0;
    var lastlocation = null;;
    var number = 0;
    var buildBarIndex = 0;
    var ulcountli = $("#ul_count>li");
    var span = $(".shapan");
    var click = 0;
    var divHide = $(".right-shapan-buttom>div");
    var xqpy ="yidalifengqingxiaozhen";
    var jjrUserIdShapan = $("body").find(".xf-jjrid").text();;
    $(document).ready(function () {
        $(".right-shapan-buttom>a").remove();
        $("#ul_count>li").eq(0).addClass("ul_count_Class_ADD");
        $(".left-shapan-top-right input").prop("checked", "checked");
        $(".imgshapan>.shapan").eq(0).css({ "background-color": "#3c9", "z-index": "0" });
        $(".right-shapan-buttom>div").eq(0).show();
        $("#ul_count").css("width", ulcountli.width() * ulcountli.length + "px");
        $.each($(".right-shapan-buttom-buttom-div-div>a"), function (i, _i) {
            if ($(_i).attr("data") != "" && $(_i).attr("data") != null) {
                $(_i).attr("href", "/xinfang/" + xqpy + "/housedetail?jud=" + jjrUserIdShapan+"&amp;hxid=" + $(_i).attr("data"))
            }
        })
        
    })
    $.extend({
        ClickHuaDong: function change2Index(id) {
            var index;
            number++;
            $.each($("#ul_count>li"), function (i, _i) { if ($(_i).attr("param") === id) { index = i - 4; } });
            scroll2Index(index);
        },
        Huadong: function scroll2Index(index) {    //点击滑动 方法
            var buildBars = $("#ul_count>li");
            var barWidthForEach = buildBars.length > 0 ? ulcountli.width() : 0;
            var maxOffset = $("#ul_count").width() - $("#ul_count_outer").width();
            var offset = barWidthForEach * index;
            if (offset > maxOffset) {
                buildBarIndex = buildBars.length - 5;
                offset = maxOffset;
            }
            else if (offset <= 0) {
                buildBarIndex = 0;
                offset = 0;
            }
            $("#ul_count").stop(true, true).animate({ "left": "-" + offset + "px" }, 150);
            if ($("#ul_count").children().length < 5) {
                $("#left_shapan").hide();
                $("#right_shapan").hide();
            }

            else if (offset === maxOffset) {
                $("#left_shapan").show();
                $("#right_shapan").hide();
            } else if (offset === 0) {
                $("#left_shapan").hide();
                $("#right_shapan").show();
            } else {
                $("#left_shapan").show();
                $("#right_shapan").show();
            }
        },
        tuodong: function MoveShaPanIMG(e, self, key) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            if (key == 1) {
                if (lastlocation == null) {
                    lastlocation = [e.offsetX, e.offsetY];
                    return;
                }
                var inner = $(self);
                var nowOffset = [parseInt(inner.css("left").replace("px", "")), parseInt(inner.css("top").replace("px", ""))];
                var moveOffset = [e.offsetX - lastlocation[0], e.offsetY - lastlocation[1]];
                var setOffset = [nowOffset[0] + moveOffset[0], nowOffset[1] + moveOffset[1]];

                $("#img_big").css({
                    left: setOffset[0] > 0 ? 0 : setOffset[0] < "-" + ($("#img_big").width() - $("#imgdiv").width()) ? "-" + ($("#img_big").width() - $("#imgdiv").width()) : setOffset[0],
                    top: setOffset[1] > 0 ? 0 : setOffset[1] < "-" + ($("#img_big").height() - $("#imgdiv").height()) ? "-" + ($("#img_big").height() - $("#imgdiv").height()) : setOffset[1]
                });
            } else {
                lastlocation = null;
            }
        },
        liclick: function (e) {
            $(".left-shapan-top-right li").click(function () {
                $(this).find("input").click();
            })
            $(".left-shapan-top-right input").click(function () {
                var id = $(this).attr("id").replace("ck_", "");
                $.each($(".shapan"), function (i, _i) {
                    var span = $(_i);
                    if (span.attr("index") == id) {
                        if (span.css("display").indexOf("none") >= 0) {
                            span.show();
                        } else {
                            span.hide();
                        }
                    }
                })
            })
        },
        MoseMove: function () {
            $(".shapan").hover(function () {
                $(this).css("z-index", "2")
                $(this).find(".caise").css("background", "#3c6");
                $(this).find("i").css("color", "#3c6");
            }, function () {
                if ($(this).attr("click") == "1") {
                    $(this).find(".caise").css("background", "#3c9");
                    $(this).find("i").css("color", "#3c9");
                    return;
                }
                $(this).css("z-index", "0").find(".caise").css("background", "");
                $(this).find("i").css("color", "");
            })
        },
        liclick_active: function liLouClick(id) {    //里点击高亮  以及联动隐藏显示
            $(".ul_count_Class_ADD").removeClass("ul_count_Class_ADD");
            $('#ul_count>li[param="' + id + '"]').addClass("ul_count_Class_ADD");
            var index = $(".ul_count_Class_ADD").attr("index");
        }, spanli_active(id) {
            $(span).find(".caise").css('background', '');
            $(span).find("i").css('color', '');
            $(span).css("z-index", "0");
            $(span).attr("click", "0");
            $.each(span, function (i, _i) {
                if ($(_i).attr("param") == id) {
                    var shapan = $(_i);
                    shapan.attr("click", "1");
                    shapan.css("z-index", "2");
                    shapan.find(".caise").css("background", "#3c9");
                    shapan.find("i").css("color", "#3c9");

                }
            })
           
            click = 1;
        }, leftrightClick: function () {
            $("#right_shapan").click(function () {   //左右点击滑动按钮
                $.Huadongindex(true);
            });
            $("#left_shapan").click(function () {
                $.Huadongindex(false);
            });
        }, Huadongindex: function scrollBuildBar(location) {
            if (number > 0) {
                number = 0;
                buildBarIndex = ($(".ul_count_Class_ADD").index() );
            }
            if (location) { //右
                $.Huadong(++buildBarIndex);
            } else {        //左
                $.Huadong(--buildBarIndex);
            }
        }, divshow: function (id) {
            $.each(divHide, function (i,_i) {
                if ($(_i).attr("param") == id) {
                    divHide.hide();
                    $(_i).show();
                }
            })
        }
        , ulcont_LiClick: function () {
            $.each(ulcountli, function (i, _i) {
                $(_i).click(function () {
                    var id = $(_i).attr("param");
                    $.liclick_active(id);
                    $.spanli_active(id);
                    $.divshow(id);
                });
            })
        },
        shapan_LiClick: function () {//t 滑动 f 高亮
            $.each(span, function (i, _i) {
                $(_i).click(function () {
                    var id = $(this).attr("param");
                    $.liclick_active(id);
                    $.spanli_active(id);
                    $.divshow(id);
                    $.Huadong($(this).index());
                })
            })
        },
        show: function () {
            $("#img_big").mousedown(function () { key = 1; }).mousemove(function (e) { $.tuodong(e, this, key); });
            $(document).mouseup(function () { key = 0 });
            $.MoseMove();
            $.liclick();
            $.leftrightClick();
            $.shapan_LiClick();
            $.ulcont_LiClick();
        }
    })
    $.show();
});