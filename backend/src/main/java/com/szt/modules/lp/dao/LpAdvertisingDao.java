package com.szt.modules.lp.dao;

import com.szt.modules.lp.entity.LpAdvertisingEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 广告管理
 * 
 * @author liao
 * @email 1171964050@qq.com
 * @date 2018-10-17 09:56:43
 */
@Mapper
public interface LpAdvertisingDao extends BaseMapper<LpAdvertisingEntity> {
    String fileds="        id,        remarks,        version_no,        create_by,        create_time,        update_by,        update_time,        delete_flag,        sort,        pic,        type";

}
