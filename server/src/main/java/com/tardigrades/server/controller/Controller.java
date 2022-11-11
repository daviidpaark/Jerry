package com.tardigrades.server.controller;

import com.tardigrades.server.model.*;
import com.tardigrades.server.service.MapService;
import com.tardigrades.server.service.PlanService;
import com.tardigrades.server.service.StateService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
public class Controller {
    private final StateService stateService;
    private final MapService mapService;
    private final PlanService planService;
    private Geography currentMap;
    private State currentState;
    private DistrictPlan currentPlan;

    public Controller(StateService stateService, MapService mapService, PlanService planService) {
        this.stateService = stateService;
        this.mapService = mapService;
        this.planService = planService;
    }

    @GetMapping(value = "/maps/us", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getUSMap() {
        if (currentMap == null) {
            currentMap = mapService.getMap("us");
        }
        return currentMap.getMap();
    }

    @GetMapping(value = "/maps/{state}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getStateMap(@PathVariable String state) {
        currentState = stateService.getState(state);
        currentPlan = planService.getEnactedPlan(state);
        currentState.setEnactedPlan(currentPlan);
        currentState.setSamplePlansSMD(planService.getPlans(false, state));
        currentState.setSamplePlansMMD(planService.getPlans(true, state));
        return currentState.getMap();
    }

    @GetMapping(value = "/maps/plan", produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getDistrictPlanMap(@RequestParam Map<String, String> params) {
        TagEnum tag = TagEnum.valueOf(params.get("tag").toUpperCase());
        if (params.get("mmd").equals("false")) {
            currentPlan = currentState.getDistrictPlan(false, tag);
        } else {
            currentPlan = currentState.getDistrictPlan(true, tag);
        }
        return currentPlan.getMap();
    }

    @GetMapping(value = "/data/plan", produces = MediaType.APPLICATION_JSON_VALUE)
    public DistrictPlan getDistrictPlan() {
        return currentPlan;
    }

    @GetMapping(value = "/data/plan/summary", produces = MediaType.APPLICATION_JSON_VALUE)
    public DistrictPlanSummary getDistrictPlanSummary() {
        return currentPlan.getDistrictPlanSummary();
    }

    @GetMapping(value = "/data/plan/districts", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<District> getDistricts() {
        return currentPlan.getDistricts();
    }

    @GetMapping(value = "/data/ensemble", produces = MediaType.APPLICATION_JSON_VALUE)
    public Ensemble getEnsemble(@RequestParam String mmd) {
        if (mmd.equals("false")) {
            return currentState.getEnsemble(false);
        } else {
            return currentState.getEnsemble(true);
        }
    }

    @GetMapping(value = "/data/ensemble/summary", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<EnsembleSummary> getEnsembleSummary(@RequestParam String mmd) {
        if (mmd.equals("false")) {
            return currentState.getEnsemble(false).getEnsembleSummary();
        } else {
            return currentState.getEnsemble(true).getEnsembleSummary();
        }
    }

    @GetMapping(value = "/data/ensemble/box-and-whisker", produces = MediaType.APPLICATION_JSON_VALUE)
    public BoxAndWhisker getEnsembleBoxAndWhisker(@RequestParam Map<String, String> params) {
        TagEnum tag = TagEnum.valueOf(params.get("tag").toUpperCase());
        if (params.get("mmd").equals("false")) {
            return currentState.getEnsemble(false).getBoxAndWhisker(tag);
        } else {
            return currentState.getEnsemble(true).getBoxAndWhisker(tag);
        }

    }

    @GetMapping(value = "/data/ensemble/seat-share", produces = MediaType.APPLICATION_JSON_VALUE)
    public BarChart getEnsembleSeatShare(@RequestParam String mmd) {
        if (mmd.equals("false")) {
            return currentState.getEnsemble(false).getSeatShare();
        } else {
            return currentState.getEnsemble(true).getSeatShare();
        }
    }

    @GetMapping(value = "/data/ensemble/opportunity-districts", produces = MediaType.APPLICATION_JSON_VALUE)
    public BarChart getEnsembleOpportunityDistricts(@RequestParam String mmd) {
        if (mmd.equals("false")) {
            return currentState.getEnsemble(false).getOpportunityDistricts();
        } else {
            return currentState.getEnsemble(true).getOpportunityDistricts();
        }
    }
}