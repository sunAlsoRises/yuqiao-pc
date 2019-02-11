$(document).ready(function () {
    var clickCount = 0 ;
    var $lis = $('#overviewThumbnail').children("li");
   var mainImg =  $(".xiaoquBigImg").children("img");
    $($lis).eq(0).addClass("selected");
    // 点击左侧时图片向左
    $("#overviewImgLeft").click(function () {

        // 每点击一下左面li的选中就向左一个
        if (clickCount <= 0){return false}else {clickCount -- }
        // console.log("zuo数"+clickCount);
        // 获取被选中的图片
        var $clickLi =  $($lis).eq(clickCount);
        // 将他的class添加selected
        // 先清除掉上一个li的selected
        $($clickLi).next(".selected").removeClass("selected");
        // 添加选中效果
        setSrc($clickLi);

    })
    //点击右侧效果
    $("#overviewImgRight").click(function () {
        var liCount = $($lis).length;

        // 每点击一下右侧li的选中就向右侧前进一个
        // 获取li数量
        if (clickCount >= liCount-1){return false}else {clickCount ++ ;}
        // console.log("数"+clickCount);
        // 获取被选中的图片
        var $clickLi =  $($lis).eq(clickCount);
        // 将他的class添加selected
        // 先清除掉上一个li的selected
        $($clickLi).prev(".selected").removeClass("selected");
        // 添加选中效果
        setSrc($clickLi);

    })
    function setSrc($clickLi) {
        $($clickLi).addClass("selected");
        //获取当前li的img的src地址值
        var src = $($clickLi).children("img")[0].src
        $(mainImg).attr("src",src);
    }
})