import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function MmdCharts({
  open,
  setGraph
}) {
  const handleClick = (index) => {
    setGraph(index);
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(9)} value={9} divider>
            <ListItemText primary="MMD vs Enacted Plan" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(10)} value={10} divider>
            <ListItemText primary="Variation of Proportionality by Seat Share" sx={{textAlign: "right"}} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
    
  );
}