package com.tardigrades.server.service;

import com.tardigrades.server.db.PlanRepository;
import com.tardigrades.server.model.DistrictPlan;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PlanService {
    private final PlanRepository planRepository;

    public DistrictPlan getEnactedPlan(String state) {
        return planRepository.findByEnactedIsTrueAndState(state);
    }

    public List<DistrictPlan> getPlansSMD(String state) {
        return planRepository.findAllByStateAndMMDIsFalse(state);
    }

    public List<DistrictPlan> getPlansMMD(String state) {
        return planRepository.findAllByStateAndMMDIsTrue(state);
    }

}
