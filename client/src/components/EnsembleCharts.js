import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function EnsembleCharts({
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
          <ListItemButton onClick={() => handleClick(0)} value={0} divider>
            <ListItemText primary="Summary" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(1)} value={1} divider>
            <ListItemText primary="Seat Share-Vote Share Plot" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(2)} value={2} divider>
            <ListItemText primary="Opportunity District Threshold Sensitivity" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(3)} value={3} divider>
            <ListItemText primary="Range of Opportunity Representatives" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(4)} value={4} divider>
            <ListItemText primary="Range of Republican/Democratic splits" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(5)} value={5} divider>
            <ListItemText primary="Vote Share" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(6)} value={6} divider>
            <ListItemText primary="Average Seat Share" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(7)} value={7} divider>
            <ListItemText primary="Box and Whiskers" sx={{textAlign: "right"}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(8)} value={8} divider>
            <ListItemText primary="Box and Whiskers Comparison" sx={{textAlign: "right"}} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}