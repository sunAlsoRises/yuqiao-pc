package com.util.article;

public class QueryArticle {
    public static final int DEFAULT_PAGE_SIZE = 30;

    private int pageSize;// 页面条数  每页显示条数
    private int currentPage;// 当前页的位置   当前是第几页
    private int start ;  //从哪开始查

    private int prePage;// 上一页
    private int nextPage;// 下一页
    private int totalPage;// 总页数
    private int totalCount;//
    private String type ; //文章类型

    public QueryArticle() {
        this.currentPage = 1;
        this.pageSize = DEFAULT_PAGE_SIZE;
    }

    public QueryArticle(int pageSize, int currentPage, int start, int prePage, int nextPage, int totalPage, int totalCount, String type) {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.start = start;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.totalPage = totalPage;
        this.totalCount = totalCount;
        this.type = type;
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

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
