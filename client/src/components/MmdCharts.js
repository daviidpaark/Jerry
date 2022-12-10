import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function MmdCharts({
  open,
  setGraph,
  state
}) {

  const handleClick = (index) => {
    setGraph(index);
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(7)} value={7} divider disabled={state=="" ? true : false}>
            <ListItemText primary="MMD vs Enacted Plan" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(8)} value={8} divider disabled>
            <ListItemText primary="Variation of Proportionality by Seat Share" sx={{paddingLeft: 2}} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
    
  );
}