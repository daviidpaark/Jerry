import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import BarChart from "./BarChart";
import BoxAndWhisker from "./BoxAndWhisker";

export default function EnsembleData({graph}) {
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
          {graph===7 ? (<BoxAndWhisker></BoxAndWhisker>) : (<BarChart graph={graph}></BarChart>)}
        </TableCell>
        <TableCell width="50%">
          {graph===7 ? (<BoxAndWhisker></BoxAndWhisker>) : (<BarChart graph={graph}></BarChart>)}
        </TableCell>
      </TableBody>
    </Table>
  );
}