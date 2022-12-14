import { Table, TableHead, TableRow, TableBody, TableCell, Typography } from "@mui/material";

export default function SummaryMMDLayouts({
  ensembleMMD,
  state,
  layouts,
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography>
              Layouts:
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Number of Plans:
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Average Opportunity District Representatives per Plan: 
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Average Equal Population: 
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Average Republican/Democratic Split:
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          ensembleMMD.ensembleLayoutSummary.map((summary, key) => (
            <TableRow key={key}>
              <TableCell>
                <Typography>
                  {summary.layout}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {numberWithCommas(summary.numberOfPlans)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {summary.averageOpportunityReps.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {summary.averageEqualPopulation.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {summary.averageSplit.REPUBLICAN}/{summary.averageSplit.DEMOCRAT}
                </Typography>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}