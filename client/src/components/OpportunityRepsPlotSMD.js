import { Box } from "@mui/system";
import Plot from "react-plotly.js";
import React from 'react';

export default function OpportunityRepsPlotSMD({ensembleSMD, opportunityTag}) {
  let dataX = [];
  let dataY = [];
  let dataMap = ensembleSMD.opportunityReps.data;
  for(let key in dataMap) {
    dataX.push(key);
    dataY.push(dataMap[key]);
  }

  return(
    <Box
      height="50%"
    >
      <Plot
        data={[{
          type: 'bar',
          x: dataX,
          y: dataY
        }]}
        layout={{
          title: "Range of Opportunity Representatives SMD",
          xaxis: {title: "Number of " + (opportunityTag==="BLACK"?"African American":opportunityTag.toLowerCase()) + " Opportunity Representatives",
          autotick: false,
          dtick: 1
        },
          yaxis: {title: "Number of Plans",
        }
        }}
        style={{
          position: 'relative'
        }}
      />
    </Box>
  );
}