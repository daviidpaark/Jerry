import { VictoryAxis, VictoryBoxPlot, VictoryChart, VictoryLabel } from 'victory';

export default function BoxAndWhisker() {
  return(
    <VictoryChart padding={{left: 80, bottom: 60, top: 10}}>
      <VictoryBoxPlot 
      boxWidth={20}
      whiskerWidth={10}
      data={[{ x: "1", min: .05, median: .3, max: .6, q1: .1, q3: .45 },
              { x: "2", min: .08, median: .35, max: .7, q1: .15, q3: .5 },
              { x: "3", min: .1, median: .5, max: .8, q1: .2, q3: .65 },
              { x: "4", min: .25, median: .75, max: .9, q1: .4, q3: .8 }]}
      domain={{x: [0, 5], y: [0, 1]}}
      ></VictoryBoxPlot>
      <VictoryAxis 
      independentAxis
      label="Districts"
      style={{axisLabel: {padding: 40}}}
      ></VictoryAxis>
      <VictoryAxis
      dependentAxis
      label="Percentage"
      style={{axisLabel: {padding: 60}}}
      ></VictoryAxis>
    </VictoryChart>
  );
}