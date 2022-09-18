import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar({
  setMap,
  setState,
  setSelection,
  setToggle,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setMap(false);
              setState("");
              setSelection("");
              setToggle(false);
            }}
          >
            Tardigrades H.R.3863
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
