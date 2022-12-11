import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import RandomSamplePlan from "./RandomSamplePlan";

export default function SamplePlanCharts({
  open,
  district,
  setGraph,
  setRandom,
  state,
  setSamplePlan
}) {
  const handleClick = (index) => {
    setGraph(index);
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(9)} value={9} divider disabled={district>-1 ? false : true}>
            <ListItemText primary="Summary" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(10)} value={10} divider disabled={district>-1 ? false : true}>
            <ListItemText primary="Election Results" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <br></br>
          <RandomSamplePlan
          setRandom={setRandom}
          state={state}
          setSamplePlan={setSamplePlan}
          ></RandomSamplePlan>
        </List>
      </Collapse>
    </Box>
    
  );
}