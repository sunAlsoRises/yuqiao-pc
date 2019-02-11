function LoginCookie(loginBtn,exitBtn) {
    this.loginBtn = loginBtn;
    this.exitBtn = exitBtn;
}
LoginCookie.prototype.init = function () {
    var loginUser = $.cookie("loginUser");
    if (loginUser){
        if (this.loginBtn){
            $(this.loginBtn).html(loginUser.substring(0,2)+"*******"+loginUser.substring(9,11));
            $(this.loginBtn).attr("href",projectName+"/login/user");
        }
        if (this.exitBtn){
            $(this.exitBtn).html("退出");
            $(this.exitBtn).attr("href" ,projectName+"/login/exit/");
        }
    }else {
        $(this.loginBtn).html("登陆");
        $(this.loginBtn).attr("href",projectName+"/login-res/login/");
        $(this.exitBtn).html("注册");
        $(this.exitBtn).attr("href" ,projectName+"/login-res/resgist/");
    }
}

