import { Box, Typography } from "@mui/material";

export default function DataSource({}) {
  return (
    <Box>
      <Typography variant="h5" paddingLeft={2} paddingTop={1} paddingBottom={2}>
        Data Sources
      </Typography>
      <Typography paddingLeft={2}>
        General: 
      </Typography>
      <ol>
        <li>
          <a href="https://data2.nhgis.org/main" target="_blank">Block + 2020 Census Data</a>
        </li>
        <li>
          <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/K7760H" target="_blank">2020 Precinct Level Election Result</a>
        </li>
        <li>
          <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VLGF2M" target="_blank">U.S. House of Representatives Precinct-Level Returns 2020</a>
        </li>
      </ol>
      <Typography paddingLeft={2}>
        Georgia: 
      </Typography>
      <ol>
        <li>
          <a href="https://redistrictingdatahub.org/dataset/georgia-2020-general-election-results-disaggregated-to-the-2020-block/" target="_blank">Georgia 2020 General Election Results Disaggregated to the 2020 Block</a>
        </li>
      </ol>
      <Typography paddingLeft={2}>
        Maryland: 
      </Typography>
      <ol>
        <li>
          <a href="https://redistrictingdatahub.org/dataset/maryland-2020-general-election-results-disaggregated-to-the-2020-block/" target="_blank">Maryland 2020 General Election Results Disaggregated to the 2020 Block</a>
        </li>
      </ol>
      <Typography paddingLeft={2}>
        Mississippi: 
      </Typography>
      <ol>
        <li>
          <a href="https://redistrictingdatahub.org/dataset/mississippi-2020-general-election-results-disaggregated-to-the-2020-block/" target="_blank">Mississippi 2020 General Election Results Disaggregated to the 2020 Block</a>
        </li>
      </ol>
    </Box>
  );
}