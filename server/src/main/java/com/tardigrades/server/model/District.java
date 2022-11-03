package com.tardigrades.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class District {
    private Demographics demographics;
    private Representative[] representatives;
    private int seats;
    private Map<Representative, Integer[]> votingResults;
}
