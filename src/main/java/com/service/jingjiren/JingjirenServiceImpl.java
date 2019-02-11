package com.service.jingjiren;

import com.mapper.jingjiren.JingJiRenMapper;
import com.model.Sys_User;
import com.util.JingJiRenQueryVo;
import com.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class JingjirenServiceImpl implements JingjirenService{
    @Autowired
    private JingJiRenMapper jjr;
    @Override
    public Page<Sys_User> findHouseByPage(JingJiRenQueryVo queryVo) {
        queryVo.setStart((queryVo.getCurrentPage()-1)*queryVo.getPageSize());

        List<Sys_User> list = this.jjr.findJjrByPage(queryVo);
        //查询数据总条数
        Integer zongtiaoshu = this.jjr.queryCountByPage(queryVo);
//        将结果封装
//        Page<FK_House> page = new Page<>(zongtiaoshu, queryVo.getCurrentPage(),queryVo.getPageSize(),list);
        Page<Sys_User> page = new Page<>(zongtiaoshu, queryVo.getCurrentPage(),queryVo.getPageSize(),list);
        return page;
    }
//通过经纪人id获取经纪人信息
    @Override
    public Sys_User findJirById(String id) {
        Sys_User jjrById = jjr.findJjrById(id);
        return jjrById;
    }
}
