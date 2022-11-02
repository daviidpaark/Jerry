package com.tardigrades.server.service;

import com.tardigrades.server.db.MapRepository;
import com.tardigrades.server.model.State;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class MapService {
    private final MapRepository mapRepository;

    public List<State> getStates() {
        return mapRepository.findAll();
    }
}
