import { Box } from "@mui/system";
import Plot from "react-plotly.js";

export default function BoxWhiskersPlotMMD({ensembleMMD}) {
  //let dataMap = ensembleMMD.boxAndWhiskers.data;
  let dataX = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
  let dataY = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];
  // let i = 1;
  // for(let arr in dataMap) {
  //   for(let j = 0; j<5; j++) {
  //     dataX.push(i);
  //     dataY.push(arr[j]);
  //   }
  //   i++;
  // }
  let dataY2 = [120, 220, 320, 420, 520, 620, 720, 820, 920, 1020, 1120, 1220, 1320, 1420, 1520];
  let dataY3 = [140, 240, 340, 440, 540, 640, 740, 840, 940, 1040, 1140, 1240, 1340, 1440, 1540];

  return (
    <Box
      height="50%"
    >
      <Plot
        data={[{
          type: 'box',
          x: dataX,
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