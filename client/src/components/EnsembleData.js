import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import SampleData2 from "./SampleData2";

export default function EnsembleData() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">
            <Typography>
              Single-Member District
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography>
              Multi-Member District
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell width="50%">
          <SampleData2/>
        </TableCell>
        <TableCell width="50%">
          <SampleData2/>
        </TableCell>
      </TableBody>
    </Table>
  );
}