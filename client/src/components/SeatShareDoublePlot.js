import { Box } from "@mui/system";
import SeatSharePlotMMD from "./SeatSharePlotMMD";
import SeatSharePlotSMD from "./SeatSharePlotSMD";

export default function SeatShareDoublePlot({
  ensembleSMD,
  ensembleMMD
}) {
  return (
    <Box
      flex={1}
      height="100%"
    >
      <SeatSharePlotSMD
        ensembleSMD={ensembleSMD}
      ></SeatSharePlotSMD>
      <SeatSharePlotMMD
        ensembleMMD={ensembleMMD}
      ></SeatSharePlotMMD>
    </Box>
  );
}