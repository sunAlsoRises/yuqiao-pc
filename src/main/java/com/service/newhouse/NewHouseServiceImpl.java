package com.service.newhouse;

import java.util.List;

import com.mapper.housePhoto.FK_NewHousePhotoMapper;
import com.mapper.jingjiren.Sys_UserPhotoMapper;
import com.mapper.newhouse.NewHouseXmlMapper;
import com.model.FK_NewHousePhoto;
import com.model.Sys_UserPhoto;
import com.util.Page;
import com.util.QueryVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.newhouse.NewHouseMapper;
import com.model.FK_House;
import com.model.FK_NewHouse;
import com.util.HouseResult;
@Service
public class NewHouseServiceImpl implements NewHouseService{
	@Autowired
	NewHouseMapper newHouseMapper ;
	@Autowired
	NewHouseXmlMapper nhm ;
	@Autowired
	FK_NewHousePhotoMapper pho ;
	@Autowired
	FK_NewHousePhoto newPhoto ;
	@Autowired
	Sys_UserPhotoMapper userP;
	@Autowired
    private  Sys_UserPhoto userPhoto ;
	@Override
	public HouseResult findNewHouse() {
		List<FK_NewHouse> houses = newHouseMapper.findNewHouse();
		for (FK_NewHouse newH: houses) {
			getPhotos(newH);
		}
		HouseResult hr = new HouseResult();
		hr.setMsg("查询成功");
		hr.setStatus(0);
		hr.setData(houses);
		return hr;
		 
	}
//根据vo条件和分页查询新房
	@Override
	public Page<FK_NewHouse> findNewHouseByPage(QueryVo queryVo) {
		queryVo.setStart((queryVo.getCurrentPage()-1)*queryVo.getPageSize());

		List<FK_NewHouse> list = this.nhm.findNewHouseByPage(queryVo);
		for (FK_NewHouse newH: list) {
			getPhotos(newH);
		}
		//查询数据总条数
		Integer zongtiaoshu = this.nhm.newHouseCountByPage(queryVo);
//		System.out.println("新房总条数="+zongtiaoshu);
//        将结果封装
//        Page<FK_House> page = new Page<>(zongtiaoshu, queryVo.getCurrentPage(),queryVo.getPageSize(),list);
		Page<FK_NewHouse> page = new Page<>(zongtiaoshu,queryVo.getCurrentPage(),queryVo.getPageSize(),list);
		return page;

	}
//根据id查询新房
	@Override
	public FK_NewHouse findHouseById(String id) {
        FK_NewHouse houseById = this.nhm.findHouseById(id);
        if (houseById !=null){
        	getPhotos(houseById);
			String photoid = houseById.getUser().getPhotoid();
//			System.out.println("经纪人的图片id"+photoid);
        	if (photoid!=null && !"".equals(photoid)){
                userPhoto = this.userP.getUserPhotoByPhotoId(photoid);
//				System.out.println("经纪人的图片"+userPhoto);
//				System.out.println("经纪人的图片path"+userPhoto.getPath());
            }
            houseById.getUser().setPhotos(userPhoto);
//        	System.out.println("serv"+houseById.getUser().getPhotos().getPath());
        }
        if (houseById == null){
            System.out.println("没有查询结果");
            return  null ;
        }else {
            return houseById;
        }
	}

    @Override
    public List<FK_NewHouse> findHouseByQuyu(FK_NewHouse quyu) {
        return this.nhm.findHouseByQuyu(quyu);
    }

	//封装获取图片方法
	private void getPhotos(FK_NewHouse newh) {

		List<FK_NewHousePhoto> photosByXqId = this.pho.getPhotosByNewId(newh.getId());
		if (photosByXqId ==null || photosByXqId.isEmpty()){
			newPhoto.setPath("error");
			photosByXqId.add(newPhoto);
		}
		newh.setPhotos(photosByXqId);
	}
}
