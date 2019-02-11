function openWinFrame(_url,_width,_height,_text)
{
	$.layer({
    type: 2,
    border: [0],
    title: _text,
    iframe: {src : _url},
    area: [_width+'px', _height+'px']
});
}

function openWinFrameNoFix(_url,_width,_height,_text)
{
$.layer({
    type: 2,
    shade: [0],
    fix: false,
    title: _text,
    maxmin: true,
    iframe: {src : _url},
    area: [_width+'px', _height+'px'],
    close: function(index){
        //layer.msg('您获得了子窗口标记：' + layer.getChildFrame('#name', index).val(),3,1);
    }
}); 
}

function openWinFrameFullScreen(_url,_width,_height)
{
	$.layer({
    type: 2,
    title: false,
    area: [_width +'px',  _height+'px'],
    fix: false,
    shadeClose: true,
    closeBtn: false,
    offset: [($(window).height() - _height)/2+'px', ''], //上下垂直居中
    border: [0],
    shade : [0.8, '#000'],
    iframe: {src: _url}
});
	

}

function openWinPlayVod(var1,_width,_height)
{
	var _url = 'vod.html?VODURL='+encodeURIComponent(var1);
	openWinFrameFullScreen(_url,_width,_height);

}

function openWinPlayVod2(var1,_width,_height)
{
	var _url = 'vod.html?VODURL='+encodeURIComponent(var1);
	openWinFrameNoFix(_url,_width,_height);

}

function openWinPcollectimage(var1)
{
	var _url = 'vod.html?PCollectTypeID='+var1;
	//openWinFrameFullScreen(_url,_width,_height);

$.layer({
    type: 2,
    title: false,
    area: ['80%',  '80%'],
    fix: false,
    shadeClose: true,
    closeBtn: false,
    offset: [($(window).height() - $(window).height()*0.8)/2+'px', ''], //上下垂直居中
    border: [0],
    shade : [0.8, '#000'],
    iframe: {src: _url}
});
}

function openWinFrameFullScreenPer(url,_width,_height)
{
	var _url = url;

$.layer({
    type: 2,
    title: false,
    area: [_width,  _height],
    fix: false,
    shadeClose: true,
    closeBtn: false,
    offset: [($(window).height() - $(window).height()*0.8)/2+'px', ''], //上下垂直居中
    border: [0],
    shade : [0.8, '#000'],
    iframe: {src: _url}
});
}


function Irequest(strParame) {
	var args = new Object( );
	var query = location.search.substring(1);

	var pairs = query.split("&"); // Break at ampersand
	for(var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos == -1) continue;
		var argname = pairs[i].substring(0,pos);
		var value = pairs[i].substring(pos+1);
		value = decodeURIComponent(value);
		args[argname] = value;
	}
	return args[strParame];
} 

//取值
function RR(str)
{
	var ss = Irequest(str);
	
	if((ss==undefined)||(ss=='undefined'))
	{
		ss = '';
	}
	
	return ss;
}

var vodUrl='';

	function openWindow(_url,_width,_height,_title,_scroll)
	{
	    openWinFrame(_url, _width, _height, _title );	
	}


