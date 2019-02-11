package com.mapper.LoginRegist;

import com.model.Login_Regist;

public interface Login_RegistMapper {
    int insert(Login_Regist lr);
    int selectCountBySql(Login_Regist lr);
    int update(Login_Regist lr);
    int updateRegister(Login_Regist lr);
//根据手机号获取意向区域
    String getQuYuByMobile(String action);
}