import { Box, Collapse, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { color } from "@mui/system";

export default function BoxAndWhiskerCharts({
  open,
  graph,
  setGraph,
  state
}) {
  const handleChange = (event) => {
    let tag = "";
    switch(event.target.value) {
      case 0:
        tag = "republican";
        break;
      case 1:
        tag = "democratic";
      case 2:
        tag = "black";
      case 3:
        tag = "hispanic";
      case 4:
        tag = "white";
      case 5:
        tag = "other";
    }
  }
  const handleClick = (index) => {
    if(index!==graph) setGraph(index);
  };
  return (
    <Box backgroundColor="gray">
      <Collapse in={open}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(7)} divider disabled={state==="" ? true : false}>
            <ListItemText primary="SMD" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(8)} divider disabled={state==="" ? true : false}>
            <ListItemText primary="MMD" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(9)} divider disabled={state==="" ? true : false}>
            <ListItemText primary="Comparison" sx={{paddingLeft: 2}} />
          </ListItemButton>
          <br></br>
          <FormControl fullWidth>
          <InputLabel color="info">Groups</InputLabel>
            <Select
            label="Groups"
            onChange={handleChange}
            defaultValue={0}
            style={{color: "white"}}
            sx={{'& .MuiSvgIcon-root': { color: 'white' }}}
            >
              <MenuItem value={0} color="white">Republicans</MenuItem>
              <MenuItem value={1}>Democratics</MenuItem>
              <MenuItem value={2}>African Americans</MenuItem>
              <MenuItem value={3}>Hispanics</MenuItem>
              <MenuItem value={4}>Whites</MenuItem>
              <MenuItem value={5}>Others</MenuItem>
            </Select>
          </FormControl>
        </List>
      </Collapse>
    </Box>
    
  );
}