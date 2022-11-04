package com.tardigrades.server.service;

import com.tardigrades.server.db.MapRepository;
import com.tardigrades.server.model.Geography;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class MapService {
    private final MapRepository mapRepository;

    public Geography getMap(String name) {
        return mapRepository.findByName(name);
    }
}
