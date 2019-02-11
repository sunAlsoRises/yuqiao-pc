package com.service.xiaoqu;

import java.util.List;

import com.mapper.ershoufang.ErshoufangXmlMapper;
import com.mapper.housePhoto.CommunityPhotoMapper;
import com.mapper.xiaoqu.XiaoQuXmlMapper;
import com.model.FK_CommunityPhoto;
import com.util.Page;
import com.util.QueryVo;
import com.util.SelfLog4j;
import com.util.map.QueryMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.xiaoqu.XiaoQuMapper;
import com.model.FK_Community;


import com.util.HouseResult;
@Service
public class XiaoQuServiceImpl implements XiaoQuService{
	@Autowired
	private XiaoQuMapper xiaoQuMapper ;
	@Autowired
	private XiaoQuXmlMapper xqmapper ;
	@Autowired
    private ErshoufangXmlMapper esf ;
	@Autowired
	private CommunityPhotoMapper photoMapper ;
	@Autowired
    FK_CommunityPhoto photo ;
//查询小区
	@Override
	public HouseResult<List<FK_Community>> findXiaoQu() {
		List<FK_Community> houses = xiaoQuMapper.findXiaoQu();
//		遍历小区,通过小区id查询小区图片
		for (FK_Community xiaoqu: houses) {
            getPhotos(xiaoqu);
        }
		HouseResult<List<FK_Community>> hr = new HouseResult<>();
		hr.setMsg("查询成功");
		hr.setStatus(0);
		hr.setData(houses);
		return hr;
	}
//封装获取图片方法
    private void getPhotos(FK_Community xiaoqu) {

        List<FK_CommunityPhoto> photosByXqId = photoMapper.getPhotosByXqId(xiaoqu.getId());
        if (photosByXqId ==null || photosByXqId.isEmpty()){
            photo.setPath("error");
            photosByXqId.add(photo);
        }
        xiaoqu.setPhotos(photosByXqId);
    }

    //通过id查询小区
	@Override
	public FK_Community selectById(String id) {
		FK_Community fkcom = xiaoQuMapper.selectById(id);
        getPhotos(fkcom);
		return fkcom;
	}
//通过地图范围查询小区
	@Override
	public HouseResult<List<FK_Community>> findXiaoQuMap(QueryMap vo) {
        List<FK_Community> xiaoQuMap = this.xqmapper.findXiaoQuMap(vo);

        HouseResult<List<FK_Community>> rs = new HouseResult<>();
        if(xiaoQuMap.isEmpty()){
            rs.setMsg("未获取到查询结果");
            rs.setStatus(1);
        }else {
			rs.setMsg("查询成功");
            rs.setStatus(0);
            rs.setData(xiaoQuMap);
        }
        return rs;
	}
//小区分页查询
	@Override
	public Page<FK_Community> findCommunityByPage(QueryVo queryVo) {
		queryVo.setStart((queryVo.getCurrentPage()-1)*queryVo.getPageSize());

		List<FK_Community> list = this.xqmapper.findCommunityByPage(queryVo);
        //		遍历小区,通过小区id查询小区图片
        for (FK_Community xiaoqu: list) {
            getPhotos(xiaoqu);
        }
		//查询数据总条数
		Integer zongtiaoshu = this.xqmapper.CommunityCountByPage(queryVo);
//		System.out.println("小区总条数="+zongtiaoshu);

//        将结果封装
//        Page<FK_House> page = new Page<>(zongtiaoshu, queryVo.getCurrentPage(),queryVo.getPageSize(),list);
		Page<FK_Community> page = new Page<>(zongtiaoshu,queryVo.getCurrentPage(),queryVo.getPageSize(),list);
		return page;
	}
//根据小区id查询小区
	@Override
	public HouseResult<FK_Community> findCommunityById(String id) {
        FK_Community communityById = xqmapper.findCommunityById(id);
        getPhotos(communityById);
        HouseResult<FK_Community> hr = new HouseResult<>() ;

        if (communityById == null){
            hr.setStatus(1);
            hr.setMsg("此小区失效");
            SelfLog4j.getLog4j(this.getClass()).debug(hr.getMsg());
        }else {
            hr.setStatus(0);
            hr.setData(communityById);
        }
        return hr;
	}
//通过历史记录获取小区
	@Override
	public FK_Community getComByHisTory(String id) {
        FK_Community comByHisTory = this.xqmapper.getComByHisTory(id);
        if (comByHisTory !=null){
            getPhotos(comByHisTory);
        }

        return comByHisTory;
	}


}
