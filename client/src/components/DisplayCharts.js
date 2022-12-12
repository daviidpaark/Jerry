import { Box } from "@mui/material";
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
        <BoxWhiskersPlotSMD
        ensembleSMD={ensembleSMD}
        ></BoxWhiskersPlotSMD>
      )}
      {graph===8 && (   
        <BoxWhiskersPlotMMD
        ensembleMMD={ensembleMMD}
        ></BoxWhiskersPlotMMD>
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