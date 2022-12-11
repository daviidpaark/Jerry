import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function EnsembleSummary({
  ensembleSMD,
  ensembleMMD
}) {

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
          </TableCell>
          <TableCell>
            <Typography>
              SMD
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              MMD
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            Number of Plans: 
          </TableCell>
          <TableCell>
            10,000
          </TableCell>
          <TableCell>
            10,000  
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Opportunity District 
            Representatives per Plan: 
          </TableCell>
          <TableCell>
            {ensembleSMD.ensembleSummary[0].averageOpportunityDistricts}
          </TableCell>
          <TableCell>
            mmd
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Equal Population: 
          </TableCell>
          <TableCell>
          {ensembleSMD.ensembleSummary[0].averageEqualPopulation}
          </TableCell>
          <TableCell>
            mmd
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Split: 
          </TableCell>
          <TableCell>
            {ensembleSMD.ensembleSummary[0].averageSplit.REPUBLICAN}/{ensembleSMD.ensembleSummary[0].averageSplit.DEMOCRAT}
          </TableCell>
          <TableCell>
            mmd
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}