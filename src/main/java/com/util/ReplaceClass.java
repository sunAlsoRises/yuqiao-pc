package com.util;

import com.model.Sys_User;
import com.model.Sys_UserPhoto;
import org.springframework.beans.factory.annotation.Autowired;


public class ReplaceClass {
    @Autowired
    static Sys_User user ;
    @Autowired
    static Sys_UserPhoto   userPhoto ;
    public static Sys_User getUser(){
        return  user ;
    }
    public static Sys_UserPhoto getUserPhoto(){
        return  userPhoto ;
    }
}
