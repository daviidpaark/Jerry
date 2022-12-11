import { Box } from "@mui/system";
import BoxWhiskersPlotSMD from "./BoxWhiskersPlotSMD";
import BoxWhiskersPlotMMD from "./BoxWhiskersPlotMMD";

export default function({
  ensembleSMD,
  ensembleMMD
}) {
  return (
    <Box
    flex={1}
    height="100%"
    >
      <BoxWhiskersPlotSMD
      ensembleSMD={ensembleSMD}
      ></BoxWhiskersPlotSMD>
      <BoxWhiskersPlotMMD>
      ensembleMMD={ensembleSMD}
      </BoxWhiskersPlotMMD>
    </Box>
  );
}