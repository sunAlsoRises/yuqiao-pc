package com.controller.ershoufang;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.base.GetQueryVo;
import com.util.Page;
import com.util.QueryVo;
import com.util.SearchTiaoJian;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.model.FK_House;
import com.service.ershoufang.ErshoufangService;
import com.util.HouseResult;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/ershoufang")
public class ErshoufangController {
	@Autowired
	ErshoufangService  esfservice ;
    //排序搜索条件
    @PostMapping("/ershoufangs/tiaojian")
    public  Page<FK_House> getzufangtiaojian(Map<String,Object> map, HttpServletRequest req){
        Page<FK_House> page = null ;
        QueryVo querVo = GetQueryVo.getQueryVo(req);

        page = esfservice.findHouseByPage(querVo);

        return page;
    }

}
