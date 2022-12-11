import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function RandomSamplePlan({
  setRandom, 
  state,
  setSamplePlan,
  }) {
  const [plan, setPlan] = useState("")
  const handleChange = (event) => {
    let value = event.target.value;
    setPlan(value);
    setRandom(value);
    fetchSamplePlan(value);
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

  return(
    <FormControl fullWidth variant="outlined">
      <InputLabel color="info">Characteristics</InputLabel>
      <Select
      label="Characteristics"
      onChange={handleChange}
      disabled={state==="" ? true : false}
      >
        <MenuItem value={0}>Favorable Republican SMD</MenuItem>
        <MenuItem value={1}>Favorable Democratic SMD</MenuItem>
        <MenuItem value={2}>Favorable African American SMD</MenuItem>
        <MenuItem value={3}>Favorable Hispanic SMD</MenuItem>
        <MenuItem value={4}>Favorable Other SMD</MenuItem>
        <MenuItem value={5}>Favorable White SMD</MenuItem>
        <MenuItem value={6}>Favorable Republican MMD</MenuItem>
        <MenuItem value={7}>Favorable Democratic MMD</MenuItem>
        <MenuItem value={8}>Favorable African American MMD</MenuItem>
        <MenuItem value={9}>Favorable Hispanic MMD</MenuItem>
        <MenuItem value={10}>Favorable Other SMD</MenuItem>
        <MenuItem value={11}>Favorable White MMD</MenuItem>
      </Select>
    </FormControl>
  );
}