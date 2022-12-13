import { Box, Collapse, FormControl, InputLabel, MenuItem, Select, List, ListItemButton, ListItemText } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function SamplePlanCharts({
  open,
  setOpen,
  district,
  graph,
  setGraph,
  random,
  setRandom,
  state,
  setSamplePlan,
  setSampleDistricts,
  setSwitchMap,
}) {
  const handleClick = (index) => {
    setGraph(index);
  }
  const handleChange = (event) => {
    let value = event.target.value;
    setRandom(value);
    fetchSamplePlan(value);
    fetchSamplePlanDistricts();
    setOpen(1);
    setGraph(10);
    setSwitchMap(true);
  }

  async function fetchSamplePlan(value) {
    let tag = "";
    switch(value) {
      case 0:
      case 6:
        tag = "republican";
        break;
      case 1:
      case 7:
        tag = "democratic";
      case 2:
      case 8:
        tag = "black";
      case 3:
      case 9:
        tag = "hispanic";
      case 4:
      case 10:
        tag = "white";
      case 5:
      case 11:
        tag = "other";
    }
    const request = new Request("/api/maps/plan?mmd=" + value<6?"false":"true" + "&tag=" + tag, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request)
			.then((response) => response.json())
			.then((data) => setSamplePlan(data));
  }

  async function fetchSamplePlanDistricts() {
    const request = new Request("/api/data/plan/districts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request, {importance: "low"})
			.then((response) => response.json())
			.then((data) => setSampleDistricts(data));
  }
  return (
    <Box backgroundColor="dimgray" paddingTop={1}>
      <FormControl fullWidth>
        <InputLabel color="info">Select a Sample Plan</InputLabel>
        <Select
        label="Select a Sample Plan"
        variant="outlined"
        onChange={handleChange}
        disabled={state==="" ? true : false}
        style={{color: "white"}}
        sx={{'& .MuiSvgIcon-root': { color: 'white' }}}
        >
          <MenuItem value={0}>Favorable<br></br>Republican SMD</MenuItem>
          <MenuItem value={1}>Favorable<br></br>Democratic SMD</MenuItem>
          <MenuItem value={2}>Favorable African<br></br>American SMD</MenuItem>
          <MenuItem value={3}>Favorable<br></br>Hispanic SMD</MenuItem>
          <MenuItem value={4}>Favorable<br></br>White SMD</MenuItem>
          <MenuItem value={5}>Favorable<br></br>Other SMD</MenuItem>
          <MenuItem value={6}>Favorable<br></br>Republican MMD</MenuItem>
          <MenuItem value={7}>Favorable<br></br>Democratic MMD</MenuItem>
          <MenuItem value={8}>Favorable African<br></br>American MMD</MenuItem>
          <MenuItem value={9}>Favorable<br></br>Hispanic MMD</MenuItem>
          <MenuItem value={10}>Favorable<br></br>White SMD</MenuItem>
          <MenuItem value={11}>Favorable<br></br>Other MMD</MenuItem>
        </Select>
      </FormControl>
      <Collapse in={open===1}>
        <List dense disablePadding>
          <ListItemButton onClick={() => handleClick(10)} divider disabled={random>-1 ? false : true} selected={graph===10}>
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