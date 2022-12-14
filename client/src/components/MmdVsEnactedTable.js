import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function MmdVsEnactedTable(enactedPlan, ensembleMMD) {
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
                MMD split
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
                MMD # of opp reps
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                Vote Share 
            </TableCell>
            <TableCell>
                {enactedPlan.republicanPercent}
            </TableCell>
            <TableCell>
                MMD % of republican votes
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                Seat Share
            </TableCell>
            <TableCell>
                {enactedPlan.split}
            </TableCell>
            <TableCell>
                MMD % of republican wins
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}