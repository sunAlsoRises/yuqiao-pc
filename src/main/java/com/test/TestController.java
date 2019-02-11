package com.test;

import java.util.Map;

import com.mapper.ershoufang.ErshoufangMapper;
import com.model.FK_House;
import com.service.ershoufang.ErshoufangService;
import com.util.HouseResult;
import com.util.SelfLog4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {
//	@Autowired
//	private ErshoufangService esf;
//	@RequestMapping("/success")
//	public String Hello(Integer id ,Map<String,Object> map) {
//		map.put("hello", "您好，小伙子");
//		HouseResult<FK_House> es = esf.getMessageById("577D3787AAAC43A88F1F767F7F5C754F");
//		map.put("esf",es);
//		System.out.println("楼盘别名"+es.getData().getCom().getLoupanbieming());
//		return "success";
//	}
}
