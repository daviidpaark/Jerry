import { Box } from "@mui/system";
import Plot from "react-plotly.js";

export default function BoxWhiskersPlotSMD({ensembleSMD}) {
  //let dataMap = ensembleSMD.boxAndWhiskers.data;
  let dataX = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14];
  let dataY = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 1100, 1200, 1300, 1400, 1500, 2200, 2300, 2400, 2500, 2600, 3200, 3300, 3400, 3500, 3600, 4200, 4300, 4400, 4500, 4600, 5200, 5300, 5400, 5500, 5600];
  // let i = 1;
  // for(let arr in dataMap) {
  //   for(let j = 0; j<5; j++) {
  //     dataX.push(i);
  //     dataY.push(arr[j]);
  //   }
  //   i++;
  // }

  return (
    <Box
      height="100%"
    >
      <Plot
        data={[{
          type: 'box',
          x: dataX,
          y: dataY
        }]}
        layout={{
          title: "Box and Whiskers SMD",
          xaxis: {title: "Indexed Districts"},
          yaxis: {title: "% of African Americans"}
        }}
        style={{
          position: 'relative'
        }}
      ></Plot>
    </Box>
  );
}