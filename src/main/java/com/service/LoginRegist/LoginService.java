package com.service.LoginRegist;

import com.model.Login_Regist;

public interface LoginService {
    void insert(Login_Regist lr);
    int selectCountBySql(Login_Regist lr);
    //检查手机号是否存在
    int selectCountByPhone(Login_Regist lr);
    void  update(Login_Regist lr);
    int checkVerification(Login_Regist lr);

    int updateRegister(Login_Regist lr);

    String getQuYuByMobile(String action);
}
