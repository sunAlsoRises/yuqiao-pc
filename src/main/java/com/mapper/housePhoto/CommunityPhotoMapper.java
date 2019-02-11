package com.mapper.housePhoto;

import com.model.FK_CommunityPhoto;

import java.util.List;

public interface CommunityPhotoMapper {
//    根据小区id查询图片信息
   List<FK_CommunityPhoto> getPhotosByXqId(String id);
}
