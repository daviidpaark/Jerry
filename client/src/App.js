import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import MapChart from "./components/MapChart";
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CountyChart from "./components/CountyChart";
import DistrictChart from "./components/DistrictChart";
import GraphSelect from "./components/GraphSelect";
import GraphSelect2 from "./components/GraphSelect2";
import SampleData from "./components/SampleData";
import SampleData2 from "./components/SampleData2";
import SampleData3 from "./components/SampleData3";
import SampleData4 from "./components/SampleData4";
import SampleData5 from "./components/SampleData5";
import SelectionLabel from "./components/SelectionLabel";

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
  const [graph, selectGraph] = useState(1);
  const [comparisonGraph, selectComparisonGraph] = useState(1);
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <ButtonAppBar
            setMap={setMap}
            setState={setState}
            setSelection={setSelection}
            setToggle={setToggle}
          />
          <Grid container spacing={0}>
            <Grid item xs={4}>
              {!hideMap && (
                <MapChart
                  setState={setState}
                  setSelection={setSelection}
                  setMap={setMap}
                  setToggle={setToggle}
                />
              )}
              {hideMap && !toggleMap && (
                <DistrictChart
                  state={state}
                  selection={selection}
                  setMap={setMap}
                  setSelection={setSelection}
                  setState={setState}
                  setToggle={setToggle}
                />
              )}
              {hideMap && toggleMap && (
                <CountyChart
                  state={state}
                  selection={selection}
                  setMap={setMap}
                  setSelection={setSelection}
                  setState={setState}
                  setToggle={setToggle}
                />
              )}
              {hideMap && (
                <ButtonGroup
                  variant="outlined"
                  disableElevation
                  style={{
                    position: "absolute",
                    top: "10vh",
                    left: "40vh",
                  }}
                >
                  <Button
                    onClick={() => {
                      setToggle(false);
                      setSelection(state);
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
                      setSelection(state);
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
            <Grid container item xs={8} sx={{ padding: 2 }}>
              <Grid item xs={6} sx={{ padding: 1 }}>
                <SelectionLabel
                  state={state}
                  selection={selection}
                  setSelection={setSelection}
                ></SelectionLabel>
                <GraphSelect
                  selectGraph={selectGraph}
                  style={{ position: "absolute", top: "0vh", left: "0vh" }}
                ></GraphSelect>
                {graph == 1 && <SampleData selection={selection}></SampleData>}
                {graph == 2 && (
                  <SampleData2 selection={selection}></SampleData2>
                )}
                {graph == 3 && (
                  <SampleData3 selection={selection}></SampleData3>
                )}
              </Grid>
              <Grid item xs={6} sx={{ padding: 1 }}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  {state + "(SMD + MMD)"}
                </Typography>
                <GraphSelect2
                  selectComparisonGraph={selectComparisonGraph}
                  style={{ position: "absolute", top: "0vh", left: "0vh" }}
                ></GraphSelect2>
                {comparisonGraph == 1 && (
                  <SampleData4 state={state}></SampleData4>
                )}
                {comparisonGraph == 2 && (
                  <SampleData5 state={state}></SampleData5>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
