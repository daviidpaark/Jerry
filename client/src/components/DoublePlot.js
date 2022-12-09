import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import BoxAndWhisker from "./BoxAndWhisker";
import RangeOfSplitsPlotMMD from "./RangeOfSplitsPlotMMD";
import RangeOfSplitsPlotSMD from "./RangeOfSplitsPlotSMD";
import SeatSharePlot from "./SeatSharePlot";

export default function DoublePlot({graph, ensembleSMD, state, seats}) {
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