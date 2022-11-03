package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Representative {
    private String name;
    private int id;
    private RaceEnum race;
    private PartyEnum party;
    private int[] votes;
}
