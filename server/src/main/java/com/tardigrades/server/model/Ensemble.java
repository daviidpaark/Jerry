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
    private List<BoxAndWhisker> boxAndWhiskers;
    private BarChart seatShare;
    private BarChart opportunityDistricts;
    private boolean MMD;

    public BoxAndWhisker getBoxAndWhisker(TagEnum tag) {
        for (BoxAndWhisker boxAndWhisker : boxAndWhiskers) {
            if (boxAndWhisker.getTag() != null && boxAndWhisker.getTag().equals(tag))
                return boxAndWhisker;
        }
        return null;
    }
}
