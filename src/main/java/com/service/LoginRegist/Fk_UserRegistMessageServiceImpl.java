package com.service.LoginRegist;

import com.mapper.LoginRegist.FK_CustomerMapper;
import com.mapper.LoginRegist.Fk_UserRegistMessageMapper;
import com.model.Fk_UserRegistMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Fk_UserRegistMessageServiceImpl implements  Fk_UserRegistMessageService {
    @Autowired
    private Fk_UserRegistMessageMapper urm;
    @Autowired
    private FK_CustomerMapper cust;
    @Override
    public int insertMessage(Fk_UserRegistMessage mes) {
        //根据用户登陆的手机号获取uid
        String idByMobile = this.cust.getIdByMobile(mes.getUserphone());
//        System.out.println("走了吗"+idByMobile);
        mes.setUnionid(idByMobile);
//        System.out.println("走了吗2"+mes.getUnionid());
        int i = this.urm.insertMessage(mes);
        return i;
    }
}
