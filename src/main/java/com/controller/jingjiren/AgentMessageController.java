package com.controller.jingjiren;

import com.model.FK_House;
import com.model.Sys_User;
import com.service.ershoufang.ErshoufangService;
import com.service.housePhoto.HousePhotoService;
import com.service.jingjiren.JingjirenService;
import com.util.JingJiRenQueryVo;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/agent")
public class AgentMessageController {
    @Autowired
    HousePhotoService photo ;
    @Autowired
    JingjirenService jjr ;
    @Autowired
    ErshoufangService esf ;
    @GetMapping(value = "/message/{id}")
    public String getNewHouseByPage(Map<String,Object> map, @PathVariable("id") String id ) {
//        通过经纪人id获取经纪人详细信息 包括所负责的二手房信息,新房信息,门店信息
//        1,获取经纪人信息
        Sys_User user = this.jjr.findJirById(id);
//        user.getPhotos().setPath("error");
//        2通过经纪人id获取二手房与租房信息
        QueryVo vo = new QueryVo();
        vo.setPageSize(10);
        vo.setUserId(id);
        Page<FK_House> esfPage = esf.findHouseByPage(vo);
//        通过房源id获取照片数量
//        1遍历房源
        for (FK_House esf: esfPage.getRows()
             ) {
            esf.setPhotoCount(photo.getCountPhoto(esf.getId()));
        }

//        通过经纪人id获取租房信息
        QueryVo vo2 = new QueryVo();
        vo2.setPageSize(10);
        vo2.setUserId(id);
        vo2.setLeixing(2);
        Page<FK_House> zfPage = esf.findHouseByPage(vo2);
        for (FK_House zf: zfPage.getRows()
        ) {
            zf.setPhotoCount(photo.getCountPhoto(zf.getId()));
        }
        map.put("esfPage",esfPage);
        map.put("zfPage",zfPage);
        map.put("user",user);
        return "jingjiren/agentMessage";
    }
}
