package com.mapper.newhouse;

import com.model.FK_House;
import com.model.FK_NewHouse;
import com.util.QueryVo;

import java.util.List;


public interface NewHouseXmlMapper {
   //  FK_House getErAndXiaoQuById(String id);
     //获取分页二手房信息
     List<FK_NewHouse> findNewHouseByPage(QueryVo page);
     Integer newHouseCountByPage(QueryVo page);
     FK_NewHouse findHouseById(String id);
    List<FK_NewHouse> findHouseByQuyu(FK_NewHouse newhouse);
    Integer findCountByMounth();
}
