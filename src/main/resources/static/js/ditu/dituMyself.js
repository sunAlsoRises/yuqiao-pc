				$(document).ready(function() {

					//区域下拉
					$('#districtWrap').hover(function() {
						$(this).find(".m-s-menu").show();
					}, function() {
						$(this).find(".m-s-menu").hide();
					});
					var leftListObj = $('#tagsox li');
					leftListObj.each(function() {
						$(this).hover(function() {
							var i = $(this).find("a").attr('key');
							leftListObj.removeClass('m-s-title1');
							$(this).addClass('m-s-title1');
							$('#sqList>li').hide();
							$('#sqList').find("li>a").eq(0).attr("parentKey", i).end().end().find('a[parentKey="' + i + '"]').parent().show();
						}, function() {});
					});
					//地铁下拉
					$('#subwayWrap').hover(function() {
						$(this).find(".m-s-menu").show();
					}, function() {
						$(this).find(".m-s-menu").hide();
					});
					//更多选择下拉
					$("div.m-s-t-select-2").hover(function() {
						$(this).find(".m-l-select-menu2").show();
					}, function() {
						$(this).find(".m-l-select-menu2").hide();
					});

					//var userIp = '';
					//if (location.host == "www.#.cn" || location.host == "#.cn") {
					//    //$("body").append("<iframe style=\"display: none\" src=\"http://nodejs93.#.cn:3000/webHouseSearchSet?" + location.pathname + "&" + userIp + "\"/>");
					//    $("body").append("<iframe style=\"display: none\" src=\"http://websitecounter.herokuapp.com/webHouseSearchSet?" + location.pathname + "&" + userIp + "\"/>");
					//}

					//var map = new BMap.Map('allmap', mapOptions);
					//map.setMapType();
					if($.cookie("usercenter")) {
						$(".t-login").html("您好&nbsp;" + decodeURI(GetCookie("usercenter", "web_username")));
					}

					function GetCookie(mname, sname) {
						if($.cookie(mname) == null) {
							return null;
						}
						var cookies = $.cookie(mname).split('&');
						var res = '';
						for(var i = 0; i < cookies.length; i++) {
							var one = cookies[i].split('=');
							if(one[0] == sname) {
								res = one[1];
								break;
							}
						}
						return res;
					}
				});
				//移除已经加载过的js/css

				function removejscssfile(filename, filetype) {

					var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"

					var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"

					var allsuspects = document.getElementsByTagName(targetelement)

					for(var i = allsuspects.length; i >= 0; i--) {

						if(allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)

							allsuspects[i].parentNode.removeChild(allsuspects[i])

					}

				}
				//在搜索框id为search_keyword的焦点进入时执行
				function removecss() {
					removejscssfile("20/bmap_autocomplete.css", "css"); //去掉百度自带的css文件
					$('#search_keyword').removeAttr('onfocus'); //焦点事件没有用了，去掉。
				}
