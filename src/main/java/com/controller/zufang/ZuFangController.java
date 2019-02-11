package com.controller.zufang;


import com.model.FK_House;
import com.model.Sys_User;
import com.model.Sys_UserPhoto;
import com.service.User.Sys_UserPhotoService;
import com.service.ershoufang.ErshoufangService;
import com.util.HouseResult;
import com.util.Page;
import com.util.QueryVo;
import com.util.ReplaceClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
@Controller
@RequestMapping("/zufang")
public class ZuFangController {
	@Autowired
	ErshoufangService  esfservice ;
	@Autowired
	private Sys_UserPhotoService photoService;
	//通过小区id查找租房
	@GetMapping(value = "/xq/{id}/")
	public String  getZfByXQid(@PathVariable("id") String id ,Map<String,Object> map,QueryVo query) {
		if (id == null || "null".equals(id)){return "redirect:/ershoufang/zufang";}
		query.setLeixing(2);
		query.setXiaoquId(id);
		Page<FK_House> houseByPage = this.esfservice.findHouseByPage(query);
		map.put("page",houseByPage);
		map.put("searchName",query.getSearchName());

		return "zufang/zufang";
	}
	@GetMapping(value = "/{id}")
	//根据租房id进行租房查询
	public String getErShouFangById(@PathVariable("id") String id, HttpServletRequest req, HttpServletResponse res, Map<String,Object> map) {
		String tenement = id ;
		if (id == null || "null".equals(id)){return "redirect:/ershoufang/zufang";}
		Cookie[] cookies = req.getCookies();
//        2循环cookies判断是否存在该用户cookie的二手房浏览记录
		if (cookies != null){
			for (Cookie cookie: cookies) {
				if ("tenement".equals(cookie.getName())){
					//1-3-2 本次访问商品pid是8----->8-1-3-2
					//1-3-2 本次访问商品pid是3----->3-1-2
					//1-3-2 本次访问商品pid是2----->2-1-3
					//将pids拆成一个数组
					tenement = cookie.getValue();
					String[] split = tenement.split("-"); //[3,1,2]
					List<String> asList = Arrays.asList(split);  //[3,1,2]，asList转成无方法，需改成List
					LinkedList<String> list = new LinkedList<String>(asList);//[3,1,2]
					//判断集合中是否存在该id
					if (list.contains(id)){
						list.remove(id);
						list.addFirst(id);
					}else {
						list.addFirst(id);
					}
					//将[3,1,2]转成3-1-2字符串
					StringBuffer sb = new StringBuffer();
					for (int i=0;i<list.size()&&i<7;i++){
						sb.append(list.get(i));
						sb.append("-");//3-1-2-，一个数字一个-最后多一个-
					}
					//去掉3-1-2-后的-
					tenement = sb.substring(0, sb.length()-1);
				}
			}
		}
		Cookie cookie_pids = new Cookie("tenement",tenement);
		cookie_pids.setPath("/");
		res.addCookie(cookie_pids);


		//通过id查询 租房和小区
		HouseResult<FK_House> hr = esfservice.getTenementById(id);
		if (hr.getStatus() == 1){
				return "error" ;
		}
		String photoid = hr.getData().getUser().getPhotoid();
		if (photoid !=null && !photoid.equals("null")){
			Sys_UserPhoto photo = this.photoService.getUserPhotoByPhotoId(photoid);
			hr.getData().getUser().setPhotos(photo);
		}else {
			hr.getData().getUser().setPhotos(ReplaceClass.getUserPhoto());
		}

		map.put("hr",hr);
		String nameId = hr.getData().getName();
		//通过小区id查询8个租房
		HouseResult<List<FK_House>> houseByName = esfservice.getHouseByName(nameId);

		map.put("houseByName" ,houseByName);
		return "zufang/tenementMessage";
	}
}
