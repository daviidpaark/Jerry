import { Table, TableCell, TableHead, TableRow } from "@mui/material";

export default function SamplePlanSummary({
  samplePlan
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Number of Districts
          </TableCell>
          <TableCell>
            samplePlan.districtPlanSummary.numberOfDistricts
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Number of Opportunity Districts
          </TableCell>
          <TableCell>
            samplePlan.districtPlanSummary.numberOfOpportunityDistricts
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}