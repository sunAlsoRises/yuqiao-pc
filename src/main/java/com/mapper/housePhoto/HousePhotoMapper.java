package com.mapper.housePhoto;

import com.model.FK_House;
import com.model.PK_HousePhoto;
import com.util.QueryVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface HousePhotoMapper {
     //通过二手房id获取图片数量
     Integer getCountPhoto(String id);
     //通过二手房id获取图片信息
     List<PK_HousePhoto>  getPhotosByEsfId(String id);
}
