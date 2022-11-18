import Plot from 'react-plotly.js';
import React from 'react';

export default function BoxAndWhisker() {
  return(
    <Plot
      data={[{
        type: 'box',
        name: 'SMD',
        x: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
        y: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]
      }, {
        type: 'box',
        name: 'MMD',
        x: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
        y: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]
      }
    ]}
      layout={{
        title: "Box and Whiskers",
        boxmode: 'group'
      }}
      style={{
        position: 'relative',
      }}
    />
  );
}