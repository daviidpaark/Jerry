import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function RandomSamplePlan({setRandom, state}) {
  const [plan, setPlan] = useState("")
  const handleChange = (event) => {
    setPlan(event.target.value);
    setRandom(event.target.value);
  }
  return(
    <FormControl fullWidth variant="outlined">
      <InputLabel color="info">Characteristics</InputLabel>
      <Select
      label="Characteristics"
      onChange={handleChange}
      disabled={state==="" ? true : false}
      >
        <MenuItem value={0}>Favorable Republican</MenuItem>
        <MenuItem value={1}>Favorable Democratic</MenuItem>
        <MenuItem value={2}>Favorable African American</MenuItem>
        <MenuItem value={3}>Favorable Asian American</MenuItem>
        <MenuItem value={4}>Favorable Latino</MenuItem>
        <MenuItem value={5}>Favorable White</MenuItem>
      </Select>
    </FormControl>
  );
}