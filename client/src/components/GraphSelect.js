import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

export default function GraphSelect({ selectGraph }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    selectGraph(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
          >
            <Tab wrapped label="Population Equality" value="1" />
            <Tab wrapped label="Compactness" value="2" />
            <Tab wrapped label="Ranked Choice Voting" value="3" />
            <Tab wrapped label="Political Fairness" value="4" />
            <Tab wrapped label="Seat Share" value="5" />
            <Tab wrapped label="Number of Opportunity Districts" value="6" />
            <Tab
              wrapped
              label="Opportunity District Threshold Sensitivity"
              value="7"
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
