$(function () {
    function UserLogin() {
        if ($.cookie("usercenter")) {
            var loginDiv = "";
            loginDiv = loginDiv + "<span>您好&nbsp;" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
            loginDiv = loginDiv + "<div id=\"userLoginDiv\" class=\"login-tc-menu\" style=\"display: none\">";
            loginDiv = loginDiv + "<em></em>";
            loginDiv = loginDiv + "<a href=\"/usercenter/shoucang/ershoufang/\">进入管理</a>";
            loginDiv = loginDiv + "<a id=\"btnLogout\" href=\"javascript:void(0);\">退出</a>";
            loginDiv = loginDiv + "</div>";



            //loginDiv = loginDiv + "<span class='userName'>" + decodeURI(GetCookie("usercenter", "web_username")) + "</span>";
            //loginDiv = loginDiv + "<i>|</i><a href=\"/usercenter/shoucang/ershoufang/\" target=\"_blank\">管理</a>";
            //loginDiv = loginDiv + "<i>|</i><a  id=\"btnLogout\" href=\"javascript:void(0)\">退出</a>";
            $("#LoginUser").html(loginDiv);
            $("#btnLogout").click(function () {
                //清除cookie,主页,原版的cookie清除不彻底
                $.cookie("usercenter", null, { expires: -1, path: '/', domain: '.517.dev' });
                $.cookie("usercenter", null, { expires: -1, path: '/', domain: '.517.cn' });
                $.cookie("usercenter", null, { expires: -1, path: '/' });
                if (window.location.href.indexOf("usercenter") != -1) {
                    window.location.href = "/";
                } else {
                    UserLogin();
                }

            });
            $("#LoginUser").mouseover(function () {
                $("#userLoginDiv").show();
            });
            $("#LoginUser").mouseout(function () {
                $("#userLoginDiv").hide();
            });
        } else {
            {
                $("#LoginUser").html("<a rel=\"nofollow\" href=\"/usercenter/login/\" class=\"logintopbtn\" target=\"_blank\">登录</a><i>|</i><a rel=\"nofollow\" href=\"/usercenter/reg/\" target=\"_blank\">注册</a>");

            }
        }
    }
    function GetCookie(mname, sname) {
        var cookies = $.cookie(mname).split('&');
        var res = '';
        for (var i = 0; i < cookies.length; i++) {
            var one = cookies[i].split('=');
            if (one[0] == sname) {
                res = one[1];
                break;
            }
        }
        return res;
    }
    UserLogin();
})
