import { Box, FormControl, Select, MenuItem, Typography, Grid, InputLabel } from "@mui/material";
import MmdVsEnactedTable from "./MmdVsEnactedTable";
import BoxAndWhisker from "./BoxAndWhisker";
import EnsembleSummary from "./EnsembleSummary";
import SplitsDoublePlot from "./SplitsDoublePlot";
import OpportunityDoublePlot from "./OpportunityDoublePlot";
import ThresholdDoublePlot from "./ThresholdDoublePlot";
import SeatShareDoublePlot from "./SeatShareDoublePlot";
import SamplePlanSummary from "./SamplePlanSummary";
import BoxWhiskersPlotMMD from "./BoxWhiskersPlotMMD";
import BoxWhiskersPlotSMD from "./BoxWhiskersPlotSMD";
import ElectionData from "./ElectionData";
import SummaryMMDLayouts from "./SummaryMMDLayouts";
import SamplePlanDistrictSummary from "./SamplePlanDistrictSummary";

export default function DisplayCharts({
  graph,
  ensembleSMD,
  ensembleMMD,
  state,
  seats,
  samplePlan,
  sampleDistricts,
  district,
  layouts,
  enactedPercentage,
  boxTag,
  setBoxTag,
  layoutTag,
  setLayoutTag,
}) {
  const handleChange = (event) => {
    setBoxTag(event.target.value);
  }
  const handleChangeL = (event) => {
    setLayoutTag(layouts[state][event.target.value]);
  }
  return (
    <Box>
      {graph===0 && (
        <EnsembleSummary
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></EnsembleSummary>
      )}
      {graph===1 && (
        <SummaryMMDLayouts
          ensembleMMD={ensembleMMD}
          state={state}
          layouts={layouts}
        ></SummaryMMDLayouts>
      )}
      {graph===2 && (
        <SeatShareDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></SeatShareDoublePlot>
      )}
      {graph===3 && (
        <ThresholdDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></ThresholdDoublePlot>
      )}
      {graph===4 && (
        <OpportunityDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></OpportunityDoublePlot>
      )}
      {graph===5 && (
        <SplitsDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        state={state}
        seats={seats}
        graph={graph}
        ></SplitsDoublePlot>
      )}
      {graph===6 && (
        <MmdVsEnactedTable
        ></MmdVsEnactedTable>
      )}
      {graph===7 && (
        <Box>
          <BoxWhiskersPlotSMD
          ensembleSMD={ensembleSMD}
          boxTag={boxTag}
          enactedPercentage={enactedPercentage}
          ></BoxWhiskersPlotSMD>
          <Grid container>
            <Grid item xs={2}>
              <Typography paddingLeft={2}>Basis for<br></br>Comparison: </Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <InputLabel>Group</InputLabel>
                <Select
                label="Group"
                variant="filled"
                onChange={handleChange}
                defaultValue="REPUBLICAN"
                >
                  <MenuItem value="REPUBLICAN">Republicans</MenuItem>
                  <MenuItem value="DEMOCRATIC">Democratics</MenuItem>
                  <MenuItem value="BLACK">African Americans</MenuItem>
                  <MenuItem value="HISPANIC">Hispanics</MenuItem>
                  <MenuItem value="WHITE">Whites</MenuItem>
                  <MenuItem value="OTHER">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
      {graph===8 && (
        <Box>
          <BoxWhiskersPlotMMD
          ensembleMMD={ensembleMMD}
          boxTag={boxTag}
          layoutTag={layoutTag}
          enactedPercentage={enactedPercentage}
          ></BoxWhiskersPlotMMD>
          <Grid container>
            <Grid item xs={2}>
              <Typography paddingLeft={2}>Basis for<br></br>Comparison: </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <InputLabel>Group</InputLabel>
                <Select
                label="Group"
                variant="filled"
                onChange={handleChange}
                defaultValue="REPUBLICAN"
                >
                  <MenuItem value="REPUBLICAN">Republicans</MenuItem>
                  <MenuItem value="DEMOCRATIC">Democratics</MenuItem>
                  <MenuItem value="BLACK">African Americans</MenuItem>
                  <MenuItem value="HISPANIC">Hispanics</MenuItem>
                  <MenuItem value="WHITE">Whites</MenuItem>
                  <MenuItem value="OTHER">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <Typography>Layout:</Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <InputLabel>Layout</InputLabel>
                <Select
                label="Layout"
                variant="filled"
                onChange={handleChangeL}
                defaultValue={0}
                >
                  {layouts[state].map((layout, i) => (
                    <MenuItem value={i} key={i}>{layout}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
      {graph===9 && (
        <BoxAndWhisker
        ></BoxAndWhisker>
      )}
      {graph===10 && (
        <SamplePlanSummary
        samplePlan={samplePlan}
        ></SamplePlanSummary>
      )}
      {graph===11 && (
        <SamplePlanDistrictSummary
          sampleDistricts={sampleDistricts}
          district={district}
        ></SamplePlanDistrictSummary>
      )}
      {graph===12 && (
        <ElectionData
        ></ElectionData>
      )}
    </Box>
  );
}