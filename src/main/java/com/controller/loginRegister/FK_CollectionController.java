package com.controller.loginRegister;

import com.model.FK_Collection;
import com.service.LoginRegist.FK_CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/collect")
public class FK_CollectionController {
    @Autowired
    private FK_CollectionService colls ;
    //插入二手房的收藏表
    @PostMapping(value = "/secondhouse/add")
    @ResponseBody
    public Integer insert(FK_Collection coll) {
        Integer insert = this.colls.insert(coll);
        return insert;
    }
    //删除关注房源
    @PostMapping(value = "/secondhouse/del")
    @ResponseBody
    public Integer delete(FK_Collection coll) {
        Integer delect = this.colls.delect(coll);
        return delect;
    }
    //查询是否已经关注房源
    @PostMapping(value = "/secondhouse/select")
    @ResponseBody
    public Integer select(FK_Collection coll) {
        Integer sel = this.colls.selectCount(coll);
        return sel;
    }
}
