﻿function YDBOBJ() {
    this.YundabaoUA = navigator.userAgent.toLowerCase();
    this.isIos = this.YundabaoUA.match(/(iphone|ipod|ipad);?/i);
    this.isAndroid = this.YundabaoUA.match(/android/i);
    this.isWindows = this.YundabaoUA.match(/windows/i)
};
var ApiFunHandler = function (funName, iArguments, seperator) {
    if (typeof (seperator) == "undefined") seperator = ",";
    var YundabaoUA = navigator.userAgent.toLowerCase(),
    isIos = YundabaoUA.match(/(iphone|ipod|ipad);?/i),
    isAndroid = YundabaoUA.match(/android/i),
    isWindows = YundabaoUA.match(/windows/i);
    var paraLen = iArguments.length;
    if (paraLen > 0) {
        var OtherParameters = "";
        for (var i = 0; i < paraLen; i++) {
            OtherParameters += iArguments[i];
            if (i < paraLen - 1) OtherParameters += seperator
        }
    };
    if (isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//" + funName + "/?" + OtherParameters;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            eval("window.webkit.messageHandlers." + funName + ".postMessage(" + OtherParameters + ")")
        } catch (ex) { }
    } else if (isAndroid && window.App9vCom) {
        var androidParas = "",
        argLength = iArguments.length;
        for (var i = 0; i < argLength; i++) androidParas += "iArguments[" + i.toString() + "]" + (argLength > 1 && i < (argLength - 1) ? "," : "");
        var outV = eval("window.App9vCom." + funName + "(" + androidParas + ")")
    }
};
YDBOBJ.prototype.Alert = function () {
    alert(this.isWindows)
};
YDBOBJ.prototype.SetGlobal = function (HeadBar, DragRefresh, HeadBarExceptionList, DragRefreshExceptionList, CashTime, CashTimeUnit, BackKeyUseType, ShowCloseButton, CloseText, ClearCookie, BgColor) {
    var OtherParameters = "";
    var paraLen = arguments.length;
    if (paraLen > 8) {
        for (var i = 8; i < paraLen; i++) {
            OtherParameters += arguments[i];
            if (i < paraLen - 1) OtherParameters += ","
        }
    };
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetGlobal/?" + HeadBar + "," + DragRefresh + "," + encodeURI(HeadBarExceptionList.replace(/,/g, "|")) + "," + encodeURI(DragRefreshExceptionList.replace(/,/g, "|")) + "," + ShowCloseButton + "," + OtherParameters;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetGlobal.postMessage(HeadBar + "," + DragRefresh + "," + encodeURI(HeadBarExceptionList.replace(/,/g, "|")) + "," + encodeURI(DragRefreshExceptionList.replace(/,/g, "|")) + "," + ShowCloseButton + "," + OtherParameters)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetGlobal(HeadBar, DragRefresh, HeadBarExceptionList, DragRefreshExceptionList, CashTime, CashTimeUnit, BackKeyUseType, ShowCloseButton, OtherParameters)
    }
};
YDBOBJ.prototype.SetHeadBar = function (IntState) {
    var funName = "SetHeadBar";
    ApiFunHandler(funName, arguments)
};
YDBOBJ.prototype.SetMenuBar = function (IntState) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetMenuBar/?" + IntState;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetMenuBar.postMessage(IntState)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetMenuBar(IntState)
    }
};
YDBOBJ.prototype.SetDragRefresh = function (IntState) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetDragRefresh/?" + IntState;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetDragRefresh.postMessage(IntState)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetDragRefresh(IntState)
    }
};
YDBOBJ.prototype.SetMoreButton = function (IntState) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetMoreButton/?" + IntState;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetMoreButton.postMessage(IntState)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetMoreButton(IntState)
    }
};
YDBOBJ.prototype.MenuBarAutoHide = function (IntState) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//MenuBarAutoHide/?" + IntState;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.MenuBarAutoHide.postMessage(IntState)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.MenuBarAutoHide(IntState)
    }
};
YDBOBJ.prototype.GoBack = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GoBack/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GoBack.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GoBack()
    }
};
YDBOBJ.prototype.GoTop = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GoTop/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GoTop.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GoTop()
    }
};
YDBOBJ.prototype.Scan = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//Scan/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.Scan.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.Scan()
    }
};
YDBOBJ.prototype.GetScan = function (CallBackFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetScan/?" + CallBackFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetScan.postMessage(CallBackFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetScan(CallBackFun)
    }
};
YDBOBJ.prototype.Share = function (title, content, img, linkUrl) {
    if (this.isIos) {
        title = title.replace(/,/g, "，");
        content = content.replace(/,/g, "，");
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//Share/?" + encodeURI(title) + "," + encodeURI(content) + "," + encodeURI(img) + "," + encodeURI(linkUrl);
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.Share.postMessage(encodeURI(title) + "," + encodeURI(content) + "," + encodeURI(img) + "," + encodeURI(linkUrl))
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.Share(title, content, img, linkUrl)
    }
};
YDBOBJ.prototype.ClearCache = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ClearCache/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ClearCache.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ClearCache()
    }
};
YDBOBJ.prototype.SpeechRecognition = function (CallBackFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SpeechRecognition/?" + CallBackFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SpeechRecognition.postMessage(CallBackFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SpeechRecognition(CallBackFun)
    }
};
YDBOBJ.prototype.GetGPS = function (CallBackFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetGPS/?" + CallBackFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetGPS.postMessage(CallBackFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetGPS(CallBackFun)
    }
};
YDBOBJ.prototype.OpenGPS = function (userid) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenGPS/?" + userid;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenGPS.postMessage(userid)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenGPS(userid)
    }
};
YDBOBJ.prototype.CloseGPS = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//CloseGPS/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.CloseGPS.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.CloseGPS()
    }
};
YDBOBJ.prototype.GetDeviceInformation = function (CallBackFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetDeviceInformation/?" + CallBackFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetDeviceInformation.postMessage(CallBackFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetDeviceInformation(CallBackFun)
    }
};
YDBOBJ.prototype.PopUp = function (index, count) {
    if (index == "" || undefined == index) index = 0;
    if (count == "" || undefined == count) count = 0;
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//PopUp/?" + index.replace(/,/g, "|") + "," + count.replace(/,/g, "|");
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.PopUp.postMessage(index.replace(/,/g, "|") + "," + count.replace(/,/g, "|"))
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.PopUp(index, count)
    }
};
YDBOBJ.prototype.ImageViewState = function (state) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ImageViewState/?" + state;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ImageViewState.postMessage(state)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ImageViewState(state)
    }
};
YDBOBJ.prototype.SetAlipayInfo = function (ProductName, Desicript, Price, OuttradeNo) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetAlipayInfo/?" + ProductName + "[,]" + Desicript + "[,]" + Price + "[,]" + OuttradeNo;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetAlipayInfo.postMessage(ProductName + "[,]" + Desicript + "[,]" + Price + "[,]" + OuttradeNo)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetAlipayInfo(ProductName, Desicript, Price, OuttradeNo)
    }
};
YDBOBJ.prototype.SetWxpayInfo = function (ProductName, Desicript, Price, OuttradeNo, attach) {
    Price = Price.toString();
    if (attach == "" || undefined == attach) attach = undefined;
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetWxpayInfo/?" + ProductName + "[,]" + Desicript + "[,]" + Price + "[,]" + OuttradeNo + "[,]" + attach;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetWxpayInfo.postMessage(ProductName + "[,]" + Desicript + "[,]" + Price + "[,]" + OuttradeNo + "[,]" + attach)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetWxpayInfo(ProductName, Desicript, Price, OuttradeNo, attach)
    }
};
YDBOBJ.prototype.WXLogin = function (returnDataType, accessUrl) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//WXLogin/?" + returnDataType + "," + accessUrl;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.WXLogin.postMessage(returnDataType + "," + accessUrl)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.WXLogin(returnDataType, accessUrl)
    }
};
YDBOBJ.prototype.ShowTopRightMenu = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ShowTopRightMenu/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ShowTopRightMenu.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ShowTopRightMenu()
    }
};
YDBOBJ.prototype.UploadImage = function (receiveUrl, showFun, UserName, Key, IsCut, CutWidth, CutHeight, sourceType, isUpload) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        if (undefined == sourceType) ifr.src = "app9vcom:##//UploadImage/?" + receiveUrl + "," + showFun + "," + UserName + "," + Key + "," + IsCut + "," + CutWidth + "," + CutHeight;
        else ifr.src = "app9vcom:##//UploadImage/?" + receiveUrl + "," + showFun + "," + UserName + "," + Key + "," + IsCut + "," + CutWidth + "," + CutHeight + "," + sourceType + "," + isUpload;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            if (undefined == sourceType) window.webkit.messageHandlers.UploadImage.postMessage(receiveUrl + "," + showFun + "," + UserName + "," + Key + "," + IsCut + "," + CutWidth + "," + CutHeight);
            else window.webkit.messageHandlers.UploadImage.postMessage(receiveUrl + "," + showFun + "," + UserName + "," + Key + "," + IsCut + "," + CutWidth + "," + CutHeight + "," + sourceType + "," + isUpload)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        if (undefined == sourceType) window.App9vCom.UploadImage(receiveUrl, showFun, UserName, Key, IsCut, CutWidth, CutHeight);
        else window.App9vCom.UploadImage(receiveUrl, showFun, UserName, Key, IsCut, CutWidth, CutHeight, sourceType, isUpload)
    }
};
YDBOBJ.prototype.SetBgColor = function (BgColor) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetBgColor/?" + BgColor;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetBgColor.postMessage(BgColor)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetBgColor(BgColor)
    }
};
YDBOBJ.prototype.SetReturnButtonMode = function (showmode) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetReturnButtonMode/?" + showmode;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetReturnButtonMode.postMessage(showmode)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetReturnButtonMode(showmode)
    }
};
YDBOBJ.prototype.GetWifiSsid = function (CallBackFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetWifiSsid/?" + CallBackFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetWifiSsid.postMessage(CallBackFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetWifiSsid(CallBackFun)
    }
};
YDBOBJ.prototype.UseTouchID = function (CallBackFun, LoginUrl, AccessTitle, FallbackTitle) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//UseTouchID/?" + CallBackFun + "," + LoginUrl + "," + AccessTitle + "," + FallbackTitle;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.UseTouchID.postMessage(CallBackFun + "," + LoginUrl + "," + AccessTitle + "," + FallbackTitle)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.GetHealthStep = function (CallBackFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetHealthStep/?" + CallBackFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetHealthStep.postMessage(CallBackFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetHealthStep(CallBackFun)
    }
};
YDBOBJ.prototype.QQLogin = function (accessUrl) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//QQLogin/?" + accessUrl;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.QQLogin.postMessage(accessUrl)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.QQLogin(accessUrl)
    }
};
YDBOBJ.prototype.OpenBluetooth = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenBluetooth/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenBluetooth.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenBluetooth()
    }
};
YDBOBJ.prototype.ExitApp = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ExitApp/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ExitApp.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ExitApp()
    }
};
YDBOBJ.prototype.AnimationWay = function (entranceway, exitway) {
    if (entranceway == "2" || entranceway == "3") entranceway = "0";
    if (exitway == "2" || exitway == "3") exitway = "0";
    if (entranceway == "0" && exitway == "1") exitway = "0";
    if (entranceway == "1" && exitway == "0") exitway = "1";
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//AnimationWay/?" + entranceway + "," + exitway;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.AnimationWay.postMessage(entranceway + "," + exitway)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.AnimationWay(entranceway, exitway)
    }
};
YDBOBJ.prototype.OpenWithSafari = function (openurl) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenWithSafari/?" + openurl;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenWithSafari.postMessage(openurl)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenWithSafari(openurl)
    }
};
YDBOBJ.prototype.OpenNewWindow = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenNewWindow/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenNewWindow.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenNewWindow()
    }
};
YDBOBJ.prototype.SetOpenCurrentWindow = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetOpenCurrentWindow/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetOpenCurrentWindow.postMessage("")
        } catch (ex) { }
    }
};
YDBOBJ.prototype.SetUserRelationForPush = function (YDB_UserName) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "App9vCom:##//PushMsgConfig/?" + YDB_UserName;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.PushMsgConfig.postMessage(YDB_UserName)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        YundabaoOutValue = window.App9vCom.PushMsgConfig(YDB_UserName)
    }
};
YDBOBJ.prototype.GetClientIDOfGetui = function (doWithCIDFun) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "App9vCom:##//GetClientIDOfGetui/?" + doWithCIDFun;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetClientIDOfGetui.postMessage(doWithCIDFun)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        YundabaoOutValue = window.App9vCom.GetClientIDOfGetui(doWithCIDFun)
    }
};
YDBOBJ.prototype.RongyunLogin = function (userId, name, portraitUri, token) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//RongyunLogin/?" + userId + "," + name + "," + portraitUri + "," + token;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.RongyunLogin.postMessage(userId + "," + name + "," + portraitUri + "," + token)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.RongyunLogin(userId, name, portraitUri, token)
    }
};
YDBOBJ.prototype.InitiateChat = function (otheruserId, nickName, portraitUri) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//InitiateChat/?" + otheruserId + "," + nickName + "," + portraitUri;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.InitiateChat.postMessage(otheruserId + "," + nickName + "," + portraitUri)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.InitiateChat(otheruserId, nickName, portraitUri)
    }
};
YDBOBJ.prototype.SessionList = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SessionList/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SessionList.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SessionList()
    }
};
YDBOBJ.prototype.RefreshUserInfo = function (userId, name, portraitUri) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//RefreshUserInfo/?" + userId + "," + name + "," + portraitUri;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.RefreshUserInfo.postMessage(userId + "," + name + "," + portraitUri)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.RefreshUserInfo(userId, name, portraitUri)
    }
};
YDBOBJ.prototype.CreateDiscussGroup = function (defaultUserId, groupName, groupId) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//CreateDiscussGroup/?" + defaultUserId + "," + groupName + "," + groupId;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.CreateDiscussGroup.postMessage(defaultUserId + "," + groupName + "," + groupId)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.CreateDiscussGroup(defaultUserId, groupName, groupId)
    }
};
YDBOBJ.prototype.OpenDiscussGroup = function (groupId, groupName) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenDiscussGroup/?" + groupId + "," + groupName;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenDiscussGroup.postMessage(groupId + "," + groupName)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenDiscussGroup(groupId, groupName)
    }
};
YDBOBJ.prototype.AddDiscussGroup = function (groupId, userId, nickName, portraitUri) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//AddDiscussGroup/?" + groupId + "," + userId + "," + nickName + "," + portraitUri;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.AddDiscussGroup.postMessage(groupId + "," + userId + "," + nickName + "," + portraitUri)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.AddDiscussGroup(groupId, userId, nickName, portraitUri)
    }
};
YDBOBJ.prototype.RemoveDiscussGroup = function (groupId, userId) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//RemoveDiscussGroup/?" + groupId + "," + userId;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.RemoveDiscussGroup.postMessage(groupId + "," + userId)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.RemoveDiscussGroup(groupId, userId)
    }
};
YDBOBJ.prototype.IntPortraitUri = function (userId, nickName, portraitUri) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//IntPortraitUri/?" + userId + "," + nickName + "," + portraitUri;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.IntPortraitUri.postMessage(userId + "," + nickName + "," + portraitUri)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.IntPortraitUri(userId, nickName, portraitUri)
    }
};
YDBOBJ.prototype.SetStatusBarStyle = function (colorvalue) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "App9vCom:##//SetStatusBarStyle/?" + colorvalue;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetStatusBarStyle.postMessage(colorvalue)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.isWXAppInstalled = function (installstate) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "App9vCom:##//isWXAppInstalled/?" + installstate;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.isWXAppInstalled.postMessage(installstate)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.IsReloadPreviousPage = function (operation) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//IsReloadPreviousPage/?" + operation;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.IsReloadPreviousPage.postMessage(operation)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.IsReloadPreviousPage(operation)
    }
};
YDBOBJ.prototype.IsReloadNextPage = function (operation) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//IsReloadNextPage/?" + operation;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.IsReloadNextPage.postMessage(operation)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.DismissVC = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//DismissVC/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.DismissVC.postMessage("")
        } catch (ex) { }
    }
};
YDBOBJ.prototype.GetBaseInfo = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetBaseInfo/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetBaseInfo.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetBaseInfo(callback)
    }
};
YDBOBJ.prototype.GetCpuInfo = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetCpuInfo/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetCpuInfo.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetCpuInfo(callback)
    }
};
YDBOBJ.prototype.GetMemoryInfo = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetMemoryInfo/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetMemoryInfo.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetMemoryInfo(callback)
    }
};
YDBOBJ.prototype.GetStorageInfo = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetStorageInfo/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetStorageInfo.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetStorageInfo(callback)
    }
};
YDBOBJ.prototype.GetDisplayInfo = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetDisplayInfo/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetDisplayInfo.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetDisplayInfo(callback)
    }
};
YDBOBJ.prototype.GpsState = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GpsState/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GpsState.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GpsState(callback)
    }
};
YDBOBJ.prototype.Opengps = function () {
    if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.Opengps()
    }
};
YDBOBJ.prototype.ContactAll = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ContactAll/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ContactAll.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ContactAll(callback)
    }
};
YDBOBJ.prototype.ContactSelect = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ContactSelect/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ContactSelect.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ContactSelect(callback)
    }
};
YDBOBJ.prototype.ContactAdd = function (lastName, firstName, homeNum, mobile, email, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ContactAdd/?" + encodeURI(lastName) + "," + encodeURI(firstName) + "," + homeNum + "," + mobile + "," + email + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ContactAdd.postMessage(encodeURI(lastName) + "," + encodeURI(firstName) + "," + homeNum + "," + mobile + "," + email + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var name = lastName + firstName;
        var outV = window.App9vCom.ContactAdd(name, homeNum, mobile, email, callback)
    }
};
YDBOBJ.prototype.ContactDelete = function (contactid, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ContactDelete/?" + contactid + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ContactDelete.postMessage(contactid + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ContactDelete(contactid, callback)
    }
};
YDBOBJ.prototype.ContactUpdate = function (contactid, lastName, firstName, homeNum, mobile, email, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//ContactUpdate/?" + contactid + "," + encodeURI(lastName) + "," + encodeURI(firstName) + "," + homeNum + "," + mobile + "," + email + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.ContactUpdate.postMessage(contactid + "," + encodeURI(lastName) + "," + encodeURI(firstName) + "," + homeNum + "," + mobile + "," + email + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.ContactUpdate(contactid, lastName, firstName, homeNum, mobile, email, callback)
    }
};
YDBOBJ.prototype.StartVoice = function (path) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//StartVoice/?" + path;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.StartVoice.postMessage(path)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.StartVoice(path)
    }
};
YDBOBJ.prototype.VolumeVideo = function (volume) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//VolumeVideo/?" + volume;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.VolumeVideo.postMessage(volume)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.VolumeVideo(volume)
    }
};
YDBOBJ.prototype.PauseVoice = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//PauseVoice/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.PauseVoice.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.PauseVoice()
    }
};
YDBOBJ.prototype.PlayVoice = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//PlayVoice/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.PlayVoice.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.PauseVoice()
    }
};
YDBOBJ.prototype.StopVoice = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//StopVoice/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.StopVoice.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.StopVoice()
    }
};
YDBOBJ.prototype.OpenVideo = function (path) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenVideo/?" + path;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenVideo.postMessage(path)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenVideo(path)
    }
};
YDBOBJ.prototype.Wallpaper = function (path) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//Wallpaper/?" + path;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.Wallpaper.postMessage(path)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.Wallpaper(path)
    }
};
YDBOBJ.prototype.NavigatorInfo = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//NavigatorInfo/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.NavigatorInfo.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.NavigatorInfo(callback)
    }
};
YDBOBJ.prototype.NavigatorBaidu = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//NavigatorBaidu/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.NavigatorBaidu.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.NavigatorBaidu()
    }
};
YDBOBJ.prototype.NavigatorGoogle = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//NavigatorGoogle/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.NavigatorGoogle.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.NavigatorGoogle()
    }
};
YDBOBJ.prototype.NavigatorGaode = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//NavigatorGaode/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.NavigatorGaode.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.NavigatorGaode()
    }
};
YDBOBJ.prototype.NavigatorBaiduPath = function (startlat, startlon, endlat, endlon) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//NavigatorBaiduPath/?" + startlat + "," + startlon + "," + endlat + "," + endlon;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.NavigatorBaiduPath.postMessage(startlat + "," + startlon + "," + endlat + "," + endlon)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.NavigatorBaiduPath(startlat, startlon, endlat, endlon)
    }
};
YDBOBJ.prototype.NavigatorGaodePath = function (startlat, startlon, startname, endlat, endlon, endname) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//NavigatorGaodePath/?" + startlat + "," + startlon + "," + encodeURI(startname) + "," + endlat + "," + endlon + "," + encodeURI(endname);
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.NavigatorGaodePath.postMessage(startlat + "," + startlon + "," + encodeURI(startname) + "," + endlat + "," + endlon + "," + encodeURI(endname))
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.NavigatorGaodePath(startlat, startlon, startname, endlat, endlon, endname)
    }
};
YDBOBJ.prototype.appleNavigation = function (startlat, startlon, endlat, endlon) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//appleNavigation/?" + startlat + "," + startlon + "," + endlat + "," + endlon;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.appleNavigation.postMessage(startlat + "," + startlon + "," + endlat + "," + endlon)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.BLinitManager = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLinitManager/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLinitManager.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLinitManager(callback)
    }
};
YDBOBJ.prototype.BLscan = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLscan/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLscan.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLscan(callback)
    }
};
YDBOBJ.prototype.BLgetPeripheral = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLgetPeripheral/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLgetPeripheral.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLgetPeripheral(callback)
    }
};
YDBOBJ.prototype.BLisScanning = function (callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLisScanning/?" + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLisScanning.postMessage(callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLisScanning(callback)
    }
};
YDBOBJ.prototype.BLstopScan = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLstopScan/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLstopScan.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLstopScan()
    }
};
YDBOBJ.prototype.BLconnect = function (peripheralUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLconnect/?" + peripheralUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLconnect.postMessage(peripheralUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLconnect(peripheralUUID, callback)
    }
};
YDBOBJ.prototype.BLdisconnect = function (peripheralUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLdisconnect/?" + peripheralUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLdisconnect.postMessage(peripheralUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLdisconnect(peripheralUUID, callback)
    }
};
YDBOBJ.prototype.BLisConnected = function (peripheralUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLisConnected/?" + peripheralUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLisConnected.postMessage(peripheralUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLisConnected(peripheralUUID, callback)
    }
};
YDBOBJ.prototype.BLretrievePeripheral = function (peripheralUUIDs, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLretrievePeripheral/?" + peripheralUUIDs + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLretrievePeripheral.postMessage(peripheralUUIDs + "," + callback)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.BLretrieveConnectedPeripheral = function (serviceUUIDs, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLretrieveConnectedPeripheral/?" + serviceUUIDs + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLretrieveConnectedPeripheral.postMessage(serviceUUIDs + "," + callback)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.BLdiscoverService = function (peripheralUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLdiscoverService/?" + peripheralUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLdiscoverService.postMessage(peripheralUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLdiscoverService(peripheralUUID, callback)
    }
};
YDBOBJ.prototype.BLdiscoverCharacteristics = function (peripheralUUID, serviceUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLdiscoverCharacteristics/?" + peripheralUUID + "," + serviceUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLdiscoverCharacteristics.postMessage(peripheralUUID + "," + serviceUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLdiscoverCharacteristics(peripheralUUID, serviceUUID, callback)
    }
};
YDBOBJ.prototype.BLdiscoverDescriptorsForCharacteristic = function (peripheralUUID, serviceUUID, characteristicUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLdiscoverDescriptorsForCharacteristic/?" + peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLdiscoverDescriptorsForCharacteristic.postMessage(peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLdiscoverDescriptorsForCharacteristic(peripheralUUID, serviceUUID, characteristicUUID, callback)
    }
};
YDBOBJ.prototype.BLsetNotify = function (peripheralUUID, serviceUUID, characteristicUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLsetNotify/?" + peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLsetNotify.postMessage(peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLsetNotify(peripheralUUID, serviceUUID, characteristicUUID, callback)
    }
};
YDBOBJ.prototype.BLreadValueForCharacteristic = function (peripheralUUID, serviceUUID, characteristicUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLreadValueForCharacteristic/?" + peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLreadValueForCharacteristic.postMessage(peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLreadValueForCharacteristic(peripheralUUID, serviceUUID, characteristicUUID, callback)
    }
};
YDBOBJ.prototype.BLreadValueForDescriptor = function (peripheralUUID, serviceUUID, characteristicUUID, descriptorUUID, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLreadValueForDescriptor/?" + peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + descriptorUUID + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLreadValueForDescriptor.postMessage(peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + descriptorUUID + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLreadValueForDescriptor(peripheralUUID, serviceUUID, characteristicUUID, descriptorUUID, callback)
    }
};
YDBOBJ.prototype.BLwriteValueForCharacteristic = function (peripheralUUID, serviceUUID, characteristicUUID, value, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLwriteValueForCharacteristic/?" + peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + value + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLwriteValueForCharacteristic.postMessage(peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + value + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLwriteValueForCharacteristic(peripheralUUID, serviceUUID, characteristicUUID, value, callback)
    }
};
YDBOBJ.prototype.BLwriteValueForDescriptor = function (peripheralUUID, serviceUUID, characteristicUUID, descriptorUUID, value, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BLwriteValueForDescriptor/?" + peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + descriptorUUID + "," + value + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BLwriteValueForDescriptor.postMessage(peripheralUUID + "," + serviceUUID + "," + characteristicUUID + "," + descriptorUUID + "," + value + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BLwriteValueForDescriptor(peripheralUUID, serviceUUID, characteristicUUID, descriptorUUID, value, callback)
    }
};
YDBOBJ.prototype.SwitchApp = function (appid) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SwitchApp/?" + appid;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SwitchApp.postMessage(appid)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SwitchApp(appid)
    }
};
YDBOBJ.prototype.iOSSystemShare = function (content, img, linkUrl) {
    if (this.isIos) {
        content = content.replace(/,/g, "，");
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//iOSSystemShare/?" + encodeURI(content) + "," + encodeURI(img) + "," + encodeURI(linkUrl);
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.iOSSystemShare.postMessage(encodeURI(content) + "," + encodeURI(img) + "," + encodeURI(linkUrl))
        } catch (ex) { }
    }
};
YDBOBJ.prototype.IsFixedBottomMenu = function (IntState) {
    if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.IsFixedBottomMenu(IntState)
    }
};
YDBOBJ.prototype.SetFontSize = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetFontSize/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetFontSize.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetFontSize()
    }
};
YDBOBJ.prototype.Ring = function () {
    if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.Ring()
    }
};
YDBOBJ.prototype.SetBrightness = function (percent) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetBrightness/?" + percent;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.SetBrightness.postMessage(percent)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetBrightness(percent)
    }
};
YDBOBJ.prototype.CiticWxPay = function (appid, partnerid, prepayid, noncestr, sign, timestamp, Outtradeno, attach) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//CiticWxPay/?" + appid + "[,]" + partnerid + "[,]" + prepayid + "[,]" + noncestr + "[,]" + sign + "[,]" + timestamp + "[,]" + Outtradeno + "[,]" + attach;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.CiticWxPay.postMessage(appid + "[,]" + partnerid + "[,]" + prepayid + "[,]" + noncestr + "[,]" + sign + "[,]" + timestamp + "[,]" + Outtradeno + "[,]" + attach)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.CiticWxPay(appid, partnerid, prepayid, noncestr, sign, timestamp, Outtradeno, attach)
    }
};
YDBOBJ.prototype.BeeCloudPay = function (channel, bill_no, title, total_fee, optional, return_url) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//BeeCloudPay/?" + channel + "[,]" + bill_no + "[,]" + title + "[,]" + total_fee + "[,]" + optional + "[,]" + return_url;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.BeeCloudPay.postMessage(channel + "[,]" + bill_no + "[,]" + title + "[,]" + total_fee + "[,]" + optional + "[,]" + return_url)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.BeeCloudPay(channel, bill_no, title, total_fee, optional, return_url)
    }
};
YDBOBJ.prototype.GetHalfScan = function (CallBackFun, top, height) {
    if (top == "" || undefined == top) top = 0;
    if (height == "" || undefined == height) height = 0;
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetHalfScan/?" + CallBackFun + "," + top + "," + height;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetHalfScan.postMessage(CallBackFun + "," + top + "," + height)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetHalfScan(CallBackFun, top, height)
    }
};
YDBOBJ.prototype.CloseScan = function () {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//CloseScan/?";
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.CloseScan.postMessage("")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.CloseScan()
    }
};
YDBOBJ.prototype.WftWxpayInfo = function (ProductName, Desicript, Price, OuttradeNo, attach) {
    Price = Price.toString();
    if (attach == "" || undefined == attach) attach = undefined;
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//WftWxpayInfo/?" + ProductName + "[,]" + Desicript + "[,]" + Price + "[,]" + OuttradeNo + "[,]" + attach;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.WftWxpayInfo.postMessage(ProductName + "[,]" + Desicript + "[,]" + Price + "[,]" + OuttradeNo + "[,]" + attach)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetWxpayInfo(ProductName, Desicript, Price, OuttradeNo, attach)
    }
};
YDBOBJ.prototype.SetHardware = function (status) {
    if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetHardware(status)
    }
};
YDBOBJ.prototype.isScreenOrientation = function (status) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//isScreenOrientation/?" + status;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.isScreenOrientation.postMessage(status)
        } catch (ex) { }
    }
};
YDBOBJ.prototype.OpenStep = function (userid) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//OpenStep/?" + userid;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.OpenStep.postMessage(userid)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.OpenStep(userid)
    }
};
YDBOBJ.prototype.GetCurrentStep = function (uid, timestamp, callback) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//GetCurrentStep/?" + uid + "," + timestamp + "," + callback;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.GetCurrentStep.postMessage(uid + "," + timestamp + "," + callback)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.GetCurrentStep(uid, timestamp, callback)
    }
};
YDBOBJ.prototype.openUCBrower = function (url, downloadurl) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//openUCBrower/?" + url + "," + downloadurl;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.openUCBrower.postMessage(url + "," + downloadurl)
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.openUCBrower(url, downloadurl)
    }
};
YDBOBJ.prototype.test = function (IntState) {
    if (this.isIos) {
        var ifr = document.createElement('iframe');
        ifr.src = "app9vcom:##//SetHeadBar/?" + IntState;
        ifr.style.width = "0";
        ifr.style.height = "0";
        document.body.appendChild(ifr);
        if (null != ifr) ifr.parentNode.removeChild(ifr);
        ifr = null;
        try {
            window.webkit.messageHandlers.test.postMessage("helloworld")
        } catch (ex) { }
    } else if (this.isAndroid && window.App9vCom) {
        var outV = window.App9vCom.SetHeadBar(IntState)
    }
}