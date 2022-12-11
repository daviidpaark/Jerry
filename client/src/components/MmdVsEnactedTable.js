import { Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";

export default function MmdVsEnactedTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell align="center"> 
              Catergories
          </TableCell>
          <TableCell align="center">
              Enacted Plan
          </TableCell>
          <TableCell align="center">
              MMD Average
          </TableCell>
        </TableHead>
        <TableBody>
          <TableCell align="center">
              Republican/Democratic Splits 
          </TableCell>
          <TableCell align="center">
              8/6
          </TableCell>
          <TableCell align="center">
              9/5
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center">
              Number of Opportunity Representatives
          </TableCell>
          <TableCell align="center">
              2
          </TableCell>
          <TableCell align="center">
              1
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center">
              Vote Share 
          </TableCell>
          <TableCell align="center">
              2,000/3,000
          </TableCell>
          <TableCell align="center">
              2,500/2,500
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align="center">
              Seat Share
          </TableCell>
          <TableCell align="center">
              3,000/2,000
          </TableCell>
          <TableCell align="center">
              2,000/3,000
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}