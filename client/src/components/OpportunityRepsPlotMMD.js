import { Box } from "@mui/system";
import Plot from "react-plotly.js";
import React from 'react';

export default function OpportunityRepsPlotMMD(ensembleMMD) {
  let dataX = ["None", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight or<br>higher"];
  //let dataMap = ensembleMMD.opportunityDistricts;
  let dataMap = [2316, 3541, 2495, 1130, 401, 36, 0, 0, 0];
  //for(let key in dataMap) {
  //  dataY.push(dataMap[key]);
  //}
  let dataY = [];

  return(
    <Box
      height="50%"
    >
      <Plot
        data={[{
          type: 'bar',
          x: dataX,
          y: dataMap
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