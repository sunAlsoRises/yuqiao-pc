package com.service.BranchShop;

import com.mapper.BranchShop.BranchShopMapper;
import com.model.Sys_BranchShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BranchShopServiceImpl implements BranchShopService {
    @Autowired
    BranchShopMapper shop ;
//    通过经纪人id获取门店信息
    @Override
    public Sys_BranchShop findShopByUserId(String userId) {
        Sys_BranchShop shopByUserId = shop.findShopByUserId(userId);
        return shopByUserId;
    }
}
