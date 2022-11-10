import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import RandomSamplePlan from "./RandomSamplePlan";

export default function SamplePlanCharts({
  open,
  random,
  district,
  setGraph,
  setRandom
}) {
  const handleClick = (index) => {
    setGraph(index);
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(11)} value={11} divider disabled={random>-1 && district>-1 ? false : true}>
            <ListItemText primary="Election Results" sx={{textAlign: "right"}} />
          </ListItemButton>
          <br></br>
          <RandomSamplePlan
          setRandom={setRandom}></RandomSamplePlan>
        </List>
      </Collapse>
    </Box>
    
  );
}