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
import DisplayCharts from "./components/DisplayCharts";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [state, setState] = useState(""); //which state is selected
  const [hideMap, setMap] = useState(false); //decides whether to hide the US map/show state map
  const [graph, setGraph] = useState(-1); //which graph/chart to display
  const [switchMap, setSwitchMap] = useState(false); //false for enacted plan, true for sample plan
  const [district, setDistrict] = useState(-1); //which district is chosen for a sample plan
  const [random, setRandom] = useState(-1) //which sample plan selected
  const [ensembleSMD, setEnsembleSMD] = useState(null);
  const [ensembleMMD, setEnsembleMMD] = useState(null);
  const [samplePlan, setSamplePlan] = useState(null);
  const [sampleDistricts, setSampleDistricts] = useState(null);
  const [enactedPlan, setEnactedPlan] = useState(null);
  const [open, setOpen] = useState(-1);
  const seats = {"Georgia": 14, "Maryland": 8, "Mississippi": 4};
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
                state={state}
                setGraph={setGraph}
                district={district}
                random={random}
                setRandom={setRandom}
                setSamplePlan={setSamplePlan}
                setSampleDistricts={setSampleDistricts}
                open={open}
                setOpen={setOpen}
                style={{ position: "absolute", top: "0vh", left: "0vh" }}
              ></GraphMenu>
            </Grid>
            <Grid item xs={7}>
              <DisplayCharts 
              graph={graph}
              ensembleSMD={ensembleSMD}
              ensembleMMD={ensembleMMD}
              state={state}
              seats={seats}
              samplePlan={samplePlan}
              sampleDistricts={sampleDistricts}
              district={district}
              ></DisplayCharts>
            </Grid>
            <Grid item xs={3} backgroundColor="#e3f2fd">
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
                  random={random}
                  setMap={setMap}
                  setDistrict={setDistrict}
                  setState={setState}
                  setSwitchMap={setSwitchMap}
                  setGraph={setGraph}
                  ensembleSMD={ensembleSMD}
                  setEnsembleSMD={setEnsembleSMD}
                  ensembleMMD={ensembleMMD}
                  setEnsembleMMD={setEnsembleMMD}
                  setEnactedPlan={setEnactedPlan}
                  setOpen={setOpen}
                />
              )}
              {hideMap && switchMap && random>-1 && (
                <StateMap
                  state={state}
                  district={district}
                  switchMap={switchMap}
                  random={random}
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
