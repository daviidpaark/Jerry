package com.tardigrades.server.service;

import com.tardigrades.server.db.StateRepository;
import com.tardigrades.server.model.State;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StateService {
    private final StateRepository stateRepository;

    public List<State> getStates() {
        return stateRepository.findAll();
    }

    public State getState(String state) {
        return stateRepository.findByState(state);
    }
}
