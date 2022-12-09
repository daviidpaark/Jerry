import Plot from 'react-plotly.js';
import React from 'react';

export default function SeatSharePlot({
  ensembleSMD,
  state,
  seats
}) {
	let seat = seats[state];
  let dataX = [];
  for(let i = 0; i<=seat; i++) {
    dataX.push(i+"/"+(seat-i));
  }
  let dataY = [];
  let dataMap = ensembleSMD.seatShare.data;
  for(let key in dataMap) {
    dataY.push(dataMap[key]);
  }

  return(
    <Plot
      data={[{
          type: 'bar', 
          x: dataX, 
          y: dataY
      }
    ]}
      layout={{
        title: "Range of Republican/Democratic Splits",
        xaxis: {title: "Republican/Democratic"},
        yaxis: {title: "Number of Plans"}
      }}
      style={{
        position: 'relative'
      }}
    />
  );
}