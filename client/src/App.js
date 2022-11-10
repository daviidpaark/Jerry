import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import {
  Box,
  CssBaseline,
  Grid,
  Divider,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SelectionLabel from "./components/SelectionLabel";
import GraphMenu from "./components/GraphMenu";
import UsMap from "./components/UsMap";
import StateMap from "./components/StateMap";
import EnsembleData from "./components/EnsembleData";
import MmdVsEnactedTable from "./components/MmdVsEnactedTable";
import SampleData from "./components/SampleData";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [state, setState] = useState("");
  const [hideMap, setMap] = useState(false); //decides whether to hide the US map/show state map
  const [graph, setGraph] = useState(-1);
  const [switchMap, setSwitchMap] = useState(false); //false for enacted plan, true for sample plan
  const [district, setDistrict] = useState(-1);
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <ButtonAppBar
            setMap={setMap}
            setState={setState}
            setSwitchMap={setSwitchMap}
            setDistrict={setDistrict}
          />
          <Grid container spacing={0}>
            <Grid item xs={2} backgroundColor="dimgray">
              <SelectionLabel
                state={state}
                district={district}
                setDistrict={setDistrict}
              ></SelectionLabel>
              <Divider></Divider>
              <GraphMenu
                setGraph={setGraph}
                style={{ position: "absolute", top: "0vh", left: "0vh" }}
              ></GraphMenu>
            </Grid>
            <Grid item xs={7}>
              {graph>-1 && graph<8 && (
                <EnsembleData></EnsembleData>
              )}
              {graph===9 && (
                <MmdVsEnactedTable></MmdVsEnactedTable>
              )}
              {graph===11 && (
                <SampleData></SampleData>
              )}
            </Grid>
            <Grid item xs={3} backgroundColor="lightskyblue">
              {!hideMap && (
                <UsMap
                  setState={setState}
                  setMap={setMap}
                />
              )}
              {hideMap && !switchMap && (
                <StateMap
                  state={state}
                  district={district}
                  switchMap={switchMap}
                  setMap={setMap}
                  setDistrict={setDistrict}
                  setState={setState}
                  setSwitchMap={setSwitchMap}
                />
              )}
              {hideMap && switchMap && (
                <StateMap
                  state={state}
                  district={district}
                  switchMap={switchMap}
                  setMap={setMap}
                  setDistrict={setDistrict}
                  setState={setState}
                  setSwitchMap={setSwitchMap}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
