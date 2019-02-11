package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mapper.UserMapper;
import com.model.B_Order;
import com.model.User;
import com.model.UserTest;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserMapper userMapper ;
	@RequestMapping("/getUser")
	public UserTest  selectUserById(Integer id) {
		System.out.println(id);
		return userMapper.findByUserById(id);
	}
	@RequestMapping("/getname")
	public UserTest  findByName() {
		return userMapper.findByName("aaa");
	}
	/*@RequestMapping("/getOrder")
	public B_Order  selectOrder(String id) {
		System.out.println(id);
		return userMapper.findOrder(id);
	}*/
}
