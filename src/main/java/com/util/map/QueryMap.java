package com.util.map;

public class QueryMap {
    private String action ;    //地图覆盖物显示类型
    private Double minlng ;  //最小经度
    private Double minlat ; //最小纬度
    private Double maxlng ; //最大精度
    private Double maxlat ; //最大纬度
    private Integer mapZoom;

    public QueryMap() {

    }

    public QueryMap(String action, Double minlng, Double minlat, Double maxlng, Double maxlat, Integer mapZoom) {
        this.action = action;
        this.minlng = minlng;
        this.minlat = minlat;
        this.maxlng = maxlng;
        this.maxlat = maxlat;
        this.mapZoom = mapZoom;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Double getMinlng() {
        return minlng;
    }

    public void setMinlng(Double minlng) {
        this.minlng = minlng;
    }

    public Double getMinlat() {
        return minlat;
    }

    public void setMinlat(Double minlat) {
        this.minlat = minlat;
    }

    public Double getMaxlng() {
        return maxlng;
    }

    public void setMaxlng(Double maxlng) {
        this.maxlng = maxlng;
    }

    public Double getMaxlat() {
        return maxlat;
    }

    public void setMaxlat(Double maxlat) {
        this.maxlat = maxlat;
    }

    public Integer getMapZoom() {
        return mapZoom;
    }

    public void setMapZoom(Integer mapZoom) {
        this.mapZoom = mapZoom;
    }

    @Override
    public String toString() {
        return "QueryMap{" +
                "action='" + action + '\'' +
                ", minlng=" + minlng +
                ", minlat=" + minlat +
                ", maxlng=" + maxlng +
                ", maxlat=" + maxlat +
                ", mapZoom=" + mapZoom +
                '}';
    }
}
