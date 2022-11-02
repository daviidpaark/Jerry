package com.tardigrades.server.db;

import com.tardigrades.server.model.State;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepository extends MongoRepository<State, Long> {
}
