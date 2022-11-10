import { VictoryAxis, VictoryBoxPlot, VictoryChart, VictoryLabel } from 'victory';

export default function BoxAndWhisker() {
  return(
    <VictoryChart padding={{left: 80, bottom: 60}}>
      <VictoryBoxPlot 
      boxWidth={20}
      whiskerWidth={10}
      categories={{x: ["District 1", "District 2", "District 3", "District 4"]}}
      data={[{ x: "District 1", min: 2000, median: 5000, max: 10000, q1: 3020, q3: 7450 },
              { x: "District 2", min: 1120, median: 4000, max: 9340, q1: 3120, q3: 6430 },
              { x: "District 3", min: 1030, median: 4000, max: 9230, q1: 3430, q3: 6700 },
              { x: "District 4", min: 1000, median: 6000, max: 9100, q1: 4010, q3: 8010 }]}
      domain={{x: [0, 5], y: [0, 10000]}}
      domainPadding={{x: 0}}
      ></VictoryBoxPlot>
      <VictoryAxis 
      independentAxis
      label="Districts"
      style={{axisLabel: {padding: 40}}}
      ></VictoryAxis>
      <VictoryAxis
      dependentAxis
      label="Number of plans"
      style={{axisLabel: {padding: 60}}}
      ></VictoryAxis>
    </VictoryChart>
  );
}