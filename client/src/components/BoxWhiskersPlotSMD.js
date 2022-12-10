import { Box } from "@mui/system";
import Plot from "react-plotly.js";

export default function BoxWhiskersPlotSMD({ensembleSMD}) {
  //let dataMap = ensembleSMD.boxAndWhiskers.data;
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

  return (
    <Box
      height="50%"
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