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
        <Box sx={{ borderTop: 1, borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            orientation="vertical"
          >
            <Tab wrapped label="Summary" value="1" />
            <Tab wrapped label="Seat Share-Vote Share Plot" value="2" />
            <Tab wrapped label="Opportunity District Threshold Sensitivity" value="3" />
            <Tab wrapped label="Range of Opportunity Representatives" value="4" />
            <Tab wrapped label="Range of Republican/Democratic splits" value="5" />
            <Tab wrapped label="Vote Share" value="6" />
            <Tab wrapped label="Average Seat Share" value="7"/>
            <Tab wrapped label="Box and Whiskers" value="8"/>
            <Tab wrapped label="Box and Whiskers Comparison" value="9"/>
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
