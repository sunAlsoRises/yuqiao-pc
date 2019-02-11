function indexsearch() {
    // 1,获取 选中的类型
    var $li = $(".menu").children("ul").find("li");
    // 当发生点击时添加class check
    $($li[0]).click(function () {
        $($li).siblings().removeClass("check");
        $(this).addClass("check");
        // 当点击每个时角标i发生的变化
        $(".menu").children("i").css("left","40px");
    })
    $($li[1]).click(function () {
        $($li).siblings().removeClass("check");
        $(this).addClass("check");
        // 当点击每个时角标i发生的变化
        $(".menu").children("i").css("left","108px");
    })
    $($li[2]).click(function () {
        $($li).siblings().removeClass("check");
        $(this).addClass("check");
        // 当点击每个时角标i发生的变化
        $(".menu").children("i").css("left","170px");
    })
    $($li[3]).click(function () {
        $($li).siblings().removeClass("check");
        $(this).addClass("check");
        // 当点击每个时角标i发生的变化
        $(".menu").children("i").css("left","232px");
    })
    // $($li[4]).click(function () {
    //     $($li).siblings().removeClass("check");
    //     $(this).addClass("check");
    //     // 当点击每个时角标i发生的变化
    //     $(".menu").children("i").css("left","294px");
    // })
    //点击开始找房需要获取两样东西,一是类型 ,2是输入的内容
    $("#findHouse").click(function () {

        // 1,获取类型
        var leixing = $(".menu").find("li[class='tab check']").attr("value");
        var searchName = $("#keyword-box").val();
        //页面跳转
        // 根据类型判断要请求的路径
        console.log(leixing);
        switch (leixing) {
            case '1':
                console.log(leixing+111);
                window.location.href = projectName+"/ershoufang/rs?searchName="+searchName+"&&leixing="+leixing;
                break;
            case '2':
                window.location.href = projectName+"/ershoufang/zufang/zf?searchName="+searchName+"&&leixing="+leixing;
                break;
            case '3':
                window.location.href = projectName+"/newHouse/nh?searchName="+searchName+"&&leixing="+leixing;
                break;
            case '4':
                window.location.href = projectName+"/xiaoqu/xq?searchName="+searchName+"&&leixing="+leixing;
                break;
        }
    })
}