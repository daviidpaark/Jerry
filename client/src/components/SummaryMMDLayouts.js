import { Table, TableHead, TableRow, TableBody, TableCell, Typography } from "@mui/material";

export default function SummaryMMDLayouts({ensembleMMD}) {
  //let size = ensembleMMD.layouts.size();
  let size = 3;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography>
              Number of Plans:
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Average Opportunity District 
              Representatives per Plan: 
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Average Equal Population: 
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              Average Split:
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {size>0 && (
          <TableRow>
            <TableCell>
              <Typography>
                3,000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                2
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                1
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                6/8
              </Typography>
            </TableCell>
          </TableRow>
        )}
        {size>1 && (
          <TableRow>
            <TableCell>
              <Typography>
                3,500
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                2
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                1
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                6/8
              </Typography>
            </TableCell>
          </TableRow>
        )}
        {size>2 && (
          <TableRow>
            <TableCell>
              <Typography>
                3,500
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                2
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                1
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                6/8
              </Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}