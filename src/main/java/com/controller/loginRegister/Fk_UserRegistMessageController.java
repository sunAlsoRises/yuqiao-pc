package com.controller.loginRegister;

import com.model.Fk_UserRegistMessage;
import com.service.LoginRegist.Fk_UserRegistMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/user")
public class Fk_UserRegistMessageController {
    @Autowired
    private Fk_UserRegistMessageService urm;
    @PostMapping(value = "/message/")
    @ResponseBody
    public Integer insertRegisterMessage(Fk_UserRegistMessage message, HttpSession session){
//        获取用户的手机号
        String loginUser = (String) session.getAttribute("loginUser");
        message.setUserphone(loginUser);
        int i = this.urm.insertMessage(message);
        return i ;
    }
}
