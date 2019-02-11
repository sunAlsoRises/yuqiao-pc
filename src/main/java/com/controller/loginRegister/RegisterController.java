package com.controller.loginRegister;

import com.model.Login_Regist;
import com.model.util.MessageVerification;
import com.service.LoginRegist.LoginService;
import com.util.HouseResult;
import com.util.SendVerificationNumber;
import com.util.Yanzhengma;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
@RequestMapping("/register")
public class RegisterController {
    @Autowired
    LoginService login ;
    @Autowired
    MessageVerification mv ;
    @PostMapping(value = "/register/")
    @ResponseBody
    public Integer getYanZhengMa(String action){
//        根据手机号查询是否手机号存在
        Login_Regist lr = new Login_Regist();
        lr.setPhonenumber(action);
        int i = login.selectCountByPhone(lr);
        return  i ;
    }
    //点击注册时插入数据，检查手机号是否正确
    @PostMapping(value = "/login/")
    @ResponseBody
    public HouseResult checkPhone(Login_Regist lr, HttpSession session, HttpServletResponse res){
//        检查手机号是否正确 也就是 是否存在
        int count = login.selectCountByPhone(lr);
        HouseResult hr = new HouseResult();

       System.out.println("手机号存在"+count);
        if (count == 0){  // 0代表不存在
            hr.setStatus(0);
            hr.setMsg("手机号填写错误，不存在");
            hr.setData(0);
        }else {
//            将用户填写的信息插入表中
            int isinsert = this.login.updateRegister(lr);
            System.out.println("插入成功了吗"+isinsert);
            //    二    检登陆成功
            session.setAttribute("loginUser",lr.getPhonenumber());
            Cookie cookie_user = new Cookie("loginUser",lr.getPhonenumber());
            res.addCookie(cookie_user);
            hr.setStatus(0);
            hr.setMsg("登陆成功");
            hr.setData(1);
        }
        return  hr ;
    }
}
