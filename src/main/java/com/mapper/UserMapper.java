package com.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.model.UserTest;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM UserTest WHERE NAME = #{name}")
    UserTest findByName(@Param("name") String name);

    @Insert("INSERT INTO UserTest(NAME, AGE) VALUES(#{name}, #{age})")
    int insert(@Param("name") String name, @Param("age") Integer age);
    @Select("SELECT * FROM UserTest WHERE ID = #{id}")
    UserTest findByUserById(@Param("id") Integer id);
    /*@Select("SELECT * FROM B_Order WHERE ID = #{id}")
    B_Order findOrder(@Param("id") String id);*/
}