package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnsembleSummary {
    private int numberOfPlans;
    private double averageOpportunityDistricts;
    private double averageEqualPopulation;
    private Map<PartyEnum, Double> averageSplit;
}
