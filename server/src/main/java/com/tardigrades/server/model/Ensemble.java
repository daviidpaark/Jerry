package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ensemble {
    private List<EnsembleSummary> ensembleSummary;
    private List<EnsembleSummary> ensembleLayoutSummary;
    private Object boxAndWhiskers;
    private BarChart seatShare;
    private BarChart opportunityDistricts;
    private boolean MMD;

}
