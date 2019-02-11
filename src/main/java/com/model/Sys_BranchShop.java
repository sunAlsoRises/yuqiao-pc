package com.model;

import java.util.Date;
import java.util.List;

public class Sys_BranchShop {
    private String id;
    public static final String DEFAULT_PAGE_SIZE = "暂无";
    private String name;
    private  String quyu ;
    private String province;

    private String city;

    private String address;

    private String shopownername;

    private String shopownermobile;

    private String shopownercardnum;

    private String remarks;

    private String companyid;

    private String createuser;

    private Date createtime;

    private String lastupdateuser;

    private Date lastupdatetime;

    private List<Sys_User> users ;  //经纪人

    public List<Sys_User> getUsers() {
        return users;
    }

    public void setUsers(List<Sys_User> users) {
        this.users = users;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getQuyu() {
        return quyu;
    }

    public void setQuyu(String quyu) {
        this.quyu = quyu == null ? DEFAULT_PAGE_SIZE : quyu.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? DEFAULT_PAGE_SIZE : name.trim();
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province == null ? null : province.trim();
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city == null ? null : city.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? DEFAULT_PAGE_SIZE : address.trim();
    }

    public String getShopownername() {
        return shopownername;
    }

    public void setShopownername(String shopownername) {
        this.shopownername = shopownername == null ? null : shopownername.trim();
    }

    public String getShopownermobile() {
        return shopownermobile;
    }

    public void setShopownermobile(String shopownermobile) {
        this.shopownermobile = shopownermobile == null ? null : shopownermobile.trim();
    }

    public String getShopownercardnum() {
        return shopownercardnum;
    }

    public void setShopownercardnum(String shopownercardnum) {
        this.shopownercardnum = shopownercardnum == null ? null : shopownercardnum.trim();
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
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
}