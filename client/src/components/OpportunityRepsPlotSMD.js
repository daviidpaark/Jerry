import { Box } from "@mui/system";
import Plot from "react-plotly.js";
import React from 'react';

export default function OpportunityRepsPlotSMD(ensembleSMD) {
  let dataX = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let dataY = [];
  //let dataMap = ensembleSMD.opportunityDistricts;
  let dataMap = [3301, 3791, 1895, 830, 101, 6, 0, 0, 0];
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
          title: "Range of Opportunity Representatives SMD",
          xaxis: {title: "Number of Opportunity Representatives",
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