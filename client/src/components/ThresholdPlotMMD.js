import Plot from 'react-plotly.js';
import React from 'react';
import { Box } from '@mui/system';

export default function ThresholdPlotSMD({ensembleMMD, opportunityTag}) {
  let dataX = [">90%", ">80%", ">70%", ">60%", ">50%", ">40%", ">30%", ">20%", ">10%"];
  //let dataMap = ensembleMMD.thresholdPercentages;
  let dataY = [10000, 9215, 8001, 6111, 4438, 2073, 901, 189, 0];
  // for(let i in dataMap) {
  //   dataY.push(dataMap[i]);
  // }
  let dataY2 = [0, 784, 1425, 2784, 5021, 6822, 6753, 5021, 3750];
  let dataY3 = [0, 1, 574, 1105, 541, 1115, 2346, 4790, 6250];
  return (
    <Box
    height="50%"
    >
      <Plot
        data={[{
          type: 'bar',
          x: dataX,
          y: dataY,
          name: "0 Opportunity<br>Districts"
        }, {
          type: 'bar',
          x: dataX,
          y: dataY2,
          name: "1 Opportunity<br>Districts"
        }, {
          type: 'bar',
          x: dataX,
          y: dataY3,
          name: "2+ Opportunity<br>Districts"
        }
      ]}
        layout={{
          title: "Opportunity District Threshold Sensitivity MMD",
          xaxis: {title: "Percentages"},
          yaxis: {title: "Number of Plans"},
          barmode: 'group'
        }}
        style={{
          position: 'relative'
        }}
      />
    </Box>
  );
}