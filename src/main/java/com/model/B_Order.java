package com.model;

import java.math.BigDecimal;
import java.util.Date;

public class B_Order {
    private FK_House house;
    private String id;

    private String fangyuanbianhao;

    private String yezhuxingming;

    private String yezhudianhua;

    private String keyuanbianhao;

    private String kehuxingming;

    private String kehudianhua;

    private String hetongbianhao;

    private String branchshopid;

    private String quanzhenguserid;

    private String quanzhengname;

    private String anjierenyuan;

    private BigDecimal shishouyongjin;

    private BigDecimal yingshouyongjin;

    private BigDecimal chengjiaojiage;

    private String fukuangfangshi;

    private BigDecimal dingjinkuan;

    private BigDecimal shouqikuan;

    private BigDecimal daikuanjine;

    private String dingdanbianhao;

    private String laststatus;

    private String createuserid;

    private String createname;

    private Date createtime;

    private String lastupdateuserid;

    private String lastupdatename;

    private Date lastupdatetime;

    private String companyid;

    private String isdel;


    public FK_House getHouse() {
        return house;
    }

    public void setHouse(FK_House house) {
        this.house = house;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getFangyuanbianhao() {
        return fangyuanbianhao;
    }

    public void setFangyuanbianhao(String fangyuanbianhao) {
        this.fangyuanbianhao = fangyuanbianhao == null ? null : fangyuanbianhao.trim();
    }

    public String getYezhuxingming() {
        return yezhuxingming;
    }

    public void setYezhuxingming(String yezhuxingming) {
        this.yezhuxingming = yezhuxingming == null ? null : yezhuxingming.trim();
    }

    public String getYezhudianhua() {
        return yezhudianhua;
    }

    public void setYezhudianhua(String yezhudianhua) {
        this.yezhudianhua = yezhudianhua == null ? null : yezhudianhua.trim();
    }

    public String getKeyuanbianhao() {
        return keyuanbianhao;
    }

    public void setKeyuanbianhao(String keyuanbianhao) {
        this.keyuanbianhao = keyuanbianhao == null ? null : keyuanbianhao.trim();
    }

    public String getKehuxingming() {
        return kehuxingming;
    }

    public void setKehuxingming(String kehuxingming) {
        this.kehuxingming = kehuxingming == null ? null : kehuxingming.trim();
    }

    public String getKehudianhua() {
        return kehudianhua;
    }

    public void setKehudianhua(String kehudianhua) {
        this.kehudianhua = kehudianhua == null ? null : kehudianhua.trim();
    }

    public String getHetongbianhao() {
        return hetongbianhao;
    }

    public void setHetongbianhao(String hetongbianhao) {
        this.hetongbianhao = hetongbianhao == null ? null : hetongbianhao.trim();
    }

    public String getBranchshopid() {
        return branchshopid;
    }

    public void setBranchshopid(String branchshopid) {
        this.branchshopid = branchshopid == null ? null : branchshopid.trim();
    }

    public String getQuanzhenguserid() {
        return quanzhenguserid;
    }

    public void setQuanzhenguserid(String quanzhenguserid) {
        this.quanzhenguserid = quanzhenguserid == null ? null : quanzhenguserid.trim();
    }

    public String getQuanzhengname() {
        return quanzhengname;
    }

    public void setQuanzhengname(String quanzhengname) {
        this.quanzhengname = quanzhengname == null ? null : quanzhengname.trim();
    }

    public String getAnjierenyuan() {
        return anjierenyuan;
    }

    public void setAnjierenyuan(String anjierenyuan) {
        this.anjierenyuan = anjierenyuan == null ? null : anjierenyuan.trim();
    }

    public BigDecimal getShishouyongjin() {
        return shishouyongjin;
    }

    public void setShishouyongjin(BigDecimal shishouyongjin) {
        this.shishouyongjin = shishouyongjin;
    }

    public BigDecimal getYingshouyongjin() {
        return yingshouyongjin;
    }

    public void setYingshouyongjin(BigDecimal yingshouyongjin) {
        this.yingshouyongjin = yingshouyongjin;
    }

    public BigDecimal getChengjiaojiage() {
        return chengjiaojiage;
    }

    public void setChengjiaojiage(BigDecimal chengjiaojiage) {
        this.chengjiaojiage = chengjiaojiage;
    }

    public String getFukuangfangshi() {
        return fukuangfangshi;
    }

    public void setFukuangfangshi(String fukuangfangshi) {
        this.fukuangfangshi = fukuangfangshi == null ? null : fukuangfangshi.trim();
    }

    public BigDecimal getDingjinkuan() {
        return dingjinkuan;
    }

    public void setDingjinkuan(BigDecimal dingjinkuan) {
        this.dingjinkuan = dingjinkuan;
    }

    public BigDecimal getShouqikuan() {
        return shouqikuan;
    }

    public void setShouqikuan(BigDecimal shouqikuan) {
        this.shouqikuan = shouqikuan;
    }

    public BigDecimal getDaikuanjine() {
        return daikuanjine;
    }

    public void setDaikuanjine(BigDecimal daikuanjine) {
        this.daikuanjine = daikuanjine;
    }

    public String getDingdanbianhao() {
        return dingdanbianhao;
    }

    public void setDingdanbianhao(String dingdanbianhao) {
        this.dingdanbianhao = dingdanbianhao == null ? null : dingdanbianhao.trim();
    }

    public String getLaststatus() {
        return laststatus;
    }

    public void setLaststatus(String laststatus) {
        this.laststatus = laststatus == null ? null : laststatus.trim();
    }

    public String getCreateuserid() {
        return createuserid;
    }

    public void setCreateuserid(String createuserid) {
        this.createuserid = createuserid == null ? null : createuserid.trim();
    }

    public String getCreatename() {
        return createname;
    }

    public void setCreatename(String createname) {
        this.createname = createname == null ? null : createname.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getLastupdateuserid() {
        return lastupdateuserid;
    }

    public void setLastupdateuserid(String lastupdateuserid) {
        this.lastupdateuserid = lastupdateuserid == null ? null : lastupdateuserid.trim();
    }

    public String getLastupdatename() {
        return lastupdatename;
    }

    public void setLastupdatename(String lastupdatename) {
        this.lastupdatename = lastupdatename == null ? null : lastupdatename.trim();
    }

    public Date getLastupdatetime() {
        return lastupdatetime;
    }

    public void setLastupdatetime(Date lastupdatetime) {
        this.lastupdatetime = lastupdatetime;
    }

    public String getCompanyid() {
        return companyid;
    }

    public void setCompanyid(String companyid) {
        this.companyid = companyid == null ? null : companyid.trim();
    }

    public String getIsdel() {
        return isdel;
    }

    public void setIsdel(String isdel) {
        this.isdel = isdel == null ? null : isdel.trim();
    }
}