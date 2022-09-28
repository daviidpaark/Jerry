package com.tardigrades.server.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/maps")
public class MapController {

    @GetMapping(value = "/us", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> getUS() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        TypeReference<HashMap> typeReference = new TypeReference<HashMap>() {
        };
        InputStream inputStream = TypeReference.class.getResourceAsStream("/maps/us-albers.json");
        HashMap<String, Object> map = objectMapper.readValue(inputStream, HashMap.class);
        return map;
    }

    @GetMapping("/{state}")
    public Map<String, Object> getStateDistricts(@PathVariable String state) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        TypeReference<HashMap> typeReference = new TypeReference<HashMap>() {
        };
        InputStream inputStream = TypeReference.class.getResourceAsStream("/maps/" + state + "-districts.json");
        HashMap<String, Object> map = objectMapper.readValue(inputStream, HashMap.class);
        return map;
    }

}