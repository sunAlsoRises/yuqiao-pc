var searchName = null ;
var currentpage = 1;
function JjrChooseTiaoJian(leixing) {

    $(".option-list").find("a").click(function () {
        $(this).siblings().removeClass("on");
        //为自己添加选中状态
        if ($(this).hasClass("on")){
            return ;
        }else{
            $(this).addClass("on")
        }
        getJjrChecked();

        getJjrPost(currentpage,leixing);
    })
}
function getJjrChecked() {
    var quyu = $.trim($(".option-list").find("a[class='LOGCLICKEVTID on']").attr("value"));
    //   console.log("区域"+quyu.html());
    //判断 区域地址是否被选中 ,如果没有选中  就获取输入框中的信息
    var mess = $.trim($("#keyword-box").val());
    if (typeof(quyu) != 'undefined' && typeof(quyu)  != ''){
        searchName = quyu ;
    }else if (typeof(mess) != 'undefined' && typeof(mess)  != ''){
        searchName = mess;
    }
}
function getJjrPost(currentpage,leixing) {
    // console.log(searchName);
    $.post({
        url:projectName+"/jingjiren/jingjiren/tiaojian",
        data:{
            "currentpage":currentpage,
            "searchName":searchName
        },

        dataType:"json",
        success:function (data) {
            if (data){

                // 给静态页面赋值
                setJjrData(data);
                //遍历data
                eachli(data,leixing);
            }else {
                alert("网络连接失败")
            }

        }
    })
}
function setJjrData(data) {
    $("#jjrTotal").html(data.total);
    fenye(data.total,data.total/data.size,data.size,data.page);
}