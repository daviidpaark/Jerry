import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import MapChart from "./components/MapChart";
import DataTable from "./components/SampleData";
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CountyChart from "./components/CountyChart";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [state, setState] = useState("");
  const [hideMap, setMap] = useState("");
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <ButtonAppBar />
          <Grid container spacing={0}>
            <Grid item xs={7}>
              <Paper>
                {!hideMap && (
                  <MapChart selectState={setState} setHideMap={setMap} />
                )}
                {hideMap && <CountyChart state={state} setHideMap={setMap} />}
                <IconButton
                  aria-label="zoom out"
                  size="large"
                  style={{
                    position: "absolute",
                    top: "7vh",
                  }}
                  onClick={() => {
                    setMap(false);
                  }}
                >
                  <RestartAltIcon fontSize="inherit" />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={5} sx={{ padding: 2 }}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Sample Data
              </Typography>
              <DataTable></DataTable>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
