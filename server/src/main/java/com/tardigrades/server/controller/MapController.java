package com.tardigrades.server.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
public class MapController {
    private String currentState;

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
    public Map<String, Object> getStateMap(@PathVariable String state) throws IOException {
        currentState = state;
        ObjectMapper objectMapper = new ObjectMapper();
        TypeReference<HashMap> typeReference = new TypeReference<HashMap>() {
        };
        InputStream inputStream = TypeReference.class.getResourceAsStream("/maps/" + state + "-districts.json");
        HashMap<String, Object> map = objectMapper.readValue(inputStream, typeReference);
        return map;
    }
}