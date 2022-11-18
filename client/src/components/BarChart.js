import Plot from 'react-plotly.js';
import React from 'react';

export default function BarChart({graph}) {

  return(
    <Plot
      data={[{
          type: 'bar', 
          name: 'Type 1',
          x: [1, 2, 3], 
          y: [2, 5, 3]
      }, {
        type: 'bar', 
          name: 'Type 2',
          x: [1, 2, 3], 
          y: [5, 1, 2]
      }
    ]}
      layout={{
        title: "gragh 1",
        barmode: 'group'
      }}
      style={{
        position: 'relative'
      }}
    />
  );
}