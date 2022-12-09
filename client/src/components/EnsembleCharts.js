import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function EnsembleCharts({
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
          <ListItemButton onClick={() => handleClick(0)} value={0} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Summary" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(1)} value={1} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Seat Share-Vote Share Plot" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(2)} value={2} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Opportunity District Threshold Sensitivity" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(3)} value={3} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Range of Opportunity Representatives" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(4)} value={4} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Range of Republican/Democratic splits" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(5)} value={5} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Vote Share" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(6)} value={6} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Average Seat Share" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(7)} value={7} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Box and Whiskers" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(8)} value={8} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Box and Whiskers Comparison" sx={{paddingLeft: 2}} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}