import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import BarChart from "./SplitsDoublePlot";
import BoxAndWhisker from "./BoxAndWhisker";

export default function EnsembleData({graph}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">
            <Typography>
              SMD
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography>
              MMD
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