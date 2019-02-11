package com.service.B_OrderService;

import com.mapper.B_OrderMapper.B_OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
@Service
public class B_OrderServiceImpl implements  B_OrderService {
    @Autowired
    private B_OrderMapper om ;
    @Override
    public BigDecimal findPriceByXiaoQuId(String xiaoquId) {
        BigDecimal price = this.om.findPriceByXiaoQuId(xiaoquId);
        return price;
    }
}
