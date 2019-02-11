package com.base;

import com.util.QueryVo;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;

public class GetQueryVo {
    public static QueryVo getQueryVo(HttpServletRequest req) {
        QueryVo querVo = new QueryVo();
    	try {
            String datashoujia = req.getParameter("datashoujia");
            String datamianji = req.getParameter("datamianji");
            String datashi = req.getParameter("datashi");
            String orderby1 = req.getParameter("orderby");
            Integer orderby = null ;
            if (orderby1 != null){
                orderby = Integer.valueOf(orderby1);
            }

            Integer currentpage = Integer.valueOf(req.getParameter("currentpage"));
            Integer leixing = Integer.valueOf(req.getParameter("leixing"));
            String searchName = req.getParameter("searchName");


            querVo.setOrderby(orderby);
            //类型   是租房还是二手房售房
            querVo.setLeixing(leixing);

            querVo.setCurrentPage(currentpage);
            querVo.setSearchName(searchName);
//        将数据封装进去
            BigDecimal zuidishoujia = null;
            BigDecimal zuigaoshoujia = null;
            Integer zuidimianji = null;
            Integer zuigaomianji = null;
            Integer woshi = null;

//        判断是否为空

            if (datashoujia != null && datashoujia != "null" && !"".equals(datashoujia)) {

                String[] split = datashoujia.split("-");

                String zuidi = split[0] + ".0000";
                String zuigao = split[1] + ".0000";

                zuidishoujia = new BigDecimal(zuidi);
                zuigaoshoujia = new BigDecimal(zuigao);
                querVo.setZuidishoujia(zuidishoujia);
                querVo.setZuigaoshoujia(zuigaoshoujia);
            }
            if (datamianji != null && datamianji != "null" && !"".equals(datamianji)) {
                String[] split = datamianji.split("-");
                zuidimianji = Integer.parseInt(split[0]);
                zuigaomianji = Integer.parseInt(split[1]);
                querVo.setZuidimianji(zuidimianji);
                querVo.setZuigaomianji(zuigaomianji);
            }
            if (datashi != null && datashi != "null" && !"".equals(datashi)) {
                querVo.setWoshi(datashi);
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("数字转换异常");
        }
        return querVo;
    }

}

