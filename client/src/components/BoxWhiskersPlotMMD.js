import { Box } from "@mui/system";
import Plot from "react-plotly.js";

export default function BoxWhiskersPlotMMD({ensembleMMD, layoutTag, boxTag, enactedPercentage}) {
  let dataArr = ensembleMMD.boxAndWhiskers[layoutTag][boxTag];
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
        data={[{
          type: 'box',
          x: dataX,
          y: dataY,
          name: "MMD"
        }, {
          type: 'scatter',
          x: dataSX,
          y: dataSY,
          name: "Enacted"
        }
      ]}
        layout={{
          title: "Box and Whiskers MMD "+layoutTag,
          xaxis: {title: "Indexed Representatives"},
          yaxis: {title: "Ratio of " + (boxTag==="BLACK"? "african americans" : boxTag.toLowerCase() + "s")},
        }}
        style={{
          position: 'relative'
        }}
      ></Plot>
    </Box>
  );
}