package com.tardigrades.server.service;

import com.tardigrades.server.db.PlanRepository;
import com.tardigrades.server.model.DistrictPlan;
import com.tardigrades.server.model.State;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class PlanService {
    private final PlanRepository planRepository;

    public DistrictPlan getEnactedPlan(String state) {
        return planRepository.findByEnactedIsTrueAndState(state);
    }

    @Async
    public void getPlans(State currentState, boolean MMD, String state) throws InterruptedException {
        if (!MMD) {
            currentState.setSamplePlansSMD(planRepository.findAllByStateAndMMDIsFalseAndEnactedIsFalse(state));
        } else {
            currentState.setSamplePlansMMD(planRepository.findAllByStateAndMMDIsTrueAndEnactedIsFalse(state));
        }
    }


}
