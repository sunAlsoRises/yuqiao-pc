!function(){function t(t){C.set(t)}function e(t){if(100!=t.get(Be)&&_(pt(t,Le))%1e4>=100*dt(t,Be))throw"abort"}function n(t){if(K(pt(t,Ee)))throw"abort"}function r(){var t=z.location.protocol;if("http:"!=t&&"https:"!=t)throw"abort"}function i(e){try{q.navigator.sendBeacon?t(42):q.XMLHttpRequest&&"withCredentials"in new q.XMLHttpRequest&&t(40)}catch(n){}e.set(de,O(e),!0),e.set(Gt,dt(e,Gt)+1);var r=[];ft.map(function(t,n){if(n.F){var i=e.get(t);void 0!=i&&i!=n.defaultValue&&("boolean"==typeof i&&(i*=1),r.push(n.F+"="+V(""+i)))}}),r.push("z="+ht()),e.set(Pt,r.join("&"),!0)}function a(t){var e=pt(t,Xe)||x()+"/page/track",n=pt(t,Vt);if(!n&&t.get(Et)&&(n="beacon"),n){var r=pt(t,Pt),i=t.get(Mt),i=i||E;"image"==n?rt(e,r,i):"xhr"==n&&it(e,r,i)||"beacon"==n&&at(e,r,i)||nt(e,r,i)}else nt(e,pt(t,Pt),t.get(Mt));var a=t.get(Ee),o=st(a);n=o.hitcount,o.hitcount=n?n+1:1,a=t.get(Ee),delete st(a).pending_experiments,t.set(Mt,E,!0)}function o(t){(q.gaData=q.gaData||{}).expId&&t.set(oe,(q.gaData=q.gaData||{}).expId),(q.gaData=q.gaData||{}).expVar&&t.set(se,(q.gaData=q.gaData||{}).expVar);var e,n=t.get(Ee);if(n=st(n).pending_experiments){var r=[];for(e in n)n.hasOwnProperty(e)&&n[e]&&r.push(encodeURIComponent(e)+"."+encodeURIComponent(n[e]));e=r.join("!")}else e=void 0;e&&t.set(ce,e,!0)}function s(){if(q.navigator&&"preview"==q.navigator.loadPurpose)throw"abort"}function c(t){var e=q.gaDevIds;I(e)&&0!=e.length&&t.set("&did",e.join(","),!0)}function u(t){if(!t.get(Ee))throw"abort"}function h(e){var n=dt(e,le);500<=n&&t(15);var r=pt(e,Lt);if("transaction"!=r&&"item"!=r){var r=dt(e,pe),i=(new Date).getTime(),a=dt(e,ge);if(0==a&&e.set(ge,i),a=Math.round(2*(i-a)/1e3),0<a&&(r=Math.min(r+a,20),e.set(ge,i)),0>=r)throw"abort";e.set(pe,--r)}e.set(le,++n)}function f(e,n,r,i){n[e]=function(){try{return i&&t(i),r.apply(this,arguments)}catch(n){throw ot("exc",e,n&&n.name),n}}}function l(){var t,e,n;if((n=(n=q.navigator)?n.plugins:null)&&n.length)for(var r=0;r<n.length&&!e;r++){var i=n[r];-1<i.name.indexOf("Shockwave Flash")&&(e=i.description)}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version")}catch(a){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version")}catch(a){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=t.GetVariable("$version")}catch(a){}return e&&(t=e.match(/[\d]+/g))&&3<=t.length&&(e=t[0]+"."+t[1]+" r"+t[2]),e||void 0}function g(t,e,n){"none"==e&&(e="");var r=[],i=Y(t);t="__utma"==t?6:2;for(var a=0;a<i.length;a++){var o=(""+i[a]).split(".");o.length>=t&&r.push({hash:o[0],R:i[a],O:o})}if(0!=r.length)return 1==r.length?r[0]:p(e,r)||p(n,r)||p(null,r)||r[0]}function p(t,e){var n,r;null==t?n=r=1:(n=_(t),r=_(L(t,".")?t.substring(1):"."+t));for(var i=0;i<e.length;i++)if(e[i].hash==n||e[i].hash==r)return e[i]}function d(t){var e=t.get(Le),n=v(e,0);return"_ga=1."+V(n+"."+e)}function v(t,e){for(var n=new Date,r=q.navigator,i=r.plugins||[],a=[t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],o=0;o<i.length;++o)a.push(i[o].description);return _(a.join("."))}function m(t,e){if(e==z.location.hostname)return!1;for(var n=0;n<t.length;n++)if(t[n]instanceof RegExp){if(t[n].test(e))return!0}else if(0<=e.indexOf(t[n]))return!0;return!1}function w(t){return 0<=t.indexOf(".")||0<=t.indexOf(":")}function _(t){var e,n,r=1;if(t)for(r=0,n=t.length-1;0<=n;n--)e=t.charCodeAt(n),r=(r<<6&268435455)+e+(e<<14),e=266338304&r,r=0!=e?r^e>>21:r;return r}var y="da.smartisan.com",b="",k="stats.g.doubleclick.net",x=function(){return"https://"+y},S=function(t){this.w=t||[]};S.prototype.set=function(t){this.w[t]=!0},S.prototype.encode=function(){for(var t=[],e=0;e<this.w.length;e++)this.w[e]&&(t[Math.floor(e/6)]^=1<<e%6);for(e=0;e<t.length;e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t.join("")+"~"};var C=new S,A=function(t,e){var n=new S(j(t));n.set(e),t.set(ve,n.w)},O=function(t){for(var e=j(t),n=new S(e),r=C.w.slice(),i=0;i<n.w.length;i++)r[i]=r[i]||n.w[i];return new S(r).encode()},j=function(t){var e=t.get(ve);return I(e)||(e=[]),e},T=function(t){return"function"==typeof t},I=function(t){return"[object Array]"==Object.prototype.toString.call(Object(t))},D=function(t){return void 0!=t&&-1<(t.constructor+"").indexOf("String")},L=function(t,e){return 0==t.indexOf(e)},M=function(t){return t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},P=function(t){var e=z.createElement("img");return e.width=1,e.height=1,e.src=t,e},E=function(){},V=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(t(28),e)},R=function(e,n,r,i){try{e.addEventListener?e.addEventListener(n,r,!!i):e.attachEvent&&e.attachEvent("on"+n,r)}catch(a){t(27)}},U=/^[\w\-:\/.?=&%!]+$/,G=function(t,e,n){t&&(n?(n="",e&&U.test(e)&&(n=' id="'+e+'"'),U.test(t)&&z.write("<script"+n+' src="'+t+'"></script>')):(n=z.createElement("script"),n.type="text/javascript",n.async=!0,n.src=t,e&&(n.id=e),t=z.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)))},N=function(){return"https:"==z.location.protocol},$=function(t,e){var n=t.match("(?:&|#|\\?)"+V(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)");return n&&2==n.length?n[1]:""},F=function(){var t=""+z.location.hostname;return 0==t.indexOf("www.")?t.substring(4):t},H=function(t){var e=z.referrer;if(/^https?:\/\//i.test(e)){if(t)return e;t="//"+z.location.hostname;var n=e.indexOf(t);if((5==n||6==n)&&(t=e.charAt(n+t.length),"/"==t||"?"==t||""==t||":"==t))return;return e}},W=function(t,e){if(1==e.length&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},r=Math.min(t.length+1,e.length),i=0;i<r;i++){if("object"==typeof e[i]){for(var a in e[i])e[i].hasOwnProperty(a)&&(n[a]=e[i][a]);break}i<t.length&&(n[t[i]]=e[i])}return n},B=function(){this.keys=[],this.values={},this.m={}};B.prototype.set=function(t,e,n){this.keys.push(t),n?this.m[":"+t]=e:this.values[":"+t]=e},B.prototype.get=function(t){return this.m.hasOwnProperty(":"+t)?this.m[":"+t]:this.values[":"+t]},B.prototype.map=function(t){for(var e=0;e<this.keys.length;e++){var n=this.keys[e],r=this.get(n);r&&t(n,r)}};var q=window,z=document,X=window,K=function(t){var e=X._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===X["ga-disable-"+t])return!0;try{var n=X.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(r){}return!1},Y=function(t){for(var e=[],n=z.cookie.split(";"),r=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$"),i=0;i<n.length;i++){var a=n[i].match(r);a&&e.push(a[1])}return e},Z=function(e,n,r,i,a,o){if(a=!K(a)&&!(tt.test(z.location.hostname)||"/"==r&&Q.test(i)),!a)return!1;if(n&&1200<n.length&&(n=n.substring(0,1200),t(24)),r=e+"="+n+"; path="+r+"; ",o&&(r+="expires="+new Date((new Date).getTime()+o).toGMTString()+"; "),i&&"none"!=i&&(r+="domain="+i+";"),i=z.cookie,z.cookie=r,!(i=i!=z.cookie))t:{for(e=Y(e),i=0;i<e.length;i++)if(n==e[i]){i=!0;break t}i=!1}return i},J=function(t){return V(t).replace(/\(/g,"%28").replace(/\)/g,"%29")},Q=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tt=/(^|\.)doubleclick\.net$/i,et=function(t){this.name="len",this.message=t+"-8192"},nt=function(t,e,n){if(n=n||E,!(8192>=e.length))throw ot("len",e.length),new et(e.length);it(t,e,n)},rt=function(t,e,n){var r=P(t+"?"+e),i="_img_"+Math.random();window[i]=r,r.onload=r.onerror=function(){r.onload=null,r.onerror=null,window[i]=null,n()}},it=function(t,e,n){var r=q.XMLHttpRequest;if(!r)return!1;var i=new r;return"withCredentials"in i&&(i.open("GET",t+"?"+e,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onreadystatechange=function(){4==i.readyState&&(n(),i=null)},i.send(),!0)},at=function(t,e,n){return!!q.navigator.sendBeacon&&(!!q.navigator.sendBeacon(t,e)&&(n(),!0))},ot=function(t,e,n){1<=100*Math.random()||K("?")||(t=["t=error","_e="+t,"_v=j47","sr=1"],e&&t.push("_f="+e),n&&t.push("_m="+V(n.substring(0,100))),t.push("aip=1"),t.push("z="+ut()),rt(x()+"/page/track",t.join("&"),E))},st=function(t){var e=q.gaData=q.gaData||{};return e[t]=e[t]||{}},ct=function(){this.M=[]};ct.prototype.add=function(t){this.M.push(t)},ct.prototype.D=function(t){try{for(var e=0;e<this.M.length;e++){var n=t.get(this.M[e]);n&&T(n)&&n.call(q,t)}}catch(r){}var i=t.get(Mt);i!=E&&T(i)&&(t.set(Mt,E,!0),setTimeout(i,10))};var ut=function(){return Math.round(2147483647*Math.random())},ht=function(){try{var t=new Uint32Array(1);return q.crypto.getRandomValues(t),2147483647&t[0]}catch(e){return ut()}},ft=new B,lt=[],gt=function(){this.data=new B};gt.prototype.get=function(t){var e=wt(t),n=this.data.get(t);return e&&void 0==n&&(n=T(e.defaultValue)?e.defaultValue():e.defaultValue),e&&e.Z?e.Z(this,t,n):n},gt.prototype.set=function(t,e,n){if(t)if("object"==typeof t)for(var r in t)t.hasOwnProperty(r)&&vt(this,r,t[r],n);else vt(this,t,e,n)};var pt=function(t,e){var n=t.get(e);return void 0==n?"":""+n},dt=function(t,e){var n=t.get(e);return void 0==n||""===n?0:1*n},vt=function(t,e,n,r){if(void 0!=n)switch(e){case Ee:An.test(n)}var i=wt(e);i&&i.o?i.o(t,e,n,r):t.data.set(e,n,r)},mt=function(t,e,n,r,i){this.name=t,this.F=e,this.Z=r,this.o=i,this.defaultValue=n},wt=function(t){var e=ft.get(t);if(!e)for(var n=0;n<lt.length;n++){var r=lt[n],i=r[0].exec(t);if(i){e=r[1](i),ft.set(e.name,e);break}}return e},_t=function(t){var e;return ft.map(function(n,r){r.F==t&&(e=r)}),e&&e.name},yt=function(t,e,n,r,i){var a=new mt(t,e,n,r,i);return ft.set(a.name,a),a.name},bt=function(t,e){lt.push([new RegExp("^"+t+"$"),e])},kt=function(t,e,n){return yt(t,e,n,void 0,xt)},xt=function(){},St=function(t){var e=z.location.href;if(t&&e.indexOf(t)>=0&&e.indexOf("?")>=0)for(var n=e.split(/[?&#]+/),r=0;r<n.length;r++)if(n[r].indexOf(t+"=")>=0)return n[r].split(t+"=")[1]},Ct=function(t){var e="smart_b_user",n=Y(e);if(!n||n.length<=0){n=ht()+"."+ht();var r=63072e6;Z(e,n,"/",t,"",r)}return n},At=function(t){var e={sessionId:"",sessionSource:"",utmSource:"",utmMedium:"",utmCampaign:"",utmTerm:"",utmContent:""},n=!1,r="smart_ss_id",i="smart_ss_s",a="smart_ss_d",o=Y(a);o=o&&o.length>0?Math.round(o[0]):0;var s=Y(r);s&&s.length>0&&(s=s[0]);var c=Y(i);c&&c.length>0&&(c=c[0]);var u=St("utm_source")||"",h="smart_utmsor",f=Y(h);f=f&&f.length>0?f[0]:"";var l=St("utm_medium")||"",g="smart_utmmed",p=Y(g)||"";p=p&&p.length>0?p[0]:"";var d=St("utm_campaign")||"",v="smart_utmcam",m=Y(v)||"";m=m&&m.length>0?m[0]:"";var w=St("utm_term")||"",_="smart_uttrm",y=Y(_)||"";y=y&&y.length>0?y[0]:"";var b=St("utm_content")||"",k="smart_utmcnt",x=Y(k)||"";x=x&&x.length>0?x[0]:"";var S=z.referrer||"";(!S||S.indexOf(t)>=0)&&(S="");var C=(new Date).getTime(),A=ht()+""+ht(),O=36e5;return Z(a,C,"/",t,"",2*O),!s||s.length<=0?(Z(r,A,"/",t,"",O),Z(i,S,"/",t,"",O),e.sessionId=A,e.sessionSource=S,n=!0):u&&""!=u&&u!=f?(Z(r,A,"/",t,"",O),Z(i,S,"/",t,"",O),e.sessionId=A,e.sessionSource=S,n=!0):S&&""!=S&&s!=S?(Z(r,A,"/",t,"",O),Z(i,S,"/",t,"",O),e.sessionId=A,e.sessionSource=S,n=!0):o>0&&(new Date).getDay()>new Date(o).getDay()?(Z(r,A,"/",t,"",O),Z(i,S,"/",t,"",O),e.sessionId=A,e.sessionSource=S,n=!0):(Z(r,s,"/",t,"",O),Z(i,c,"/",t,"",O),e.sessionId=s,e.sessionSource=c,n=!1),u&&""!=u?(Z(h,u,"/",t,"",O),Z(g,l,"/",t,"",O),Z(v,d,"/",t,"",O),Z(_,w,"/",t,"",O),Z(k,b,"/",t,"",O),p=l,m=d,y=w,x=b):n?(Z(h,"","/",t,"",-1),Z(g,"","/",t,"",-1),Z(v,"","/",t,"",-1),Z(_,"","/",t,"",-1),Z(k,"","/",t,"",-1),f="",p="",m="",y="",x=""):(Z(h,f,"/",t,"",O),Z(g,p,"/",t,"",O),Z(v,m,"/",t,"",O),Z(_,y,"/",t,"",O),Z(k,x,"/",t,"",O)),e.utmSource=u||f,e.utmMedium=l||p,e.utmCampaign=d||m,e.utmTerm=w||y,e.utmContent=b||x,e},Ot="smartisanAnalytics",jt=!1,Tt=kt("apiVersion","v"),It=kt("clientVersion","_v");yt("anonymizeIp","aip");var Dt=yt("adSenseId","a"),Lt=yt("hitType","t"),Mt=yt("hitCallback"),Pt=yt("hitPayload");yt("nonInteraction","ni"),yt("currencyCode","cu"),yt("dataSource","ds");var Et=yt("useBeacon",void 0,!1),Vt=yt("transport");yt("eventId","ei"),yt("eventDetail","ed"),yt("utm_source","cs",function(){return At(b).utmSource}),yt("utm_medium","cm",function(){return At(b).utmMedium}),yt("utm_campaign","cn",function(){return At(b).utmCampaign});yt("session_id","sd",function(){return At(b).sessionId}),yt("session_source","ss",function(){return At(b).sessionSource}),yt("b_userid","u",function(){return Ct(b)});var Rt=window.navigator.userAgent.toLowerCase(),Ut=document.location.hostname;window.StoreApp?"Android"==storeApp.getPlatform()?Z("product_name","Android_App_SmartisanShop","/",Ut,""):"iOS"==storeApp.getPlatform()&&Z("product_name","iOS_App_SmartisanShop","/",Ut,""):window.AirCleaner?Z("product_name","Android_App_AirCleanerShop","/",Ut,""):"miniprogram"===window.__wxjs_environment?Z("product_name","WeChat_App_SmartisanShop","/",Ut,""):/iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(Rt)&&!/ipad/i.test(Rt)?Z("product_name","Mobile_WebSite_SmartisanShop","/",Ut,""):Z("product_name","PC_WebSite_SmartisanShop","/",Ut,""),yt("referrer_f","rf",function(){var t=window.document.referrer;return Z("smart_referer",t,"/",b,""),t}),yt("sessionControl","sc",""),yt("sessionGroup","sg"),yt("queueTime","qt");var Gt=yt("_s","_s");yt("screenName","cd");var Nt=(yt("locationURL","ul",function(){return z.location.href||void 0}),yt("location","dl",""),yt("referrer","dr")),$t=yt("page","dp","");yt("hostname","dh");var Ft=yt("language","la"),Ht=yt("encoding","de");yt("title","tt",function(){return z.title||void 0}),bt("contentGroup([0-9]+)",function(t){return new mt(t[0],"cg"+t[1])});var Wt=yt("screenColors","sl"),Bt=yt("screenResolution","rl"),qt=yt("viewportSize","vp"),zt=yt("javaEnabled","je"),Xt=yt("flashVersion","fl");yt("campaignId","ci"),yt("campaignName","cn"),yt("campaignSource","cs"),yt("campaignMedium","cm"),yt("campaignKeyword","ck"),yt("campaignContent","cc");var Kt=yt("eventCategory","ec"),Yt=yt("eventAction","ea"),Zt=yt("eventLabel","el"),Jt=yt("eventValue","ev"),Qt=yt("socialNetwork","sn"),te=yt("socialAction","sa"),ee=yt("socialTarget","st"),ne=(yt("l1","plt"),yt("l2","pdt"),yt("l3","dns"),yt("l4","rrt"),yt("l5","srt"),yt("l6","tcp"),yt("l7","dit"),yt("l8","clt"),yt("timingCategory","utc")),re=yt("timingVar","utv"),ie=yt("timingLabel","utl"),ae=yt("timingValue","utt");yt("appName","an"),yt("appVersion","av",""),yt("appId","aid",""),yt("appInstallerId","aiid",""),yt("exDescription","exd"),yt("exFatal","exf");var oe=yt("expId","xid"),se=yt("expVar","xvar"),ce=yt("exp","exp"),ue=yt("_utma","_utma"),he=yt("_utmz","_utmz"),fe=yt("_utmht","_utmht"),le=yt("_hc",void 0,0),ge=yt("_ti",void 0,0),pe=yt("_to",void 0,20);bt("dimension([0-9]+)",function(t){return new mt(t[0],"cd"+t[1])}),bt("metric([0-9]+)",function(t){return new mt(t[0],"cm"+t[1])}),yt("linkerParam",void 0,void 0,d,xt);var de=yt("usage","_u"),ve=yt("_um");yt("forceSSL",void 0,void 0,function(){return jt},function(e,n,r){t(34),jt=!!r});var me=yt("_j1","jid");bt("\\&(.*)",function(t){var e=new mt(t[0],t[1]),n=_t(t[0].substring(1));return n&&(e.Z=function(t){return t.get(n)},e.o=function(t,e,r,i){t.set(n,r,i)},e.F=void 0),e});var we=kt("_oot"),_e=yt("previewTask"),ye=yt("checkProtocolTask"),be=yt("validationTask"),ke=yt("checkStorageTask"),xe=yt("historyImportTask"),Se=yt("samplerTask"),Ce=yt("_rlt"),Ae=yt("buildHitTask"),Oe=yt("sendHitTask"),je=yt("ceTask"),Te=yt("devIdTask"),Ie=(yt("timingTask"),yt("displayFeaturesTask")),De=kt("name"),Le=kt("clientId","ci"),Me=kt("clientIdTime"),Pe=yt("userId","cd"),Ee=kt("trackingId","tid"),Ve=kt("cookieName",void 0,"_ga"),Re=kt("cookieDomain"),Ue=kt("cookiePath",void 0,"/"),Ge=kt("cookieExpires",void 0,63072e3),Ne=kt("legacyCookieDomain"),$e=kt("legacyHistoryImport",void 0,!0),Fe=kt("storage",void 0,"cookie"),He=kt("allowLinker",void 0,!1),We=kt("allowAnchor",void 0,!0),Be=kt("sampleRate","sf",100),qe=kt("siteSpeedSampleRate",void 0,1),ze=kt("alwaysSendReferrer",void 0,!1),Xe=yt("transportUrl"),Ke=yt("_r","_r"),Ye=function(t){this.V=t,this.fa=void 0,this.$=!1,this.oa=void 0,this.ea=1},Ze=function(t,e){var n;if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.oa&&dt(e,t.oa))return dt(e,t.oa);if(0==e.get(qe))return 0}return 0==t.V?0:(void 0===n&&(n=ht()),0==n%t.V?Math.floor(n/t.V)%t.ea+1:0)},Je=!1,Qe=function(e){if("cookie"==pt(e,Fe)){var n=pt(e,Ve),r=nn(e),i=on(pt(e,Ue)),a=an(pt(e,Re)),o=1e3*dt(e,Ge),s=pt(e,Ee);if("auto"!=a)Z(n,r,i,a,s,o)&&(Je=!0),b=a;else{t(32);var c;if(r=[],a=F().split("."),4!=a.length||(c=a[a.length-1],parseInt(c,10)!=c)){for(c=a.length-2;0<=c;c--)r.push(a.slice(c).join("."));r.push("none"),c=r}else c=["none"];for(var u=0;u<c.length;u++)if(a=c[u],e.data.set(Re,a),r=nn(e),Z(n,r,i,a,s,o))return void(Je=!0);b=a,e.data.set(Re,"auto")}}},tn=function(t){if("cookie"==pt(t,Fe)&&!Je&&(Qe(t),!Je))throw"abort"},en=function(e){if(e.get($e)){var n=pt(e,Re),r=pt(e,Ne)||F(),i=g("__utma",r,n);i&&(t(19),e.set(fe,(new Date).getTime(),!0),e.set(ue,i.R),(n=g("__utmz",r,n))&&i.hash==n.hash&&e.set(he,n.R))}},nn=function(t){var e=J(pt(t,Le)),n=an(pt(t,Re)).split(".").length,r=sn(pt(t,Ue));return 1<r&&(n+="-"+r),["GA1",n,e].join(".")},rn=function(t,e,n){for(var r,i=[],a=[],o=0;o<t.length;o++){var s=t[o];s.H[n]==e?i.push(s):void 0==r||s.H[n]<r?(a=[s],r=s.H[n]):s.H[n]==r&&a.push(s)}return 0<i.length?i:a},an=function(t){return 0==t.indexOf(".")?t.substr(1):t},on=function(t){return t?(1<t.length&&t.lastIndexOf("/")==t.length-1&&(t=t.substr(0,t.length-1)),0!=t.indexOf("/")&&(t="/"+t),t):"/"},sn=function(t){var e=on(t);return"/"==e?1:e.split("/").length},cn=new RegExp(/^https?:\/\/([^\/:]+)/),un=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,hn=function(e){t(48),this.target=e,this.T=!1};hn.prototype.ca=function(t,e){if(t.tagName){if("a"==t.tagName.toLowerCase())return void(t.href&&(t.href=fn(this,t.href,e)));if("form"==t.tagName.toLowerCase())return ln(this,t)}if("string"==typeof t)return fn(this,t,e)};var fn=function(t,e,n){var r=un.exec(e);r&&3<=r.length&&(e=r[1]+(r[3]?r[2]+r[3]:"")),t=t.target.get("linkerParam");var i=e.indexOf("?"),a=e.indexOf("#");return n?e+=(-1==a?"#":"&")+t:(n=-1==i?"?":"&",e=-1==a?e+(n+t):e.substring(0,a)+n+t+e.substring(a)),e=e.replace(/&+_ga=/,"&_ga=")},ln=function(t,e){if(e&&e.action){var n=t.target.get("linkerParam").split("=")[1];if("get"==e.method.toLowerCase()){for(var r=e.childNodes||[],i=0;i<r.length;i++)if("_ga"==r[i].name)return void r[i].setAttribute("value",n);var a=z.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name","_ga"),a.setAttribute("value",n),e.appendChild(a)}else"post"==e.method.toLowerCase()&&(e.action=fn(t,e.action))}};hn.prototype.S=function(e,n,r){function i(r){try{r=r||q.event;var i;t:{for(var o=r.target||r.srcElement,s=100;o&&0<s;){if(o.href&&o.nodeName.match(/^a(?:rea)?$/i)){i=o;break t}o=o.parentNode,s--}i={}}("http:"==i.protocol||"https:"==i.protocol)&&m(e,i.hostname||"")&&i.href&&(i.href=fn(a,i.href,n))}catch(c){t(26)}}var a=this;this.T||(this.T=!0,R(z,"mousedown",i,!1),R(z,"keyup",i,!1)),r&&R(z,"submit",function(t){if(t=t||q.event,(t=t.target||t.srcElement)&&t.action){var n=t.action.match(cn);n&&m(e,n[1])&&ln(a,t)}})};var gn=/^(GTM|OPT)-[A-Z0-9]+$/,pn=/;_gaexp=[^;]*/g,dn=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,vn=function(t){function e(t,e){e&&(n+="&"+t+"="+V(e))}var n="https://"+y+"/gtm/js?id="+V(t.id);return"dataLayer"!=t.B&&e("l",t.B),e("t",t.target),e("u",t.ja),e("cidt",t.ka),e("gac",t.la),e("aip",t.ia),t.na&&e("m","sync"),e("cycle",t.G),n},mn=function(e,n,r){this.U=me,this.aa=n,(n=r)||(n=(n=pt(e,De))&&"t0"!=n?kn.test(n)?"_gat_"+J(pt(e,Ee)):"_gat_"+J(n):"_gat"),this.Y=n,Ze(new Ye(100),e)&&(t(30),this.pa=!0)},wn=function(t,e){var n=e.get(Ae);e.set(Ae,function(e){_n(t,e);var r=n(e);return yn(t,e),r});var r=e.get(Oe);e.set(Oe,function(e){var n=r(e);return bn(t,e),n})},_n=function(t,e){e.get(t.U)||("1"==Y(t.Y)[0]?e.set(t.U,"",!0):e.set(t.U,""+ut(),!0))},yn=function(t,e){if(e.get(t.U)){var n=6e5;t.pa&&(n/=10),Z(t.Y,"1",e.get(Ue),e.get(Re),e.get(Ee),n)}},bn=function(t,e){if(e.get(t.U)){var n=new B,r=function(t){wt(t).F&&n.set(wt(t).F,e.get(t))};r(Tt),r(It),r(Ee),r(Le),r(Pe),r(t.U),n.set(wt(de).F,O(e));var i=t.aa;n.map(function(t,e){i+=V(t)+"=",i+=V(""+e)+"&"}),i+="z="+ut(),P(i),e.set(t.U,"",!0)}},kn=/^gtm\d+$/,xn=function(t,e){var n=t.b;if(!n.get("dcLoaded")){A(n,29),e=e||{};var r;e[Ve]&&(r=J(e[Ve]));var i=new mn(n,"https://"+k+"/r/collect?t=dc&aip=1&_r=3&",r);wn(i,n),n.set("dcLoaded",!0)}},Sn=function(t){if(!t.get("dcLoaded")&&"cookie"==t.get(Fe)){A(t,51);var e=new mn(t);_n(e,t),yn(e,t),t.get(e.U)&&(t.set(Ke,1,!0),t.set(Xe,x()+"/page/track",!0))}},Cn=function(){var t=q.gaGlobal=q.gaGlobal||{};return t.hid=t.hid||ut()},An=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,On=function(t){function f(t,e){g.b.data.set(t,e)}function l(t,e){f(t,e),g.filters.add(t)}var g=this;this.b=new gt,this.filters=new ct,f(De,t[De]),f(Ee,M(t[Ee])),f(Ve,t[Ve]),f(Re,t[Re]||F()),f(Ue,t[Ue]),f(Ge,t[Ge]),f(Ne,t[Ne]),f($e,t[$e]),f(He,t[He]),f(We,t[We]),f(Be,t[Be]),f(qe,t[qe]),f(ze,t[ze]),f(Fe,t[Fe]),f(Pe,t[Pe]),f(Me,t[Me]),f(Tt,1),f(It,"j47"),l(we,n),l(_e,s),l(ye,r),l(be,u),l(ke,tn),l(xe,en),l(Se,e),l(Ce,h),l(je,o),l(Te,c),l(Ie,Sn),l(Ae,i),l(Oe,a),jn(this.b,t[Le]),Tn(this.b),this.b.set(Dt,Cn())},jn=function(e,n){if("cookie"==pt(e,Fe)){Je=!1;var r;t:{var i=Y(pt(e,Ve));if(i&&!(1>i.length)){r=[];for(var a=0;a<i.length;a++){var o;o=i[a].split(".");var s=o.shift();("GA1"==s||"1"==s)&&1<o.length?(s=o.shift().split("-"),1==s.length&&(s[1]="1"),s[0]*=1,s[1]*=1,o={H:s,s:o.join(".")}):o=void 0,o&&r.push(o)}if(1==r.length){t(13),r=r[0].s;break t}if(0!=r.length){if(t(14),i=an(pt(e,Re)).split(".").length,r=rn(r,i,0),1==r.length){r=r[0].s;break t}i=sn(pt(e,Ue)),r=rn(r,i,1),r=r[0]&&r[0].s;break t}t(12)}r=void 0}r||(r=pt(e,Re),i=pt(e,Ne)||F(),r=g("__utma",i,r),void 0!=r?(t(10),r=r.O[1]+"."+r.O[2]):r=void 0),r&&(e.data.set(Le,r),Je=!0)}if(r=e.get(We),(a=$(z.location[r?"href":"search"],"_ga"))&&(e.get(He)?(r=a.indexOf("."),-1==r?t(22):(i=a.substring(r+1),"1"!=a.substring(0,r)?t(22):(r=i.indexOf("."),-1==r?t(22):(a=i.substring(0,r),r=i.substring(r+1),a!=v(r,0)&&a!=v(r,-1)&&a!=v(r,-2)?t(23):(t(11),e.data.set(Le,r)))))):t(21)),n&&(t(9),e.data.set(Le,V(n))),!e.get(Le))if(r=(r=q.gaGlobal&&q.gaGlobal.vid)&&-1!=r.search(/^(?:utma\.)?\d+\.\d+$/)?r:void 0)t(17),e.data.set(Le,r);else{for(t(8),r=q.navigator.userAgent+(z.cookie?z.cookie:"")+(z.referrer?z.referrer:""),i=r.length,a=q.history.length;0<a;)r+=a--^i++;e.data.set(Le,[ut()^2147483647&_(r),Math.round((new Date).getTime()/1e3)].join("."))}Qe(e)},Tn=function(e){var n=q.navigator,r=q.screen,i=z.location;if(e.set(Nt,H(e.get(ze))),i){var a=i.pathname||"";"/"!=a.charAt(0)&&(t(31),a="/"+a)}r&&e.set(Bt,r.width+"x"+r.height),r&&e.set(Wt,r.colorDepth+"-bit"),Z("smart_resolution",r.width+"x"+r.height,"/",document.location.hostname,"");var r=z.documentElement,o=(a=z.body)&&a.clientWidth&&a.clientHeight,s=[];if(r&&r.clientWidth&&r.clientHeight&&("CSS1Compat"===z.compatMode||!o)?s=[r.clientWidth,r.clientHeight]:o&&(s=[a.clientWidth,a.clientHeight]),r=0>=s[0]||0>=s[1]?"":s.join("x"),e.set(qt,r),e.set(Xt,l()),e.set(Ht,z.characterSet||z.charset),e.set(zt,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),e.set(Ft,(n&&(n.language||n.browserLanguage)||"").toLowerCase()),i&&e.get(We)&&(n=z.location.hash))for(n=n.split(/[?&#]+/),i=[],r=0;r<n.length;++r)(L(n[r],"utm_id")||L(n[r],"utm_campaign")||L(n[r],"utm_source")||L(n[r],"utm_medium")||L(n[r],"utm_term")||L(n[r],"utm_content")||L(n[r],"gclid")||L(n[r],"dclid")||L(n[r],"gclsrc"))&&i.push(n[r])};On.prototype.get=function(t){return this.b.get(t)},On.prototype.set=function(t,e){this.b.set(t,e)};var In={pageview:[$t],event:[Kt,Yt,Zt,Jt],social:[Qt,te,ee],timing:[ne,re,ae,ie]};On.prototype.send=function(t){if(!(1>arguments.length)){var e,n;"string"==typeof arguments[0]?(e=arguments[0],n=[].slice.call(arguments,1)):(e=arguments[0]&&arguments[0][Lt],n=arguments),e&&(n=W(In[e]||[],n),n[Lt]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b.data.m={})}},On.prototype.ma=function(t,e){var n=this;Gn(t,n,e)||($n(t,function(){Gn(t,n,e)}),Nn(String(n.get(De)),t,void 0,e,!0))};var Dn,Ln,Mn,Pn,En=function(t){return"prerender"!=z.visibilityState&&(t(),!0)},Vn=function(e){if(!En(e)){t(16);var n=!1,r=function(){if(!n&&En(e)){n=!0;var t=r,i=z;i.removeEventListener?i.removeEventListener("visibilitychange",t,!1):i.detachEvent&&i.detachEvent("onvisibilitychange",t)}};R(z,"visibilitychange",r)}},Rn=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Un=function(t){if(T(t[0]))this.u=t[0];else{var e=Rn.exec(t[0]);if(null!=e&&4==e.length&&(this.c=e[1]||"t0",this.K=e[2]||"",this.C=e[3],this.a=[].slice.call(t,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(D(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.C)throw"abort";if(this.i&&(!D(e)||""==e))throw"abort";if(this.g&&(!D(e)||""==e||!T(t)))throw"abort";if(w(this.c)||w(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};Dn=new B,Mn=new B,Pn=new B,Ln={ec:45,ecommerce:46,linkid:47};var Gn=function(t,e,n){e==qn||e.get(De);var r=Dn.get(t);return!!T(r)&&(e.plugins_=e.plugins_||new B,!!e.plugins_.get(t)||(e.plugins_.set(t,new r(e,n||{})),!0))},Nn=function(e,n,r,i,a){if(!T(Dn.get(n))&&!Mn.get(n)){if(Ln.hasOwnProperty(n)&&t(Ln[n]),gn.test(n)){t(52);var o=qn.j(e);if(!o)return!0;r=i||{},i={id:n,B:r.dataLayer||"dataLayer",ia:!!o.get("anonymizeIp"),na:a,G:!1},o.get("&gtm")==n&&(i.G=!0);var s=String(o.get("name"));"t0"!=s&&(i.target=s),K(String(o.get("trackingId")))||(i.ja=String(o.get(Le)),i.ka=Number(o.get(Me)),o=r.palindrome?dn:pn,o=(o=z.cookie.replace(/^|(; +)/g,";").match(o))?o.sort().join("").substring(1):void 0,i.la=o);var c=i.B;r=(new Date).getTime(),q[c]=q[c]||[],r={"gtm.start":r},a||(r.event="gtm.js"),q[c].push(r),r=vn(i)}!r&&Ln.hasOwnProperty(n)?(t(39),r=n+".js"):t(43);var u,h,f;r&&(r&&0<=r.indexOf("/")||(r=(jt||N()?"https:":"http:")+"//"+y+"/plugins/ua/"+r),u=Wn(r),h=u.protocol,f=z.location.protocol,("https:"==h||h==f||("http:"!=h?0:"http:"==f))&&Hn(u)&&(G(u.url,void 0,a),Mn.set(n,!0)))}},$n=function(t,e){var n=Pn.get(t)||[];n.push(e),Pn.set(t,n)},Fn=function(t,e){Dn.set(t,e);for(var n=Pn.get(t)||[],r=0;r<n.length;r++)n[r]();Pn.set(t,[])},Hn=function(t){var e=Wn(z.location.href);if(L(t.url,"https://"+y+"/gtm/js?id="))return!0;if(t.query||0<=t.url.indexOf("?")||0<=t.path.indexOf("://"))return!1;if(t.host==e.host&&t.port==e.port)return!0;var n="http:"==t.protocol?80:443;return!(y!=t.host||(t.port||n)!=n||!L(t.path,"/plugins/"))},Wn=function(t){function e(t){var e=(t.hostname||"").split(":")[0].toLowerCase(),n=(t.protocol||"").toLowerCase(),r=1*t.port||("http:"==n?80:"https:"==n?443:""),i=t.pathname||"";return L(i,"/")||(i="/"+i),[e,""+r,i]}var n=z.createElement("a");n.href=z.location.href;var r=(n.protocol||"").toLowerCase(),i=e(n),a=n.search||"",o=r+"//"+i[0]+(i[1]?":"+i[1]:"");L(t,"//")?t=r+t:L(t,"/")?t=o+t:!t||L(t,"?")?t=o+i[2]+(t||a):0>t.split("/")[0].indexOf(":")&&(t=o+i[2].substring(0,i[2].lastIndexOf("/"))+"/"+t),n.href=t;var s=e(n);return{protocol:(n.protocol||"").toLowerCase(),host:s[0],port:s[1],path:s[2],query:n.search||"",url:t||""}},Bn={ga:function(){Bn.f=[]}};Bn.ga(),Bn.D=function(t){var e=Bn.J.apply(Bn,arguments),n=Bn.f.concat(e);for(Bn.f=[];0<n.length&&!Bn.v(n[0])&&(n.shift(),!(0<Bn.f.length)););Bn.f=Bn.f.concat(n)},Bn.J=function(t){for(var e=[],n=0;n<arguments.length;n++)try{var r=new Un(arguments[n]);r.g?Fn(r.a[0],r.a[1]):(r.i&&(r.ha=Nn(r.c,r.a[0],r.X,r.W)),e.push(r))}catch(i){}return e},Bn.v=function(t){try{if(t.u)t.u.call(q,qn.j("t0"));else{var e=t.c==Ot?qn:qn.j(t.c);if(t.A)"t0"!=t.c||qn.create.apply(qn,t.a);else if(t.ba)qn.remove(t.c);else if(e)if(t.i){if(t.ha&&(t.ha=Nn(t.c,t.a[0],t.X,t.W)),!Gn(t.a[0],e,t.W))return!0}else if(t.K){var n=t.C,r=t.a,i=e.plugins_.get(t.K);i[n].apply(i,r)}else e[t.C].apply(e,t.a)}}catch(a){}};var qn=function(e){t(1),Bn.D.apply(Bn,[arguments])};qn.h={},qn.P=[],qn.L=0,qn.answer=42;var zn=[Ee,Re,De];qn.create=function(){var t=W(zn,[].slice.call(arguments));t[De]||(t[De]="t0");var e=""+t[De];if(qn.h[e])return qn.h[e];var n=new On(t);return qn.h[e]=n,qn.P.push(n),n},qn.remove=function(t){for(var e=0;e<qn.P.length;e++)if(qn.P[e].get(De)==t){qn.P.splice(e,1),qn.h[t]=null;break}},qn.j=function(t){return qn.h[t]},qn.getAll=function(){return qn.P.slice(0)},qn.N=function(){"ga"!=Ot&&t(49);var e=q[Ot];if(!e||42!=e.answer){qn.L=e&&e.l,qn.loaded=!0;var n=q[Ot]=qn;f("create",n,n.create),f("remove",n,n.remove),f("getByName",n,n.j,5),f("getAll",n,n.getAll,6);var r=On.prototype;f("get",r,r.get,7),f("set",r,r.set,4),f("send",r,r.send),f("requireSync",r,r.ma);var i=gt.prototype;f("get",i,i.get),f("set",i,i.set);var a=!1;if(!N()&&!jt){t:for(var o=z.getElementsByTagName("script"),s=0;s<o.length&&100>s;s++){var c=o[s].src;if(c&&0==c.indexOf("https://"+y+"/analytics")){t(33),a=!0;break t}}a&&(jt=!0)}N()||jt||!Ze(new Ye(1e4))||(t(36),jt=!0),(q.gaplugins=q.gaplugins||{}).Linker=hn;var u=hn.prototype;Fn("linker",hn),f("decorate",u,u.ca,20),f("autoLink",u,u.S,25),Fn("displayfeatures",xn),Fn("adfeatures",xn),e=e&&e.q,I(e)?Bn.D.apply(qn,e):t(50)}},qn.da=function(){for(var t=qn.getAll(),e=0;e<t.length;e++)t[e].get(De)};var Xn=qn.N,Kn=q[Ot];Kn&&Kn.r?Xn():Vn(Xn),Vn(function(){Bn.D(["provide","render",E])})}(window);