import * as React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function SelectionLabel({ 
  state, 
  district,
  setDistrict
  }) {
  let label;
  if (state) {
    if (district>-1) {
      label = state + " -> District " + district;
    } else {
      label = state;
    }
  } else label = "Select A State";

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
        gutterBottom
      >
        {label}
      </Typography>
    </Box>
    
  );
}
