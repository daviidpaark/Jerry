import { Table, TableCell, TableHead, TableRow } from "@mui/material";

export default function ElectionData({}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Representatives
          </TableCell>
          <TableCell>
            Votes
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Full name
          </TableCell>
          <TableCell>
            10,000
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}