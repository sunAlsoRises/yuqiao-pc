package com.service.BranchShop;

import com.model.Sys_BranchShop;

public interface BranchShopService {
    Sys_BranchShop findShopByUserId(String userId);
}
