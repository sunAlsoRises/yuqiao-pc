$(document).ready(function () {
var path = window.document.location ;
    // console.log("生成了吗"+path);
    $(".shareInfomation").qrcode({
        render: "canvas", //table方式
        width: 143, //宽度
        height:143, //高度
        text: path //任意内容
    });
    $(".icon-qrcode").qrcode({
        render: "canvas", //table方式
        width: 85, //宽度
        height:95, //高度
        text: path //任意内容
    });
})