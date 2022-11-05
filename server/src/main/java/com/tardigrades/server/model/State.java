package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "states")
@AllArgsConstructor
@NoArgsConstructor
public class State {
    private String state;
    private Demographics demographics;
    private List<DistrictPlan> samplePlansSMD;
    private List<DistrictPlan> samplePlansMMD;
    private DistrictPlan enactedPlan;
    private int seats;
    private Ensemble ensembleSMD;
    private Ensemble ensembleMMD;

    public Object getMap() {
        return this.getEnactedPlan().getMap();
    }

    public DistrictPlan getDistrictPlan(boolean MMD, TagEnum tag) {
        if (!MMD) {
            for (DistrictPlan districtPlan : samplePlansSMD) {
                if (districtPlan.getTag().equals(tag))
                    return districtPlan;
            }
        } else {
            for (DistrictPlan districtPlan : samplePlansMMD) {
                if (districtPlan.getTag().equals(tag))
                    return districtPlan;
            }
        }
        return null;
    }

    public Ensemble getEnsemble(boolean MMD) {
        if (!MMD) {
            return ensembleSMD;
        } else {
            return ensembleMMD;
        }
    }
}
