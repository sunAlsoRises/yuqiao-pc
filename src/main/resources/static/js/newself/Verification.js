var projecImgtName = "yuqiaopc";
var pathName = window.document.location.pathname;
var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);
var BaseUrl_IIS_Application_Name = "http://dev-12.lingke.mobi";

// 验证手机号的开关
var phoneflag = false ;
var messageflag = false;
var timeCount = 60 ;

    var MyFilter = {  //一个json 数组  监听器
        Post: function (url, action, call) { // post方法,封装一下  url为请求的地址  action 为发送的数据
            $.post(url, action, function (redata) {
                call && call(redata);

            });
        },
        GetPhone: function (call) {  //获取手机号码信息
            url = projectName+"/register/register/";
            action =  $.trim($("#phonenumber").val());
            MyFilter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
    }

//键盘下压事件
function keydownMessage(phone,yanzheng) {
    $(phone).keydown(function () {
        $("#u-format-error").css("display","none");
        $("#u-format-error").css("opacity",0);
        $("#u-required").css("display","none");
        $("#u-required").css("opacity",0);
    });
    $(yanzheng).keydown(function () {
        $("#v-error").css("display","none");
        $("#v-error").css("opacity",0);
    })

}
//检测验证码
function checkMessage(messageNumber,phoneinput) {
    $(messageNumber).change(function () {
        // 1huoqu用户输入的验证码
        var yanzhengma = $(messageNumber).val();
        //传送到后台进行验证
        $.ajax({
            url:projectName+"/login/yanzheng/",
            data:{"phonenumber":phoneinput.val() ,"verification":yanzhengma},
            type:"post",
            dataType:"json",
            success:function (data) {
                console.log(data.data);
                if (data.status == 0){
                    if (data.data == 0){
                        $("#v-error").css("display","inline");
                        $("#v-error").css("opacity",1);
                        messageflag = false;
                        // 验证码格式错误 需要重新关闭登陆按钮
                    }else {
                        messageflag = true;
                        console.log("验证码输入正确");
                        showSubmit();
                    }

                }else {
                    alert(data.msg)
                }
            }
        })
    })



}
//检查登陆手机号码
function checkSubmitMobil(message) {
    if (message == "") {
        $("#u-required").css("display","inline");
        $("#u-required").css("opacity",1);
        $("#mobile").focus();
        phoneflag = false;
        return false;

    }
    if (!message.match(/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/)) {
        $("#u-format-error").css("display","inline");
        $("#u-format-error").css("opacity",1);
        $("#mobile").focus();
        phoneflag = false;
        return false;
    }
    phoneflag = true ;
    return true;
}
//检查注册手机号格式
function checkRegistMobil(message) {
    if (message == "") {
        $("#m-required").css("display","inline");
        $("#m-required").css("opacity",1);
        $("#mobile").focus();
        phoneflag = false;
        return false;

    }
    if (!message.match(/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/)) {
        $("#m-format-error").css("display","inline");
        $("#m-format-error").css("opacity",1);
        $("#mobile").focus();
        phoneflag = false;
        return false;
    }
    phoneflag = true ;
    return true;
}
//手机号输入框焦点离开信息
function phoneChange(phoneinput,leixing) {
    $(phoneinput).change(function () {
        // 获取输入框信息
        var message = $.trim($(this).val());
        // console.log(message);
        if (leixing == 1){
            checkSubmitMobil(message);
            if (phoneflag){
                // 显示验证码按钮
                $(".btn-default").eq(0).removeClass("disabled");
                $("#m-registered").css("display","none");
                $("#m-registered").css("opacity",0);
            }else {
                // 验证码变成不可用
                $(".btn-default").eq(0).addClass("disabled");
            }
        }else {
            checkRegistMobil(message);
            if (phoneflag){

                MyFilter.GetPhone(function (data) {

                    if (data) {
                        // 如果存在说明被注册 显示注册元素
                        $("#m-registered").css("display","inline");
                        $("#m-registered").css("opacity",1);
                        // 验证码变成不可用
                        $(".btn-default").eq(0).addClass("disabled");
                        // return false;
                    }else {
                        // 显示验证码按钮
                        $(".btn-default").eq(0).removeClass("disabled");
                        $("#m-registered").css("display","none");
                        $("#m-registered").css("opacity",0);
                    }
                })

            }
            // 检查手机号是否被注册
        }



    })
}
//60秒提醒
function changeButtonState() {
    if (timeCount == 0) {
        $(".btn-default").eq(0).removeClass("disabled");
        // console.log( $(".btn-default").eq(0).html());
        $(".btn-default").eq(0).removeClass("ng-hide");

        $(".btn-default").eq(1).addClass("ng-hide");
        timeCount = 60;
        return;
    } else {
        $(".btn-default").eq(0).addClass("ng-hide");

        $(".btn-default").eq(1).removeClass("ng-hide");
        $(".btn-default").eq(1).find("b").html(timeCount);
        timeCount--;
    }

    setTimeout(function() {
        changeButtonState() ;
    },1000);

    // console.log(timeCount);

}
//点击验证码后进行发送验证码和60秒倒计时
function clickYZM(phoneinput) {

    $(".yanzhengma").click(function () {
        // 验证码按钮不可点击
        getPost(phoneinput);
        changeButtonState();


    })
}
//发送验证码
function getPost(phoneinput) {
    $.ajax({
        url:projectName+"/login/send/",
        data:{"phone":phoneinput.val()},
        type:"post",
        dataType:"json",
        success:function (data) {
            if (data.status == 1){
                //说明重复输入验证码了给用户一个提示
                $("#v-error2").css("display","inline");
                $("#v-error2").css("opacity",1);
                $("#v-error2").html(data.msg);
            } else if(data.status == 0){
                console.log("短信发送成功");
            }
        }
    })
}
function showSubmit() {

    //点击确定登陆信息

        // 登陆按钮变亮,可以点击
        $(".btn-primary").removeClass("disabled");
}
function clickRegist(phoneinput,yanzhengma) {
    //点击登陆事件
    $(".btn-primary").children("a").click(function () {
        // 1获取手机号
        var phonenumber = $(phoneinput).val();
        // 2获取验证码
        var verification = $(yanzhengma).val();

// 3获取姓名
        var name = $("#registname").val();
        // 2传递到后台进行验证
        // 4,获取区域
        var quyu = $("#region").val();
        // 5获取性别
        var sex = $("input[type='radio']:checked").val();
        var url = projectName+"/register/login/";

        getRegistCheckPost(phonenumber,verification,url,name,quyu,sex);

    })
}
// 注册跳转页面
function getRegistCheckPost(phonenumber,verification,url,name,quyu,sex) {
        // 这里
    // console.log("这里"+phonenumber+verification+name);
    $.ajax({
        url:url,
        data:{"phonenumber":phonenumber,
            "verification":verification,
            name:name,
            hopearea:quyu,
            sex:sex
        },
        type:"post",
        dataType:"json",
        success:function (data) {
            if (data.status == 0) {
                if (data.data == 0) {
                   //注册失败
                    $("#u-not-exist").css("display","inline");
                    $("#u-not-exist").css("opacity",1);
                }
                if (data.data == 1){
                    //登陆成功  跳转到 个人信息页面
                    // console.log("注册成功");
                    window.location.href = projectName+"/login/user";
                }
            }else {
                alert("注册异常,登陆失败");
            }
        }
    })
}
function clickLogin(phoneinput,yanzhengma) {
    //点击登陆事件
    $(".btn-primary").children("a").click(function () {
        // 1获取手机号
        var phonenumber = $(phoneinput).val();
        var verification = $(yanzhengma).val();

        //2获取验证码
        // 2传递到后台进行验证
        var url = projectName+"/login/login/";
        getCheckPost(phonenumber,verification,url);

    })
}
function getCheckPost(phoneNumber,yanzhengma,url) {
    $.ajax({
        url:url,
        data:{"phonenumber":phoneNumber,
            "verification":yanzhengma
        },
        type:"post",
        dataType:"json",
        success:function (data) {
            if (data.status == 0) {
                if (data.data == 0) {
                    //意味着手机号有问题登陆失败
                    $("#u-not-exist").css("display","inline");
                    $("#u-not-exist").css("opacity",1);
                }
                if (data.data == 1){
                    //登陆成功  跳转到 个人信息页面
                    window.location.href = projectName+"/login/user";
                }
            }else {
                alert("网络异常,登陆失败");
            }
        }
    })
}
//选填事件
 function getOptional(optionalPut,showPut) {
    $(optionalPut).keydown(function () {
        $(showPut).css("display","inline");
        $(showPut).css("opacity",1);
    })
    //取消选填显示
    $(optionalPut).change(function () {
        $(showPut).css("display","none");
        $(showPut).css("opacity",0);
    })
}