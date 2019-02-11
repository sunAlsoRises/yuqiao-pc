package com.service.User;

import com.dao.Sys_BranchShopMapper;
import com.model.Sys_BranchShop;
import com.util.HouseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Sys_BranchShopServiceImpl implements  Sys_BranchShopService{
    @Autowired
    Sys_BranchShopMapper shopMappper ;
    @Override
    public HouseResult<Sys_BranchShop> selectByPrimaryKey(String id) {
        HouseResult<Sys_BranchShop> hr = new HouseResult<>();
        Sys_BranchShop shop = shopMappper.selectByPrimaryKey(id);
        if (shop != null){
            hr.setStatus(0);
            hr.setData(shop);
        }else {
            hr.setStatus(1);
            hr.setMsg("暂无");
        }
        return hr;
    }
}
