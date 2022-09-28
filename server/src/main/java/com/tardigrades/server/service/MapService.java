package com.tardigrades.server.service;

import com.tardigrades.server.db.MapRepository;
import com.tardigrades.server.model.Map;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MapService {
    private final MapRepository mapRepository;

    public MapService(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public Map save(Map map) {
        return mapRepository.save(map);
    }

    public void save(List<Map> users) {
        mapRepository.saveAll(users);
    }

}
