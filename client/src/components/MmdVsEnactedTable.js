import { Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";

export default function MmdVsEnactedTable(ensembleMMD) {
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
              8/6
          </TableCell>
          <TableCell>
              9/5
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
              Number of Opportunity Representatives
          </TableCell>
          <TableCell>
              1
          </TableCell>
          <TableCell>
              3
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
              Vote Share 
          </TableCell>
          <TableCell>
              0.49
          </TableCell>
          <TableCell>
              0.48
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
              Seat Share
          </TableCell>
          <TableCell>
              0.52
          </TableCell>
          <TableCell>
              0.46
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}