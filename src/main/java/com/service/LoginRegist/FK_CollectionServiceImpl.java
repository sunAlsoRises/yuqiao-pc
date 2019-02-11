package com.service.LoginRegist;

import com.mapper.LoginRegist.FK_CollectionMapper;
import com.mapper.LoginRegist.FK_CustomerMapper;
import com.mapper.ershoufang.ErshoufangXmlMapper;
import com.model.FK_Collection;
import com.model.FK_House;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FK_CollectionServiceImpl implements FK_CollectionService {
    @Autowired
    private FK_CollectionMapper coll ;
    @Autowired
    private FK_CustomerMapper cust;
    @Autowired
    private ErshoufangXmlMapper esf;
    @Override
    public Integer insert(FK_Collection coll) {
//        通过手机号查询uncoid
        if (coll.getPhone() != null && !"null".equals(coll.getPhone())){
            String unid = this.cust.getIdByMobile(coll.getPhone());
            coll.setUnionid(unid);
        }
        Integer insert = this.coll.insert(coll);
        return insert;
    }

    @Override
    public Integer delect(FK_Collection coll) {
        Integer delect = this.coll.delete(coll);
        return delect;
    }

    @Override
    public Integer selectCount(FK_Collection coll) {
        Integer sel = this.coll.selectCount(coll);

        return sel;
    }
}
