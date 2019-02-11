package com.mapper.B_OrderMapper;

import java.math.BigDecimal;

public interface B_OrderMapper {
    //通过小区id查找当前小区下最近成交的房源成交价
    BigDecimal findPriceByXiaoQuId(String xiaoquId);
    Integer findCountByMounth();
}
