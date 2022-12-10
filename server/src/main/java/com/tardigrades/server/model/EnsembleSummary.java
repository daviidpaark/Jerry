package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnsembleSummary {
    private String layout;
    private int numberOfPlans;
    private double averageOpportunityReps;
    private double averageEqualPopulation;
    private Map<PartyEnum, Double> averageSplit;
}
