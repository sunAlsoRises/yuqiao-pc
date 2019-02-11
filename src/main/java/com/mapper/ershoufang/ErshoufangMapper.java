package com.mapper.ershoufang;

import java.util.List;

import com.model.FK_Community;
import org.apache.ibatis.annotations.*;

import com.model.FK_House;
import org.springframework.stereotype.Repository;

@Mapper
public interface ErshoufangMapper {
/*
    @Select("SELECT * FROM UserTest WHERE NAME = #{name}")
    FK_House findByName(@Param("name") String name);

    @Insert("INSERT INTO UserTest(NAME, AGE) VALUES(#{name}, #{age})")
    int insert(@Param("name") String name, @Param("age") Integer age);
    @Select("SELECT * FROM UserTest WHERE ID = #{id}")
    UserTest findByUserById(@Param("id") Integer id);*/
    /*@Select("SELECT * FROM B_Order WHERE ID = #{id}")
    B_Order findOrder(@Param("id") String id);*/
	@Select("SELECT TOP 4 * FROM FK_House WHERE ZHUANGTAI != #{zhuangtai}")
	List<FK_House> findErshoufangByMax(@Param("zhuangtai") String zhuangtai);
	//通过小区id查询二手房数量
	@Select("SELECT count(*) FROM FK_House WHERE name = #{id}")
	Integer  getCountById(@Param("id") String id);
	//条件为租房的数量
	@Select("SELECT count(*) FROM FK_House WHERE name = #{id} and leixing like #{leixing}")
	Integer  getZuCountById(@Param("id") String id, @Param("leixing") String leixing);
	/**
	 * 使用ResultMap
	 *
	 * @param id
	 * @return
	 */
	//通过id查询二手房
	@Select("SELECT * FROM FK_House WHERE id = #{id}")
/*	@Results(id = "ErshoufangMap",value = {
			@Result(column="name ", property="com",javaType= FK_Community.class,
					one=@One(select="com.mapper.xiaoqu.XiaoQuMapper.selectById"))
	})*/
	FK_House getMessageById(@Param("id") String id);
//通过小区id查询出8个二手房
	@Select("SELECT Top 8 * FROM FK_House WHERE name = #{nameid}")
	List<FK_House> getHouseByName(@Param("nameid") String nameid);
}
