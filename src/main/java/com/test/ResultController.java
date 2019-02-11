package com.test;

import com.mapper.ershoufang.ErshoufangMapper;
import com.mapper.ershoufang.ErshoufangXmlMapper;
import com.mapper.xiaoqu.XiaoQuMapper;
import com.model.FK_Community;
import com.model.FK_House;
import com.service.ershoufang.ErshoufangService;
import com.util.HouseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ResultController {
	@Autowired
	private ErshoufangXmlMapper esf;
/*	@Autowired
	private XiaoQuMapper xiaoqu;*/
	@RequestMapping("/success")
	public FK_House Hello(String id ,Map<String,Object> map) {
		FK_House fk = esf.getErAndXiaoQuById(id);
		System.out.println("小区"+fk.getCom().getId());
		return fk;
	}
}
