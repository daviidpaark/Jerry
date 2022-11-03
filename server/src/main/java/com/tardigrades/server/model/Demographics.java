package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Demographics {
    private int population;
    private Map<RaceEnum, Integer> populationByRace;
    private Map<PartyEnum, Integer> populationByParty;
}
