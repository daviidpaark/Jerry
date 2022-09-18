import * as React from "react";
import { Typography } from "@mui/material";

export default function SelectionLabel({ state, selection, setSelection }) {
  var label;
  if (state) {
    if (state == selection) {
      label = state;
    } else {
      label = state + " -> " + selection;
    }
  } else label = "Select A State";

  return (
    <Typography
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
      style={{
        hover: {
          cursor: "pointer",
        },
      }}
      onClick={() => {
        setSelection(state);
      }}
    >
      {label}
    </Typography>
  );
}
