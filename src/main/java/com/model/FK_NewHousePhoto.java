package com.model;

import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class FK_NewHousePhoto {
    private String id;

    private String newhouseid;

    private String filename;

    private String path;

    private Date createtime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getNewhouseid() {
        return newhouseid;
    }

    public void setNewhouseid(String newhouseid) {
        this.newhouseid = newhouseid == null ? null : newhouseid.trim();
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
}