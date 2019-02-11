package com.mapper.ershoufang;

import com.model.FK_Collection;
import com.model.FK_House;
import com.util.QueryVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface ErshoufangXmlMapper {
     FK_House getErAndXiaoQuById(String id);
     //获取分页二手房信息
     List<FK_House> findHouseByPage(QueryVo page);
     Integer queryCountByPage(QueryVo page);
     //通过小区id获取二手房数量
     Integer getCountEsf(@Param(value = "xiaoquId") String xiaoquId);
     //通过小区id获取租房数量
     Integer getCountZf(@Param(value = "xiaoquId") String xiaoquId);
     //通过id获取租房相关信息
     FK_House getTenementById(String id);
//     通过历史纪录id查询房源少量信息
     FK_House getHouseByHisTory(String id);
     //通过小区id获取二手房或者租房信息
     List<FK_House> getHouseByXiaoQuId(QueryVo vo);
     //通过手机号查询关注房源
     List<FK_House> findErHouseByMobile(String phone);
     List<FK_House> findZuHouseByMobile(String phone);
}
