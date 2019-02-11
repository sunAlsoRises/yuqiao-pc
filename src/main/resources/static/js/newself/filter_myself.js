var orderby = 0 ;
var datashoujia =null;
var datamianji =null;
var datashi =null;
var currentpage = 1;
var searchName = null;
var replace =  "";
$(document).ready(function () {
    $("#btn-map").click(function () {
        window.location.href = "/maptohouse/ditu";
    })
})
function chooseTiaojian(leixing){  //打包搜索条件
    $(".orderby").find("a").click(function () {
        $(this).parent().parent().siblings().removeClass("selected");
        $(this).parent().parent().addClass("selected");
        var shoujia = $(".checked[data-name='shoujia']").parent().attr("href");
        getChecked(shoujia);
        getPost(currentpage ,leixing);

    })
    // 手动输入价格事件
    $(".ok").click(function () {
        //1清除所有同类型选中事件
        $("#shoujia").children("a").children(":first").removeClass("checked");
        //为价钱赋值
         shoujia = $(".custom").children("input[class='num']").eq(0).val()+"-"+$(".custom").children("input[class='num']").eq(1).val();
        //console.log(shoujia);
        getChecked(shoujia);
        getPost(currentpage,leixing);
    })
    // 条件列表单机事件
    $(".list-more").find("a").click(function () {
        //默认点击事件
        // 判断是否是选中状态,如果是,就将这个选项添加
        //  1遍历所有span找到被选中的选项
        $(this).siblings().find("span").removeClass("checked");
        //清楚所有兄弟节点的选中状态
        var ischecked = $(this).children(":first");
        //判断自己的状态是否为选中
        if ($(ischecked).hasClass("checked")){
            $(ischecked).removeClass("checked");
        }else{
            $(ischecked).addClass("checked")
        }
        var shoujia = $(".checked[data-name='shoujia']").parent().attr("href");
       // console.log(shoujia);
        getChecked(shoujia);
        // 交给post请求处理

        getPost(currentpage,leixing);
    });
    $("#shenyangquyu").find("a").click(function () {
        // console.log("走了吗");
        $(this).siblings().removeClass("selected");
        //为自己添加选中状态
        if ($(this).hasClass("selected")){
            return ;
        }else{
            $(this).addClass("selected")
        }
        var shoujia = $(".checked[data-name='shoujia']").parent().attr("href");
        getChecked(shoujia);
        getPost(currentpage,leixing);
    })
}

//键盘离开事件用户手动输入数据
function getkeyup($input) {
    //判断都为数字的时候确定按钮才能显示
    // 1获取两个输入框


    $($input).keyup(function (e) {

        var num1 = $($input).eq(0).val();
        var num2 = $($input).eq(1).val();

       // console.log(num1+num2);
        //判断输入的是否是数字
        if (isNaN($.trim(num1)) || isNaN($.trim(num2)) || $.trim(num1) =="" || $.trim(num2) =="") {
           // console.log("ccc");
            $(".ok").css("display","none");
            return;

        }else {
            $(".ok").css("display","inline-block");
           // console.log($(".ok").val());
        }
    })
}
//post传递数据
function getPost(currentpage,leixing) {
     // console.log(leixing);
    var url = null ;
    switch (leixing) {
        case 1:
            url = projectName+"/ershoufang/ershoufangs/tiaojian";
            break;
        case 2:
            url = projectName+"/ershoufang/ershoufangs/tiaojian";
            break;
        case 3:
            url = projectName+"/newHouse/newhouses/tiaojian";
            break;
        case 4:
            url = projectName+"/xiaoqu/xiaoqu/tiaojian";
            break;
    }

    // console.log("售价="+datashoujia+"面积="+datamianji+"卧室="+datashi+"当前页="+currentpage+"类型="+leixing+"排序方式="+orderby);
    // console.log("url="+url);
    $.post({
        url:url,
        data:{  "datashoujia":datashoujia,
            "datamianji":datamianji,
            "datashi":datashi,
            "orderby":orderby,
            "currentpage":currentpage,
            "leixing":leixing,
            "searchName":searchName
        },

        dataType:"json",
        success:function (data) {

            if (data){
                // console.log("url="+url);
                // 给静态页面赋值
                changeshuju(data);
                //遍历data
                eachli(data,leixing);
            }else {
                alert("网络连接失败")
            }

        }
    })
}
//为静态页面赋值 :共33条记录 当前第1页  上一页 下一页
function changeshuju(data) {
    $(".total span").html(data.total);
    $("#fenyejilu").children(":first").html(data.total);
    $("#fenyejilu").children(":last").html(data.page);
    fenye(data.total,data.total/data.size,data.size,data.page);
}

//分页功能
function fenye(num,totalPage,pageSize,currentPage,leixing) {
    var pno = 1, psize = 10;
    // var num = 100;  //总条数
    // var totalPage =0;//总页数
    // var pageSize = 10;//每页显示行数

//总共分几页
    if (num / pageSize > parseInt(num / pageSize)) {
        totalPage = parseInt(num / pageSize) + 1;
    } else {
        totalPage = parseInt(num / pageSize);
    }
    // var currentPage = 1;//当前页数
//遍历显示数据实现分页
//for (var i = 1; i < (num + 1) ; i++) {
//    var irow = itable.rows[i - 1];
//    if (i >= startRow && i <= endRow) {
//        irow.style.display = "block";
//    } else {
//        irow.style.display = "none";
//    }
//}


    var pageEnd = document.getElementById("pageEnd");

    var tempStr = "";
    if (currentPage > 1) {

        tempStr += "<a href= \"javascript:;\" onClick=\"PDtwo(" + (1) + ")\">首页</a>";
        tempStr += "<a href=\"javascript:;\" onClick=\"PDtwo(" + (currentPage - 1) + ")\"><上一页 </a>"
    } else {
        tempStr += "<a style='cursor: not-allowed;\n" +
            "    opacity: 0.4;\n" +
            "    pointer-events: none;'>首页</a>";
        tempStr += "<a style='cursor: not-allowed;\\n\" +\n" +
            "            \"    opacity: 0.4;\\n\" +\n" +
            "            \"    pointer-events: none;'><上一页 </a>"
    }

    if (currentPage < totalPage) {

        tempStr += "<a href=\"javascript:;\" onClick=\"PDtwo(" + (Number(currentPage) + 1) + ")\">下一页></a>";
        tempStr += "<a href=\"javascript:;\" onClick=\"PDtwo(" + (totalPage) + ")\">尾页</a>";
    } else {

        tempStr += "<a style='cursor: not-allowed;\\n\" +\n" +
            "            \"    opacity: 0.4;\\n\" +\n" +
            "            \"    pointer-events: none;'>下一页</a>";
        tempStr += "<a style='cursor: not-allowed;\\n\" +\n" +
            "            \"    opacity: 0.4;\\n\" +\n" +
            "            \"    pointer-events: none;'>尾页 </a>"
    }

    document.getElementById("barcon").innerHTML = tempStr;
}
// 获取选中
function getChecked(shoujia) {
    var $orderli = $(".orderby").children("li[class='selected']");
    //是否排序条件
    orderby = $($orderli).find("a").attr("value");
    //区域条件
    var quyu = $("#shenyangquyu").find("a[class='selected']").html();
 //   console.log("区域"+quyu.html());
    //判断 区域地址是否被选中 ,如果没有选中  就获取输入框中的信息
    var mess = $("#searchInput").val();
    if (typeof(quyu) != 'undefined' && typeof(quyu)  != ''){
        searchName = quyu ;
    }else if (typeof(mess) != 'undefined' && typeof(mess)  != ''){
        searchName = mess;
    }
    // console.log(searchName);
    var mianji = $(".checked[data-name='mianji']");
    var shi = $(".checked[data-name='shi']");
    fengzhuang(shoujia,mianji,shi)
}
function fengzhuang(shoujia,mianji,shi) {
    // if ($(shoujia)) {
    //     // 将href值封装传递
    //     datashoujia = $(shoujia).parent().attr("href");
    // }

        datashoujia = shoujia ;

    if ($(mianji)) {
        // 2将被选中的父节点的attr值封装到一个数组里作为数据传递
        datamianji = $(mianji).parent().attr("href");
    }
    if ($(shi)) {
        datashi = $(shi).siblings().html();
    }
}
// 遍历循环
function eachli(data,leixing) {
    var $ul = null;
    switch (leixing) {
        case 1:
            $ul =  $("#houselist");
            break;
        case 2:
            $ul =  $("#houselist");
            break;
        case 3:
            $ul =  $("#newhouselist");
            break;
        case 4:
            $ul =  $("#newhouselist");
            break;
        case 5:   //经纪人
            $ul =  $(".agent-lst");
            break;
    }

    //删除所有li
    $($ul).children("li").remove();

   // console.log(data);

    if (data.rows.length > 0){

        var houses = data.rows;

        for (var i = 0; i<houses.length;i++){
            createli(houses[i],$ul,leixing);
        }
        // $.each(data.rows,function (key,houses) {
        //     createli(houses);
        // })
    }else {
        $($ul).children("li").remove();
    }
}
// 生成li
function createli(houses,$ul,leixing) {
    var li = "";
    // console.log(houses);
    switch (leixing) {
        case 1:
            if (houses.zuidishoujia == null){houses.zuidishoujia ='暂无数据'}
            li += '<li class="clear LOGCLICKDATA">\n' +
                '<a class="noresultRecommend img " href="'+projectName+'/ershoufang/'+houses.id+ '"target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +
                '<img class="lj-lazy" src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+houses.housePhoto[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';" data-original="/'+projecImgtName+'/img/zhaoliying.jpg" th:alt="'+houses.zhuangxiu+'"></a>\n' +
                '<div class="info clear">\n' +
                '<div class="title">\n' +
                '<a class="" href="'+projectName+'/ershoufang/'+houses.id+ '"target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +

                houses.huxing+'/'+houses.mianji+'平米,\n' +
                houses.zhuangxiu +','+houses.chaoxiang +','+houses.louxing +','
                +houses.hexinmaidian+
                ','+houses.fangyuanbiaoqian +
                '\n' +
                '</a><span class="new tagBlock">'+houses.leixing+'</span></div>\n' +
                '<div class="address">\n' +
                '<div class="houseInfo"><span class="houseIcon"></span>\n' +
                '<a href="'+projectName+'/xiaoqu/'+houses.name+'" target="_blank" data-log_index="1" data-el="region">\n' +
                houses.com.loupanmingcheng +' </a>'+ houses.huxing+' | '+houses.mianji+'平米 | '+houses.chaoxiang+ '| ('+houses.quyu+')</div>\n' +
                '</div>\n' +
                '<div class="flood">\n' +
                '<div class="positionInfo"><span class="positionIcon"></span>高楼层(共'+houses.gongjiceng+'层)'+houses.com.jungongniandai+'年建板楼 -\n' +
                '<a href="'+projectName+'/ershoufang/ershoufangs/?searchName="'+houses.quyu+' target="_blank">浑南</a>'+
                '<a href="" target="_blank"><!-- 区域隐藏--></a>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="followInfo"><span class="starIcon"></span>发布日期:'+(houses.createtime).split("T")[0]+'</div>\n' +
                '<div class="tag"><span class="taxfree">'+houses.fangyuanbiaoqian+'</span><span class="haskey">'+houses.hexinmaidian+'</span></div>\n' +
                '<div class="priceInfo">\n' +
                '                        <div class="totalPrice"><span>'+houses.zuidishoujia+'万</span></div>\n' +
                '                        <!--<div class="unitPrice" data-hid="102100833107" data-rid="3116815378674023" data-price="14008"><span th:text="${houses.leixing == \'租\'}?${houses.yajinleixing}:${houses.shuxing}"></span></div>-->\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <!--<div class="listButtonContainer">-->\n' +
                '                    <!--<div class="btn-follow followBtn" data-hid="102100833107"><span class="follow-text">关注</span></div>-->\n' +
                '                    <!--<div class="compareBtn LOGCLICK" data-hid="102100833107" log-mod="102100833107" data-log_evtid="10230">加入对比</div>-->\n' +
                '                <!--</div>-->\n' +
                '            </li>\n';
            break;
        case 2:
            if (houses.zuidizujin == null){houses.zuidizujin ='暂无数据'}
            li += '<li class="clear LOGCLICKDATA">\n' +
                '<a class="noresultRecommend img " href="'+projectName+'/zufang/'+houses.id+ '"target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +
                '<img class="lj-lazy" src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+houses.housePhoto[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';" data-original="/'+projecImgtName+'/img/zhaoliying.jpg" th:alt="'+houses.zhuangxiu+'"></a>\n' +
                '<div class="info clear">' +
                '<div class="title">\n' +
                '<a class="" href="'+projectName+'/zufang/'+houses.id+ '"target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +
                houses.woshi+'室'+houses.ketingcanting+'厅'+houses.weishengjian+'卫/'+houses.mianji+'平米,\n' +
                houses.zhuangxiu +','+houses.chaoxiang +','+houses.louxing +','
                +houses.hexinmaidian+
                ','+houses.fangyuanbiaoqian +
                '\n' +
                '</a><span class="new tagBlock">'+houses.leixing+'</span></div>\n' +
                '<div class="address">\n' +
                '<div class="houseInfo"><span class="houseIcon"></span>\n' +
                '<a href="'+projectName+'/xiaoqu/'+houses.name+'" target="_blank" data-log_index="1" data-el="region">\n' +
                houses.com.loupanbieming +' </a> '+ houses.woshi+'室'+houses.ketingcanting+'厅 | '+houses.mianji+'平米 | '+houses.chaoxiang+ '| (<!--区域隐藏-->)</div>\n' +
                '</div>\n' +
                '<div class="flood">\n' +
                '<div class="positionInfo"><span class="positionIcon"></span>高楼层(共'+houses.gongjiceng+'层)'+houses.com.jungongniandai+'年建板楼 -\n' +
                '<a href="" target="_blank"><!-- 区域隐藏--></a>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="followInfo"><span class="starIcon"></span>发布日期:'+(houses.createtime).split("T")[0]+'</div>\n' +
                '<div class="tag">' +
                '<span class="taxfree">'+houses.fangyuanbiaoqian+'</span><span class="haskey">'+houses.hexinmaidian+'</span>' +
                '</div>\n' +
                '<div class="priceInfo">\n' +
                '                        <div class="totalPrice"><span>'+houses.zuidizujin+'</span>元/月</div>\n' +
                '                        <!--<div class="unitPrice" data-hid="102100833107" data-rid="3116815378674023" data-price="14008"><span th:text="${houses.leixing == \'租\'}?${houses.yajinleixing}:${houses.shuxing}"></span></div>-->\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <!--<div class="listButtonContainer">-->\n' +
                '                    <!--<div class="btn-follow followBtn" data-hid="102100833107"><span class="follow-text">关注</span></div>-->\n' +
                '                    <!--<div class="compareBtn LOGCLICK" data-hid="102100833107" log-mod="102100833107" data-log_evtid="10230">加入对比</div>-->\n' +
                '                <!--</div>-->\n' +
                '            </li>\n';
            break;
        case 3:
            li += ' <li class="clear LOGCLICKDATA">\n' +
                '                <a class="noresultRecommend img " href="'+projectName+'/newHouse/'+houses.id+'" target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +
                '                    <img class="lj-lazy" src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+houses.photos[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';" data-original="../img/zhaoliying.jpg" th:alt="'+houses.loupanmingcheng+'"></a>\n' +
                '                <div class="info clear">\n' +
                '                    <div class="title">\n' +
                '                        <a class="" href="'+projectName+'/newHouse/'+houses.id+'" target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">' + houses.loupanmingcheng +'</a>\n' +
                '                        <span class="new tagBlock">'+(houses.yongtu).split("|")[0]+'</span>\n' +
                '                        <span class="new tagBlock">'+(houses.liangdian).split("|")[0]+'</span>\n' +
                '                    </div>\n' +
                '                    <div class="address">\n' +
                '                        <div class="houseInfo"><span class="houseIcon"></span>\n' +
                '                            <a href="'+projectName+'/newHouse/newhouses/?searchName='+houses.quyu+'" target="_blank" data-log_index="1" data-el="region">\n' +
                '                                '+houses.quyu+'</a> /'+ houses.loupandizhi+'</div>\n' +
                '                    </div>\n' +
                '                    <div class="flood">\n' +
                '                        <div class="positionInfo"><span class="positionIcon"></span>面积: '+houses.mianji+'平方米\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="followInfo"><span class="starIcon"></span>'+(houses.junjiazuigao)+'元/平方米</div>\n' +
                '                    <div class="followInfo"><span class="starIcon"></span>发布日期:'+(houses.createtime).split("T")[0]+'</div>\n' +
                '<div class="priceInfo"><div class="totalPrice"><span>'+houses.junjiazuidi+'</span>万起</div></div>\n' +
                '                    \n' +
                '                </div>\n' +
                '            </li>\n';
            break;
        case 4:

            li += '<li class="clear LOGCLICKDATA">\n' +
                '                <a class="noresultRecommend img " href="'+projectName+'/xiaoqu/'+houses.id+'" target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +
                '                    <img class="lj-lazy" src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+houses.photos[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';"   alt="'+
                houses.zhuangxiu +houses.chaoxiang
                +' alt="'+houses.loupanmingcheng+'"></a>\n' +
                '                <div class="info clear" style="margin-left: 36px; float: left;width: 400px;">\n' +
                '                    <div class="title">\n' +
                '                        <a class="" href="'+projectName+'/xiaoqu/'+houses.id+'" target="_blank" data-log_index="1" data-el="ershoufang" data-housecode="102100833107" data-is_focus="" data-sl="">\n' +
                houses.loupanmingcheng +
                '                        </a>\n' +
                '\n' +
                '                    </div>\n' +
                '                    <div class="address">\n' +
                '                        <div class="houseInfo"><span class="houseIcon"></span>\n' +
                '                            <a href="'+projectName+'/xiaoqu/'+houses.id+'" target="_blank" data-log_index="1" data-el="region">\n' +
                '                                规划户数'+houses.guihuahushu+' </a> | '+houses.loupandizhi+'</div>\n' +
                '                    </div>\n' +
                '                    <div class="flood">\n' +
                '                        <div class="positionInfo"><span class="positionIcon"></span>' +
                                houses.xiaoqujianjie+
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="followInfo"><span class="starIcon"></span>'+houses.quyu+'</div>\n' +
                '\n' +
                '                </div>\n' +
                '                <div class="xiaoquListItemRight">\n' +
                '                    <div class="xiaoquListItemSellCount">\n' +
                '                        <a title="'+houses.loupanmingcheng+'二手房" href="'+projectName+'/ershoufang/xq/'+houses.id+'/" class="totalSellCount"><span>'+houses.esfCount+'</span>套</a>\n' +
                '                        <div class="sellCountDesc">在售二手房</div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </li>';
            break;
        case 5:
            // console.log(houses);
            li +='<li><div class="pic-panel"><a target="_blank"\n' +
                '     href="'+projectName+'/agent/message/'+houses.id+'"><img\n' +
                '   src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+houses.photos.path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';"></a></div><div class="info-panel"><div class="agent-name"><a target="_blank"\n' +
                '   href="'+projectName+'/agent/message/'+houses.id+'"><h2>'+houses.name+'</h2>\n' +
                '                            </a>\n' + '                                      <span  class="position">'+houses.zhiwu.name+'</span><a class="lianjiaim-createtalkAll im-talk"\n' +
                '                                                                      style="display: none;" title="在线咨询"\n' +
                '                                                                      data-ucid="1000000020232129"\n' +
                '                                                                      data-source-port="PC:ershou_jingjiren"></a></div>\n' +
                '                            <div class="col-1">\n' +
                '                                <div class="main-plate"><span class="mp-title">主营板块:&nbsp;&nbsp;</span><span><a\n' +
                '                                        target="_blank" href="'+projectName+'/ershoufang/ershoufangs/?searchName='+houses.shop.quyu+'">'+houses.shop.quyu+'&nbsp;</a><a\n' +
                '                                        target="_blank" href="'+projectName+'/ershoufang/ershoufangs/?searchName='+houses.shop.quyu+'">'+houses.shop.address+'</a>&nbsp;&nbsp;&nbsp;</span>\n' +
                '                                    <!--暂时不显示出售房源数量<span><a target="_blank" href="https://dianpu.lianjia.com/1000000020232129?w=jingxuan">出售房源0套</a></span>-->\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <!--<div class="col-2">-->\n' +
                '                                <!--<div class="high-praise">综合评分<span class="num">4.8</span></div>-->\n' +
                '                                <!--<div class="comment-num"><a target="_blank"-->\n' +
                '                                                            <!--href="https://dianpu.lianjia.com/1000000020232129?w=pingjia"-->\n' +
                '                                                            <!--class="LOGCLICKEVTID" data-log_evt_id="10657">评论52条</a>-->\n' +
                '                                <!--</div>-->\n' +
                '                            <!--</div>-->\n' +
                '                            <div class="col-3"><h2>'+houses.mobile+'</h2>\n' +
                '                                <p class="method">联系方式</p>\n' +
                '                                <p class="mobile_p"></p></div>\n' +
                '                            <div class="clear"></div>\n' +
                '                        </div>\n' +
                '                    </li>';
            break;
    }

    var $li =  $(li);
    $($ul).append($li);
}