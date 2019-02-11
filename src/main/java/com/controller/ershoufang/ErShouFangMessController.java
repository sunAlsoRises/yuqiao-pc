package com.controller.ershoufang;


import com.model.FK_House;
import com.model.Sys_UserPhoto;
import com.service.User.Sys_BranchShopService;
import com.service.User.Sys_UserPhotoService;
import com.service.ershoufang.ErshoufangService;
import com.service.xiaoqu.XiaoQuService;
import com.util.HouseResult;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@Controller
@RequestMapping("/ershoufang")
public class ErShouFangMessController {
    @Autowired
    ErshoufangService esfservice;
    @Autowired
    Sys_BranchShopService shopservice;
    @Autowired
    XiaoQuService xqservice;
    @Autowired
    private Sys_UserPhotoService photoService;

    @RequestMapping("/indexhouse")
    @ResponseBody
    public Page<FK_House> selectFouseIndex(QueryVo vo, HttpServletResponse res) {
//		System.out.println("数据条数"+vo.getPageSize());
		vo.setLeixing(1);
//		System.out.println("条件"+vo.getSearchName());
        Page<FK_House> houseByPage = esfservice.findHouseByPage(vo);
//        如果搜索不到，意味着区域填写有问题
//        System.out.println(houseByPage);
        return houseByPage;

    }

    @GetMapping(value = "/{id}")
    //根据二手房id进行二手房查询
    public String getErShouFangById(@PathVariable("id") String id, HttpServletRequest req, HttpServletResponse res, Map<String, Object> map) {
//将id存储到cookie中用于浏览记录查询
//		1获取cookie
        String secondFouse = id;
//        System.out.println(id);
//        2循环cookies判断是否存在该用户cookie的二手房浏览记录
        if (id != null && !"null".equals(id)) {
            Cookie[] cookies = req.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {

                    if ("secondFouse".equals(cookie.getName())) {
                        //1-3-2 本次访问商品pid是8----->8-1-3-2
                        //1-3-2 本次访问商品pid是3----->3-1-2
                        //1-3-2 本次访问商品pid是2----->2-1-3
                        //将pids拆成一个数组
                        secondFouse = cookie.getValue();
                        String[] split = secondFouse.split("-"); //[3,1,2]
                        List<String> asList = Arrays.asList(split);  //[3,1,2]，asList转成无方法，需改成List
                        LinkedList<String> list = new LinkedList<String>(asList);//[3,1,2]
                        //判断集合中是否存在该id
                        if (list.contains(id)) {
                            list.remove(id);
                            list.addFirst(id);
                        } else {
                            list.addFirst(id);
                        }
                        //将[3,1,2]转成3-1-2字符串
                        StringBuffer sb = new StringBuffer();
                        for (int i = 0; i < list.size() && i < 7; i++) {
                            sb.append(list.get(i));
                            sb.append("-");//3-1-2-，一个数字一个-最后多一个-
                        }

                        //去掉3-1-2-后的-
                        secondFouse = sb.substring(0, sb.length() - 1);
                    }
                }
            }


            Cookie cookie_pids = new Cookie("secondFouse", secondFouse);
            cookie_pids.setPath("/");

            res.addCookie(cookie_pids);
            HouseResult<FK_House> hr = esfservice.getErAndXiaoQuById(id);
            if (hr.getStatus() == 1){
                return "error" ;
            }
            //        根据经纪人的photoid查询经纪人图片地址
            String photoid = hr.getData().getUser().getPhotoid();
            if (photoid != null) {
                Sys_UserPhoto photo = this.photoService.getUserPhotoByPhotoId(photoid);
                hr.getData().getUser().setPhotos(photo);
            }
            map.put("hr", hr);
            String nameId = hr.getData().getName();
//        //查询当前小区得二手房数量
            //通过小区id查询8个二手房
            HouseResult<List<FK_House>> houseByName = esfservice.getHouseByName(nameId);

            map.put("houseByName", houseByName);
            return "ershoufang/secondHouse";
        } else {
            return "redirect:/ershoufang/ershoufangs";
        }


    }

    //二手房分页查询
    @GetMapping(value = {"/ershoufangs/", "/ershoufangs"})
    public String getErShouFangByPage(Map<String, Object> map, QueryVo querVo) {
        querVo.setLeixing(1);
        Page<FK_House> page = this.esfservice.findHouseByPage(querVo);
        page.setZushou(0);

        map.put("page", page);

        return "ershoufang/ershoufangN";
    }

    //租房分页查询
    @GetMapping(value = {"/zufang/", "/zufang"})
    public String zufangPage(Map<String, Object> map, QueryVo querVo) {
        querVo.setLeixing(2);

        Page<FK_House> page = this.esfservice.findHouseByPage(querVo);

        page.setZushou(1);
        map.put("page", page);

        return "zufang/zufang";
    }

    //点击第几页
    @GetMapping(value = "/pg{page}/")
    public String getPage(Map<String, Object> map, @PathVariable("page") Integer page) {

        QueryVo vo = new QueryVo();
        vo.setLeixing(1);
        vo.setCurrentPage(page);
        Page<FK_House> page1 = this.esfservice.findHouseByPage(vo);
        map.put("page", page1);
        return "ershoufang/ershoufangN";
    }

    //二手房分页查询
    @RequestMapping(value = "/rs")
    public String ershoufangRS(Map<String, Object> map, QueryVo query) {
        Page<FK_House> houseByPage = this.esfservice.findHouseByPage(query);
        map.put("page", houseByPage);
        map.put("searchName", query.getSearchName());
        return "ershoufang/ershoufangN";
    }

    //租房分页查询
    @RequestMapping(value = "/zufang/zf")
    public String zufangSearch(Map<String, Object> map, QueryVo query) {
        Page<FK_House> houseByPage = this.esfservice.findHouseByPage(query);
        map.put("page", houseByPage);
        map.put("searchName", query.getSearchName());
        return "zufang/zufang";
    }

    //通过小区id查找二手房
    @GetMapping(value = "/xq/{id}/")
    public String getEsfByXQid(@PathVariable("id") String id, Map<String, Object> map, QueryVo query) {
        if (id == null || "null".equals(id)){return "redirect:/ershoufang/ershoufangs";}
        query.setXiaoquId(id);
        Page<FK_House> houseByPage = this.esfservice.findHouseByPage(query);
        map.put("page", houseByPage);
        map.put("searchName", query.getSearchName());
        return "ershoufang/ershoufangN";
    }
    //查找关注的房源
    @PostMapping(value = {"/attention/", "/attention"})
    @ResponseBody
public Map<String, Object> findHouseByMobile(String action) {
        Map<String ,Object> map = new HashMap<>();
        List<FK_House> esfHouse = this.esfservice.findErHouseByMobile(action);
        List<FK_House> zfHouse = this.esfservice.findZuHouseByMobile(action);
        map.put("esfHouse",esfHouse);
        map.put("zfHouse",zfHouse);
        return map;
    }

}
