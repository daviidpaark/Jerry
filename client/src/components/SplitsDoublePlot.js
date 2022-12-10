import { Box } from "@mui/material";
import RangeOfSplitsPlotMMD from "./RangeOfSplitsPlotMMD";
import RangeOfSplitsPlotSMD from "./RangeOfSplitsPlotSMD";

export default function SplitsDoublePlot({graph, ensembleSMD, state, seats}) {
  return (
    <Box
    flex={1}
    height="100%"
    >
      <RangeOfSplitsPlotSMD
      ensembleSMD={ensembleSMD}
      state={state}
      seats={seats}
      ></RangeOfSplitsPlotSMD>
      <RangeOfSplitsPlotMMD
      ensembleMMD={ensembleSMD}
      state={state}
      seats={seats}
      ></RangeOfSplitsPlotMMD>
    </Box>
  );
}