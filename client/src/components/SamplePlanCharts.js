import { Box, Collapse, FormControl, InputLabel, MenuItem, Select, List, ListItemButton, ListItemText } from "@mui/material";
import * as React from "react";

export default function SamplePlanCharts({
  open,
  district,
  graph,
  setGraph,
  state,
}) {
  const handleClick = (index) => {
    setGraph(index);
  }
  
  return (
    <Box backgroundColor="gray">
      <Collapse in={open===1}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(10)} divider disabled={state==="" ? true : false} selected={graph===10}>
            <ListItemText primary="Plan Summary" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(11)} divider disabled={district>-1 ? false : true} selected={graph===11}>
            <ListItemText primary="District Summary" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(12)} divider disabled={district>-1 ? false : true} selected={graph===12}>
            <ListItemText primary="Election Results" sx={{paddingLeft: 2}} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
    
  );
}