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
import DistrictChart from "./components/DistrictChart";
import GraphSelect from "./components/GraphSelect";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [state, setState] = useState("");
  const [selection, setSelection] = useState("");
  const [hideMap, setMap] = useState("");
  const [toggleMap, setToggle] = useState("");
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <ButtonAppBar />
          <Grid container spacing={0}>
            <Grid item xs={7}>
              {!hideMap && <MapChart setState={setState} setMap={setMap} />}
              {hideMap && !toggleMap && (
                <DistrictChart state={state} setSelection={setSelection} />
              )}
              {hideMap && toggleMap && (
                <CountyChart state={state} setSelection={setSelection} />
              )}
              <IconButton
                aria-label="reset"
                size="large"
                style={{
                  position: "absolute",
                  top: "7vh",
                }}
                onClick={() => {
                  setMap(false);
                  setSelection("");
                  setToggle(false);
                }}
              >
                <RestartAltIcon fontSize="inherit" />
              </IconButton>
              {hideMap && (
                <ButtonGroup
                  variant="outlined"
                  disableElevation
                  aria-label="map toggle"
                  style={{
                    position: "absolute",
                    top: "10vh",
                    left: "85vh",
                  }}
                >
                  <Button
                    onClick={() => {
                      setToggle(false);
                      setSelection("");
                    }}
                    style={{
                      backgroundColor: !toggleMap ? "#42a5f5" : "#e3f2fd",
                      color: !toggleMap ? "#e3f2fd" : "#42a5f5",
                    }}
                  >
                    SMD
                  </Button>
                  <Button
                    onClick={() => {
                      setToggle(true);
                      setSelection("");
                    }}
                    style={{
                      backgroundColor: toggleMap ? "#42a5f5" : "#e3f2fd",
                      color: toggleMap ? "#e3f2fd" : "#42a5f5",
                    }}
                  >
                    MMD
                  </Button>
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
                {selection}
              </Typography>

              <GraphSelect
                style={{ position: "absolute", top: "0vh", left: "0vh" }}
              ></GraphSelect>
              <DataTable selection={selection}></DataTable>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
