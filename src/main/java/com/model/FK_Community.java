package com.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

//@Entity  //(告诉jpa这是一个实体类)
public class FK_Community  implements Serializable{
    public static final String DEFAULT_PAGE_SIZE = "暂无数据";
  //  @Id
    private String id;
    private  String quyu ;
    private String zhuanjiauserid;

    private String zhuanjiausername;

    private String zhuanjiabranchshopid;

    private String biaoqian;

    private String yongtu;

    private String loupanmingcheng;

    private String loupanbieming;

    private String loupandizhi;

    private String chanquannianxian;

    private String rongjilv;

    private String lvhualv;

    private String guihuadongshu;

    private String guihuahushu;

    private String tingchewei;

    private String zhandimianji;

    private String jianzhumianji;

    private String zhuwufeiyong;

    private String kaifagongsi;

    private String wuyegongsi;

    private String jungongniandai;

    private String xiaoqujianjie;

    private String zhoubianpeitao;

    private String jiaotongchuxing;

    private String createuserid;

    private String createname;

    private Date createtime;

    private String lastupdateuserid;

    private String lastupdatename;

    private Date lastupdatetime;

    private String branchshopid;

    private String companyid;

    private String isdel;

    private List<FK_House> houses ;  //小区对应的房子
    private Integer esfCount;  //二手房数量
    private Integer zfCount;    //租房数量
    private String  longitude;  //经度
    private String  latitude;  //纬度
    private List<FK_CommunityPhoto> photos;  //小区图片
    private BigDecimal price ;  //最新订单成交价格

    private Sys_BranchShop shop ;  //门店
    private Sys_User user;

    public Sys_BranchShop getShop() {
        return shop;
    }

    public void setShop(Sys_BranchShop shop) {
        this.shop = shop;
    }

    public Sys_User getUser() {
        return user;
    }

    public void setUser(Sys_User user) {
        this.user = user;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price == null ? null : price;
    }

    public FK_Community() {
    }

    public FK_Community(String id, String zhuanjiauserid, String zhuanjiausername, String zhuanjiabranchshopid, String biaoqian, String yongtu, String loupanmingcheng, String loupanbieming, String loupandizhi, String chanquannianxian, String rongjilv, String lvhualv, String guihuadongshu, String guihuahushu, String tingchewei, String zhandimianji, String jianzhumianji, String zhuwufeiyong, String kaifagongsi, String wuyegongsi, String jungongniandai, String xiaoqujianjie, String zhoubianpeitao, String jiaotongchuxing, String createuserid, String createname, Date createtime, String lastupdateuserid, String lastupdatename, Date lastupdatetime, String branchshopid, String companyid, String isdel, List<FK_House> houses, Integer esfCount, Integer zfCount, String longitude, String latitude, List<FK_CommunityPhoto> photos) {
        this.id = id;
        this.zhuanjiauserid = zhuanjiauserid;
        this.zhuanjiausername = zhuanjiausername;
        this.zhuanjiabranchshopid = zhuanjiabranchshopid;
        this.biaoqian = biaoqian;
        this.yongtu = yongtu;
        this.loupanmingcheng = loupanmingcheng;
        this.loupanbieming = loupanbieming;
        this.loupandizhi = loupandizhi;
        this.chanquannianxian = chanquannianxian;
        this.rongjilv = rongjilv;
        this.lvhualv = lvhualv;
        this.guihuadongshu = guihuadongshu;
        this.guihuahushu = guihuahushu;
        this.tingchewei = tingchewei;
        this.zhandimianji = zhandimianji;
        this.jianzhumianji = jianzhumianji;
        this.zhuwufeiyong = zhuwufeiyong;
        this.kaifagongsi = kaifagongsi;
        this.wuyegongsi = wuyegongsi;
        this.jungongniandai = jungongniandai;
        this.xiaoqujianjie = xiaoqujianjie;
        this.zhoubianpeitao = zhoubianpeitao;
        this.jiaotongchuxing = jiaotongchuxing;
        this.createuserid = createuserid;
        this.createname = createname;
        this.createtime = createtime;
        this.lastupdateuserid = lastupdateuserid;
        this.lastupdatename = lastupdatename;
        this.lastupdatetime = lastupdatetime;
        this.branchshopid = branchshopid;
        this.companyid = companyid;
        this.isdel = isdel;
        this.houses = houses;
        this.esfCount = esfCount;
        this.zfCount = zfCount;
        this.longitude = longitude;
        this.latitude = latitude;
        this.photos = photos;
    }

    public String getQuyu() {
        return quyu;
    }

    public void setQuyu(String quyu) {
        this.quyu = quyu;
    }

    public List<FK_CommunityPhoto> getPhotos() {
        return photos;
    }

    public void setPhotos(List<FK_CommunityPhoto> photos) {
        this.photos = photos;
    }

    public List<FK_House> getHouses() {
        return houses;
    }

    public void setHouses(List<FK_House> houses) {
        this.houses = houses;
    }

    public Integer getEsfCount() {
        return esfCount;
    }

    public void setEsfCount(Integer esfCount) {
        this.esfCount = esfCount;
    }

    public Integer getZfCount() {
        return zfCount;
    }

    public void setZfCount(Integer zfCount) {
        this.zfCount = zfCount;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
//    private FK_CommunityPhoto comPhoto ;
  /*  @OneToMany(mappedBy = "com",cascade = CascadeType.ALL,fetch = FetchType.LAZY)*/
//    private List<FK_House> houses ;   //二手房列表

//    public FK_CommunityPhoto getComPhoto() {
//		return comPhoto;
//	}
//
//	public void setComPhoto(FK_CommunityPhoto comPhoto) {
//		this.comPhoto = comPhoto;
//	}

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

    public String getBiaoqian() {
        return biaoqian;
    }

    public void setBiaoqian(String biaoqian) {
        this.biaoqian = biaoqian == null ? null : biaoqian.trim();
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

    public String getLoupandizhi() {
        return loupandizhi;
    }

    public void setLoupandizhi(String loupandizhi) {
        this.loupandizhi = loupandizhi == null ? null : loupandizhi.trim();
    }

    public String getChanquannianxian() {
        return chanquannianxian;
    }

    public void setChanquannianxian(String chanquannianxian) {
        this.chanquannianxian = chanquannianxian == null ? null : chanquannianxian.trim();
    }

    public String getRongjilv() {
        return rongjilv;
    }

    public void setRongjilv(String rongjilv) {
        this.rongjilv = rongjilv == null ? null : rongjilv.trim();
    }

    public String getLvhualv() {
        return lvhualv;
    }

    public void setLvhualv(String lvhualv) {
        this.lvhualv = lvhualv == null ? null : lvhualv.trim();
    }

    public String getGuihuadongshu() {
        return guihuadongshu;
    }

    public void setGuihuadongshu(String guihuadongshu) {
        this.guihuadongshu = guihuadongshu == null ? null : guihuadongshu.trim();
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

    public String getZhuwufeiyong() {
        return zhuwufeiyong;
    }

    public void setZhuwufeiyong(String zhuwufeiyong) {
        this.zhuwufeiyong = zhuwufeiyong == null ? null : zhuwufeiyong.trim();
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
        this.jungongniandai = jungongniandai == null ? this.DEFAULT_PAGE_SIZE : jungongniandai.trim();
    }

    public String getXiaoqujianjie() {
        return xiaoqujianjie;
    }

    public void setXiaoqujianjie(String xiaoqujianjie) {
        this.xiaoqujianjie = xiaoqujianjie == null ? this.DEFAULT_PAGE_SIZE : xiaoqujianjie.trim();
    }

    public String getZhoubianpeitao() {
        return zhoubianpeitao;
    }

    public void setZhoubianpeitao(String zhoubianpeitao) {
        this.zhoubianpeitao = zhoubianpeitao == null ? this.DEFAULT_PAGE_SIZE : zhoubianpeitao.trim();
    }

    public String getJiaotongchuxing() {
        return jiaotongchuxing;
    }

    public void setJiaotongchuxing(String jiaotongchuxing) {
        this.jiaotongchuxing = jiaotongchuxing == null ? null : jiaotongchuxing.trim();
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