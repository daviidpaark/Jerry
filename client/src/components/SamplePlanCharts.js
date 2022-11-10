import { Box, Collapse } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function SamplePlanCharts({
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
          <ListItemButton onClick={() => handleClick(11)} value={11} divider>
            <ListItemText primary="Election Results" sx={{textAlign: "right"}} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
    
  );
}