package com.tardigrades.server.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "plans")
@AllArgsConstructor
@NoArgsConstructor
public class DistrictPlan {
    private DistrictPlanSummary districtPlanSummary;
    private String state;
    private TagEnum tag;
    private boolean enacted;
    private boolean MMD;
    private List<District> districts;
    private Geography geography;

    public Object getMap() {
        return geography.getMap();
    }
}
