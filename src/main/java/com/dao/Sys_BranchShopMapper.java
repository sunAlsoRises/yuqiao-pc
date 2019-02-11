package com.dao;

import com.model.Sys_BranchShop;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Sys_BranchShopMapper {
    int deleteByPrimaryKey(String id);

    int insert(Sys_BranchShop record);

    int insertSelective(Sys_BranchShop record);

    Sys_BranchShop selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Sys_BranchShop record);

    int updateByPrimaryKey(Sys_BranchShop record);
}