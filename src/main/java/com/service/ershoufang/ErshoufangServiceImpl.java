package com.service.ershoufang;


import com.mapper.ershoufang.ErshoufangMapper;
import com.mapper.ershoufang.ErshoufangXmlMapper;
import com.mapper.housePhoto.HousePhotoMapper;
import com.model.FK_Collection;
import com.model.FK_House;
import com.model.PK_HousePhoto;
import com.util.HouseResult;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class ErshoufangServiceImpl implements ErshoufangService{

    @Autowired
    ErshoufangMapper ershoufangmapper ;
    @Autowired
    ErshoufangXmlMapper esfxml ;
    @Autowired
    HousePhotoMapper photoMapper;
    @Autowired
    PK_HousePhoto photo ;
    //首页的二手房查询
    @Override
    public HouseResult<List<FK_House>> findErshoufangByMax(String zhuangtai) {
        List<FK_House> houses = ershoufangmapper.findErshoufangByMax("无效");
        for (FK_House list:houses) {
            getPhotos(list);
        }
        //直接获取值就可以
        HouseResult hrs = new HouseResult();
        hrs.setMsg("查询成功");
        hrs.setStatus(0);
        hrs.setData(houses);
        return hrs;
    }
    //通过id获取二手房信息
    @Override
    public HouseResult<FK_House> getMessageById(String id) {
        FK_House house = ershoufangmapper.getMessageById(id);
        HouseResult<FK_House> hr  = new HouseResult();
        if (house == null) {
            hr.setStatus(1);
            hr.setMsg("查询失败");
        }else {
            getPhotos(house);
            hr.setMsg("查询成功");
            hr.setStatus(0);
            hr.setData(house);
        }
        return hr;
    }
    //查询二手房数量
    @Override
    public Integer getCountById(String id) {
        Integer count = ershoufangmapper.getCountById(id);
        return count;
    }
//查询租房数量
    @Override
    public Integer getZuCountById(String id, String leixing) {
        Integer countZu = ershoufangmapper.getZuCountById(id,leixing);
        return countZu;
    }
//通过二手房id查询二手房和归属的小区信息
    @Override
    public HouseResult<FK_House> getErAndXiaoQuById(String id) {
        FK_House house = esfxml.getErAndXiaoQuById(id);
        HouseResult<FK_House> hr  = new HouseResult();

        if (house == null){
            hr.setStatus(1);
            hr.setMsg("值为空");
        }else {
            getPhotos(house);
            hr.setStatus(0);
            hr.setData(house);
        }
        return hr;
    }
//通过小区id查询二手房
    @Override
    public HouseResult<List<FK_House>> getHouseByName(String nameid) {

        HouseResult<List<FK_House>> hr = new HouseResult<>();

            List<FK_House> houseByName = ershoufangmapper.getHouseByName(nameid);
        if (!houseByName.isEmpty() && houseByName !=null){
            for (FK_House list:houseByName) {
                getPhotos(list);
            }
            hr.setStatus(0);
            hr.setData(houseByName);
        }else {
            hr.setStatus(1);
            hr.setMsg("获取失败，值为空");
        }

        return hr;
    }
//分页获取二手房
    @Override
    public Page<FK_House> findHouseByPage(QueryVo queryVo) {
        queryVo.setStart((queryVo.getCurrentPage()-1)*queryVo.getPageSize());

        List<FK_House> list = this.esfxml.findHouseByPage(queryVo);
        for (FK_House house:list) {
            getPhotos(house);
        }
        //查询数据总条数
        Integer zongtiaoshu = this.esfxml.queryCountByPage(queryVo);
//        System.out.println("service总条数="+zongtiaoshu);
//        将结果封装
        Page<FK_House> page = new Page<>(zongtiaoshu, queryVo.getCurrentPage(),queryVo.getPageSize(),list);

        return page;
    }
//通过id获取租房信息
    @Override
    public HouseResult<FK_House> getTenementById(String id) {
        FK_House house = esfxml.getTenementById(id);
        HouseResult<FK_House> hr  = new HouseResult();

        if (house == null){
            hr.setStatus(1);
            hr.setMsg("值为空");
        }else {
            getPhotos(house);
            hr.setStatus(0);
            hr.setData(house);
        }
        return hr;
    }
//通过id获取历史记录的二手房简单的信息
    @Override
    public FK_House getHouseByHisTory(String id) {
        FK_House houseByHisTory = this.esfxml.getHouseByHisTory(id);
        getPhotos(houseByHisTory);
        return houseByHisTory;
    }
//根据小区id获取二手房信息(xml版)
    @Override
    public List<FK_House> getHouseByXiaoQuId(QueryVo vo) {

        List<FK_House> houseByName = this.esfxml.getHouseByXiaoQuId(vo);

        if (!houseByName.isEmpty() && houseByName !=null){
            for (FK_House list:houseByName) {
                getPhotos(list);
            }
        }
        return houseByName;
    }

    @Override
    public List<FK_House> findErHouseByMobile(String phone) {
        List<FK_House> houseByMobile = this.esfxml.findErHouseByMobile(phone);
        if (!houseByMobile.isEmpty() && houseByMobile !=null){
            for (FK_House list:houseByMobile) {
                getPhotos(list);
            }
        }
        return houseByMobile;
    }
    @Override
    public List<FK_House> findZuHouseByMobile(String phone) {
        List<FK_House> houseByMobile = this.esfxml.findZuHouseByMobile(phone);
        if (!houseByMobile.isEmpty() && houseByMobile !=null){
            for (FK_House list:houseByMobile) {
                getPhotos(list);
            }
        }
        return houseByMobile;
    }

    //封装获取图片方法
    private void getPhotos(FK_House ershoufang) {
        if (ershoufang != null) {
            List<PK_HousePhoto> photosByEsfId = photoMapper.getPhotosByEsfId(ershoufang.getId());
            if (photosByEsfId == null || photosByEsfId.isEmpty()) {
                photo.setPath("error");
                photosByEsfId.add(photo);
            }
            ershoufang.setHousePhoto(photosByEsfId);
        }
    }
}
