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
  ButtonGroup,
  Button,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CountyChart from "./components/CountyChart";
import GraphSelect from "./components/GraphSelect";

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
              {!hideMap && (
                <MapChart selectState={setState} setHideMap={setMap} />
              )}
              {hideMap && (
                <CountyChart
                  state={state}
                  selectState={setState}
                  setHideMap={setMap}
                />
              )}
              <IconButton
                aria-label="zoom out"
                size="large"
                style={{
                  position: "absolute",
                  top: "7vh",
                }}
                onClick={() => {
                  setMap(false);
                  setState("");
                }}
              >
                <RestartAltIcon fontSize="inherit" />
              </IconButton>
              {state && (
                <ButtonGroup
                  variant="contained"
                  aria-label="map toggle"
                  style={{
                    position: "absolute",
                    top: "10vh",
                    left: "85vh",
                  }}
                >
                  <Button>SMD</Button>
                  <Button>MMD</Button>
                </ButtonGroup>
              )}
            </Grid>
            <Grid item xs={5} sx={{ padding: 2 }}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                {state}
              </Typography>

              <GraphSelect
                style={{ position: "absolute", top: "0vh", left: "0vh" }}
              ></GraphSelect>
              <DataTable state={state}></DataTable>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
