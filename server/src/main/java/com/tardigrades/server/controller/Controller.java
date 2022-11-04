package com.tardigrades.server.controller;

import com.tardigrades.server.model.DistrictPlan;
import com.tardigrades.server.model.Geography;
import com.tardigrades.server.model.State;
import com.tardigrades.server.service.MapService;
import com.tardigrades.server.service.PlanService;
import com.tardigrades.server.service.StateService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
public class Controller {
    private StateService stateService;
    private MapService mapService;
    private PlanService planService;
    private Geography currentMap;
    private State currentState;
    private DistrictPlan currentPlan;

    public Controller(StateService stateService, MapService mapService, PlanService planService) {
        this.stateService = stateService;
        this.mapService = mapService;
        this.planService = planService;
    }

    @GetMapping(value = "/maps/us", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getUSMap() throws IOException {
        if (currentMap == null) {
            currentMap = mapService.getMap("us");
        }
        return currentMap.getMap();
    }

    @GetMapping(value = "/maps/{state}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getStateMap(@PathVariable String state) throws IOException {
        if (currentState == null || !currentState.getState().equals(state)) {
            currentState = stateService.getState(state);
            currentPlan = planService.getEnactedPlan(state);
            currentState.setEnactedPlan(currentPlan);
            currentState.setSamplePlansSMD(planService.getPlansSMD(state));
            currentState.setSamplePlansMMD(planService.getPlansMMD(state));
        }
        return currentState.getMap();
    }
}