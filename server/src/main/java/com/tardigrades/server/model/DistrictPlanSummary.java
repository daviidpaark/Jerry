package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DistrictPlanSummary {
    private int districts;
    private int numberOfOpportunityReps;
    private int numberOfSafeDistricts;
    private String split;
}
