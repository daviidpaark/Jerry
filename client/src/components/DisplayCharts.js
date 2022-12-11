import { Box } from "@mui/material";
import MmdVsEnactedTable from "./MmdVsEnactedTable";
import BoxAndWhisker from "./BoxAndWhisker";
import EnsembleSummary from "./EnsembleSummary";
import SplitsDoublePlot from "./SplitsDoublePlot";
import OpportunityDoublePlot from "./OpportunityDoublePlot";
import ThresholdDoublePlot from "./ThresholdDoublePlot";
import BoxWhiskersDoublePlot from "./BoxWhiskersDoublePlot";
import SeatShareDoublePlot from "./SeatShareDoublePlot";
import SamplePlanSummary from "./SamplePlanSummary";

export default function DisplayCharts({
  graph,
  ensembleSMD,
  ensembleMMD,
  state,
  seats,
  samplePlan
}) {
  return (
    <Box>
      {graph===0 && (
        <EnsembleSummary
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></EnsembleSummary>
      )}
      {graph===1 && (
        <SeatShareDoublePlot>
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        </SeatShareDoublePlot>
      )}
      {graph===2 && (
        <ThresholdDoublePlot>
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        </ThresholdDoublePlot>
      )}
      {graph===3 && (
        <OpportunityDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></OpportunityDoublePlot>
      )}
      {graph===4 && (
        <SplitsDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        state={state}
        seats={seats}
        graph={graph}
        ></SplitsDoublePlot>
      )}
      {graph===5 && (
        <BoxWhiskersDoublePlot
        ensembleSMD={ensembleSMD}
        ensembleMMD={ensembleMMD}
        ></BoxWhiskersDoublePlot>
      )}
      {graph===6 && (   
        <BoxAndWhisker></BoxAndWhisker>
      )}
      {graph===7 && (
        <MmdVsEnactedTable></MmdVsEnactedTable>
      )}
      {graph===9 && (
        <SamplePlanSummary
        samplePlan={samplePlan}
        ></SamplePlanSummary>
      )}
      {graph===10 && (
        <MmdVsEnactedTable></MmdVsEnactedTable>
      )}
    </Box>
  );
}