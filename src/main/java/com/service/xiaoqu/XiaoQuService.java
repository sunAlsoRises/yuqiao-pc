package com.service.xiaoqu;

import java.util.List;

import com.model.FK_Community;
import com.util.HouseResult;
import com.util.Page;
import com.util.QueryVo;
import com.util.map.QueryMap;

public interface XiaoQuService {
//	调用mapper
	HouseResult<List<FK_Community>> findXiaoQu();
	FK_Community selectById(String id);
	HouseResult<List<FK_Community>> findXiaoQuMap(QueryMap vo);
//	小区分页列表
	Page<FK_Community> findCommunityByPage(QueryVo vo);
	//根据id查询小区
	HouseResult<FK_Community> findCommunityById(String id);
	//根据历史纪录id查询小区少量信息
	FK_Community getComByHisTory(String id);
}
