$(function () {
    $("#danwei").hover(function () {
        $("#seachbutton").show();
        $("#seachbutton").parent().css("border", "solid 1px #dfdfdf");
    });
    $("#danwei").mouseout(function () {
        var s = event.toElement || event.relatedTarget;
        if (!this.contains(s)) {
            $("#seachbutton").hide();
            $("#seachbutton").parent().css("border", "");
        }
    });
    $("#mianji").hover(function () {
        $("#areabutton").show();
        $("#areabutton").parent().css("border", "solid 1px #dfdfdf"); 
    });
    $("#mianji").mouseout(function () {
        var s = event.toElement || event.relatedTarget;
        if (!this.contains(s)) {
            $("#areabutton").hide();
            $("#areabutton").parent().css("border", "");
        }
    });
    var selArea = "";
    $("div.c-area-block").find("a[rel='-1']").show();
    $("#HAclass").find("a").hover(
        function () {
            
            selArea = $(this).attr("rel");
            $(this).addClass("Hcurr");
            $("div.c-area-block").find("a[rel='" + selArea + "']").show().prev("b").show();
            $("div.c-area-block").show();
            $("div.c-area-block").find("a[rel='-1']").attr("onclick", "seturl('a" + selArea + "',this);return false;");
        },
        function () {
            $(this).removeClass("Hcurr");
            $("div.c-area-block").find("a[rel='" + selArea + "']").hide().prev("b").hide();
            $("div.c-area-block").hide();
        }
    );
    $("div.c-area-block").hover(
        function () {
            $("#HAclass").find("a[rel='" + selArea + "']").addClass("Hcurr");
            $(this).find("a[rel='" + selArea + "']").show().prev("b").show();
            $(this).show();
        },
        function () {
            $("#HAclass").find("a[rel='" + selArea + "']").removeClass("Hcurr");
            $(this).find("a[rel='" + selArea + "']").hide().prev("b").hide();
            $(this).hide();
        }
    );
    $("div.b-selectbox").hover(
        function () {
            $(this).find(".b-select-list").show();
        },
        function () {
            $(this).find(".b-select-list").hide();
        }
    );
    $("#jjrSearchButton").click(function () {
        if (!$("#_txtAgentSearch").val()) {
            return;
        }
        //location.href = ;
        if (navigator.appVersion.indexOf("MSIE 7.0") != -1 || navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1) //解决ie7不兼容
        {
            window.location.href = "/s/jjrso" + replaceSpecial($("#_txtAgentSearch").val()) + "/";
            return;
        }
        window.history.pushState({ "html": 11, "pageTitle": "111", "title": "经纪人搜索" }, 'title', "/s/jjrso" + replaceSpecial($("#_txtAgentSearch").val()) + "/");
        document.title = replaceSpecial($("#_txtAgentSearch").val()) + '-网络经纪人|置业顾问-誉桥在线';
        baseTable(1, datas.list.pager.size, { action: "list" });
        return;
    });
    $("#_txtAgentSearch").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#jjrSearchButton").click();
        }
        return false;
    });

    function replaceSpecial(characters) {
        if (characters) {
            return characters.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g, '');
        }
        return characters;
    }
});
 