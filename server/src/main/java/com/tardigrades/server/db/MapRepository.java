package com.tardigrades.server.db;

import com.tardigrades.server.model.Map;
import org.springframework.data.repository.CrudRepository;

public interface MapRepository extends CrudRepository<Map, Long> {
}
