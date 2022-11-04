package com.tardigrades.server.db;

import com.tardigrades.server.model.State;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends MongoRepository<State, Long> {
    State findByState(String state);
}
