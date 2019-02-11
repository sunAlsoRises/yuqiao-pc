package com.service.ershoufang;

import java.util.List;



import com.model.FK_House;
import com.util.HouseResult;
import com.util.Page;
import com.util.QueryVo;

public interface ErshoufangService {
//	调用mapper
	HouseResult<List<FK_House>>  findErshoufangByMax(String zhuangtai);
	HouseResult<FK_House> getMessageById(String id);
	Integer getCountById(String id);
	Integer getZuCountById(String id, String leixing);
	HouseResult<FK_House> getErAndXiaoQuById(String id);
	HouseResult<List<FK_House>> getHouseByName(String nameid);
	Page<FK_House> findHouseByPage(QueryVo page);
	//通过id获取租房相关信息
	HouseResult<FK_House>  getTenementById(String id);
	//通过浏览记录id获取房源简易信息
	FK_House getHouseByHisTory(String id);
	List<FK_House> getHouseByXiaoQuId(QueryVo vo);
	List<FK_House> findErHouseByMobile(String phone);
	List<FK_House> findZuHouseByMobile(String phone);
}
