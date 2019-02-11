$(document).ready(function () {
    // 静态获取推荐小区房价
    var MyFilter = {  //一个json 数组  监听器
        Post: function (url, action, call) { // post方法,封装一下  url为请求的地址  action 为发送的数据
            $.ajaxSetup({
                async : false
            });
            $.post(url, action, function (redata) {
                call && call(redata);
            });
        },
        GetQuYu: function (call) {  //根据用户的手机号获取其意向区域
            var action = $("#user_mobile").val();
            url = projectName + "/login/quyu/";
            MyFilter.Post(url, {action: action}, function (redata) {
                call && call(redata);
            });
        },
        GetSecond: function (call) {  //根据用户的意向区域来找到所属区域的二手房售价
            var quyu  = '';
            MyFilter.GetQuYu(function (data){
                quyu = data;
            })
            url = projectName + "/ershoufang/indexhouse";
            MyFilter.Post(url, {pageSize: 4,searchName:quyu}, function (redata) {
                call && call(redata);
            });
        }
    }


    MyFilter.GetSecond(function (data){
        if (data){
            // 1获取父节点
            var father = $("#tpl-r-relatedhouse").children("ul");
            // console.log(data.rows);
            if (data.rows.length >0){
                for (var i = 0; i < data.rows.length; i++) {
                    var obj = data.rows[i];
                    createCommunity(obj,father);
                }
            }else {
                var li = '<li>您的意向区域填写有误或者未填写，无法为您查询到相关区域房源</li>'
                $(father).append($(li));
            }
        }
    });
    function createCommunity (data,father) {
        var li = '<li>\n' +
            '\t\t\t\t\t\t\t\t<a href="'+projectName+'/ershoufang/?id='+data.id+'" class="tit" target="_top">'+data.com.loupanmingcheng+' - '+data.huxing+'/'+data.mianji+' 平米</a>\n' +
            '\t\t\t\t\t\t\t\t<span class="time">\n' +
            '            \n' +
            '              签约时间 '+(data.createtime).split("T")[0]+'\n' +
            '            \n' +
            '          </span>\n' +
            '\t\t\t\t\t\t\t\t<span class="num">'+data.zuigaoshoujia+'万</span>\n' +
            '\t\t\t\t\t\t\t</li>' ;
        $li = $(li);
        $(father).append($li);

    }

    // 提交委托事件
    $(".btn-submit").click(function () {
        // alert("提交房源");
        // 判断用户填写信息是否正确
        // 获取区域
       var quyu = $(".sugInput").val();
       if (quyu== "" || $.trim(quyu).length == 0){
           alert("请填写区域信息");
           return false;
       }
       // 获取称呼
        var name = $("input[name='owner_name']").val();
        if (name== "" || $.trim(name).length == 0){
            alert("请填写您的称呼");
            return false;
        }else if (name.length >6 ){
            alert("称呼应小于6个字符");
            return false;
        }else if (!isNaN(name)){
            alert("称呼请勿使用数字");
            return false;
        }
        // 获取手机号码
        var mobile = $("#user_mobile").val();
        //获取类型
        var leixing = $("input[name='fangshi']:checked").val();
        checkMobile(mobile);
        //全部判断成功后 提交订单到临时的用户登记信息页面  FK_UserRegisterMessage
        $.ajax({
            url:projectName+"/user/message/",
            data:{
                quyu: quyu,
                name:name,
                mobile:mobile,
                leixing:leixing
            },
            type:"post",
            dataType:"json",
            success:function (data) {
                if (data == 1){

                    //登记成功
                    layer.open({
                        type: 1,
                        area: ['600px', '360px'],
                        shadeClose: true, //点击遮罩关闭
                        content: '\<\div style="padding:20px;">登记成功，后台处理中，稍后会电话联系您，请您耐心等待\<\/div>'
                    });

                        // window.location.href=projectName+"/";
                    setTimeout(function(){
                        window.location.href=projectName+"/";
                    }, 5000);
                    // alert("登记成功，后台处理中，稍后会电话联系您，请您耐心等待");
                } else if(data == 0){
                    alert("登记失败，数据有误");
                }
            }
        })
    })

    function checkMobile(message) {
        if (message == "") {
            alert("手机号不能为空")
            return false;

        }
        if (!message.match(/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/)) {
            alert("手机号格式不正确");
        }
    }
})