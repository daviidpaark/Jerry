import { Box } from "@mui/system";
import OpportunityRepsPlotMMD from "./OpportunityRepsPlotMMD";
import OpportunityRepsPlotSMD from "./OpportunityRepsPlotSMD";

export default function OpportunityDoublePlot({ensembleSMD, ensembleMMD, opportunityTag}) {
  return (
    <Box
      flex={1}
      height="100%"
    >
      <OpportunityRepsPlotSMD 
        ensembleSMD={ensembleSMD}
        opportunityTag={opportunityTag}
      ></OpportunityRepsPlotSMD>
      <OpportunityRepsPlotMMD
        ensembleMMD={ensembleMMD}
        opportunityTag={opportunityTag}
      ></OpportunityRepsPlotMMD>
    </Box>
  );
}