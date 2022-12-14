import { Box } from "@mui/system";
import Plot from "react-plotly.js";
import React from 'react';

export default function OpportunityRepsPlotMMD({ensembleMMD, opportunityTag}) {
  let dataX = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let dataY = [];
  //let dataMap = ensembleMMD.opportunityDistricts;
  let dataMap = [2316, 3541, 2495, 1130, 401, 36, 0, 0, 0];
  for(let key in dataMap) {
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
          title: "Range of Opportunity Representatives MMD",
          xaxis: {title: "Number of " + (opportunityTag==="BLACK"?"African American":opportunityTag.slice(0,1)+opportunityTag.slice(1).toLowerCase()) + " Opportunity Representatives",
          autotick: false,
          dtick: 1
        },
          yaxis: {title: "Number of Plans"}
        }}
        style={{
          position: 'relative'
        }}
      />
    </Box>
  );
}