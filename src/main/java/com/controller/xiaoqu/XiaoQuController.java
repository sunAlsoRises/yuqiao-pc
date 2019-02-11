package com.controller.xiaoqu;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.base.GetQueryVo;
import com.model.FK_House;
import com.model.Sys_UserPhoto;
import com.service.B_OrderService.B_OrderService;
import com.service.User.Sys_UserPhotoService;
import com.service.ershoufang.ErshoufangService;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.model.FK_Community;
import com.service.xiaoqu.XiaoQuService;
import com.util.HouseResult;
import com.util.SelfLog4j;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/xiaoqu")
public class XiaoQuController {
	@Autowired
	private XiaoQuService xq ;
	@Autowired
	private B_OrderService bos ;
	@Autowired
    private ErshoufangService esf;
    @Autowired
    private Sys_UserPhotoService photoService;
	@RequestMapping("/indexhouse")
	@ResponseBody
	//首页小区列表
	public  Page<FK_Community> findNewHouse(Integer action) {

		SelfLog4j.getLog4j(getClass()).debug(action.toString());
		QueryVo vo = new QueryVo();
		vo.setPageSize(action);
        Page<FK_Community> communityByPage = xq.findCommunityByPage(vo);
        return communityByPage;
	}
//小区分页列表
	@RequestMapping(value = "/xiaoqu")
	public String findCommunityByPage(QueryVo vo, Map<String,Object> map){
        Page<FK_Community> communityByPage = xq.findCommunityByPage(vo);
        map.put("page",communityByPage);
		map.put("searchName",vo.getSearchName());
        return "xiaoqu/xiaoqu";
	}
	//根据小区id查询相关信息
	@GetMapping(value = "/{id}")
	public String findCommunityById(@PathVariable("id") String id, HttpServletRequest req, HttpServletResponse res, Map<String,Object> map){
		if (id == null || "null".equals(id)){return "error";}
		String com = id ;
		Cookie[] cookies = req.getCookies();
//        2循环cookies判断是否存在该用户cookie的二手房浏览记录
		if (cookies != null){
			for (Cookie cookie: cookies) {
				if ("com".equals(cookie.getName())){
					//1-3-2 本次访问商品pid是8----->8-1-3-2
					//1-3-2 本次访问商品pid是3----->3-1-2
					//1-3-2 本次访问商品pid是2----->2-1-3
					//将pids拆成一个数组
					com = cookie.getValue();
					String[] split = com.split("-"); //[3,1,2]
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
					com = sb.substring(0, sb.length()-1);
				}
			}
		}
		Cookie cookie_pids = new Cookie("com",com);
		cookie_pids.setPath("/");
		res.addCookie(cookie_pids);
		//		1,通过id获取小区信息
		HouseResult<FK_Community> hr = xq.findCommunityById(id);


		//        根据经纪人的photoid查询经纪人图片地址
		String photoid = hr.getData().getUser().getPhotoid();

		if (photoid !=null){
			Sys_UserPhoto photo = this.photoService.getUserPhotoByPhotoId(photoid);
			hr.getData().getUser().setPhotos(photo);
		}else {
			Sys_UserPhoto errorPhoto = new Sys_UserPhoto();
			errorPhoto.setPath("error");
			hr.getData().getUser().setPhotos(errorPhoto);
		}

//		2通过id获取最新订单成交价格
		BigDecimal price = this.bos.findPriceByXiaoQuId(id);
		hr.getData().setPrice(price);
		map.put("hr",hr);
		//        3通过小区id获取二手房信息
		QueryVo vo = new QueryVo();
		vo.setLeixing(1);
		vo.setXiaoquId(id);
		vo.setPageSize(3);
		List<FK_House> esfHouse = this.esf.getHouseByXiaoQuId(vo);
//      System.out.println("二手互访数量"+esfHouse);
		map.put("esfHouse",esfHouse);
		vo.setLeixing(2);
		List<FK_House> zfHouse = this.esf.getHouseByXiaoQuId(vo);
		map.put("zfHouse",zfHouse);
		return "xiaoqu/communityMessage";
	}
	//根据条件搜索小区
	@PostMapping("/xiaoqu/tiaojian")
	@ResponseBody
	public  Page<FK_Community> getNewHousetiaojian( HttpServletRequest req){
		Page<FK_Community> page = null ;
//		base类的 封装qeryvo
		QueryVo querVo = GetQueryVo.getQueryVo(req);
		page = this.xq.findCommunityByPage(querVo);
		return page;
	}


}
