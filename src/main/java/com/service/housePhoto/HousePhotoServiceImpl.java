package com.service.housePhoto;

import com.mapper.housePhoto.HousePhotoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HousePhotoServiceImpl implements HousePhotoService {
    //根据房源id查询照片数量
    @Autowired
    HousePhotoMapper photo ;
    @Override
    public Integer getCountPhoto(String id) {
        Integer countPhoto = photo.getCountPhoto(id);
        return countPhoto;
    }
}
