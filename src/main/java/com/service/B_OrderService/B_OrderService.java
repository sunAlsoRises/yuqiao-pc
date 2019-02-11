package com.service.B_OrderService;

import java.math.BigDecimal;

public interface B_OrderService {
    BigDecimal findPriceByXiaoQuId(String xiaoquId);
}
