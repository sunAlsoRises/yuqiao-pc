
// sonparent += '<img src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+SecondaryPath+'/'+data.photos[0].path+'"
$(document).ready(function () {
    var MyFilter = {  //一个json 数组  监听器
        Post: function (url, action, call) { // post方法,封装一下  url为请求的地址  action 为发送的数据
            $.post(url, action, function (redata) {
                call && call(redata);

            });
        },
        GetActicle: function (call,type) {  //获取文章
            url = projectName+"/article/index";
            action =  10;

            $.ajaxSettings.async = false;
            MyFilter.Post(url, { action: action ,type:type||"新闻公告"}, function (redata) {
                call && call(redata);
            });
        },
        GetSecondHouse: function (call) {  //获取区域信息
            url = projectName+"/ershoufang/indexhouse";
            pageSize =  4;
            MyFilter.Post(url, { pageSize: pageSize }, function (redata) {
                call && call(redata);
            });
        },
        GetNewHouse: function (call) {  //获取区域信息
            url = projectName+"/newHouse/indexhouse";
            action =  3;
            MyFilter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        GetCommunity: function (call) {  //获取区域信息
            url = projectName+"/xiaoqu/indexhouse";
            action =  3;
            MyFilter.Post(url, { action: action }, function (redata) {
                call && call(redata);
            });
        },
        GetMarket: function (call) {  //获取市场行情
            url = projectName+"/market/count";
            MyFilter.Post(url,{ action: "" }, function (redata) {
                call && call(redata);
            });
        },
    }
//房源交易信息
    MyFilter.GetMarket(function (data){
    	// console.log(data);
    	if (data){
    		var $ul = $("#hangqing");
    		$($ul).children("li").eq(0).find("span").html(data.newHouseCount);
            $($ul).children("li").eq(1).find("span").html(data.orderCount);
            $($ul).children("li").eq(2).find("span").html(data.wantCount);
		}
	})
    MyFilter.GetActicle(function (data){
        if (data){
            // 1获取父节点
            var father = $(".lsfxlist").children("ul");
            for (var i = 0; i < data.rows.length; i++) {
                var obj = data.rows[i];
                createActicleSon(obj,father);
            }
        }
    });
    var Adata ={article:''};
    var Adata2 ={article:''};
    var Adata3 ={article:''};
    var Adata4 ={article:''};
        //文章
    MyFilter.GetActicle(function (data){
        if (data){
            Adata.article = data.rows;
        }
    },"誉桥动态");
        var articleV = new Vue({
            el: '#yuqiaoDynamic',
            data:Adata
        })
    MyFilter.GetActicle(function (data){
        if (data){
            Adata2.article = data.rows;
        }
    },"装饰装修");
    var article2 = new Vue({
        el: '#zhuangxiu',
        data:Adata2
    })
    MyFilter.GetActicle(function (data){
        if (data){
            Adata3.article = data.rows;
        }
    },"业内动态");
    var article3 = new Vue({
        el: '#yeneiArticle',
        data:Adata3
    })
    MyFilter.GetActicle(function (data){
        if (data){
            Adata4.article = data.rows;
        }
    },"房产政策");
    var article3 = new Vue({
        el: '#houseArticle',
        data:Adata4
    })
    //二手房
    MyFilter.GetSecondHouse(function (data){

        if (data){
            // 1获取父节点
            var father = $("#ershoufanglist").children(".wrapper").find("ul");

            for (var i = 0; i < data.rows.length; i++) {
                var obj = data.rows[i];
                createSon(obj,father);
            }
        }
    });
    //新房
    MyFilter.GetNewHouse(function (data){

        if (data){
            // 1获取父节点
            var father = $(".newhose-list").children("ul");
            for (var i = 0; i < data.data.length; i++) {
                var obj = data.data[i];
                createNewSon(obj,father);
            }
        }
    });
    //小区
    MyFilter.GetCommunity(function (data){

        if (data){
            // 1获取父节点
            var father = $("#xiaoqulist");

            for (var i = 0; i < data.rows.length; i++) {
                var obj = data.rows[i];
                createCommunity(obj,father);
            }
        }
    });
})
//二手房
 function createSon (data,father) {
					/*  var data = JSON.parse(data1); */
     // 遍历图片
// console.log( data.zuigaoshoujia);
if (data.zuigaoshoujia == null){data.zuigaoshoujia ='暂无数据'};
if (data.huxing == null){data.huxing = ''};
					var sonparent = '<li class="ershouRecommendList LOGVIEWDATA LOGCLICKDATA" i>';
					sonparent += '<a href="'+projectName+'/ershoufang/'+data.id+ '"target="_blank" class="LOGVIEW LOGCLICK" data-log_id="30001" data-bl="list" data-el="">';
					sonparent +='<div class="wra">';
					sonparent +='<img src="'+BaseUrl_IIS_Application_Name+'/'+SecondaryPath+'/'+data.housePhoto[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';"   alt="'+
										data.zhuangxiu +data.chaoxiang
										+'">';
					sonparent +='<span class="price">'+data.zuigaoshoujia+'万</span>';
					sonparent +='<div class="bottom">'+
										'<p class="p01">'+
										data.com.loupanmingcheng +' '+data.huxing
										+'</p>';
					sonparent +='<p class="tips">'+
											'<span>'+data.louxing+'</span>'+
											'<span>'+data.tongtu+'</span>'+
											'<span>'+data.mianji+'平米</span>'+
										'</p>';
				    sonparent +='</div>'+
								'</div>'+
								'<div class="tips">'+
									'<p><span>不可错过的房源</span></p>'+
									'<label></label>'+
								'</div></a></li>';
//					子节点存储id
					var $sonparent = $(sonparent) ;
				//	$sonparent.data("id",data.id);
//					添加子节点
					 /* console.log("子节点："+sonparent);  */
					 $(father).append($sonparent); 

};
		//新房
 function createNewSon (data,father) {
					if (data.kaipanshijian == null) {
						data.kaipanshijian = "暂不确定";
					}
					var sonparent = "";
					sonparent += '<li><a href="'+projectName+'/newHouse/'+data.id+'">';
					sonparent += '<img src="'+BaseUrl_IIS_Application_Name+'/'+NewHousePath+'/'+data.photos[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';" alt="'+data.kanpanshijian+'"><div class="bg"></div>';
					sonparent += '<div class="price"><div><span>'+data.kaipanshijian+'</span></div>';
					sonparent += '</div><div class="title">'+data.loupanmingcheng;
					sonparent += '<span><label>'+data.junjiazuidi+'</label>元/平</span></div>';
					sonparent += '<div class="title01"><span title="'+data.loupandizhi+'">'+data.kaipanshijian+'</span> '+data.jianzhumianji+'平米</div></a>';
					sonparent += '</li>';
//					子节点存储id
					var $sonparent = $(sonparent);
					$sonparent.data("id",data.id);
//					添加子节点
/* console.log("子节点："+sonparent);  */
$(father).append($sonparent);

	};
	//小区
function createCommunity (data,father) {
			if (!data.photos[0]) {data.photos[0].path = 'error'}
			if (!data.loupanbieming) {
				data.kaipanshijian = "暂不确定";
			}
			var sonparent = "";
			sonparent += '<li><a href="'+projectName+'/xiaoqu/'+data.id+'" target="_blank">';
			sonparent += '<img src="'+BaseUrl_IIS_Application_Name+'/'+CommunityPhoto+'/'+data.photos[0].path+'" onerror="javascript:this.src=\'/yuqiaopc/img/house/linshi_house (4).jpg\';" alt="'+data.loupanmingcheng+'"><div class="title">';
			sonparent += '<div class="resblock-name">'+data.loupanbieming+'</div>';
			sonparent += '<div class="resblock-desc"><span><label>'+data.biaoqian +'</label>'		
			sonparent += '</span><span class="resblock-year">'+data.loupandizhi +'</span>';
			sonparent += '</div></div></a></li>';
			/*sonparent += '</li>';*/
//			子节点存储id
			var $sonparent = $(sonparent);
			$sonparent.data("id",data.id);

//			添加子节点
/* console.log("子节点："+sonparent);  */
$(father).append($sonparent);
};
//文章
function createActicleSon(data,father) {
	var sonparent = '<li>\n' +
        '\t\t\t\t\t\t\t\t<a href="'+projectName+'/article/'+data.id+'" target="_top" title="'+data.title+'">'+data.title+'</a>\n' +
        '\t\t\t\t\t\t\t\t<span>'+(data.lastupdatetime).split("T")[0]+'</span>\n' +
        '\t\t\t\t\t\t\t</li>';
//					子节点存储id
    var $sonparent = $(sonparent) ;
    $(father).append($sonparent);
}