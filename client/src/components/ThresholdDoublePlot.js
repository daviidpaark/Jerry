import { Box } from "@mui/system";
import ThresholdPlotMMD from "./ThresholdPlotMMD";
import ThresholdPlotSMD from "./ThresholdPlotSMD";

export default function ThresholdDoublePlot({ensembleSMD, ensembleMMD}) {
  return (
    <Box
      flex={1}
      height="100%"
    >
      <ThresholdPlotSMD 
      ensembleSMD={ensembleSMD}
      ></ThresholdPlotSMD>
      <ThresholdPlotMMD
      ensembleMMD={ensembleMMD}
      ></ThresholdPlotMMD>
    </Box>
  );
}