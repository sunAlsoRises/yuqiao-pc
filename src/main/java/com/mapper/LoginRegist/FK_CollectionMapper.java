package com.mapper.LoginRegist;

import com.model.FK_Collection;

import java.util.List;

public interface FK_CollectionMapper {
    Integer insert(FK_Collection coll);
    Integer delete(FK_Collection coll);
    Integer selectCount(FK_Collection coll);
}
