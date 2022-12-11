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
            samplePlan.districts.size()
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Number of Opportunity Districts
          </TableCell>
          <TableCell>
            samplePlan.numberOfOpportunityDistricts
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}