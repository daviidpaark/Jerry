import { Box, FormControl, Select, MenuItem, Typography, Grid, InputLabel } from "@mui/material";
import MmdVsEnactedTable from "./MmdVsEnactedTable";
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
import BoxWhiskersComparePlot from "./BoxWhiskersComparePlot";

export default function DisplayCharts({
  graph,
  ensembleSMD,
  ensembleMMD,
  state,
  seats,
  samplePlan,
  district,
  layouts,
  enactedPercentage,
  boxTag,
  setBoxTag,
  layoutTag,
  setLayoutTag,
  opportunityTag,
  setOpportunityTag,
  setSamplePlan,
  setSamplePlanMap,
  setSwitchMap,
}) {
  const handleChange = (event) => {
    setBoxTag(event.target.value);
  }
  const handleChangeL = (event) => {
    setLayoutTag(layouts[state][event.target.value]);
  }
  const handleChangeO = (event) => {
    setOpportunityTag(event.target.value);
  }
  const handleChangeT = (event) => {
    fetchSamplePlanMap(event.target.value);
    setSwitchMap(true);
    fetchSamplePlan(event.target.value);
  }

  async function fetchSamplePlanMap(value) {
    const request = new Request("/api/maps/plan?mmd=" + value[0] + "&tag="+ value[1], {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request)
			.then((response) => response.json())
			.then((data) => setSamplePlanMap(data));
  }

  async function fetchSamplePlan(value) {
    const request = new Request("/api/data/plan?mmd=" + value[0] + "&tag="+ value[1], {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request)
			.then((response) => response.json())
			.then((data) => setSamplePlan(data));
  }
  return (
    <Box>
      {graph===-1 && (
        <Box>
          <Typography
            variant="h1"
            align="center"
            color="black"
            paddingTop={5}
            fontFamily="bold"
          >
            Welcome
          </Typography>
          <Typography
          variant="h6"
          align="center"
          color="black"
          paddingTop={5}
        >
          To get started, select a state on the map to the right. <br></br>
          After you select a state, the menu on the left will be available for selection.
        </Typography>
        </Box> 
      )}
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
      {/* {graph===2 && (
        <SeatShareDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></SeatShareDoublePlot>
      )} */}
      {graph===3 && (
        <Box>
          <Grid container>
            <Grid item xs={2}>
              <Typography paddingLeft={2} paddingTop={1}>Minority Group: </Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <Select
                variant="standard"
                onChange={handleChangeO}
                defaultValue="BLACK"
                >
                  <MenuItem value="BLACK">African Americans</MenuItem>
                  <MenuItem value="HISPANIC">Hispanics</MenuItem>
                  <MenuItem value="WHITE">Whites</MenuItem>
                  <MenuItem value="OTHER">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <ThresholdDoublePlot
          ensembleSMD={ensembleSMD}
          ensembleMMD={ensembleMMD}
          opportunityTag={opportunityTag}
          ></ThresholdDoublePlot>
        </Box>
        
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
                  <MenuItem value="DEMOCRAT">Democrats</MenuItem>
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
                  <MenuItem value="DEMOCRAT">Democrats</MenuItem>
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
        <Box>
          <BoxWhiskersComparePlot
          ensembleSMD={ensembleSMD}
          ensembleMMD={ensembleMMD}
          boxTag={boxTag}
          layoutTag={layoutTag}
          enactedPercentage={enactedPercentage}
          ></BoxWhiskersComparePlot>
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
                  <MenuItem value="DEMOCRAT">Democrats</MenuItem>
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
      {graph===10 && (
        <Box>
          <Grid container>
            <Grid item xs={2}>
              <Typography paddingLeft={2} paddingTop={2}>
                Extreme plans: 
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Select
                variant="outlined"
                onChange={handleChangeT}
                >
                  <MenuItem value={["false", "republican"]}>Favorable Republican SMD</MenuItem>
                  <MenuItem value={["false", "democratic"]}>Favorable Democratic SMD</MenuItem>
                  <MenuItem value={["false", "black"]}>Favorable African American SMD</MenuItem>
                  <MenuItem value={["false", "hispanic"]}>Favorable Hispanic SMD</MenuItem>
                  <MenuItem value={["false", "white"]}>Favorable White SMD</MenuItem>
                  <MenuItem value={["false", "other"]}>Favorable Other SMD</MenuItem>
                  <MenuItem value={["true", "republican"]}>Favorable Republican MMD</MenuItem>
                  <MenuItem value={["true", "democratic"]}>Favorable Democratic MMD</MenuItem>
                  <MenuItem value={["true", "black"]}>Favorable African American MMD</MenuItem>
                  <MenuItem value={["true", "hispanic"]}>Favorable Hispanic MMD</MenuItem>
                  <MenuItem value={["true", "white"]}>Favorable White SMD</MenuItem>
                  <MenuItem value={["true", "other"]}>Favorable Other MMD</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <hr></hr>
          <SamplePlanSummary
            samplePlan={samplePlan}
        ></SamplePlanSummary>
        </Box>
      )}
      {graph===11 && (
        <SamplePlanDistrictSummary
          samplePlan={samplePlan}
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