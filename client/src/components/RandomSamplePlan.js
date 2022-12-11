import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function RandomSamplePlan({
  setRandom, 
  state,
  setSamplePlan,
  setSampleDistricts,
  }) {
  const [plan, setPlan] = useState("")
  const handleChange = (event) => {
    let value = event.target.value;
    setPlan(value);
    setRandom(value);
    fetchSamplePlan(value);
    fetchSamplePlanDistricts();
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

  return(
    <FormControl fullWidth>
      <InputLabel color="info">Characteristics</InputLabel>
      <Select
      label="Characteristics"
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
  );
}