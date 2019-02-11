package com.controller.marketQuotation;

import com.service.marketQuotation.marketQuotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping("/market")
public class marketQuotationController {
    @Autowired
    private marketQuotationService  mark ;
    @RequestMapping("/count")
    @ResponseBody
    public Map<String, Object> getMapTocoordinate() {
        Map<String, Object> map = this.mark.findCountByMounth();
        return map;
    }
}
