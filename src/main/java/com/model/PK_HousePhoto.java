package com.model;

import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class PK_HousePhoto {
    private String id;

    private String houseid;

    private String filename;

    private String path;

    private Date createtime;

    private FK_House house ;   //房源对象


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

    public String getHouseid() {
        return houseid;
    }

    public void setHouseid(String houseid) {
        this.houseid = houseid == null ? null : houseid.trim();
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename == null ? null : filename.trim();
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path == null ? null : path.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    @Override
    public String toString() {
        return "PK_HousePhoto{" +
                "id='" + id + '\'' +
                ", houseid='" + houseid + '\'' +
                ", filename='" + filename + '\'' +
                ", path='" + path + '\'' +
                ", createtime=" + createtime +
                '}';
    }
}