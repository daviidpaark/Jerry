package com.tardigrades.server.service;

import com.tardigrades.server.db.PlanRepository;
import com.tardigrades.server.model.DistrictPlan;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PlanService {
    private final PlanRepository planRepository;

    public DistrictPlan getEnactedPlan(String state) {
        return planRepository.findByEnactedIsTrueAndState(state);
    }

    @Async
    public List<DistrictPlan> getPlans(boolean MMD, String state) {
        if (!MMD) {
            return planRepository.findAllByStateAndMMDIsFalse(state);
        } else {
            return planRepository.findAllByStateAndMMDIsTrue(state);
        }
    }


}
