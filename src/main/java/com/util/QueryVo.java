package com.util;
/**
 * @author wangpei
 * @version
 *创建时间：2016年10月12日 下午10:52:29
 * 拦截器实现mybatis的拦截
 */
import javax.persistence.criteria.CriteriaBuilder;
import java.math.BigDecimal;
import java.util.List;

public class QueryVo {
//    封装查询条件
    private String searchName ;   //搜索条件
    private Integer zuidimianji ;  //面积最低
    private Integer zuigaomianji ;  //面积最高
    private BigDecimal zuidishoujia ;  //售价最低
    private BigDecimal zuigaoshoujia ;  //售价最高
    private String woshi ;  //厅室
    private String name ;  //楼盘名称
    private Integer leixing ;  //1 为 售 2为租  3为新房
    private String xiaoquId;  //小区id
    private String userId ; //经纪人id
    private String shopId ; //门店id

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public Integer getLeixing() {
        return leixing;
    }

    public void setLeixing(Integer leixing) {
        this.leixing = leixing;
    }

    private Integer orderby; //是否升序与降序
    private Integer shunxu ;//排序方式 肾虚还是降序

    public Integer getShunxu() {
        return shunxu;
    }

    public void setShunxu(Integer shunxu) {
        this.shunxu = shunxu;
    }

    public static final int DEFAULT_PAGE_SIZE = 30;

    private int pageSize;// 页面条数  每页显示条数
    private int currentPage;// 当前页的位置   当前是第几页
    private int start ;  //从哪开始查

    private int prePage;// 上一页
    private int nextPage;// 下一页
    private int totalPage;// 总页数
    private int totalCount;//


    public String getSearchName() {
        return searchName;
    }

    public void setSearchName(String searchName) {
        this.searchName = searchName;
    }

    public Integer getZuigaomianji() {
        return zuigaomianji;
    }

    public Integer getZuidimianji() {
        return zuidimianji;
    }

    /**
     * 当前页的数据
     */
    private List<?> list;

    /**
     * 获得分页内容
     *
     * @return
     */
    public List<?> getList() {
        return list;
    }


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * 设置分页内容
     *
     * @param list
     */
    @SuppressWarnings("unchecked")
    public void setList(List list) {
        this.list = list;
    }

    public QueryVo() {
        this.currentPage = 1;
        this.pageSize = DEFAULT_PAGE_SIZE;
    }

    public QueryVo(String searchName, Integer zuidimianji, Integer zuigaomianji, BigDecimal zuidishoujia, BigDecimal zuigaoshoujia, String woshi, String name, Integer leixing, String xiaoquId, Integer orderby, Integer shunxu, int pageSize, int currentPage, int start, int prePage, int nextPage, int totalPage, int totalCount, List<?> list) {
        this.searchName = searchName;
        this.zuidimianji = zuidimianji;
        this.zuigaomianji = zuigaomianji;
        this.zuidishoujia = zuidishoujia;
        this.zuigaoshoujia = zuigaoshoujia;
        this.woshi = woshi;
        this.name = name;
        this.leixing = leixing;
        this.xiaoquId = xiaoquId;
        this.orderby = orderby;
        this.shunxu = shunxu;
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.start = start;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.totalPage = totalPage;
        this.totalCount = totalCount;
        this.list = list;
    }

    public String getXiaoquId() {
        return xiaoquId;
    }

    public void setXiaoquId(String xiaoquId) {
        this.xiaoquId = xiaoquId;
    }

    public Integer getOrderby() {
        return orderby;
    }

    public void setOrderby(Integer orderby) {
        this.orderby = orderby;
    }
    /**
     *
     * @param currentPage
     * @param pageSize
     */
    public QueryVo(int currentPage, int pageSize) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
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

    public void setZuidimianji(Integer zuidimianji) {
        this.zuidimianji = zuidimianji;
    }

    public void setZuigaomianji(Integer zuigaomianji) {
        this.zuigaomianji = zuigaomianji;
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

    public String getWoshi() {
        return woshi;
    }

    public void setWoshi(String woshi) {
        this.woshi = woshi;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    @Override
    public String toString() {
        return "QueryVo{" +
                "searchName='" + searchName + '\'' +
                ", zuidimianji=" + zuidimianji +
                ", zuigaomianji=" + zuigaomianji +
                ", zuidishoujia=" + zuidishoujia +
                ", zuigaoshoujia=" + zuigaoshoujia +
                ", woshi='" + woshi + '\'' +
                ", name='" + name + '\'' +
                ", leixing=" + leixing +
                ", orderby=" + orderby +
                ", shunxu=" + shunxu +
                ", pageSize=" + pageSize +
                ", currentPage=" + currentPage +
                ", start=" + start +
                ", prePage=" + prePage +
                ", nextPage=" + nextPage +
                ", totalPage=" + totalPage +
                ", totalCount=" + totalCount +
                ", list=" + list +
                '}';
    }
}