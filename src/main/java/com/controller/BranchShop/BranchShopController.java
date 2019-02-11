package com.controller.BranchShop;

import com.model.FK_House;
import com.model.Sys_BranchShop;
import com.service.BranchShop.BranchShopService;
import com.service.ershoufang.ErshoufangService;
import com.service.housePhoto.HousePhotoService;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/shop")
public class BranchShopController {
    @Autowired
    BranchShopService shop ;
    @Autowired
    ErshoufangService esf;
    @Autowired
    HousePhotoService photo ;
    //通过经纪人的门店id  也就是门店id获取门店信息
    @GetMapping(value = "/{id}")
    public String getShopByUserId(@PathVariable("id") String id, Map<String,Object> map){
        Sys_BranchShop shopByUserId = shop.findShopByUserId(id);
//        System.out.println(shopByUserId.getUsers().get(0).getId());
//        通过门店id获取二手房与租房
        //        2通过门店id获取二手房与租房信息
        QueryVo vo = new QueryVo();
        vo.setPageSize(15);
        vo.setShopId(shopByUserId.getId());
        Page<FK_House> esfPage = esf.findHouseByPage(vo);
//        通过房源id获取照片数量
//        1遍历房源
        for (FK_House esf: esfPage.getRows()
        ) {
            esf.setPhotoCount(photo.getCountPhoto(esf.getId()));
        }

//        通过门店id获取租房信息
        QueryVo vo2 = new QueryVo();
        vo2.setPageSize(15);
        vo2.setShopId(shopByUserId.getId());
        vo2.setLeixing(2);
        Page<FK_House> zfPage = esf.findHouseByPage(vo2);
        for (FK_House zf: zfPage.getRows()
        ) {
            zf.setPhotoCount(photo.getCountPhoto(zf.getId()));
        }
        map.put("esfPage",esfPage);
        map.put("zfPage",zfPage);
        map.put("shop",shopByUserId);
        return "/jingjiren/BranchShop";
    }
}
