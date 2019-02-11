package com.component;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//登陆检查
public class LoginHandlerInterceptor implements HandlerInterceptor {
    //目标方法执行之前
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        Object user = request.getSession().getAttribute("loginUser");
        Cookie[] cookies = request.getCookies();
        String loginUser = null ;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("loginUser".equals(cookie.getName())) {
                    loginUser = cookie.getValue();
                }
            }
        }

        if (user == null && loginUser == null){
            request.setAttribute("msg","没有权限,请先登录");
            request.getRequestDispatcher("/login-res/login/").forward(request,response);
            return  false;
        }else {
            return true;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
