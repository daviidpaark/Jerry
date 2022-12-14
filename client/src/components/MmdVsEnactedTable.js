import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function MmdVsEnactedTable({enactedPlan, ensembleMMD}) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> 
                Catergories
            </TableCell>
            <TableCell>
                Enacted Plan
            </TableCell>
            <TableCell>
                MMD Average
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
                Republican/Democratic Splits 
            </TableCell>
            <TableCell>
              <Typography>
                {enactedPlan.split}
              </Typography>
            </TableCell>
            <TableCell>
                7/7
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                Number of Opportunity Representatives
            </TableCell>
            <TableCell>
              <Typography>
                {enactedPlan.numberOfOpportunityDistricts}
              </Typography>
            </TableCell>
            <TableCell>
                3
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                Vote Share (Republican)
            </TableCell>
            <TableCell>
                {enactedPlan.republicanPercent.toFixed(2)}
            </TableCell>
            <TableCell>
                0.51
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                Seat Share (Republican)
            </TableCell>
            <TableCell>
                0.57
            </TableCell>
            <TableCell>
                0.50
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}