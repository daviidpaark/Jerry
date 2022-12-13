import { Box } from "@mui/system";
import Plot from "react-plotly.js";

export default function BoxWhiskersPlotSMD({ensembleSMD, boxTag, enactedPercentage}) {
  let dataArr = ensembleSMD.boxAndWhiskers[boxTag];
  let s = boxTag.toLowerCase()+"Percentages";
  let dataScatter = enactedPercentage[s];
  let dataX = [];
  let dataY = [];
  let dataSX = [];
  let dataSY = [];
  let i = 1;
  for(let arr in dataArr) {  
    for(let j in dataArr[arr]) {
      dataX.push(i);
      dataY.push(dataArr[arr][j]);
    }
    dataSX.push(i);
    dataSY.push(dataScatter.data[i-1][0]);
    i++;
  }

  return (
    <Box
      height="100%"
    >
      <Plot
        data={[
          {
            type: 'box',
            x: dataX,
            y: dataY,
            name: "SMD"
          }, 
          {
            type: 'scatter',
            x: dataSX,
            y: dataSY,
            mode: 'markers',
            name: "Enacted"
          }
        ]}
        layout={{
          title: "Box and Whiskers SMD",
          xaxis: {
            title: "Indexed Districts",
            autotick: false,
            dtick: 1,
            showline: true,
            linewidth: 1
          },  
          yaxis: {title: "Ratio of " + (boxTag==="BLACK"? "african americans" : boxTag.toLowerCase() + "s"),
          dtick: 0.1,
          showline: true,
          linewidth: 1,
          range: [0, 1]
        },
        }}
        style={{
          position: 'relative'
        }}
      ></Plot>
    </Box>
  );
}