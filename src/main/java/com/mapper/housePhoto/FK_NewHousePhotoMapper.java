package com.mapper.housePhoto;

import com.model.FK_NewHousePhoto;

import java.util.List;

public interface FK_NewHousePhotoMapper {
    //    根据新房id查询图片信息
    List<FK_NewHousePhoto> getPhotosByNewId(String id);
}
