package com.mapper.newhouse;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.FK_NewHouse;


@Mapper
public interface NewHouseMapper {
/*
    @Select("SELECT * FROM UserTest WHERE NAME = #{name}")
    FK_House findByName(@Param("name") String name);

    @Insert("INSERT INTO UserTest(NAME, AGE) VALUES(#{name}, #{age})")
    int insert(@Param("name") String name, @Param("age") Integer age);
    @Select("SELECT * FROM UserTest WHERE ID = #{id}")
    UserTest findByUserById(@Param("id") Integer id);*/
    /*@Select("SELECT * FROM B_Order WHERE ID = #{id}")
    B_Order findOrder(@Param("id") String id);*/
	@Select("SELECT TOP 3 * FROM FK_NewHouse")
	List<FK_NewHouse> findNewHouse();

}
