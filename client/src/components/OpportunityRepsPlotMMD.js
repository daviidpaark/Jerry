import { Box } from "@mui/system";
import Plot from "react-plotly.js";
import React from 'react';

export default function OpportunityRepsPlotMMD(ensembleMMD) {
  let dataX = [];
  for(let i = 0; i<8; i++) {
    dataX.push(i);
  }
  dataX.push("8+");
  let dataY = [];
  let dataMap = ensembleMMD.opportunityDistricts;
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
          xaxis: {title: "Number of Opportunity Representatives"},
          yaxis: {title: "Number of Plans"}
        }}
        style={{
          position: 'relative'
        }}
      />
    </Box>
  );
}