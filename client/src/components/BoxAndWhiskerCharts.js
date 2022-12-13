import { Box, Collapse, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function BoxAndWhiskerCharts({
  open,
  graph,
  setGraph,
  state,
  layouts,
  setBoxTag,
  setLayoutTag,
}) {
  const handleClick = (index) => {
    if(index!==graph) {
      setGraph(index);
      setBoxTag("REPUBLICAN");
      setLayoutTag(layouts[state][0]);
    }
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(7)} divider disabled={state==="" ? true : false} selected={graph===7}>
            <ListItemText primary="SMD" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(8)} divider disabled={state==="" ? true : false} selected={graph===8}>
            <ListItemText primary="MMD" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(9)} divider disabled={state==="" ? true : false} selected={graph===9}>
            <ListItemText primary="Comparison" sx={{paddingLeft: 2}} />
          </ListItemButton>          
        </List>
      </Collapse>
    </Box>
    
  );
}