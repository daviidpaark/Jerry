import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function SelectionLabel({ 
  state, 
  district,
  setDistrict
  }) {
  let stateLabel;
  let districtLabel = "";
  if (state) {
    if (district>-1) {
      stateLabel = state;
      districtLabel = "District " + district;
    } else {
      stateLabel = state;
    }
  } else stateLabel = "Select A State";

  const handleDeselect = () => {
    setDistrict(-1);
  }
  return (
    <Box sx={{cursor: "pointer"}} >
      <Typography
        component="h2"
        variant="h6"
        color="lightgreen"
        align="center"
        onClick={() => handleDeselect}
        paddingTop={1}
      >
        {stateLabel}
      </Typography>
      <Typography
        color="lightgreen"
        align="center"
        onClick={() => handleDeselect}
        gutterBottom
      >
        {districtLabel}
      </Typography>
    </Box>
    
  );
}
