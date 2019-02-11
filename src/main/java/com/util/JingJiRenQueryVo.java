package com.util;

public class JingJiRenQueryVo {
    private String searchName ;   //搜索条件
    private Integer leixing ;  //1 为 售 2为租  3为新房
    private Integer orderby; //是否升序与降序
    private Integer shunxu ;//排序方式 肾虚还是降序
    public static final int DEFAULT_PAGE_SIZE = 20;

    private int pageSize;// 页面条数  每页显示条数
    private int currentPage;// 当前页的位置   当前是第几页
    private int start ;  //从哪开始查

    private int prePage;// 上一页
    private int nextPage;// 下一页
    private int totalPage;// 总页数
   // private int totalCount;//
   public JingJiRenQueryVo() {
       this.currentPage = 1;
       this.pageSize = DEFAULT_PAGE_SIZE;
   }
    public JingJiRenQueryVo(String searchName, Integer leixing, Integer orderby, Integer shunxu, int pageSize, int currentPage, int start, int prePage, int nextPage, int totalPage) {
        this.searchName = searchName;
        this.leixing = leixing;
        this.orderby = orderby;
        this.shunxu = shunxu;
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.start = start;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.totalPage = totalPage;
    }

    public String getSearchName() {
        return searchName;
    }

    public void setSearchName(String searchName) {
        this.searchName = searchName;
    }

    public Integer getLeixing() {
        return leixing;
    }

    public void setLeixing(Integer leixing) {
        this.leixing = leixing;
    }

    public Integer getOrderby() {
        return orderby;
    }

    public void setOrderby(Integer orderby) {
        this.orderby = orderby;
    }

    public Integer getShunxu() {
        return shunxu;
    }

    public void setShunxu(Integer shunxu) {
        this.shunxu = shunxu;
    }


    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getPrePage() {
        return prePage;
    }

    public void setPrePage(int prePage) {
        this.prePage = prePage;
    }

    public int getNextPage() {
        return nextPage;
    }

    public void setNextPage(int nextPage) {
        this.nextPage = nextPage;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }
}
