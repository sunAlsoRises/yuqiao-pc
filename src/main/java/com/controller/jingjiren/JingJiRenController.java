package com.controller.jingjiren;

import com.base.GetQueryVo;
import com.model.FK_NewHouse;
import com.model.Sys_User;
import com.service.jingjiren.JingjirenService;
import com.service.newhouse.NewHouseService;
import com.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("/jingjiren")
public class JingJiRenController {
	@Autowired
	JingjirenService jjr ;
	@GetMapping(value = {"/jingjiren/","/jingjiren"})
	public String getNewHouseByPage(Map<String,Object> map, JingJiRenQueryVo querVo) {
		Page<Sys_User> page = this.jjr.findHouseByPage(querVo);

		map.put("page",page);
		return "jingjiren/jingjiren";
	}
	@PostMapping(value = "/jjr")
	public String  getJirBySearch(Map<String,Object> map,JingJiRenQueryVo query) {
		Page<Sys_User> page = this.jjr.findHouseByPage(query);
		map.put("page",page);
		map.put("searchName",query.getSearchName());
		return "jingjiren/jingjiren";
	}
	//排序搜索条件
	@PostMapping("/jingjiren/tiaojian")
	@ResponseBody
	public  Page<Sys_User> getNewHousetiaojian(Integer currentpage,String searchName){
		JingJiRenQueryVo query =new JingJiRenQueryVo();
		query.setCurrentPage(currentpage);
		query.setSearchName(searchName);
        Page<Sys_User> page = this.jjr.findHouseByPage(query);
        System.out.println(page);
		return page;
	}
}
