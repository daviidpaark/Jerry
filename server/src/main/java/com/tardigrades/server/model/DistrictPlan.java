package com.tardigrades.server.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DistrictPlan {
    private TagEnum tag;
    private boolean MMD;
    private District[] districts;
}
