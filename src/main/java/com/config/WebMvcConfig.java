package com.config;

import com.component.LoginHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

//注册拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //负责拦截哪些请求  1  卖房请求
        registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/helphouse/maifang",
                "/helphouse/chuzu","/login/user","/login/user/attentionHouse/");

    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
//        super.addViewControllers(registry);
        registry.addViewController("/helphouse/maifang").setViewName("helphouse/maifang");
        registry.addViewController("/helphouse/buy").setViewName("helphouse/buy");
        registry.addViewController("/helphouse/chuzu").setViewName("helphouse/chuzu");
        registry.addViewController("/login-res/login/").setViewName("login-res/login");
        registry.addViewController("/login-res/resgist/").setViewName("login-res/resgist");
        registry.addViewController("/index.html").setViewName("index");
        registry.addViewController("/login/user").setViewName("login-res/user");

//问答相关
        registry.addViewController("/wenda.html").setViewName("wenda/wenda");
        registry.addViewController("/wenda/daikuan.html").setViewName("/wenda/daikuan");
        registry.addViewController("/quanzheng.html").setViewName("wenda/quanzheng");
        registry.addViewController("/wenda/daikuanjisuan.html").setViewName("wenda/daikuanjisuan");
        registry.addViewController("/wenda/guanyuwomen.html").setViewName("wenda/guanyuwomen");
        registry.addViewController("/wenda/shoufei.html").setViewName("wenda/shoufei");
        registry.addViewController("/wenda/zhaopin.html").setViewName("wenda/zhaopin");
        registry.addViewController("/wenda/yinsi.html").setViewName("wenda/yinsi");
        registry.addViewController("/wenda/lianxi.html").setViewName("wenda/lianxi");
   //个人中心
        registry.addViewController("/login/user/attentionHouse/").setViewName("login-res/personCenter/attentionHouse");
        registry.addViewController("/login/user/attentionCommunity/").setViewName("login-res/personCenter/attentionCommunity");
        registry.addViewController("/login/user/entrust/").setViewName("login-res/personCenter/entrust");

    }
}
