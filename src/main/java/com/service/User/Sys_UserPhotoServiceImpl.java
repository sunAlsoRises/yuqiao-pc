package com.service.User;

import com.mapper.jingjiren.Sys_UserPhotoMapper;
import com.model.FK_House;
import com.model.PK_HousePhoto;
import com.model.Sys_UserPhoto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Sys_UserPhotoServiceImpl implements Sys_UserPhotoService {
    @Autowired
    Sys_UserPhotoMapper photo ;
    @Override
    public Sys_UserPhoto getUserPhotoByPhotoId(String photoid) {
        Sys_UserPhoto userPhoto = this.photo.getUserPhotoByPhotoId(photoid);

        if (userPhoto == null){
            Sys_UserPhoto errorPhoto = new Sys_UserPhoto();
            errorPhoto.setPath("error");
            return errorPhoto;
        }else {
            return userPhoto;
        }

    }
}
