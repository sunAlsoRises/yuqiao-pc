package com.service.LoginRegist;

import com.mapper.LoginRegist.FK_CustomerMapper;
import com.mapper.LoginRegist.Login_RegistMapper;
import com.model.Login_Regist;
import com.util.UuidUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class LoginServiceImpl implements LoginService{
    @Autowired
    Login_RegistMapper user ;
    @Autowired
    FK_CustomerMapper cust;
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 设置日期格式
//插入手机号信息
    @Override
    public void insert(Login_Regist lr) {
        Date now = new Date();
        Date afterDate = new Date(now.getTime() + 60000);
        lr.setSendnumbertime(now);
        lr.setSmsendtime(afterDate);
        lr.setId(UuidUtils.GetUUID());
        int insert = user.insert(lr);
        if (insert <= 0){
            System.out.println("数据异常,获取失败");
        }
    }
    //检查手机号是否存在于数据库表中
    @Override
    public int selectCountByPhone(Login_Regist lr) {

        int count = user.selectCountBySql(lr);
        return count;
    }
//更新操作时间和验证码
    @Override
    public void update(Login_Regist lr) {
        Date now = new Date();
        Date afterDate = new Date(now.getTime() + 60000);
        lr.setSendnumbertime(now);
        lr.setSmsendtime(afterDate);
        lr.setId(UuidUtils.GetUUID());
        int update = user.update(lr);
        if (update <= 0){
            System.out.println("数据异常,获取失败");
        }

    }

    //检查手机号一分钟内是否操作过
    @Override
    public int selectCountBySql(Login_Regist lr) {
        Date now = new Date();
        lr.setSendnumbertime(now);
        int count = user.selectCountBySql(lr);
        return count;
    }
    //检查验证码是否正确
    @Override
    public int checkVerification(Login_Regist lr) {
//        一定要带上 当前时间是否超过一分钟
//        1,获取当前时间
        Date now = new Date();
        lr.setSmsendtime(now);
        int count = user.selectCountBySql(lr);
        return count;
    }

    @Override
    public int updateRegister(Login_Regist lr) {
//        获取用户的uid
        String mobile = lr.getPhonenumber();
        String idByMobile  = "" ;
        if (mobile !=null && mobile != ""){
            idByMobile = this.cust.getIdByMobile(mobile);
        }
        lr.setUnionid(idByMobile);
        lr.setId(UuidUtils.GetUUID());
        int i = this.user.updateRegister(lr);
        return i;

    }
//根据手机号获取意向区域
    @Override
    public String getQuYuByMobile(String action) {
        String quyu = this.user.getQuYuByMobile(action);
        return quyu;
    }

}
