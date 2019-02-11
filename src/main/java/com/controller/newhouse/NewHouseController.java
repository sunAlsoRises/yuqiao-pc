package com.controller.newhouse;

import com.base.GetQueryVo;
import com.model.FK_House;
import com.model.FK_NewHouse;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.service.newhouse.NewHouseService;
import com.util.HouseResult;
import com.util.SelfLog4j;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/newHouse")
public class NewHouseController {
	@Autowired
	NewHouseService newhouse ;
	@RequestMapping("/indexhouse")
	@ResponseBody
	public HouseResult<Object>  findNewHouse(Integer action , HttpServletResponse res) {
		res.addHeader("Access-Control-Allow-Origin", "*");
		SelfLog4j.getLog4j(getClass()).debug("新房"+action.toString());
		return newhouse.findNewHouse();
	}
	@GetMapping(value = {"/newhouses/","/newhouses"})
	public String getNewHouseByPage(Map<String,Object> map, QueryVo querVo) {
		Page<FK_NewHouse> page = this.newhouse.findNewHouseByPage(querVo);
		map.put("searchName",querVo.getSearchName());
		map.put("page",page);
		return "newhouse/newhouse";
	}
	//排序搜索条件
	@PostMapping("/newhouses/tiaojian")
	@ResponseBody
	public  Page<FK_NewHouse> getNewHousetiaojian( HttpServletRequest req){
		Page<FK_NewHouse> page = null ;
//		base类的 封装qeryvo
		QueryVo querVo = GetQueryVo.getQueryVo(req);
		page = newhouse.findNewHouseByPage(querVo);

		return page;
	}
	@RequestMapping(value = "/nh")
	public String  ershoufangRS(Map<String,Object> map,QueryVo query) {
		Page<FK_NewHouse> houseByPage = this.newhouse.findNewHouseByPage(query);
		map.put("page",houseByPage);
		map.put("searchName",query.getSearchName());
		return "newhouse/newhouse";
	}
	@RequestMapping(value = "/{id}")
	public String  getHouseById(Map<String,Object> map,@PathVariable("id") String id ) {
		if (id == null || "null".equals(id)){return "error";}

			FK_NewHouse houseById = this.newhouse.findHouseById(id);
//			System.out.println(houseById.getUser().getPhotos().getPath());
			if (houseById.getQuyu() !=null){
                List<FK_NewHouse> houseQuyu = this.newhouse.findHouseByQuyu(houseById);
                map.put("houseQuyu" ,houseQuyu);
            }
			map.put("newhouse",houseById);
		return "newhouse/newhouseMessage";
	}
}
