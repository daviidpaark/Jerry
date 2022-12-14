import * as React from "react";
import Box from "@mui/material/Box";
import { List, ListItemButton, ListItemText } from "@mui/material";
import SamplePlanCharts from "./SamplePlanCharts";
import BoxAndWhiskerCharts from "./BoxAndWhiskerCharts";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function GraphMenu({ 
  state, 
  graph, 
  setGraph, 
  district,
  setSamplePlanMap,
  open,
  layouts,
  setOpen,
  setSamplePlan,
  setBoxTag,
  setLayoutTag,
  setSwitchMap,
  }) {
  const handleClick = (index) => {
    if(index!==graph) setGraph(index);
  }
  const handleOpen = (index) => {
    setOpen(index===open? -1 : index);
  }
  return (
    <Box sx={{ width: "100%"}} backgroundColor="dimgray" color="white">
      <List dense disablePadding>
        <ListItemButton onClick={() => handleClick(0)} divider disabled={state==="" ? true : false} selected={graph===0}>
          <ListItemText primary="Ensemble Summary" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(1)} divider disabled={state==="" ? true : false} selected={graph===1}>
          <ListItemText primary="MMD Ensemble Summary by Layout" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(3)} divider disabled={state==="" ? true : false} selected={graph===3}>
          <ListItemText primary="Opportunity District Threshold Sensitivities" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(4)} divider disabled={state==="" ? true : false} selected={graph===4}>
          <ListItemText primary="Range of Opportunity Representatives" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(5)} divider disabled={state==="" ? true : false} selected={graph===5}>
          <ListItemText primary="Range of Republican/Democratic splits" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(6)} divider disabled={state==="" ? true : false} selected={graph===6}>
          <ListItemText primary="MMD vs Enacted Plan" />
        </ListItemButton>
        <ListItemButton onClick={() => handleOpen(0)} divider disabled={state==="" ? true : false}>
          <ListItemText primary="Box and Whisker Plots" />
          {open===0 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <BoxAndWhiskerCharts
        open={open===0}
        graph={graph}
        setGraph={setGraph}
        state={state}
        layouts={layouts}
        setBoxTag={setBoxTag}
        setLayoutTag={setLayoutTag}
        ></BoxAndWhiskerCharts>
        <ListItemButton onClick={() => handleOpen(1)} divider disabled={state==="" ? true : false}>
          <ListItemText primary="Sample Plans" />
          {open===1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <SamplePlanCharts
        open={open}
        setOpen={setOpen}
        graph={graph}
        setGraph={setGraph}
        state={state}
        district={district}
        setSamplePlanMap={setSamplePlanMap}
        setSamplePlan={setSamplePlan}
        setSwitchMap={setSwitchMap}
        >
        </SamplePlanCharts>
      </List>
    </Box>
  );
}
