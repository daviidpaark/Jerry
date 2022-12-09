import * as React from "react";
import Box from "@mui/material/Box";
import { List, ListItemButton, ListItemText } from "@mui/material";
import EnsembleCharts from "./EnsembleCharts";
import MmdCharts from "./MmdCharts";
import SamplePlanCharts from "./SamplePlanCharts";

export default function GraphMenu({ state, setGraph, district, setRandom}) {
  const [open, setOpen] = React.useState(-1);
  const handleClick = (index) => {
    setOpen(open === index ? -1 : index)
  }
  return (
    <Box sx={{ width: "100%"}} backgroundColor="dimgray" color="white">
      <List dense disablePadding>
          <ListItemButton index={0} onClick={() => handleClick(0)} divider>
            <ListItemText primary="Ensembles"></ListItemText>
          </ListItemButton>
          <EnsembleCharts 
          open={open===0}
          setGraph={setGraph}
          state={state}>
          </EnsembleCharts>
          <ListItemButton index={1} onClick={() => handleClick(1)} divider>
            <ListItemText primary="MMD Exclusive"></ListItemText>
          </ListItemButton>
          <MmdCharts 
          open={open===1}
          setGraph={setGraph}
          state={state}>
          </MmdCharts>
          <ListItemButton index={2} onClick={() => handleClick(2)} divider>
            <ListItemText primary="Sample Plan"></ListItemText>
          </ListItemButton>
          <SamplePlanCharts
          open={open===2}
          setGraph={setGraph}
          state={state}
          district={district}
          setRandom={setRandom}
          >
          </SamplePlanCharts>
      </List>
    </Box>
  );
}
