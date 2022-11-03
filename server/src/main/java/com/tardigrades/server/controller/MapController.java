package com.tardigrades.server.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tardigrades.server.model.State;
import com.tardigrades.server.service.MapService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
public class MapController {

    private MapService mapService;
    private State currentState;

    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping(value = "/maps/us", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> getUSMap() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        TypeReference<HashMap> typeReference = new TypeReference<HashMap>() {
        };
        InputStream inputStream = TypeReference.class.getResourceAsStream("/maps/us-albers.json");
        HashMap<String, Object> map = objectMapper.readValue(inputStream, typeReference);
        return map;
    }

    @GetMapping(value = "/maps/{state}", produces = MediaType.APPLICATION_JSON_VALUE)
    public State getStateMap(@PathVariable String state) throws IOException {
        this.currentState = mapService.getState(state);
        return currentState;
    }
}