package com.tardigrades.server.db;

import com.tardigrades.server.model.DistrictPlan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends MongoRepository<DistrictPlan, Long> {
    DistrictPlan findByEnactedIsTrueAndState(String state);

    List<DistrictPlan> findAllByStateAndMMDIsFalse(String state);

    List<DistrictPlan> findAllByStateAndMMDIsTrue(String state);
}
