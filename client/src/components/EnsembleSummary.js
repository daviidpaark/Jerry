import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function EnsembleSummary({
  ensembleSMD,
  ensembleMMD
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
            {numberWithCommas(ensembleSMD.ensembleSummary[0].numberOfPlans)}
          </TableCell>
          <TableCell>
            {numberWithCommas(ensembleMMD.ensembleSummary[0].numberOfPlans)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Opportunity District 
            Representatives per Plan: 
          </TableCell>
          <TableCell>
            {ensembleSMD.ensembleSummary[0].averageOpportunityReps}
          </TableCell>
          <TableCell>
            {ensembleMMD.ensembleSummary[0].averageOpportunityReps}
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
            {ensembleMMD.ensembleSummary[0].averageEqualPopulation}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Split (Republican/Democratic): 
          </TableCell>
          <TableCell>
            {ensembleSMD.ensembleSummary[0].averageSplit.REPUBLICAN}/{ensembleSMD.ensembleSummary[0].averageSplit.DEMOCRAT}
          </TableCell>
          <TableCell>
            {ensembleMMD.ensembleSummary[0].averageSplit.REPUBLICAN}/{ensembleMMD.ensembleSummary[0].averageSplit.DEMOCRAT}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}