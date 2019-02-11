package com.test;

import com.model.FK_House;
import com.repository.ErShouFangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class JpaController {
/*    @Autowired
    ErShouFangRepository repos ;
    @GetMapping("/user/id")
    public Optional<FK_House> getFk(String id){
        Optional<FK_House> byId = repos.findById(id);
        return  byId;
    }*/
}
