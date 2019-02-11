package com.model;

import com.util.ReplaceClass;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.groups.Default;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
//@Table(name = "FK_House")
//@Entity  //(告诉jpa这是一个实体类)

public class FK_House implements Serializable {
   // @Id  //这是要给主键
  //  @GeneratedValue(strategy = GenerationType.IDENTITY)  //自增主键
   public static final String DEFAULT_PAGE_SIZE = "暂无";
    private String id;
    private String quyu;
    private String leixing;
    private String huxing ;
    private String zhuangtai;

    private String tongtu;

    private String isshow;

    private String name;

    private String dongzuo;

    private String danyuan;

    private String fanghao;

    private String louceng;

    private String gongjiceng;

    private String mianji;

    private String woshi;

    private String ketingcanting;

    private String weishengjian;

    private String chufang;

    private String yangtai;

    private String zhuangxiu;

    private String chaoxiang;

    private String louxing;

    private String chewei;

    private String fangyuanbianhao;

    private String fangchanzhenghao;

    private BigDecimal zuidishoujia;

    private BigDecimal zuigaoshoujia;

    private String fukuanfangshi;

    private String chanquanzhuangtai;

    private String anjieqiankuan;

    private String qiankuanyinhang;

    private String shuxing;

    private BigDecimal zuidizujin;

    private BigDecimal zuigaozujin;

    private Date ruzhushijian;

    private String chuzuqixian;

    private String yajinleixing;

    private String peitao;

    private String fangzhuxingming;

    private String fangzhuxingbie;

    private String fangzhudianhua;

    private String laiyuan;

    private String hexinmaidian;

    private String huxingjieshao;

    private String fangyuanbiaoqian;

    private String islock;

    private String createuserid;

    private String createname;

    private Date createtime;

    private String lastupdateuserid;

    private String lastupdatename;

    private Date lastupdatetime;

    private String branchshopid;

    private String companyid;

    private String isdel;
   /* @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="name")*/
    private FK_Community com ;   //小区对象
    private Sys_User user ;   //业务员对象
    private Sys_BranchShop shop ;   //门店对象
    private List<PK_HousePhoto> housePhoto ; // 房源图片
    private Integer photoCount ;  //图片数量
    public FK_House() {
    }

    public FK_House(String id, String quyu, String leixing, String huxing, String zhuangtai, String tongtu, String isshow, String name, String dongzuo, String danyuan, String fanghao, String louceng, String gongjiceng, String mianji, String woshi, String ketingcanting, String weishengjian, String chufang, String yangtai, String zhuangxiu, String chaoxiang, String louxing, String chewei, String fangyuanbianhao, String fangchanzhenghao, BigDecimal zuidishoujia, BigDecimal zuigaoshoujia, String fukuanfangshi, String chanquanzhuangtai, String anjieqiankuan, String qiankuanyinhang, String shuxing, BigDecimal zuidizujin, BigDecimal zuigaozujin, Date ruzhushijian, String chuzuqixian, String yajinleixing, String peitao, String fangzhuxingming, String fangzhuxingbie, String fangzhudianhua, String laiyuan, String hexinmaidian, String huxingjieshao, String fangyuanbiaoqian, String islock, String createuserid, String createname, Date createtime, String lastupdateuserid, String lastupdatename, Date lastupdatetime, String branchshopid, String companyid, String isdel, FK_Community com, Sys_User user, Sys_BranchShop shop, List<PK_HousePhoto> housePhoto, Integer photoCount) {
        this.id = id;
        this.quyu = quyu;
        this.leixing = leixing;
        this.huxing = huxing;
        this.zhuangtai = zhuangtai;
        this.tongtu = tongtu;
        this.isshow = isshow;
        this.name = name;
        this.dongzuo = dongzuo;
        this.danyuan = danyuan;
        this.fanghao = fanghao;
        this.louceng = louceng;
        this.gongjiceng = gongjiceng;
        this.mianji = mianji;
        this.woshi = woshi;
        this.ketingcanting = ketingcanting;
        this.weishengjian = weishengjian;
        this.chufang = chufang;
        this.yangtai = yangtai;
        this.zhuangxiu = zhuangxiu;
        this.chaoxiang = chaoxiang;
        this.louxing = louxing;
        this.chewei = chewei;
        this.fangyuanbianhao = fangyuanbianhao;
        this.fangchanzhenghao = fangchanzhenghao;
        this.zuidishoujia = zuidishoujia;
        this.zuigaoshoujia = zuigaoshoujia;
        this.fukuanfangshi = fukuanfangshi;
        this.chanquanzhuangtai = chanquanzhuangtai;
        this.anjieqiankuan = anjieqiankuan;
        this.qiankuanyinhang = qiankuanyinhang;
        this.shuxing = shuxing;
        this.zuidizujin = zuidizujin;
        this.zuigaozujin = zuigaozujin;
        this.ruzhushijian = ruzhushijian;
        this.chuzuqixian = chuzuqixian;
        this.yajinleixing = yajinleixing;
        this.peitao = peitao;
        this.fangzhuxingming = fangzhuxingming;
        this.fangzhuxingbie = fangzhuxingbie;
        this.fangzhudianhua = fangzhudianhua;
        this.laiyuan = laiyuan;
        this.hexinmaidian = hexinmaidian;
        this.huxingjieshao = huxingjieshao;
        this.fangyuanbiaoqian = fangyuanbiaoqian;
        this.islock = islock;
        this.createuserid = createuserid;
        this.createname = createname;
        this.createtime = createtime;
        this.lastupdateuserid = lastupdateuserid;
        this.lastupdatename = lastupdatename;
        this.lastupdatetime = lastupdatetime;
        this.branchshopid = branchshopid;
        this.companyid = companyid;
        this.isdel = isdel;
        this.com = com;
        this.user = user;
        this.shop = shop;
        this.housePhoto = housePhoto;
        this.photoCount = photoCount;
    }

    public Integer getPhotoCount() {
        return photoCount;
    }

    public void setPhotoCount(Integer photoCount) {
        this.photoCount = photoCount;
    }

    public List<PK_HousePhoto> getHousePhoto() {
        return housePhoto;
    }

    public void setHousePhoto(List<PK_HousePhoto> housePhoto) {
        this.housePhoto = housePhoto;
    }

    public void setUser(Sys_User user) {
        this.user = user == null ? ReplaceClass.getUser() : user;
    }

    public String getQuyu() {
        return quyu;
    }

    public void setQuyu(String quyu) {
        this.quyu = quyu;
    }

    public Sys_BranchShop getShop() {
        return shop;
    }

    public void setShop(Sys_BranchShop shop) {
        this.shop = shop;
    }

    public String getHuxing() {
        return huxing;
    }

    public void setHuxing(String huxing) {
        this.huxing = huxing;
    }

    public Sys_User getUser() {
        return user;
    }

    public FK_Community getCom() {
        return com;
    }

    public void setCom(FK_Community com) {
        this.com = com;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getLeixing() {
        return leixing;
    }

    public void setLeixing(String leixing) {
        this.leixing = leixing == null ? null : leixing.trim();
    }

    public String getZhuangtai() {
        return zhuangtai;
    }

    public void setZhuangtai(String zhuangtai) {
        this.zhuangtai = zhuangtai == null ? this.DEFAULT_PAGE_SIZE  : zhuangtai.trim();
    }

    public String getTongtu() {
        return tongtu;
    }

    public void setTongtu(String tongtu) {
        this.tongtu = tongtu == null ? this.DEFAULT_PAGE_SIZE : tongtu.trim();
    }

    public String getIsshow() {
        return isshow;
    }

    public void setIsshow(String isshow) {
        this.isshow = isshow == null ? this.DEFAULT_PAGE_SIZE  : isshow.trim();
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? this.DEFAULT_PAGE_SIZE  : name.trim();
    }


    public String getDongzuo() {
        return dongzuo;
    }

    public void setDongzuo(String dongzuo) {
        this.dongzuo = dongzuo == null ? this.DEFAULT_PAGE_SIZE  : dongzuo.trim();
    }

    public String getDanyuan() {
        return danyuan;
    }

    public void setDanyuan(String danyuan) {
        this.danyuan = danyuan == null ? this.DEFAULT_PAGE_SIZE  : danyuan.trim();
    }

    public String getFanghao() {
        return fanghao;
    }

    public void setFanghao(String fanghao) {
        this.fanghao = fanghao == null ? this.DEFAULT_PAGE_SIZE  : fanghao.trim();
    }

    public String getLouceng() {
        return louceng;
    }

    public void setLouceng(String louceng) {
        this.louceng = louceng == null ? this.DEFAULT_PAGE_SIZE  : louceng.trim();
    }

    public String getGongjiceng() {
        return gongjiceng;
    }

    public void setGongjiceng(String gongjiceng) {
        this.gongjiceng = gongjiceng == null ? DEFAULT_PAGE_SIZE : gongjiceng.trim();
    }

    public String getMianji() {
        return mianji;
    }

    public void setMianji(String mianji) {
        this.mianji = mianji == null ? DEFAULT_PAGE_SIZE : mianji.trim();
    }

    public String getWoshi() {
        return woshi;
    }

    public void setWoshi(String woshi) {
        this.woshi = woshi == null ? null : woshi.trim();
    }

    public String getKetingcanting() {
        return ketingcanting;
    }

    public void setKetingcanting(String ketingcanting) {
        this.ketingcanting = ketingcanting == null ? null : ketingcanting.trim();
    }

    public String getWeishengjian() {
        return weishengjian;
    }

    public void setWeishengjian(String weishengjian) {
        this.weishengjian = weishengjian == null ? null : weishengjian.trim();
    }

    public String getChufang() {
        return chufang;
    }

    public void setChufang(String chufang) {
        this.chufang = chufang == null ? null : chufang.trim();
    }

    public String getYangtai() {
        return yangtai;
    }

    public void setYangtai(String yangtai) {
        this.yangtai = yangtai == null ? null : yangtai.trim();
    }

    public String getZhuangxiu() {
        return zhuangxiu;
    }

    public void setZhuangxiu(String zhuangxiu) {
        this.zhuangxiu = zhuangxiu == null ? DEFAULT_PAGE_SIZE : zhuangxiu.trim();
    }

    public String getChaoxiang() {
        return chaoxiang;
    }

    public void setChaoxiang(String chaoxiang) {
        this.chaoxiang = chaoxiang == null ? DEFAULT_PAGE_SIZE : chaoxiang.trim();
    }

    public String getLouxing() {
        return louxing;
    }

    public void setLouxing(String louxing) {
        this.louxing = louxing == null ? null : louxing.trim();
    }

    public String getChewei() {
        return chewei;
    }

    public void setChewei(String chewei) {
        this.chewei = chewei == null ? null : chewei.trim();
    }

    public String getFangyuanbianhao() {
        return fangyuanbianhao;
    }

    public void setFangyuanbianhao(String fangyuanbianhao) {
        this.fangyuanbianhao = fangyuanbianhao == null ? null : fangyuanbianhao.trim();
    }

    public String getFangchanzhenghao() {
        return fangchanzhenghao;
    }

    public void setFangchanzhenghao(String fangchanzhenghao) {
        this.fangchanzhenghao = fangchanzhenghao == null ? null : fangchanzhenghao.trim();
    }

    public BigDecimal getZuidishoujia() {
        return zuidishoujia;
    }

    public void setZuidishoujia(BigDecimal zuidishoujia) {
        this.zuidishoujia = zuidishoujia;
    }

    public BigDecimal getZuigaoshoujia() {
        return zuigaoshoujia;
    }

    public void setZuigaoshoujia(BigDecimal zuigaoshoujia) {
        this.zuigaoshoujia = zuigaoshoujia;
    }

    public String getFukuanfangshi() {
        return fukuanfangshi;
    }

    public void setFukuanfangshi(String fukuanfangshi) {
        this.fukuanfangshi = fukuanfangshi == null ? null : fukuanfangshi.trim();
    }

    public String getChanquanzhuangtai() {
        return chanquanzhuangtai;
    }

    public void setChanquanzhuangtai(String chanquanzhuangtai) {
        this.chanquanzhuangtai = chanquanzhuangtai == null ? null : chanquanzhuangtai.trim();
    }

    public String getAnjieqiankuan() {
        return anjieqiankuan;
    }

    public void setAnjieqiankuan(String anjieqiankuan) {
        this.anjieqiankuan = anjieqiankuan == null ? null : anjieqiankuan.trim();
    }

    public String getQiankuanyinhang() {
        return qiankuanyinhang;
    }

    public void setQiankuanyinhang(String qiankuanyinhang) {
        this.qiankuanyinhang = qiankuanyinhang == null ? null : qiankuanyinhang.trim();
    }

    public String getShuxing() {
        return shuxing;
    }

    public void setShuxing(String shuxing) {
        this.shuxing = shuxing == null ? DEFAULT_PAGE_SIZE : shuxing.trim();
    }

    public BigDecimal getZuidizujin() {
        return zuidizujin;
    }

    public void setZuidizujin(BigDecimal zuidizujin) {
        this.zuidizujin = zuidizujin == null ? null : zuidizujin;
    }

    public BigDecimal getZuigaozujin() {
        return zuigaozujin;
    }

    public void setZuigaozujin(BigDecimal zuigaozujin) {
        this.zuigaozujin = zuigaozujin;
    }

    public Date getRuzhushijian() {
        return ruzhushijian;
    }

    public void setRuzhushijian(Date ruzhushijian) {
        this.ruzhushijian = ruzhushijian;
    }

    public String getChuzuqixian() {
        return chuzuqixian;
    }

    public void setChuzuqixian(String chuzuqixian) {
        this.chuzuqixian = chuzuqixian == null ? null : chuzuqixian.trim();
    }

    public String getYajinleixing() {
        return yajinleixing;
    }

    public void setYajinleixing(String yajinleixing) {
        this.yajinleixing = yajinleixing == null ? null : yajinleixing.trim();
    }

    public String getPeitao() {
        return peitao;
    }

    public void setPeitao(String peitao) {
        this.peitao = peitao == null ? DEFAULT_PAGE_SIZE : peitao.trim();
    }

    public String getFangzhuxingming() {
        return fangzhuxingming;
    }

    public void setFangzhuxingming(String fangzhuxingming) {
        this.fangzhuxingming = fangzhuxingming == null ? DEFAULT_PAGE_SIZE : fangzhuxingming.trim();
    }

    public String getFangzhuxingbie() {
        return fangzhuxingbie;
    }

    public void setFangzhuxingbie(String fangzhuxingbie) {
        this.fangzhuxingbie = fangzhuxingbie == null ? DEFAULT_PAGE_SIZE : fangzhuxingbie.trim();
    }

    public String getFangzhudianhua() {
        return fangzhudianhua;
    }

    public void setFangzhudianhua(String fangzhudianhua) {
        this.fangzhudianhua = fangzhudianhua == null ? null : fangzhudianhua.trim();
    }

    public String getLaiyuan() {
        return laiyuan;
    }

    public void setLaiyuan(String laiyuan) {
        this.laiyuan = laiyuan == null ? null : laiyuan.trim();
    }

    public String getHexinmaidian() {
        return hexinmaidian;
    }

    public void setHexinmaidian(String hexinmaidian) {
        this.hexinmaidian = hexinmaidian == null ? "暂无卖点" : hexinmaidian.trim();
    }

    public String getHuxingjieshao() {
        return huxingjieshao;
    }

    public void setHuxingjieshao(String huxingjieshao) {
        this.huxingjieshao = huxingjieshao == null ? DEFAULT_PAGE_SIZE : huxingjieshao.trim();
    }

    public String getFangyuanbiaoqian() {
        return fangyuanbiaoqian;
    }

    public void setFangyuanbiaoqian(String fangyuanbiaoqian) {
        this.fangyuanbiaoqian = fangyuanbiaoqian == null ? "暂无标签" : fangyuanbiaoqian.trim();
    }

    public String getIslock() {
        return islock;
    }

    public void setIslock(String islock) {
        this.islock = islock == null ? null : islock.trim();
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

    @Override
    public String toString() {
        return "FK_House{" +
                "id='" + id + '\'' +
                ", quyu='" + quyu + '\'' +
                ", leixing='" + leixing + '\'' +
                ", zhuangtai='" + zhuangtai + '\'' +
                ", tongtu='" + tongtu + '\'' +
                ", isshow='" + isshow + '\'' +
                ", name='" + name + '\'' +
                ", dongzuo='" + dongzuo + '\'' +
                ", danyuan='" + danyuan + '\'' +
                ", fanghao='" + fanghao + '\'' +
                ", louceng='" + louceng + '\'' +
                ", gongjiceng='" + gongjiceng + '\'' +
                ", mianji='" + mianji + '\'' +
                ", woshi='" + woshi + '\'' +
                ", ketingcanting='" + ketingcanting + '\'' +
                ", weishengjian='" + weishengjian + '\'' +
                ", chufang='" + chufang + '\'' +
                ", yangtai='" + yangtai + '\'' +
                ", zhuangxiu='" + zhuangxiu + '\'' +
                ", chaoxiang='" + chaoxiang + '\'' +
                ", louxing='" + louxing + '\'' +
                ", chewei='" + chewei + '\'' +
                ", fangyuanbianhao='" + fangyuanbianhao + '\'' +
                ", fangchanzhenghao='" + fangchanzhenghao + '\'' +
                ", zuidishoujia=" + zuidishoujia +
                ", zuigaoshoujia=" + zuigaoshoujia +
                ", fukuanfangshi='" + fukuanfangshi + '\'' +
                ", chanquanzhuangtai='" + chanquanzhuangtai + '\'' +
                ", anjieqiankuan='" + anjieqiankuan + '\'' +
                ", qiankuanyinhang='" + qiankuanyinhang + '\'' +
                ", shuxing='" + shuxing + '\'' +
                ", zuidizujin=" + zuidizujin +
                ", zuigaozujin=" + zuigaozujin +
                ", ruzhushijian=" + ruzhushijian +
                ", chuzuqixian='" + chuzuqixian + '\'' +
                ", yajinleixing='" + yajinleixing + '\'' +
                ", peitao='" + peitao + '\'' +
                ", fangzhuxingming='" + fangzhuxingming + '\'' +
                ", fangzhuxingbie='" + fangzhuxingbie + '\'' +
                ", fangzhudianhua='" + fangzhudianhua + '\'' +
                ", laiyuan='" + laiyuan + '\'' +
                ", hexinmaidian='" + hexinmaidian + '\'' +
                ", huxingjieshao='" + huxingjieshao + '\'' +
                ", fangyuanbiaoqian='" + fangyuanbiaoqian + '\'' +
                ", islock='" + islock + '\'' +
                ", createuserid='" + createuserid + '\'' +
                ", createname='" + createname + '\'' +
                ", createtime=" + createtime +
                ", lastupdateuserid='" + lastupdateuserid + '\'' +
                ", lastupdatename='" + lastupdatename + '\'' +
                ", lastupdatetime=" + lastupdatetime +
                ", branchshopid='" + branchshopid + '\'' +
                ", companyid='" + companyid + '\'' +
                ", isdel='" + isdel + '\'' +
                ", com=" + com +
                ", user=" + user +
                ", shop=" + shop +
                '}';
    }
}