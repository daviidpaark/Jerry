import Plot from 'react-plotly.js';
import React from 'react';

export default function SeatSharePlotMMD({
  ensembleMMD
}) {
  let dataX = [10, 35, 50, 65, 90];
  let dataY = [10, 25, 50, 75, 90];
  // let dataMap = ensembleMMD.seatShare.data;
  // for(let key in dataMap) {
  //   dataY.push(dataMap[key]);
  // }

  return(
    <Plot
      data={[{
          mode: "lines+markers",
          x: dataX, 
          y: dataY
      }
    ]}
      layout={{
        title: "Seat Share vs Vote Share MMD",
        xaxis: {title: "Hypothetical Republican Seat%"},
        yaxis: {title: "Hypothetical Republican Vote%"}
      }}
      style={{
        position: 'relative'
      }}
    />
  );
}