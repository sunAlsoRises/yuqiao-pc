package com.service.jingjiren;

import com.model.Sys_User;
import com.util.JingJiRenQueryVo;
import com.util.Page;

public interface JingjirenService {
    Page<Sys_User> findHouseByPage(JingJiRenQueryVo page);
    Sys_User findJirById(String id);
}
