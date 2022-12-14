import { Table, TableBody, TableCell, TableContainer, TableHead, Typography } from "@mui/material";

export default function MmdVsEnactedTable(enactedPlan, ensembleMMD) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell> 
              Catergories
          </TableCell>
          <TableCell>
              Enacted Plan
          </TableCell>
          <TableCell>
              MMD Average
          </TableCell>
        </TableHead>
        <TableBody>
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
        </TableBody>
        <TableBody>
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
        </TableBody>
        <TableBody>
          <TableCell>
              Vote Share 
          </TableCell>
          <TableCell>
              {enactedPlan.republicanPercent}
          </TableCell>
          <TableCell>
              MMD % of republican votes
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
              Seat Share
          </TableCell>
          <TableCell>
              {enactedPlan.split}
          </TableCell>
          <TableCell>
              MMD % of republican wins
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}