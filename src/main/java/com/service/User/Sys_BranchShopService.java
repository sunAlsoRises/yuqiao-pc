package com.service.User;

import com.model.Sys_BranchShop;
import com.util.HouseResult;

public interface Sys_BranchShopService {
    HouseResult<Sys_BranchShop>  selectByPrimaryKey(String id);
}
