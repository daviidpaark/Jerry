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
import DataSource from "./DataSource";

export default function DisplayCharts({
  graph,
  enactedPlan,
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
  setDistrict,
  sampleName,
  setSampleName,
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
    let s = event.target.value;
    let value = [];
    if(s.substring(0,1) === "0") {
      value.push("false");
    } else {
      value.push("true");
    }
    value.push(s.substring(1));
    fetchSamplePlanMap(value);
    setSwitchMap(true);
    setDistrict(-1);
    setSampleName(s);
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
    await fetchSamplePlan(value);
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
      {graph===4 && (
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
                  <MenuItem value="HISPANIC" disabled>Hispanics</MenuItem>
                  <MenuItem value="WHITE" disabled>Whites</MenuItem>
                  <MenuItem value="OTHER" disabled>Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <OpportunityDoublePlot
          ensembleSMD={ensembleSMD}
          ensembleMMD={ensembleMMD}
          opportunityTag={opportunityTag}
          ></OpportunityDoublePlot>
        </Box>
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
        enactedPlan={enactedPlan}
        ensembleMMD={ensembleMMD}
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
                defaultValue={sampleName}
                >
                  <MenuItem value={"0republican"}>Favorable Republican SMD</MenuItem>
                  <MenuItem value={"0black"}>Favorable African American SMD</MenuItem>
                  <MenuItem value={"1republican"}>Favorable Republican MMD</MenuItem>
                  <MenuItem value={"1democratic"}>Favorable Democratic MMD</MenuItem>
                  <MenuItem value={"1black"}>Favorable African American MMD</MenuItem>
                  <MenuItem value={"1hispanic"}>Favorable Hispanic MMD</MenuItem>
                  <MenuItem value={"1white"}>Favorable White SMD</MenuItem>
                  <MenuItem value={"1other"}>Favorable Other MMD</MenuItem>
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
          samplePlan={samplePlan}
          district={district}
        ></ElectionData>
      )}
      {graph===2 && (
        <DataSource>
        </DataSource>
      )}
    </Box>
  );
}