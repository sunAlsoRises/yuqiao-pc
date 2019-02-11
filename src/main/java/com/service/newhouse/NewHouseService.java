package com.service.newhouse;



import com.model.FK_House;
import com.model.FK_NewHouse;
import com.util.HouseResult;
import com.util.Page;
import com.util.QueryVo;

import java.util.List;

public interface NewHouseService {
//	调用mapper
	HouseResult<Object> findNewHouse();
	//分页并根据条件查找新房
	Page<FK_NewHouse> findNewHouseByPage(QueryVo page);
	FK_NewHouse findHouseById(String id);
	List<FK_NewHouse>  findHouseByQuyu(FK_NewHouse newhouse);

}
