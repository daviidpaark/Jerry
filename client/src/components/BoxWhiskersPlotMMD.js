import { Box } from "@mui/system";
import Plot from "react-plotly.js";

export default function BoxWhiskersPlotMMD({ensembleMMD}) {
  //let dataMap = ensembleMMD.boxAndWhiskers.data;
  let dataX = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
  let dataX2 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
  let dataY = [1100, 1200, 1300, 1400, 1500, 2200, 2300, 2400, 2500, 2600, 3200, 3300, 3400, 3500, 3600, 4200, 4300, 4400, 4500, 4600, 5200, 5300, 5400, 5500, 5600];
  // let i = 1;
  // for(let arr in dataMap) {
  //   for(let j = 0; j<5; j++) {
  //     dataX.push(i);
  //     dataY.push(arr[j]);
  //   }
  //   i++;
  // }
  let dataY2 = [120, 220, 320, 420, 520, 1220, 1320, 1420, 1520, 2200, 2300, 2400, 2500, 2600, 3200, 3300, 3400, 3500, 3600, 4200, 4300, 4400, 4500, 4600, 5200, 5300, 5400, 5500, 5600];
  let dataY3 = [140, 240, 340, 440, 540, 1240, 1340, 1440, 1540, 2200, 2300, 2400, 2500, 2600, 3200, 3300, 3400, 3500, 3600, 4200, 4300, 4400, 4500, 4600, 5200, 5300, 5400, 5500, 5600];

  return (
    <Box
      height="100%"
    >
      <Plot
        data={[{
          type: 'box',
          x: dataX2,
          y: dataY,
          name: "5/5/4"
        }, {
          type: 'box',
          x: dataX,
          y: dataY2,
          name: "5/3/3/3"
        }, {
          type: 'box',
          x: dataX,
          y: dataY3,
          name: "4/4/3/3"
        }
      ]}
        layout={{
          title: "Box and Whiskers MMD",
          xaxis: {title: "Indexed Districts"},
          yaxis: {title: "% of African Americans"},
          boxmode: "group"
        }}
        style={{
          position: 'relative'
        }}
      ></Plot>
    </Box>
  );
}