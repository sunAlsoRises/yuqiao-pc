package com.mapper.xiaoqu;

import com.model.FK_Community;
import com.util.QueryVo;
import com.util.map.QueryMap;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface XiaoQuXmlMapper {
    //小区地图列表
    List<FK_Community> findXiaoQuMap(QueryMap vo);
    //小区分页列表
    List<FK_Community> findCommunityByPage(QueryVo vo);
    //小区分页总数
    int CommunityCountByPage(QueryVo vo);
    //根据id查询小区
    FK_Community findCommunityById(String id);
    //根据历史纪录id查询小区少量信息
    FK_Community getComByHisTory(String id);
}
