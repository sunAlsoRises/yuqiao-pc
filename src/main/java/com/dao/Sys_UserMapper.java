package com.dao;

import com.model.Sys_User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Sys_UserMapper {
    int deleteByPrimaryKey(String id);

    int insert(Sys_User record);

    int insertSelective(Sys_User record);

    Sys_User selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Sys_User record);

    int updateByPrimaryKey(Sys_User record);
}