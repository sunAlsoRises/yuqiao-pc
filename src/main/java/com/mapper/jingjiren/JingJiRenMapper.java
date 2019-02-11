package com.mapper.jingjiren;

import com.model.Sys_User;
import com.util.JingJiRenQueryVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JingJiRenMapper {
    //获取分页经纪人信息
    List<Sys_User> findJjrByPage(JingJiRenQueryVo page);
    Integer queryCountByPage(JingJiRenQueryVo page);
    //通过id获取经纪人信息
    Sys_User findJjrById(String id);
    //通过门店id获取经纪人信息
    List<Sys_User> findJjrByShopId(String id);
}
