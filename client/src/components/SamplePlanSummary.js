import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function SamplePlanSummary({
  samplePlan
}) {
  return (
    <Table>
      {samplePlan!==null && (
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>
                Number of Districts
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align="right">
                {samplePlan.districtPlanSummary.districts}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>
                Number of Opportunity Districts
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align="right">
                {samplePlan.districtPlanSummary.numberOfOpportunityDistricts}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>
                Number of Safe Districts
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align="right">
                {samplePlan.districtPlanSummary.numberOfSafeDistricts}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography paddingLeft={3}>
                Safe District Threshold
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align="right">
                {samplePlan.districtPlanSummary.safeDistrictThreshold}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>
                Republican/Democratic Split
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align="right">
                {samplePlan.districtPlanSummary.split}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
              <Typography align="center" variant="h6" paddingTop={4}>
                For more details, select a district on the map.
              </Typography>
          </TableRow>
          <TableRow>
              <Typography align="center" paddingTop={4}>
                You can click on the swap button on the top right of the map to swap between the enacted plan and the sample plan.
              </Typography>
          </TableRow>
        </TableHead>
      )}
    </Table>
  );
}