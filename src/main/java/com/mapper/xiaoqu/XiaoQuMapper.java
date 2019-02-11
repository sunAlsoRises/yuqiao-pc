package com.mapper.xiaoqu;

import java.util.List;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.FK_Community;



@Mapper
public interface XiaoQuMapper {
/*
    @Select("SELECT * FROM UserTest WHERE NAME = #{name}")
    FK_House findByName(@Param("name") String name);

    @Insert("INSERT INTO UserTest(NAME, AGE) VALUES(#{name}, #{age})")
    int insert(@Param("name") String name, @Param("age") Integer age);
    @Select("SELECT * FROM UserTest WHERE ID = #{id}")
    UserTest findByUserById(@Param("id") Integer id);*/
    /*@Select("SELECT * FROM B_Order WHERE ID = #{id}")
    B_Order findOrder(@Param("id") String id);*/
	//小区表和小区图片表关联查询
	@Select("SELECT TOP 3 * FROM FK_Community JOIN FK_CommunityPhoto ON FK_Community.id = FK_CommunityPhoto.CommunityId")
	List<FK_Community> findXiaoQu();
	@Select("SELECT * FROM FK_Community WHERE ID = #{id}")
	FK_Community selectById(@Param("id") String id);

}
