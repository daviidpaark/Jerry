import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import RandomSamplePlan from "./RandomSamplePlan";

export default function SamplePlanCharts({
  open,
  district,
  graph,
  setGraph,
  random,
  setRandom,
  state,
  setSamplePlan,
  setSampleDistricts,
}) {
  const handleClick = (index) => {
    setGraph(index);
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(10)} divider disabled={random>-1 ? false : true} selected={graph===10}>
            <ListItemText primary="Plan Summary" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(11)} divider disabled={district>-1 ? false : true} selected={graph===11}>
            <ListItemText primary="District Summary" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(12)} divider disabled={district>-1 ? false : true} selected={graph===12}>
            <ListItemText primary="Election Results" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <br></br>
          <RandomSamplePlan
          setRandom={setRandom}
          state={state}
          setSamplePlan={setSamplePlan}
          setSampleDistricts={setSampleDistricts}
          ></RandomSamplePlan>
        </List>
      </Collapse>
    </Box>
    
  );
}