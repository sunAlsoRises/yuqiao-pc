package com.service.LoginRegist;

import com.model.FK_Collection;

import java.util.List;

public interface FK_CollectionService {
    Integer insert(FK_Collection coll);
    Integer delect(FK_Collection coll);
    Integer selectCount(FK_Collection coll);

}
