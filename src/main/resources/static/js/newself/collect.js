$(document).ready(function () {
    // 点击关注后 将房源的id传给后台用来插入数据,通过后台传回的结果来判断,
// 如果关注成功就改变按键样式,如果失败就给与提示,关注失败
// 1,创建收藏按键
    function Collect(collectBtn,houseid,phone) {
        //特征  按键
        this.collectBtn = collectBtn;
        //文字
        this.text = $(collectBtn).html() || "关注房源";
        //电话
        this.phone = phone;
        //房源id
        this.houseid = houseid ;
        //判断房源是否已经关注

    }
    //初始化 按键赋予点击功能
    Collect.prototype.init = function(url){
        // 判断收藏按键的文字来决定点击的效果
        if ($(this.collectBtn).html() == "关注房源"){
            // 发送ajax
            var add =  this.sendAjax(url+"/add");
            if (add == 1){
                this.changeType();
            } else {
                alert("关注失败")
            };
        } else {
            //否则的话就是已关注 字段
            var del = this.sendAjax(projectName+"/collect/secondhouse"+"/del");

            if (del == 1){
                this.changeType();
            } else {
                alert("取消失败")
            };
        }
    }

    Collect.prototype.sendAjax = function (url) {
        // console.log("send=="+url);
        var that = this;
        // console.log(that.houseid);
        var result = null ;
        $.post({
            url:url,
            async:false,
            data:{
                "houseid":that.houseid,
                "phone":that.phone
            },
            dataType:"json",
            success:function (data) {
                    result = data;
            }
        })
        return result;
    }
    Collect.prototype.changeType = function () {
        // 改变文字  如果是关注房源
        if ( $(this.collectBtn).html() == "关注房源") { $(this.collectBtn).html("已关注");
        }else {
            $(this.collectBtn).html("关注房源");
        }
    }
    Collect.prototype.selText = function (url) {
        // 发送ajax查询是否已经关注
        var result =  this.sendAjax(url+"/select");

        if (result ==0){
            //是未关注
            $(this.collectBtn).html("关注房源");
        } else if(result == 1) {
            $(this.collectBtn).html("已关注");
        }
    }
    var url = projectName+"/collect/secondhouse";

    var loginUser = $.cookie("loginUser");
    var collbtn = new Collect($("#collectHouse"),$("#collectHouse").attr("value"),loginUser);
    if (loginUser){collbtn.selText(url)}
    $("#collectHouse").click(function () {
        // 1判断是否登陆,如果没有登陆跳转到登陆页面
        if (loginUser){
            // 创建按键
//         console.log($("#collectHouseid").val());
            collbtn.init(url);
        } else {
            window.open(projectName+"/login-res/login/");
        }
    })

})

