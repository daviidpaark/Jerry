import { Box } from "@mui/system";
import OpportunityRepsPlotMMD from "./OpportunityRepsPlotMMD";
import OpportunityRepsPlotSMD from "./OpportunityRepsPlotSMD";

export default function OpportunityDoublePlot({ensembleSMD, ensembleMMD}) {
  return (
    <Box
      flex={1}
      height="100%"
    >
      <OpportunityRepsPlotSMD 
      ensembleSMD={ensembleSMD}
      ></OpportunityRepsPlotSMD>
      <OpportunityRepsPlotMMD
      ensembleMMD={ensembleSMD}
      ></OpportunityRepsPlotMMD>
    </Box>
  );
}