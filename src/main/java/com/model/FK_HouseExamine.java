package com.model;

import java.util.Date;

public class FK_HouseExamine{
    private String id;

    private String houseid;

    private String status;

    private String remarks;

    private String createuserid;

    private String createusername;

    private Date createtime;

    private String approvaluserid;

    private String approvalusername;

    private Date approvaltime;

    private String companyid;

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }

    public String getCreateuserid() {
        return createuserid;
    }

    public void setCreateuserid(String createuserid) {
        this.createuserid = createuserid == null ? null : createuserid.trim();
    }

    public String getCreateusername() {
        return createusername;
    }

    public void setCreateusername(String createusername) {
        this.createusername = createusername == null ? null : createusername.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getApprovaluserid() {
        return approvaluserid;
    }

    public void setApprovaluserid(String approvaluserid) {
        this.approvaluserid = approvaluserid == null ? null : approvaluserid.trim();
    }

    public String getApprovalusername() {
        return approvalusername;
    }

    public void setApprovalusername(String approvalusername) {
        this.approvalusername = approvalusername == null ? null : approvalusername.trim();
    }

    public Date getApprovaltime() {
        return approvaltime;
    }

    public void setApprovaltime(Date approvaltime) {
        this.approvaltime = approvaltime;
    }

    public String getCompanyid() {
        return companyid;
    }

    public void setCompanyid(String companyid) {
        this.companyid = companyid == null ? null : companyid.trim();
    }
}