!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}("undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:void 0!==this?this:{},function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="gDgk")}({"61jv":function(t,e,i){"use strict";e.__esModule=!0,e.default=function(){$(".fix-wrap").css("position","relative").each(function(){var t=$(this).attr("data-width"),e=$(this).find(".fix-txt").height();$(this).find(".fix-txt").css({top:"50%",left:"50%",marginLeft:"-"+t/2+"px",marginTop:"-"+e/2+"px",position:"absolute","text-align":"center",width:t+"px"})})}},ID1b:function(t,e,i){"use strict";e.__esModule=!0;var n=function(t,e){var i=JSON.parse(localStorage.getItem(t)),n=void 0;i?($.each(i,function(t,n){n&&n.name===e.name&&i.splice(t,1)}),i.unshift(e),n=i.slice(0,10)):n=[e],localStorage.setItem(t,JSON.stringify(n))},r=function(t){this.opt={input:"",template:"",sugContainer:"",form:""},$.extend(this.opt,t),this.cityId=this.opt.sugContainer.attr("data-cityid"),this.now=Date.now||function(){return+new Date},this.searchTimer=0,this.maxSearchTime=0,this.bind()};r.prototype.bind=function(){var t=this;this.opt.input&&this.opt.input.on("input propertychange focus",function(){var e=$(this);t.searchTimer&&clearTimeout(t.searchTimer),t.searchTimer=setTimeout(function(){var i=e.val();if(""===$.trim(i)){if(!t.opt.sugContainer.closest(".listSearch").length)return t.opt.sugContainer.hide(),!1;var n=JSON.parse(localStorage.getItem(t.cityId));return null!==n?(t.opt.sugContainer.html($("[data-history=true]").html()),$.each(n,function(e,i){var n='<li data-title="'+i.name+'" data-url="'+i.url+'" data-index="'+(e+1)+'"><a href="'+i.url+'" data-log_index="'+(e+1)+'" data-log_value="'+i.name+'"data-xftrack="10132_4">'+$.encodeHTML(i.name)+"</a></li>";t.opt.sugContainer.find(".history").append(n)})):t.opt.sugContainer.html($("[data-history='false']").html()),void t.opt.sugContainer.show()}var r=t.now();t.maxSearchTime=Math.max(t.maxSearchTime,r),$.ajax({type:"get",url:"/loupan/search/sug?query="+i,dataType:"json",success:function(e){r>=t.maxSearchTime&&(e&&0===e.errno&&e.data&&e.data.length>0?(t.opt.sugContainer.html(t.opt.template.render({list:e.data})),t.opt.sugContainer.show()):t.opt.sugContainer.hide())}})},200)}),this.opt.sugContainer&&this.opt.sugContainer.on("mousedown","li",function(){var e=$(this),i=e.attr("data-url"),r={name:e.attr("data-title"),url:i};if(n(t.cityId,r),!t.opt.sugContainer.closest(".listSearch").length){var o=t.opt.sugContainer.closest(".indexSearch").length?"xinfang_index_search":"xinfang_list_search";LjUserTrack.send({ljweb_id:"10003",ljweb_mod:o,ljweb_bl:"search",ljweb_el:e.attr("data-title"),ljweb_index:e.attr("data-index"),ljweb_value:$.trim($("#search-input").val()),ljweb_url:e.attr("data-url")})}}),this.opt.form&&this.opt.form.submit(function(){var e=t.opt.input.val();if(""!==$.trim(e)){var i={name:e,url:$(this).attr("data-url")+e};n(t.cityId,i),window.location.pathname="/loupan/rs"+e}return!1}),this.opt.sugContainer&&this.opt.sugContainer.on("click",".set-hisNone",function(){localStorage.removeItem(t.cityId),setTimeout(function(){t.opt.sugContainer.html($(".hotSearchBox").html())})}),$("body").on("click",function(e){e.target===t.opt.input[0]||e.target.closest("#sugBox")||t.opt.sugContainer.hide()})},e.default=r},K4q0:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(){
/*!
     * jquery.scrollLoading.js
     * by zhangxinxu  http://www.zhangxinxu.com
     * 2010-11-19 v1.0
     * 2012-01-13 v1.1 偏移值计算修改 position → offset
     * 2012-09-25 v1.2 增加滚动容器参数, 回调参数
     */
!function(t){t.fn.scrollLoading=function(e){var i={attr:"data-url",container:t(window),callback:t.noop},n=t.extend({},i,e||{});n.cache=[],t(this).each(function(){var e=this.nodeName.toLowerCase(),i=t(this).attr(n.attr),r={obj:t(this),tag:e,url:i};n.cache.push(r)});var r=function(e){t.isFunction(n.callback)&&n.callback.call(e.get(0))},o=function(){var e,i=n.container.height();e=t(window).get(0)===window?t(window).scrollTop():n.container.offset().top,t.each(n.cache,function(t,n){var o=n.obj,a=n.tag,s=n.url;if(o){var l=o.offset().top-e,u=l+o.height();(l>=0&&l<i||u>0&&u<=i)&&(s?"img"===a?r(o.attr("src",s)):o.load(s,{},function(){r(o)}):r(o),n.obj=null)}})};o(),n.container.bind("scroll",o)}}(jQuery),function(t,e,i,n){var r=t(e);t.fn.lazyload=function(n){var o,a=this,s={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:e,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function l(){var e=0;a.each(function(){var i=t(this);if(!s.skip_invisible||i.is(":visible"))if(t.abovethetop(this,s)||t.leftofbegin(this,s));else if(t.belowthefold(this,s)||t.rightoffold(this,s)){if(++e>s.failure_limit)return!1}else i.trigger("appear"),e=0})}return n&&(void 0!==n.failurelimit&&(n.failure_limit=n.failurelimit,delete n.failurelimit),void 0!==n.effectspeed&&(n.effect_speed=n.effectspeed,delete n.effectspeed),t.extend(s,n)),o=void 0===s.container||s.container===e?r:t(s.container),0===s.event.indexOf("scroll")&&o.bind(s.event,function(){return l()}),this.each(function(){var e=this,i=t(e);e.loaded=!1,void 0!==i.attr("src")&&!1!==i.attr("src")||i.is("img")&&i.attr("src",s.placeholder),i.one("appear",function(){if(!this.loaded){if(s.appear){var n=a.length;s.appear.call(e,n,s)}t("<img />").bind("load",function(){var n=i.attr("data-"+s.data_attribute);i.hide(),i.is("img")?i.attr("src",n):i.css("background-image","url('"+n+"')"),i[s.effect](s.effect_speed),e.loaded=!0;var r=t.grep(a,function(t){return!t.loaded});if(a=t(r),s.load){var o=a.length;s.load.call(e,o,s)}}).attr("src",i.attr("data-"+s.data_attribute))}}),0!==s.event.indexOf("scroll")&&i.bind(s.event,function(){e.loaded||i.trigger("appear")})}),r.bind("resize",function(){l()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&r.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&a.each(function(){t(this).trigger("appear")})}),t(i).ready(function(){l()}),this},t.belowthefold=function(i,n){return(void 0===n.container||n.container===e?(e.innerHeight?e.innerHeight:r.height())+r.scrollTop():t(n.container).offset().top+t(n.container).height())<=t(i).offset().top-n.threshold},t.rightoffold=function(i,n){return(void 0===n.container||n.container===e?r.width()+r.scrollLeft():t(n.container).offset().left+t(n.container).width())<=t(i).offset().left-n.threshold},t.abovethetop=function(i,n){return(void 0===n.container||n.container===e?r.scrollTop():t(n.container).offset().top)>=t(i).offset().top+n.threshold+t(i).height()},t.leftofbegin=function(i,n){return(void 0===n.container||n.container===e?r.scrollLeft():t(n.container).offset().left)>=t(i).offset().left+n.threshold+t(i).width()},t.inviewport=function(e,i){return!(t.rightoffold(e,i)||t.leftofbegin(e,i)||t.belowthefold(e,i)||t.abovethetop(e,i))},t.extend(t.expr[":"],{"below-the-fold":function(e){return t.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return t.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!t.rightoffold(e,{threshold:0})},"in-viewport":function(e){return t.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return t.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!t.rightoffold(e,{threshold:0})}})}(jQuery,window,document)}},KyLK:function(t,e,i){"use strict";function n(){var t=-1,e=5e3,i=null;function n(o,a){var s=$(a).find("em").length-1;++t>s&&(t=0),r(o,a,t),i=window.setTimeout(n,e)}function r(t,e,i){$(e).find("em").eq(i).addClass("emon").siblings().removeClass("emon"),$(t).find(".list1").siblings(".list1").hide().eq(i).fadeIn()}this.initSlide=function(o,a){for(var s=$(o).find(".list1"),l=s.length,u="",c=0;c<l;c++)u+="<em></em>";$(a).append(u),$(a).find("em:first").addClass("emon"),s.eq(0).show(),n(o,a),function(o,a){$(a).find("em").hover(function(){if(i){if(clearTimeout(i),$(this).hasClass("emon"))return;t=$(this).prevAll().length,r(o,a,t)}$(".lj-lazy").lazyload()},function(){return i=window.setTimeout(n,e),this.blur(),!1})}(o,a)}}e.__esModule=!0,n.prototype.init=function(t,e){this.initSlide(t,e)},e.default=n},VG0C:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(){!function(t){t.fn.qrcode=function(e){var i;function n(t){this.mode=i,this.data=t}function r(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function o(t,e){if(void 0==t.length)throw Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function a(t,e){this.totalCount=t,this.dataCount=e}function s(){this.buffer=[],this.length=0}n.prototype={getLength:function(){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},r.prototype={addData:function(t){this.dataList.push(new n(t)),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var t=1,t=1;40>t;t++){for(var e=a.getRSBlocks(t,this.errorCorrectLevel),i=new s,n=0,r=0;r<e.length;r++)n+=e[r].dataCount;for(r=0;r<this.dataList.length;r++)e=this.dataList[r],i.put(e.mode,4),i.put(e.getLength(),l.getLengthInBits(e.mode,t)),e.write(i);if(i.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[i][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var i=-1;7>=i;i++)if(!(-1>=t+i||this.moduleCount<=t+i))for(var n=-1;7>=n;n++)-1>=e+n||this.moduleCount<=e+n||(this.modules[t+i][e+n]=0<=i&&6>=i&&(0==n||6==n)||0<=n&&6>=n&&(0==i||6==i)||2<=i&&4>=i&&2<=n&&4>=n)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;8>i;i++){this.makeImpl(!0,i);var n=l.getLostPoint(this);(0==i||t>n)&&(t=n,e=i)}return e},createMovieClip:function(t,e,i){for(t=t.createEmptyMovieClip(e,i),this.make(),e=0;e<this.modules.length;e++)for(var i=1*e,n=0;n<this.modules[e].length;n++){var r=1*n;this.modules[e][n]&&(t.beginFill(0,100),t.moveTo(r,i),t.lineTo(r+1,i),t.lineTo(r+1,i+1),t.lineTo(r,i+1),t.endFill())}return t},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=0==t%2)},setupPositionAdjustPattern:function(){for(var t=l.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],r=t[i];if(null==this.modules[n][r])for(var o=-2;2>=o;o++)for(var a=-2;2>=a;a++)this.modules[n+o][r+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=l.getBCHTypeNumber(this.typeNumber),i=0;18>i;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n}for(i=0;18>i;i++)n=!t&&1==(e>>i&1),this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n},setupTypeInfo:function(t,e){for(var i=l.getBCHTypeInfo(this.errorCorrectLevel<<3|e),n=0;15>n;n++){var r=!t&&1==(i>>n&1);6>n?this.modules[n][8]=r:8>n?this.modules[n+1][8]=r:this.modules[this.moduleCount-15+n][8]=r}for(n=0;15>n;n++)r=!t&&1==(i>>n&1),8>n?this.modules[8][this.moduleCount-n-1]=r:9>n?this.modules[8][15-n-1+1]=r:this.modules[8][15-n-1]=r;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,r=7,o=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[n][a-s]){var u=!1;o<t.length&&(u=1==(t[o]>>>r&1)),l.getMask(e,n,a-s)&&(u=!u),this.modules[n][a-s]=u,-1==--r&&(o++,r=7)}if(0>(n+=i)||this.moduleCount<=n){n-=i,i=-i;break}}}},r.PAD0=236,r.PAD1=17,r.createData=function(t,e,i){for(var e=a.getRSBlocks(t,e),n=new s,o=0;o<i.length;o++){var u=i[o];n.put(u.mode,4),n.put(u.getLength(),l.getLengthInBits(u.mode,t)),u.write(n)}for(o=t=0;o<e.length;o++)t+=e[o].dataCount;if(n.getLengthInBits()>8*t)throw Error("code length overflow. ("+n.getLengthInBits()+">"+8*t+")");for(n.getLengthInBits()+4<=8*t&&n.put(0,4);0!=n.getLengthInBits()%8;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*t)&&(n.put(r.PAD0,8),!(n.getLengthInBits()>=8*t));)n.put(r.PAD1,8);return r.createBytes(n,e)},r.createBytes=function(t,e){for(var i=0,n=0,r=0,a=Array(e.length),s=Array(e.length),u=0;u<e.length;u++){var c=e[u].dataCount,h=e[u].totalCount-c,n=Math.max(n,c),r=Math.max(r,h);a[u]=Array(c);for(var f=0;f<a[u].length;f++)a[u][f]=255&t.buffer[f+i];for(i+=c,f=l.getErrorCorrectPolynomial(h),c=new o(a[u],f.getLength()-1).mod(f),s[u]=Array(f.getLength()-1),f=0;f<s[u].length;f++)h=f+c.getLength()-s[u].length,s[u][f]=0<=h?c.get(h):0}for(f=u=0;f<e.length;f++)u+=e[f].totalCount;for(i=Array(u),f=c=0;f<n;f++)for(u=0;u<e.length;u++)f<a[u].length&&(i[c++]=a[u][f]);for(f=0;f<r;f++)for(u=0;u<e.length;u++)f<s[u].length&&(i[c++]=s[u][f]);return i},i=4;for(var l={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=l.getBCHDigit(e)-l.getBCHDigit(l.G15);)e^=l.G15<<l.getBCHDigit(e)-l.getBCHDigit(l.G15);return(t<<10|e)^l.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=l.getBCHDigit(e)-l.getBCHDigit(l.G18);)e^=l.G18<<l.getBCHDigit(e)-l.getBCHDigit(l.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return l.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case 0:return 0==(e+i)%2;case 1:return 0==e%2;case 2:return 0==i%3;case 3:return 0==(e+i)%3;case 4:return 0==(Math.floor(e/2)+Math.floor(i/3))%2;case 5:return 0==e*i%2+e*i%3;case 6:return 0==(e*i%2+e*i%3)%2;case 7:return 0==(e*i%3+(e+i)%2)%2;default:throw Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),i=0;i<t;i++)e=e.multiply(new o([1,u.gexp(i)],0));return e},getLengthInBits:function(t,e){if(1<=e&&10>e)switch(t){case 1:return 10;case 2:return 9;case i:case 8:return 8;default:throw Error("mode:"+t)}else if(27>e)switch(t){case 1:return 12;case 2:return 11;case i:return 16;case 8:return 10;default:throw Error("mode:"+t)}else{if(!(41>e))throw Error("type:"+e);switch(t){case 1:return 14;case 2:return 13;case i:return 16;case 8:return 12;default:throw Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0;n<e;n++)for(var r=0;r<e;r++){for(var o=0,a=t.isDark(n,r),s=-1;1>=s;s++)if(!(0>n+s||e<=n+s))for(var l=-1;1>=l;l++)0>r+l||e<=r+l||0==s&&0==l||a==t.isDark(n+s,r+l)&&o++;5<o&&(i+=3+o-5)}for(n=0;n<e-1;n++)for(r=0;r<e-1;r++)o=0,t.isDark(n,r)&&o++,t.isDark(n+1,r)&&o++,t.isDark(n,r+1)&&o++,t.isDark(n+1,r+1)&&o++,(0==o||4==o)&&(i+=3);for(n=0;n<e;n++)for(r=0;r<e-6;r++)t.isDark(n,r)&&!t.isDark(n,r+1)&&t.isDark(n,r+2)&&t.isDark(n,r+3)&&t.isDark(n,r+4)&&!t.isDark(n,r+5)&&t.isDark(n,r+6)&&(i+=40);for(r=0;r<e;r++)for(n=0;n<e-6;n++)t.isDark(n,r)&&!t.isDark(n+1,r)&&t.isDark(n+2,r)&&t.isDark(n+3,r)&&t.isDark(n+4,r)&&!t.isDark(n+5,r)&&t.isDark(n+6,r)&&(i+=40);for(r=o=0;r<e;r++)for(n=0;n<e;n++)t.isDark(n,r)&&o++;return t=Math.abs(100*o/e/e-50)/5,i+10*t}},u={glog:function(t){if(1>t)throw Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},c=0;8>c;c++)u.EXP_TABLE[c]=1<<c;for(c=8;256>c;c++)u.EXP_TABLE[c]=u.EXP_TABLE[c-4]^u.EXP_TABLE[c-5]^u.EXP_TABLE[c-6]^u.EXP_TABLE[c-8];for(c=0;255>c;c++)u.LOG_TABLE[u.EXP_TABLE[c]]=c;return o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=u.gexp(u.glog(this.get(i))+u.glog(t.get(n)));return new o(e,0)},mod:function(t){if(0>this.getLength()-t.getLength())return this;for(var e=u.glog(this.get(0))-u.glog(t.get(0)),i=Array(this.getLength()),n=0;n<this.getLength();n++)i[n]=this.get(n);for(n=0;n<t.getLength();n++)i[n]^=u.gexp(u.glog(t.get(n))+e);return new o(i,0).mod(t)}},a.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a.getRSBlocks=function(t,e){var i=a.getRsBlockTable(t,e);if(void 0==i)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=i.length/3,r=[],o=0;o<n;o++)for(var s=i[3*o+0],l=i[3*o+1],u=i[3*o+2],c=0;c<s;c++)r.push(new a(l,u));return r},a.getRsBlockTable=function(t,e){switch(e){case 1:return a.RS_BLOCK_TABLE[4*(t-1)+0];case 0:return a.RS_BLOCK_TABLE[4*(t-1)+1];case 3:return a.RS_BLOCK_TABLE[4*(t-1)+2];case 2:return a.RS_BLOCK_TABLE[4*(t-1)+3]}},s.prototype={get:function(t){return 1==(this.buffer[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},"string"==typeof e&&(e={text:e}),e=t.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},e),this.each(function(){var i;if("canvas"==e.render){(i=new r(e.typeNumber,e.correctLevel)).addData(e.text),i.make();var n=document.createElement("canvas");n.width=e.width,n.height=e.height;for(var o=n.getContext("2d"),a=e.width/i.getModuleCount(),s=e.height/i.getModuleCount(),l=0;l<i.getModuleCount();l++)for(var u=0;u<i.getModuleCount();u++){o.fillStyle=i.isDark(l,u)?e.foreground:e.background;var c=Math.ceil((u+1)*a)-Math.floor(u*a),h=Math.ceil((l+1)*a)-Math.floor(l*a);o.fillRect(Math.round(u*a),Math.round(l*s),c,h)}}else for((i=new r(e.typeNumber,e.correctLevel)).addData(e.text),i.make(),n=t("<table></table>").css("width",e.width+"px").css("height",e.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",e.background),o=e.width/i.getModuleCount(),a=e.height/i.getModuleCount(),s=0;s<i.getModuleCount();s++)for(l=t("<tr></tr>").css("height",a+"px").appendTo(n),u=0;u<i.getModuleCount();u++)t("<td></td>").css("width",o+"px").css("background-color",i.isDark(s,u)?e.foreground:e.background).appendTo(l);i=n,jQuery(i).appendTo(this)})}}(jQuery)}},bsob:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(){return document.cookie.match(/lianjia_token=([^;]+)/)}},gDgk:function(t,e,i){"use strict";var n=c(i("K4q0")),r=c(i("KyLK")),o=c(i("uawX")),a=c(i("61jv")),s=i("m22P"),l=(c(i("VG0C")),c(i("ID1b"))),u=c(i("bsob"));function c(t){return t&&t.__esModule?t:{default:t}}(0,n.default)();var h=$(".recently"),f=$(".clear-all"),d=$("#rencetContainer"),p='<li data-id="#{resblock_id}"><div class="fl"><img class="img" src="#{index_pic}"></div><div class="info fl"><p class="title"><i class="t-til">#{resblock_name}-#{resblock_id}</i></p><p>均价 <span class="price">#{average_price}</span>元/平米</p><p>#{rooms}  #{area_min}-#{area_max}平米</p></div><div class="delete">X</div></li>',g='<div style="margin-top: 100px;line-height: 50px;text-align: center;"><span style="display:block;">没有浏览记录，快去看房吧~~</span></div>',m='<div style="margin-top: 100px;line-height: 50px;text-align: center;"><span style="display:block;">没有找到您的浏览记录，快速登录看房~</span><a style="border: 2px solid #d9d9d9;padding: 10px;color: #888888;">登录查看更多</a></div>',v=function(){$(".loading").hide();var t=(0,u.default)()?g:m;f.hide(),d.parent().append(t)},w=function(t){var e=t.showRecent,i=t.deleteItem;ajax.get(e,function(t){var e=t.data;e.length?function(t,e){var i="";(0,u.default)()&&$(".login-btn").hide();for(var n=0;n<t.length;n++)i+=$.replaceTpl(p,t[n]);f.show(),d.append(i),b.deleteList(e),$(".loading").hide()}(e,i):v()})},b={hCondition:function(){$(".choose").on("mouseenter",function(){$(this).find("ul.items").show()}).on("mouseleave",function(){$(this).find("ul.items").hide()}).on("click","ul.items li",function(){var t=$(this),e=t.text();t.addClass("on").siblings().removeClass("on"),t.parent().siblings(".fix-item").text("").text(e),t.parent().hide()})},recent:function(t){h.on("click",function(){$(this).siblings(".r-container").show(),w(t)}),$(document.body).on("mousedown",function(t){!$(t.target).closest(".r-container").length&&$(".r-container").hide()})},deleteList:function(t){var e=$(".delete"),i=$(".clear-all span");e.on("click",function(){var e=$(this).parent().attr("data-id"),i=t+"?id="+e;$(this).parent().animate({opacity:"0"},500,function(){$(this).remove(),ajax.get(i,function(t){0===$("#rencetContainer").children().length&&v()})})}),i.on("click",function(){var e=t+"?id=clear";ajax.get(e,function(t){d.fadeOut(500,function(){$(this).html(""),v()})})})},locateUrl:function(){var t=$(".xinfang-banner .items");$(".xinfang-banner .fil-btn").on("click",function(){var e=[],i="";t.each(function(){var t=$(this),n=t.find(".on");t.hasClass("district")?i=n.length>0?n.attr("data-filter"):"":n.length>0&&e.push(n.attr("data-filter"))});var n=(i?i+"/":"")+e.join("");window.open("/loupan/"+(n?n+"/":""))})}};!function(t){$(document.body).on("click",".search-btn",function(){LjUserTrack.send({ljweb_id:"10008",ljweb_mod:"xinfang_index_search",ljweb_bl:"search",ljweb_value:$.trim($("#search-input").val()),ljweb_channel:"xinfang",ljweb_ref:document.referrer})}),new o.default({picwrap:'[data-role="marketinfo-picwrap"]',markwrap:'[data-role="marketinfo-markwrap"]',switchCallback:function(t){this.picwrap.find(".lj-lazy").eq(t).lazyload()}}),$.each(t.slide,function(){(new r.default).init(this.itemCon,this.dotCon)}),(0,a.default)(),function(t,e){b.hCondition(),b.recent(e),b.locateUrl()}(t.openUrl,t.recentList),$(".s-city").click(function(t){$(".city-change").show(),$(".city-change").addClass("bounceIn"),$(".overlayBg").fadeIn(300)}),$(".close,.overlayBg").click(function(t){$(".city-change").fadeOut().removeClass("bounceIn"),$(".overlayBg").fadeOut()}),new l.default({input:$(".search"),template:$.template($("#suggestTpl").html()),sugContainer:$("#sugBox"),form:$("#search")}),$(".card").mouseenter(function(t){$(".card").children(".card-container").removeClass("active"),$(this).find(".card-container").addClass("active")}),$(".card .play-btn").on("click",function(){(0,s.playVideo)($(this).attr("data-src"))}),$(".lj-lazy").lazyload()}({slide:[{itemCon:"#itemCon",dotCon:"#list_mark"},{itemCon:"#videoitemCon",dotCon:"#videolist_mark"}],recentList:{showRecent:"/xinfang/history/",deleteItem:"/xinfang/clearhistory"},openUrl:"/loupan/"})},m22P:function(t,e,i){"use strict";e.__esModule=!0;var n=function(t){var e=['<div class="pop-up">','<div class="close-btn video-close video-close2x"></div>','<div class="video-frame">','<iframe src="',t,'" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>',"</div>","</div>"].join("");$(e).appendTo(document.body),$(".close-btn.video-close").on("click",function(){$(".pop-up").remove()})};e.init=function(t){$(".play-btn").on("click",function(){n(t)})},e.playVideo=n},uawX:function(t,e,i){"use strict";function n(t){if(!t||!t.picwrap||!t.markwrap)throw new Error("Pictures wrap or mark wrap not found");this.picwrap=$(t.picwrap),this.markwrap=$(t.markwrap),this.switchCallback=t.switchCallback,this.switchEvent=t.switchEvent||"mouseenter",this.autoSwitch=t.autoSwitch||0,this.picWidth=t.picWidth||this.picwrap.width(),this.picItemcontainer=t.picItemcontainer||this.picwrap.find("ul").eq(0),this.picItemlist=t.picItemlist||this.picItemcontainer.find("li"),this.picAmount=t.picItemlist||this.picItemlist.length,this.markSelectClass=t.markSelectClass||"selected",this.currentIndex=0,this.autoSwitchTimer=null,this.init()}e.__esModule=!0,n.prototype={constructor:n,init:function(){var t=this;this.picItemcontainer.css({width:this.picWidth*this.picAmount+"px"});for(var e=0;e<this.picAmount;e++){var i=0===e?this.markSelectClass:"";this.markwrap.append('<a class="'+i+'">'+e+"</a>")}this.markwrap.on(this.switchEvent,"a",function(){t.switchTo($.inArray(this,t.markwrap.find("a")))}),this.autoSwitch&&this.startAutoSwitch()},switchTo:function(t){(t%=this.picAmount)!==this.currentIndex&&(this.currentIndex=t,this.markwrap.find("."+this.markSelectClass).removeClass(this.markSelectClass),this.markwrap.find("a").eq(t).addClass(this.markSelectClass),this.picwrap.stop().animate({scrollLeft:this.picWidth*t},500),"function"==typeof this.switchCallback&&this.switchCallback(this.currentIndex))},startAutoSwitch:function(){var t=this;this.stopAutoSwitch(),this.autoSwitchTimer=setInterval(function(){t.switchTo(t.currentIndex+1)},this.autoSwitch)},stopAutoSwitch:function(){null!==this.autoSwitchTimer&&clearInterval(this.autoSwitchTimer)}},e.default=n}})});