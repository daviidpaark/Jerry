package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "states")
@AllArgsConstructor
@NoArgsConstructor
public class State {

    @Id
    private String state;
    private Demographics demographics;
    private DistrictPlan[] samplePlansSMD;
    private DistrictPlan[] samplePlansMMD;
    private DistrictPlan enactedPlan;
    private int seats;
    private Ensemble ensembleSMD;
    private Ensemble ensembleMMD;

}
