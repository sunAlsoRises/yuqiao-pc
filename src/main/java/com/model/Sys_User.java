package com.model;

import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
@Component
public class Sys_User {
    private String id;

    private String username;

    private String name;

    private String password;

    private String cardnumber;

    private String mobile;

    private String mail;

    private String qq;

    private String sex;

    private String homeaddress;

    private Date birthdate;

    private String education;

    private String dutiesid;

    private String remarks;

    private String photoid;

    private String branchshopid;

    private String companyid;

    private String createuser;

    private Date createtime;

    private String lastupdateuser;

    private Date lastupdatetime;

    private String isdel;
    private Dic_Duties zhiwu ;  //职务关联表

    private Sys_BranchShop shop ; // 店铺信息
    private List<FK_House> houses ;  //小区对应的房子
    private Sys_UserPhoto photos ;// 图片表


    public List<FK_House> getHouses() {
        return houses;
    }

    public void setHouses(List<FK_House> houses) {
        this.houses = houses;
    }

    public Sys_UserPhoto getPhotos() {
        return photos;
    }

    public void setPhotos(Sys_UserPhoto photos) {
        this.photos = photos;
    }

    public Dic_Duties getZhiwu() {
        return zhiwu;
    }

    public void setZhiwu(Dic_Duties zhiwu) {
        this.zhiwu = zhiwu;
    }

    public Sys_BranchShop getShop() {
        return shop;
    }

    public void setShop(Sys_BranchShop shop) {
        this.shop = shop;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getCardnumber() {
        return cardnumber;
    }

    public void setCardnumber(String cardnumber) {
        this.cardnumber = cardnumber == null ? null : cardnumber.trim();
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail == null ? null : mail.trim();
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq == null ? null : qq.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getHomeaddress() {
        return homeaddress;
    }

    public void setHomeaddress(String homeaddress) {
        this.homeaddress = homeaddress == null ? null : homeaddress.trim();
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education == null ? null : education.trim();
    }

    public String getDutiesid() {
        return dutiesid;
    }

    public void setDutiesid(String dutiesid) {
        this.dutiesid = dutiesid == null ? null : dutiesid.trim();
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }

    public String getPhotoid() {
        return photoid;
    }

    public void setPhotoid(String photoid) {
        this.photoid = photoid == null ? null : photoid.trim();
    }

    public String getBranchshopid() {
        return branchshopid;
    }

    public void setBranchshopid(String branchshopid) {
        this.branchshopid = branchshopid == null ? null : branchshopid.trim();
    }

    public String getCompanyid() {
        return companyid;
    }

    public void setCompanyid(String companyid) {
        this.companyid = companyid == null ? null : companyid.trim();
    }

    public String getCreateuser() {
        return createuser;
    }

    public void setCreateuser(String createuser) {
        this.createuser = createuser == null ? null : createuser.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getLastupdateuser() {
        return lastupdateuser;
    }

    public void setLastupdateuser(String lastupdateuser) {
        this.lastupdateuser = lastupdateuser == null ? null : lastupdateuser.trim();
    }

    public Date getLastupdatetime() {
        return lastupdatetime;
    }

    public void setLastupdatetime(Date lastupdatetime) {
        this.lastupdatetime = lastupdatetime;
    }

    public String getIsdel() {
        return isdel;
    }

    public void setIsdel(String isdel) {
        this.isdel = isdel == null ? null : isdel.trim();
    }
}