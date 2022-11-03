package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoxAndWhisker {
    private RaceEnum race;
    private PartyEnum party;
    private Map<Integer, Double[]> data;
    private boolean MMD;
}
