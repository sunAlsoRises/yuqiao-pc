package com.model;

import java.util.Date;

public class FK_Collection {
    private Integer id;

    private String phone;

    private String houseid;

    private String unionid;

    private Date createtime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getHouseid() {
        return houseid;
    }

    public void setHouseid(String houseid) {
        this.houseid = houseid == null ? null : houseid.trim();
    }

    public String getUnionid() {
        return unionid;
    }

    public void setUnionid(String unionid) {
        this.unionid = unionid == null ? null : unionid.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime == null ? new Date() : createtime;
    }

    @Override
    public String toString() {
        return "FK_Collection{" +
                "id=" + id +
                ", phone='" + phone + '\'' +
                ", houseid='" + houseid + '\'' +
                ", unionid='" + unionid + '\'' +
                ", createtime=" + createtime +
                '}';
    }
}