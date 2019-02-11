package com.controller.maptohouse;


import com.model.FK_Community;
import com.service.xiaoqu.XiaoQuService;

import com.util.HouseResult;
import com.util.QueryVo;
import com.util.map.QueryMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping("/maptohouse")
public class MapToHouseController {
	@Autowired
	XiaoQuService xqservice ;

	@GetMapping(value = {"/ditu/","/ditu"})
	public String getMaptToHouse() {

		return "maptohouse/ditu";
	}
	//通过地图查询小区数据
	@GetMapping(value = {"/ditu/housemap/","/ditu/housemap"})
	@ResponseBody
	public HouseResult<List<FK_Community>> getHouseMap(QueryMap vo) {
		HouseResult<List<FK_Community>> hr = xqservice.findXiaoQuMap(vo);

		return hr;
	}
	@GetMapping(value = "/{longitude}/{latitude}")
	public String getMapTocoordinate(@PathVariable("longitude") String longitude,@PathVariable("latitude") String latitude,FK_Community com) {
		com.setLongitude(longitude);
		com.setLatitude(latitude);

		return "maptohouse/ditu";
	}
}
