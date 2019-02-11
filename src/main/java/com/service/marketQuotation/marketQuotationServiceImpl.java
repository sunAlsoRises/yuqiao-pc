package com.service.marketQuotation;

import com.mapper.B_OrderMapper.B_OrderMapper;
import com.mapper.LoginRegist.FK_CustomerMapper;
import com.mapper.LoginRegist.Fk_UserRegistMessageMapper;
import com.mapper.newhouse.NewHouseXmlMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class marketQuotationServiceImpl implements marketQuotationService {
    @Autowired
    private NewHouseXmlMapper newhouse ;
    @Autowired
    private B_OrderMapper order;
    @Autowired
    private FK_CustomerMapper cust ;
    //查询当月的需求房源,成交数,新开楼盘数
    @Override
    public  Map<String,Object> findCountByMounth() {
        Integer newHouseCount = this.newhouse.findCountByMounth();
        Integer orderCount = this.order.findCountByMounth();
        Integer wantCount = this.cust.findCountByMounth();
        Map<String,Object> map = new HashMap<>();
        map.put("newHouseCount",newHouseCount);
        map.put("orderCount",orderCount);
        map.put("wantCount",wantCount);
        return map;
    }
}
