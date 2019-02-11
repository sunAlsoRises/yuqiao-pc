var SpiltUtil ;

SpiltUtil = {
    getSpiltLogin :function() {
        // 1获取手机号
        var phone = $.cookie("loginUser");
        var text = "" ;
        if (phone){
            text =  phone.substring(0,2)+"*******"+phone.substring(9,11)
        }
        return text ;
    }
}
