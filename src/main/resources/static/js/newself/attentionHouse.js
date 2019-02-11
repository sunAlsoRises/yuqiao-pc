 function HouseList(esfFather,zfFather,titile) {
            this.esfFather = esfFather ;
            this.zfFather = zfFather ;
            // this.data = this.post();
            this.title = title;
        }
        HouseList.prototype.post = function (url,action) {
            var result = null ;
            if (loginUser){
                $.post({
                    url:url,
                    async:false,
                    data:{
                        action:action
                    },
                    dataType:"json",
                    success:function (data) {
                        // console.log("11"+data);
                        result = data;

                    }
                })
            }
            return result;
        }
        //为房源列表的儿子赋值
        HouseList.prototype.init = function (url,action) {
            // console.log(this.data);
            var result = this.post(url,action);
            var sell = result.esfHouse;
            if (sell){
                $("#showTotal").find("span").html(sell.length);
                for (var i = 0 ;i<sell.length;i++){
                    var li = '<li>\n' +
                        '                    <div class="list">\n' +
                        '                        <div class="pic-panel">\n' +
                        '                            <a target="_blank" href="'+projectName+'/ershoufang/'+sell[i].id+ '">\n' +
                        '                                <img src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+sell[i].housePhoto[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';">\n' +
                        '                            </a>\n' +
                        '                        </div>\n' +
                        '                        <div class="info-panel">\n' +
                        '                            <h2>\n' +
                        '                                <a target="_blank" href="'+projectName+'/ershoufang/'+sell[i].id+ '">\n' +
                         sell[i].quyu + ' ' + sell[i].com.loupandizhi+" " + sell[i].com.loupanmingcheng+" " + sell[i].chaoxiang +
                        '                                </a>\n' +
                        '                            </h2>\n' +
                        '                            <div class="col-1">\n' +
                        '                                <div class="where">\n' +
                        '                                    <a href="'+projectName+'/ershoufang/xq/'+sell[i].name+ '" target="_blank">\n' +
                        '                                        <span class="region">'+sell[i].com.loupanmingcheng+'&nbsp;&nbsp;</span>\n' +
                        '                                    </a>\n' +
                        '                                    <span class="zone">\n' +
                        '                          <span>'+sell[i].huxing+'</span>\n' +
                        '                        </span>\n' +
                        '                                    <span class="meters">'+sell[i].mianji+'平米</span>\n' +
                        '                                    <span>'+sell[i].chaoxiang+'</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="other">\n' +
                        '                                    <div class="con">\n' +
                        '\n' +
                        '                                        <a href="'+projectName+'/ershoufang/ershoufangs/?searchName='+sell[i].quyu+ '">'+sell[i].quyu+'二手房</a>\n' +
                        '\n' +
                        '                                        <span>/</span>\n' +
                        '                                        高楼层(共'+sell[i].gongjiceng+'层)\n' +
                        '                                        <span>/</span>'+sell[i].louxing +'\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="chanquan">\n' +
                        '                                    <div class="left agency">\n' +
                        '                                        <div class="view-label left">\n' +
                        '                                            <span class="fang-subway"></span>\n' +
                        '                                            <span class="fang-subway-ex">\n' +
                        '                                <span>'+sell[i].com.jiaotongchuxing+'</span>\n' +
                        '                              </span>\n' +
                        '                                            <span class="taxfree"></span>\n' +
                        '                                            <span class="taxfree-ex">\n' +
                        '                                    <span>'+sell[i].tongtu+'</span>\n' +
                        '                                  </span>\n' +
                        '\n' +
                        '                                            <span class="haskey"></span>\n' +
                        '                                            <span class="haskey-ex">\n' +
                        '                                    <span>'+sell[i].zhuangxiu+'</span>\n' +
                        '                                  </span>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="col-3">\n' +
                        '                                <div class="price">\n' +
                        '                                    <span class="num">'+sell[i].zuigaoshoujia+'</span>万\n' +
                        '                                </div>\n' +
                        '                                <div class="price-pre">'+sell[i].zuigaoshoujia/sell[i].mianji+' 元/m²</div>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                    <a class="del-fav actDelFollow" value="'+sell[i].id+'" onclick="DelHouse(this)"  href="javascript:void(0);">取消关注</a>\n' +
                        '                </li>';
                    $(this.esfFather).children("ul").append($(li));
                    // 绑定取消关注事件
                    // this.delLi($(li),sell[i].id);
                }
            }
            var zf = result.zfHouse;
            if (zf){
                for (var i = 0 ;i<zf.length;i++){
                    if (zf[i].zuidizujin == null){zf[i].zuidizujin = "未知"}
                    var li = '<li>\n' +
                        '                    <div class="list">\n' +
                        '                        <div class="pic-panel">\n' +
                        '                            <a target="_blank" href="'+projectName+'/zufang/'+zf[i].id+ '">\n' +
                        '                                <img src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+zf[i].housePhoto[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';">\n' +
                        '                            </a>\n' +
                        '                        </div>\n' +
                        '                        <div class="info-panel">\n' +
                        '                            <h2>\n' +
                        '                                <a target="_blank" href="'+projectName+'/zufang/'+zf[i].id+ '">\n' +
                        zf[i].quyu + ' ' + zf[i].com.loupandizhi+" " + zf[i].com.loupanmingcheng+" " + zf[i].chaoxiang +
                        '                                </a>\n' +
                        '                            </h2>\n' +
                        '                            <div class="col-1">\n' +
                        '                                <div class="where">\n' +
                        '                                    <a href="'+projectName+'/zufang/xq/'+zf[i].name+ '" target="_blank">\n' +
                        '                                        <span class="region">'+zf[i].com.loupanmingcheng+'&nbsp;&nbsp;</span>\n' +
                        '                                    </a>\n' +
                        '                                    <span class="zone">\n' +
                        '                          <span>'+zf[i].huxing+'</span>\n' +
                        '                        </span>\n' +
                        '                                    <span class="meters">'+zf[i].mianji+'平米</span>\n' +
                        '                                    <span>'+zf[i].chaoxiang+'</span>\n' +
                        '                                </div>\n' +
                        '                                <div class="other">\n' +
                        '                                    <div class="con">\n' +
                        '\n' +
                        '                                        <a href="'+projectName+'/ershoufang/ershoufangs/?searchName='+sell[i].quyu+ '">'+sell[i].quyu+'二手房</a>\n' +
                        '\n' +
                        '                                        <span>/</span>\n' +
                        '                                        高楼层(共'+zf[i].gongjiceng+'层)\n' +
                        '                                        <span>/</span>'+zf[i].louxing +'\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="chanquan">\n' +
                        '                                    <div class="left agency">\n' +
                        '                                        <div class="view-label left">\n' +
                        '                                            <span class="fang-subway"></span>\n' +
                        '                                            <span class="fang-subway-ex">\n' +
                        '                                <span>'+zf[i].com.jiaotongchuxing+'</span>\n' +
                        '                              </span>\n' +
                        '                                            <span class="taxfree"></span>\n' +
                        '                                            <span class="taxfree-ex">\n' +
                        '                                    <span>'+zf[i].tongtu+'</span>\n' +
                        '                                  </span>\n' +
                        '\n' +
                        '                                            <span class="haskey"></span>\n' +
                        '                                            <span class="haskey-ex">\n' +
                        '                                    <span>'+zf[i].zhuangxiu+'</span>\n' +
                        '                                  </span>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="col-3">\n' +
                        '                                <div class="price">\n' +
                        '                                    <span class="num">'+zf[i].zuidizujin+'</span>元/月\n' +
                        '                                </div>\n' +
                        // '                                <div class="price-pre">'+zf[i].zuigaoshoujia/zf[i].mianji+' 元/m²</div>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                    <a class="del-fav actDelFollow" value="'+zf[i].id+'"  onclick="DelHouse(this)" href="javascript:void(0);">取消关注</a>\n' +
                        '<input  style="display: none;" value="'+sell[i].id+'" />\n'+
                        '                </li>';
                    $(this.zfFather).children("ul").append($(li));
                    // this.delLi($(li),zf[i].id);
                }
            }

        }
        //点击切换功能
        HouseList.prototype.tigger = function (btn1,btn2) {
            var that = this;
            $(btn1).click(
                function () {
                    // 删除2 的class
                    $(btn2).removeClass("hover");
                    //添加自身class
                    $(btn1).addClass("hover");
                    //根据li的数量查询
                    // 显示二手房列表
                    $(that.esfFather).css("display","block");
                    $(that.zfFather).css("display","none");
                    $(that.title).html(that.esfFather.find("li").length);
                }
            );
            $(btn2).click(
                function () {
                    // 删除1 的class
                    $(btn1).removeClass("hover");
                    //添加自身class
                    $(btn2).addClass("hover");
                    //根据li的数量查询
                    $(that.zfFather).css("display","block");
                    $(that.esfFather).css("display","none");
                    $(that.title).html(that.zfFather.find("li").length);
                }
            );
        }

        //按键
 function DelHouse(data) {
     var phone = $.cookie("loginUser");
     var houseid = $(data).attr("value");
     var url = projectName+"/collect/secondhouse/del";
     var del = delPost(url,phone,houseid);
     if (del == 1){
        //删除当前li
        //  var length = $(data).parent().parent().find("li").length;
        //  $(data).parent().remove();
         window.location.reload();
         // 给标题重新赋值
         // $("#showTotal").children("span").html(length-1);
     }else {
         alert("取消失败,请刷新页面");
     }

 }
function delPost(url,phone,houseid) {
     var result = null ;
     if (phone){
         $.post({
             url:url,
             async:false,
             data:{
                 phone:phone ,
                 houseid:houseid
             },
             dataType:"json",
             success:function (data) {
                 result = data;
             }
         })
     }
     return result;
 }

function welcome($div) {
    this.div = $div;
    this.text = SpiltUtil.getSpiltLogin();
    $($div).html("欢迎你,"+this.text);
}
