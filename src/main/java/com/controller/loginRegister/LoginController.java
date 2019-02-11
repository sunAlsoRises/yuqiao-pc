package com.controller.loginRegister;

import com.model.Login_Regist;
import com.model.util.MessageVerification;
import com.service.LoginRegist.LoginService;
import com.util.HouseResult;
import com.util.SendVerificationNumber;
import com.util.Yanzhengma;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService login ;
    @Autowired
    MessageVerification mv ;
    @PostMapping(value = "/send/")
    @ResponseBody
    public HouseResult getYanZhengMa(String phone){
        //随机生成4位数验证码  工具类
        String yanzhengma = Yanzhengma.getYanzhengma();
        HouseResult hr = new HouseResult();
        Login_Regist lr = new Login_Regist();
        lr.setPhonenumber(phone);
        boolean flag = false ;
//        1先检查该手机号是否存在于数据库表
        int count = login.selectCountByPhone(lr);
//        System.out.println("手机号存在"+count);
        //如果不纯在的话就把该手机插入表中
        if (count == 0){
//            这一步意味着自动帮助用户注册了
            lr.setVerification(yanzhengma);
            login.insert(lr);
            flag = true;
        }else {
            //    二    检查手机号是否在一分钟之内操作过
            int iscaozuo = login.selectCountBySql(lr);

            if (iscaozuo == 1){
                hr.setStatus(1);
                hr.setMsg("请勿重复发送！");
                hr.setData("");
                flag = false;
            }else {
                flag = true ;
            }
        }

        if (flag){
//                如果超过了一分钟,首先要把新的时间更新
            lr.setVerification(yanzhengma);
            login.update(lr);
            //        将手机号与验证码打包给第三方接口
            mv.setParam(yanzhengma);
            mv.setMobile(phone);
            Map<String, Object> sendMessage = SendVerificationNumber.send(mv);
            System.out.println(sendMessage);
            hr.setStatus(0);

            hr.setData(yanzhengma);
        }

        return hr;
    }
    //检查验证码是否正确
    @PostMapping(value = "/yanzheng/")
    @ResponseBody
    public HouseResult checkVerification( Login_Regist lr){
        HouseResult hr = new HouseResult();
//        1检查是否超过一分钟,.验证码是否正确
        int count = login.checkVerification(lr);
        System.out.println(count);
        if (count == 0){
//            有一条数据代表正确 0代表不正确
            hr.setStatus(0);
            hr.setData(0);
            hr.setMsg("输入错误");
        }else if (count == 1){
            hr.setStatus(0);
            hr.setData(1);
        }
        return  hr ;
    }
    //登陆时检查手机号是否正确
    @PostMapping(value = "/login/")
    @ResponseBody
    public HouseResult checkPhone(Login_Regist lr, HttpSession session, HttpServletResponse res){
//        检查手机号是否正确 也就是 是否存在
        int count = login.selectCountByPhone(lr);
        HouseResult hr = new HouseResult();
//        System.out.println("手机号存在"+count);
        //如果不纯在的话就把该手机插入表中
        if (count == 0){  // 0代表不存在
            hr.setStatus(0);
            hr.setMsg("手机号不存在");
            hr.setData(0);
        }else {
            //    二    检登陆成功
            session.setAttribute("loginUser",lr.getPhonenumber());
            Cookie cookie_user = new Cookie("loginUser",lr.getPhonenumber());
            cookie_user.setPath("/");
            res.addCookie(cookie_user);
           hr.setStatus(0);
           hr.setMsg("登陆成功");
           hr.setData(1);
        }
        return  hr ;
    }
    //退出登陆 清空session
    @GetMapping(value = "/exit/")
    public String exit(HttpSession session){
        session.removeAttribute("loginUser");
        return "redirect:/index" ;
    }
    @PostMapping(value = "/quyu/")
    @ResponseBody
    //通过手机号获取区域
    public String getQuYuByMobile(String action){
//        System.out.println("用户手机号"+action);
        String quyu = this.login.getQuYuByMobile(action);
        return quyu ;
    }
}
