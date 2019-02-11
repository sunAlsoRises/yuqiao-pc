package com.controller.browsingHistory;

import com.model.FK_Community;
import com.model.FK_House;
import com.service.ershoufang.ErshoufangService;
import com.service.xiaoqu.XiaoQuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@RequestMapping(value = "/browsingHistory")
@Controller
public class BrowsingHistory {
    @Autowired
    ErshoufangService esf;
    @Autowired
    XiaoQuService xq ;
@GetMapping(value = "/secondhouse")
@ResponseBody
public  List<FK_House> getFouseBrowsingHistory(HttpServletRequest req, HttpServletResponse res,Map<String,Object> map) {

    List<FK_House> esfList = new ArrayList<>();  //创建二手房的集合 用于接收二手房集合
    //        1获取cookies
    Cookie[] cookies = req.getCookies();

//    2遍历cookies
    if (cookies != null){
        for(Cookie cookie:cookies) {
            //二手房的浏览记录
            if ("secondFouse".equals(cookie.getName())){
                String secondvalue = cookie.getValue();
                String[] split = secondvalue.split("-");
                for(String esfId : split){
                    FK_House esfHouse = esf.getHouseByHisTory(esfId);

                    esfList.add(esfHouse);
                }

            }
        }
    }

    return esfList;
}
//租房历史信息获取
    @GetMapping(value = "/tenement")
    @ResponseBody
    public  List<FK_House> getZfBrowsingHistory(HttpServletRequest req, HttpServletResponse res,Map<String,Object> map) {
        List<FK_House> zfList = new ArrayList<>();  //创建租房的集合 用于接收租房房集合
        //        1获取cookies
        Cookie[] cookies = req.getCookies();
//    2遍历cookies
        if (cookies != null){
            for(Cookie cookie:cookies) {
                //租房的浏览记录
                if ("tenement".equals(cookie.getName())){
                    String zfvalue = cookie.getValue();
                    String[] split = zfvalue.split("-");
                    for(String zfId : split){
                        FK_House zfHouse = esf.getHouseByHisTory(zfId);
                        zfList.add(zfHouse);
                    }
                }

            }
        }

        return zfList;
    }
    //分页获取小区信息
    @GetMapping(value = "/district")
    @ResponseBody
    public List<FK_Community> getXqBrowsingHistory(HttpServletRequest req, HttpServletResponse res,Map<String,Object> map) {
        List<FK_Community> xqList = new ArrayList<>();  //创建小区的集合 用于接收小区集合
        //        1获取cookies
        Cookie[] cookies = req.getCookies();
//    2遍历cookies
        if (cookies != null){
            for(Cookie cookie:cookies) {
                //小区的浏览记录
                if ("com".equals(cookie.getName())){
                    String xqvalue = cookie.getValue();
                    String[] split = xqvalue.split("-");

                    for(String xqId : split){

                        FK_Community xqHouse = xq.getComByHisTory(xqId);
                        xqList.add(xqHouse);
                    }

                }
            }

        }
        return xqList;
    }

}
