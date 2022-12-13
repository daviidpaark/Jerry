import { Box } from "@mui/system";
import ThresholdPlotMMD from "./ThresholdPlotMMD";
import ThresholdPlotSMD from "./ThresholdPlotSMD";

export default function ThresholdDoublePlot({ensembleSMD, ensembleMMD, opportunityTag}) {
  return (
    <Box
      flex={1}
      height="100%"
    >
      <ThresholdPlotSMD 
      ensembleSMD={ensembleSMD}
      opportunityTag={opportunityTag}
      ></ThresholdPlotSMD>
      <ThresholdPlotMMD
      ensembleMMD={ensembleMMD}
      opportunityTag={opportunityTag}
      ></ThresholdPlotMMD>
    </Box>
  );
}