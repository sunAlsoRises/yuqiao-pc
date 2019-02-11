package com.model;

import java.util.Date;

public class Login_Regist {
    private String id;

    private String phonenumber;

    private Date sendnumbertime;

    private Date smsendtime;

    private String verification;


    private String account;

    private String password;

    private String hopearea;

    private String unionid;

    private String name;

    private String sex;

    private Date createtime;


    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account == null ? null : account.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getHopearea() {
        return hopearea;
    }

    public void setHopearea(String hopearea) {
        this.hopearea = hopearea == null ? null : hopearea.trim();
    }

    public String getUnionid() {
        return unionid;
    }

    public void setUnionid(String unionid) {
        this.unionid = unionid == null ? null : unionid.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber == null ? null : phonenumber.trim();
    }

    public Date getSendnumbertime() {
        return sendnumbertime;
    }

    public void setSendnumbertime(Date sendnumbertime) {
        this.sendnumbertime = sendnumbertime;
    }

    public Date getSmsendtime() {
        return smsendtime;
    }

    public void setSmsendtime(Date smsendtime) {
        this.smsendtime = smsendtime;
    }

    public String getVerification() {
        return verification;
    }

    public void setVerification(String verification) {
        this.verification = verification == null ? null : verification.trim();
    }
}