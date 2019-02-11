package com.mapper.BranchShop;

import com.model.FK_House;
import com.model.Sys_BranchShop;
import com.util.QueryVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface BranchShopMapper {
     //通过经纪人id查询门店
     Sys_BranchShop findShopByUserId(String userId);
}
