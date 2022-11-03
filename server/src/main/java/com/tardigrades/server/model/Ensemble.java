package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ensemble {
    private BoxAndWhisker boxAndWhisker;
    private BarChart seatShare;
    private BarChart opportunityDistrictsData;
    private boolean MMD;
}
