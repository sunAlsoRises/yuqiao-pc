package com.model.util;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "message")
public class MessageVerification {
    private String sid;
    private String token;
    private String appid;
    private String templateid;
    private String param;
    private String mobile;
    private String uid;

    public MessageVerification() {

    }

    public MessageVerification(String sid, String token, String appid, String templateid, String param, String mobile, String uid) {
        this.sid = sid;
        this.token = token;
        this.appid = appid;
        this.templateid = templateid;
        this.param = param;
        this.mobile = mobile;
        this.uid = uid;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getTemplateid() {
        return templateid;
    }

    public void setTemplateid(String templateid) {
        this.templateid = templateid;
    }

    public String getParam() {
        return param;
    }

    public void setParam(String param) {
        this.param = param;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "MessageVerification{" +
                "sid='" + sid + '\'' +
                ", token='" + token + '\'' +
                ", appid='" + appid + '\'' +
                ", templateid='" + templateid + '\'' +
                ", param='" + param + '\'' +
                ", mobile='" + mobile + '\'' +
                ", uid='" + uid + '\'' +
                '}';
    }
}
