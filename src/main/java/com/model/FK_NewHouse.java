package com.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public class FK_NewHouse {
    private String id;
    private String quyu ;

    public String getQuyu() {
        return quyu;
    }

    public void setQuyu(String quyu) {
        this.quyu = quyu;
    }

    private String zhuanjiauserid;

    private String zhuanjiausername;

    private String zhuanjiabranchshopid;

    private String liangdian;

    private String yongtu;

    private String loupanmingcheng;

    private String loupanbieming;

    private BigDecimal junjiazuidi;

    private BigDecimal junjiazuigao;

    private String kaipanshijian;

    private String jiaofangshijian;

    private String yushouxuke;

    private String chanquannianxian;

    private String rongnalv;

    private String lvhualv;

    private String guihuadudong;

    private String guihuahushu;

    private String tingchewei;

    private String zhandimianji;

    private String jianzhumianji;

    private String wuyefeiyong;

    private String kaifagongsi;

    private String wuyegongsi;

    private String jungongniandai;

    private String loupandizhi;

    private String kaishishijian;

    private String daoqishijian;

    private String zhoubianpeitao;

    private String jiaotongzhuangkuang;

    private String huxing;

    private String mianji;

    private String jiage;

    private String chaoxiang;

    private String jieyongmoshi;

    private String yongjin;

    private String xianjinjiang;

    private String zhuchangrenyuan;

    private String shouji;

    private String dianhua;

    private String createuserid;

    private String createname;

    private Date createtime;

    private String lastupdateuserid;

    private String lastupdatename;

    private Date lastupdatetime;

    private String branchshopid;

    private String companyid;

    private String isdel;

    private Sys_User user ;   //经纪人与创建人

    private List<FK_NewHousePhoto> photos ; //新房图片


    public List<FK_NewHousePhoto> getPhotos() {
        return photos;
    }

    public void setPhotos(List<FK_NewHousePhoto> photos) {
        this.photos = photos == null ? null : photos;
    }


    public Sys_User getUser() {
        return user;
    }

    public void setUser(Sys_User user) {
        this.user = user == null ? null : user;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getZhuanjiauserid() {
        return zhuanjiauserid;
    }

    public void setZhuanjiauserid(String zhuanjiauserid) {
        this.zhuanjiauserid = zhuanjiauserid == null ? null : zhuanjiauserid.trim();
    }

    public String getZhuanjiausername() {
        return zhuanjiausername;
    }

    public void setZhuanjiausername(String zhuanjiausername) {
        this.zhuanjiausername = zhuanjiausername == null ? null : zhuanjiausername.trim();
    }

    public String getZhuanjiabranchshopid() {
        return zhuanjiabranchshopid;
    }

    public void setZhuanjiabranchshopid(String zhuanjiabranchshopid) {
        this.zhuanjiabranchshopid = zhuanjiabranchshopid == null ? null : zhuanjiabranchshopid.trim();
    }

    public String getLiangdian() {
        return liangdian;
    }

    public void setLiangdian(String liangdian) {
        this.liangdian = liangdian == null ? null : liangdian.trim();
    }

    public String getYongtu() {
        return yongtu;
    }

    public void setYongtu(String yongtu) {
        this.yongtu = yongtu == null ? null : yongtu.trim();
    }

    public String getLoupanmingcheng() {
        return loupanmingcheng;
    }

    public void setLoupanmingcheng(String loupanmingcheng) {
        this.loupanmingcheng = loupanmingcheng == null ? null : loupanmingcheng.trim();
    }

    public String getLoupanbieming() {
        return loupanbieming;
    }

    public void setLoupanbieming(String loupanbieming) {
        this.loupanbieming = loupanbieming == null ? null : loupanbieming.trim();
    }

    public BigDecimal getJunjiazuidi() {
        return junjiazuidi;
    }

    public void setJunjiazuidi(BigDecimal junjiazuidi) {
        this.junjiazuidi = junjiazuidi;
    }

    public BigDecimal getJunjiazuigao() {
        return junjiazuigao;
    }

    public void setJunjiazuigao(BigDecimal junjiazuigao) {
        this.junjiazuigao = junjiazuigao;
    }

    public String getKaipanshijian() {
        return kaipanshijian;
    }

    public void setKaipanshijian(String kaipanshijian) {
        this.kaipanshijian = kaipanshijian == null ? null : kaipanshijian.trim();
    }

    public String getJiaofangshijian() {
        return jiaofangshijian;
    }

    public void setJiaofangshijian(String jiaofangshijian) {
        this.jiaofangshijian = jiaofangshijian == null ? null : jiaofangshijian.trim();
    }

    public String getYushouxuke() {
        return yushouxuke;
    }

    public void setYushouxuke(String yushouxuke) {
        this.yushouxuke = yushouxuke == null ? null : yushouxuke.trim();
    }

    public String getChanquannianxian() {
        return chanquannianxian;
    }

    public void setChanquannianxian(String chanquannianxian) {
        this.chanquannianxian = chanquannianxian == null ? null : chanquannianxian.trim();
    }

    public String getRongnalv() {
        return rongnalv;
    }

    public void setRongnalv(String rongnalv) {
        this.rongnalv = rongnalv == null ? null : rongnalv.trim();
    }

    public String getLvhualv() {
        return lvhualv;
    }

    public void setLvhualv(String lvhualv) {
        this.lvhualv = lvhualv == null ? null : lvhualv.trim();
    }

    public String getGuihuadudong() {
        return guihuadudong;
    }

    public void setGuihuadudong(String guihuadudong) {
        this.guihuadudong = guihuadudong == null ? null : guihuadudong.trim();
    }

    public String getGuihuahushu() {
        return guihuahushu;
    }

    public void setGuihuahushu(String guihuahushu) {
        this.guihuahushu = guihuahushu == null ? null : guihuahushu.trim();
    }

    public String getTingchewei() {
        return tingchewei;
    }

    public void setTingchewei(String tingchewei) {
        this.tingchewei = tingchewei == null ? null : tingchewei.trim();
    }

    public String getZhandimianji() {
        return zhandimianji;
    }

    public void setZhandimianji(String zhandimianji) {
        this.zhandimianji = zhandimianji == null ? null : zhandimianji.trim();
    }

    public String getJianzhumianji() {
        return jianzhumianji;
    }

    public void setJianzhumianji(String jianzhumianji) {
        this.jianzhumianji = jianzhumianji == null ? null : jianzhumianji.trim();
    }

    public String getWuyefeiyong() {
        return wuyefeiyong;
    }

    public void setWuyefeiyong(String wuyefeiyong) {
        this.wuyefeiyong = wuyefeiyong == null ? null : wuyefeiyong.trim();
    }

    public String getKaifagongsi() {
        return kaifagongsi;
    }

    public void setKaifagongsi(String kaifagongsi) {
        this.kaifagongsi = kaifagongsi == null ? null : kaifagongsi.trim();
    }

    public String getWuyegongsi() {
        return wuyegongsi;
    }

    public void setWuyegongsi(String wuyegongsi) {
        this.wuyegongsi = wuyegongsi == null ? null : wuyegongsi.trim();
    }

    public String getJungongniandai() {
        return jungongniandai;
    }

    public void setJungongniandai(String jungongniandai) {
        this.jungongniandai = jungongniandai == null ? null : jungongniandai.trim();
    }

    public String getLoupandizhi() {
        return loupandizhi;
    }

    public void setLoupandizhi(String loupandizhi) {
        this.loupandizhi = loupandizhi == null ? null : loupandizhi.trim();
    }

    public String getKaishishijian() {
        return kaishishijian;
    }

    public void setKaishishijian(String kaishishijian) {
        this.kaishishijian = kaishishijian == null ? null : kaishishijian.trim();
    }

    public String getDaoqishijian() {
        return daoqishijian;
    }

    public void setDaoqishijian(String daoqishijian) {
        this.daoqishijian = daoqishijian == null ? null : daoqishijian.trim();
    }

    public String getZhoubianpeitao() {
        return zhoubianpeitao;
    }

    public void setZhoubianpeitao(String zhoubianpeitao) {
        this.zhoubianpeitao = zhoubianpeitao == null ? null : zhoubianpeitao.trim();
    }

    public String getJiaotongzhuangkuang() {
        return jiaotongzhuangkuang;
    }

    public void setJiaotongzhuangkuang(String jiaotongzhuangkuang) {
        this.jiaotongzhuangkuang = jiaotongzhuangkuang == null ? null : jiaotongzhuangkuang.trim();
    }

    public String getHuxing() {
        return huxing;
    }

    public void setHuxing(String huxing) {
        this.huxing = huxing == null ? null : huxing.trim();
    }

    public String getMianji() {
        return mianji;
    }

    public void setMianji(String mianji) {
        this.mianji = mianji == null ? null : mianji.trim();
    }

    public String getJiage() {
        return jiage;
    }

    public void setJiage(String jiage) {
        this.jiage = jiage == null ? null : jiage.trim();
    }

    public String getChaoxiang() {
        return chaoxiang;
    }

    public void setChaoxiang(String chaoxiang) {
        this.chaoxiang = chaoxiang == null ? null : chaoxiang.trim();
    }

    public String getJieyongmoshi() {
        return jieyongmoshi;
    }

    public void setJieyongmoshi(String jieyongmoshi) {
        this.jieyongmoshi = jieyongmoshi == null ? null : jieyongmoshi.trim();
    }

    public String getYongjin() {
        return yongjin;
    }

    public void setYongjin(String yongjin) {
        this.yongjin = yongjin == null ? null : yongjin.trim();
    }

    public String getXianjinjiang() {
        return xianjinjiang;
    }

    public void setXianjinjiang(String xianjinjiang) {
        this.xianjinjiang = xianjinjiang == null ? null : xianjinjiang.trim();
    }

    public String getZhuchangrenyuan() {
        return zhuchangrenyuan;
    }

    public void setZhuchangrenyuan(String zhuchangrenyuan) {
        this.zhuchangrenyuan = zhuchangrenyuan == null ? null : zhuchangrenyuan.trim();
    }

    public String getShouji() {
        return shouji;
    }

    public void setShouji(String shouji) {
        this.shouji = shouji == null ? null : shouji.trim();
    }

    public String getDianhua() {
        return dianhua;
    }

    public void setDianhua(String dianhua) {
        this.dianhua = dianhua == null ? null : dianhua.trim();
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

    public String getIsdel() {
        return isdel;
    }

    public void setIsdel(String isdel) {
        this.isdel = isdel == null ? null : isdel.trim();
    }
}